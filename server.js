// server.js — backend Express untuk aplikasi menu
// Jalankan: npm i express cors  →  node server.js
// Pastikan package.json punya  "type": "module"
import express from "express";
import cors from "cors";
import {
  categories,
  allMenus,
  featuredMenu,
  favoriteMenus,
  getDefaultChoices,
  getUnitPrice,
  getOptionLabels,
} from "./data/menus.js"; // sesuaikan path file data kamu

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Penyimpanan sementara (hilang saat server restart). Ganti dengan database nanti.
const orders = [];

// ===== MENU =====
app.get("/api/categories", (_req, res) => res.json(categories));

app.get("/api/menus", (req, res) => {
  const { category, q } = req.query;
  let result = allMenus;
  if (category && category !== "Semua") {
    result = result.filter((m) => m.category === category);
  }
  if (q) {
    const kw = String(q).toLowerCase();
    result = result.filter(
      (m) =>
        m.name.toLowerCase().includes(kw) ||
        m.description.toLowerCase().includes(kw)
    );
  }
  res.json(result);
});

// Route statis harus sebelum "/:id"
app.get("/api/menus/featured", (_req, res) => res.json(featuredMenu));
app.get("/api/menus/favorites", (_req, res) => res.json(favoriteMenus));

app.get("/api/menus/:id", (req, res) => {
  const menu = allMenus.find((m) => m.id === Number(req.params.id));
  if (!menu) return res.status(404).json({ error: "Menu tidak ditemukan" });
  res.json(menu);
});

// ===== PESANAN =====
// Body: { customerName, note, items: [{ menuId, qty, choices: { pedas: "ekstra", ... } }] }
app.post("/api/orders", (req, res) => {
  const { customerName, note = "", items } = req.body || {};

  if (!Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ error: "Item pesanan kosong" });
  }

  const lines = [];
  for (const it of items) {
    const menu = allMenus.find((m) => m.id === Number(it.menuId));
    const qty = Number(it.qty);
    if (!menu) {
      return res.status(400).json({ error: `Menu ${it.menuId} tidak ada` });
    }
    if (!Number.isInteger(qty) || qty < 1 || qty > 50) {
      return res.status(400).json({ error: `Jumlah tidak valid untuk ${menu.name}` });
    }

    // Gabungkan default dengan pilihan user, buang opsi yang tidak valid
    const choices = getDefaultChoices(menu);
    for (const g of menu.detail?.optionGroups || []) {
      const picked = it.choices?.[g.id];
      if (picked && g.options.some((o) => o.id === picked)) {
        choices[g.id] = picked;
      }
    }

    // Harga SELALU dihitung di server, jangan percaya harga dari client
    const unitPrice = getUnitPrice(menu, choices);
    lines.push({
      menuId: menu.id,
      name: menu.name,
      qty,
      choices,
      optionLabels: getOptionLabels(menu, choices),
      unitPrice,
      subtotal: unitPrice * qty,
    });
  }

  const order = {
    id: `ORD-${Date.now().toString(36).toUpperCase()}`,
    customerName: String(customerName || "").trim() || "Tamu",
    note: String(note).slice(0, 200),
    items: lines,
    total: lines.reduce((sum, l) => sum + l.subtotal, 0),
    status: "diterima",
    createdAt: new Date().toISOString(),
  };

  orders.push(order);
  res.status(201).json(order);
});

app.get("/api/orders", (_req, res) => res.json(orders));

app.get("/api/orders/:id", (req, res) => {
  const order = orders.find((o) => o.id === req.params.id);
  if (!order) return res.status(404).json({ error: "Pesanan tidak ditemukan" });
  res.json(order);
});

// ===== 404 & error handler =====
app.use((_req, res) => res.status(404).json({ error: "Endpoint tidak ditemukan" }));
app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ error: "Terjadi kesalahan server" });
});

app.listen(PORT, () => console.log(`Server jalan di http://localhost:${PORT}`));