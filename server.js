const express = require("express");

const app = express();
app.use(express.json());
const PORT = 3000;

// Endpoint beranda
app.get("/", (req, res) => {
  res.send("Backend Cafe berhasil berjalan!");
});

// Data menu sementara
const menus = [
  {
    id: 1,
    name: "Es Kopi Susu",
    price: 18000,
    available: true,
  },
  {
    id: 2,
    name: "Americano",
    price: 15000,
    available: true,
  },
  {
    id: 3,
    name: "Croissant",
    price: 22000,
    available: false,
  },
  {
    id: 4,
    name: "Croissant",
    price: 20000,
    available: true,
  },
];

// Mengambil satu menu berdasarkan ID
app.get("/api/menus/:id", (req, res) => {
  const id = Number(req.params.id);

  const menu = menus.find((item) => item.id === id);
  if (!menu) {
    return res.status(404).json({
      message: "Menu tidak ditemukan",
    });
  }

  res.json(menu);
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});

// Menambahkan fitur pencarian menu berdasarkan nama
app.get("/api/menus", (req, res) => {
  const { search } = req.query;

  if (search) {
    const filteredMenus = menus.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase()),
    );

    return res.json(filteredMenus);
  }

  res.json(menus);
});

// Menambahkan fitur untuk menambahkan menu baru

app.post("/api/menus", (req, res) => {
  const { name, price, available } = req.body ?? {};

  // Validasi nama
  if (typeof name !== "string" || name.trim() === "") {
    return res.status(400).json({
      message: "Nama menu wajib diisi",
    });
  }

  // Validasi harga
  if (typeof price !== "number" || price <= 0) {
    return res.status(400).json({
      message: "Harga harus berupa angka lebih dari 0",
    });
  }

  // Validasi ketersediaan
  if (typeof available !== "boolean") {
    return res.status(400).json({
      message: "Available harus berupa true atau false",
    });
  }

  // Membuat menu baru jika semua validasi lolos
  const newMenu = {
    id: menus.length + 1,
    name: name.trim(),
    price,
    available,
  };

  menus.push(newMenu);

  res.status(201).json({
    message: "Menu berhasil ditambahkan",
    data: newMenu,
  });
});

// Menambahkan fitur untuk mengubah harga menu berdasarkan ID
app.patch("/api/menus/:id", (req, res) => {
  const id = Number(req.params.id);

  // Cari menu berdasarkan ID
  const menu = menus.find((item) => item.id === id);

  if (!menu) {
    return res.status(404).json({
      message: "Menu tidak ditemukan",
    });
  }

  const { price } = req.body ?? {};

  // Validasi harga
  if (typeof price !== "number" || price <= 0) {
    return res.status(400).json({
      message: "Harga harus berupa angka lebih dari 0",
    });
  }

  // Ubah harga menu
  menu.price = price;

  res.json({
    message: "Harga menu berhasil diperbarui",
    data: menu,
  });
});

// Menambahkan fitur untuk menghapus menu berdasarkan ID
app.delete("/api/menus/:id", (req, res) => {
  const id = Number(req.params.id);

  // Cari posisi menu di dalam array
  const index = menus.findIndex((item) => item.id === id);

  // Jika menu tidak ditemukan
  if (index === -1) {
    return res.status(404).json({
      message: "Menu tidak ditemukan",
    });
  }

  // Hapus menu dari array
  const deletedMenu = menus.splice(index, 1);

  res.json({
    message: "Menu berhasil dihapus",
    data: deletedMenu[0],
  });
});
