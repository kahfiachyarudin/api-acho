export const categories = ["Semua", "Makanan", "Minuman", "Camilan"];

// ===== Builder grup opsi =====
const pedas = (harga = 2000) => ({
  id: "pedas",
  title: "Level Pedas",
  options: [
    { id: "tidak", label: "Tidak Pedas", note: "Ramah anak", priceDelta: 0 },
    { id: "sedang", label: "Sedang (Default)", tag: "Favorit", priceDelta: 0, default: true },
    { id: "ekstra", label: "Ekstra Pedas", priceDelta: harga },
  ],
});

export const allMenus = [
  {
    id: 1,
    name: "Nasi Goreng Raja",
    description: "Nasi goreng dengan ayam dan telur mata sapi. Porsi mantap, rasa rumahan yang bikin nagih.",
    price: 42000,
    category: "Makanan",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    reviews: 248,
    favorite: true,
    featured: true,
    badge: "Tersedia minggu ini",
    detail: {
      prepTime: "12 - 15 mnt",
      portion: "1 Orang",
      allergens: "Telur, Kacang",
      optionGroups: [
        pedas(2000),
        {
          id: "telur",
          title: "Kematangan Telur",
          options: [
            { id: "setengah", label: "Setengah Matang", tag: "Rekomendasi", priceDelta: 0, default: true },
            { id: "matang", label: "Telur Ceplok Matang", note: "Matang sempurna", priceDelta: 0 },
          ],
        },
      ],
    },
  },
  {
    id: 2,
    name: "Sate Madura",
    description: "Sate ayam dengan bumbu kacang khas Madura, dibakar di atas arang. Disajikan dengan nasi hangat.",
    price: 38000,
    category: "Makanan",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=400&q=80",
    rating: 4.8,
    reviews: 210,
    favorite: true,
    badge: "Best Seller",
    detail: {
      prepTime: "10 - 12 mnt",
      portion: "10 Tusuk",
      allergens: "Kacang, Kedelai",
      optionGroups: [
        pedas(2000),
        {
          id: "tambahan",
          title: "Tambahan",
          options: [
            { id: "tanpa", label: "Tanpa Tambahan", priceDelta: 0, default: true },
            { id: "nasi", label: "Extra Nasi Putih", priceDelta: 5000 },
            { id: "lontong", label: "Extra Lontong", priceDelta: 5000 },
          ],
        },
      ],
    },
  },
  {
    id: 3,
    name: "Ayam Taliwang",
    description: "Ayam kampung marinasi rempah 12 jam, dibakar hingga harum. Disajikan dengan sambal terasi dan lalapan.",
    price: 45000,
    category: "Makanan",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=400&q=80",
    rating: 4.7,
    reviews: 185,
    favorite: true,
    badge: "Favorit",
    detail: {
      prepTime: "15 - 20 mnt",
      portion: "1 Orang",
      allergens: "Kedelai, Terasi",
      optionGroups: [
        pedas(3000),
        {
          id: "nasi",
          title: "Pilihan Nasi",
          options: [
            { id: "putih", label: "Nasi Putih", priceDelta: 0, default: true },
            { id: "uduk", label: "Nasi Uduk", priceDelta: 3000 },
            { id: "merah", label: "Nasi Merah", priceDelta: 4000 },
          ],
        },
      ],
    },
  },
  {
    id: 4,
    name: "Es Teh Pandan",
    description: "Teh hitam diseduh dengan daun pandan segar. Manisnya pas, cocok nemenin menu pedas.",
    price: 12000,
    category: "Minuman",
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=400&q=80",
    rating: 4.9,
    reviews: 402,
    favorite: true,
    badge: "Paling Segar",
    detail: {
      prepTime: "3 - 5 mnt",
      portion: "1 Gelas",
      allergens: "Pandan",
      optionGroups: [
        {
          id: "manis",
          title: "Tingkat Kemanisan",
          options: [
            { id: "normal", label: "Manis (Default)", tag: "Favorit", priceDelta: 0, default: true },
            { id: "less", label: "Sedikit Gula", priceDelta: 0 },
            { id: "tanpa", label: "Tanpa Gula", priceDelta: 0 },
          ],
        },
        {
          id: "ukuran",
          title: "Ukuran",
          options: [
            { id: "regular", label: "Regular", priceDelta: 0, default: true },
            { id: "jumbo", label: "Jumbo", note: "Beser banget", priceDelta: 3000 },
          ],
        },
      ],
    },
  },
  {
    id: 5,
    name: "Pisang Keju",
    description: "Pisang goreng crispy dengan lelehan keju mozzarella dan susu kental manis.",
    price: 22000,
    category: "Camilan",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=400&q=80",
    rating: 4.8,
    reviews: 156,
    favorite: true,
    badge: "Camilan Manis",
    detail: {
      prepTime: "8 - 10 mnt",
      portion: "5 Potong",
      allergens: "Gluten, Susu",
      optionGroups: [
        {
          id: "topping",
          title: "Topping",
          options: [
            { id: "keju", label: "Keju Melimpah", tag: "Rekomendasi", priceDelta: 0, default: true },
            { id: "coklat", label: "Tambah Coklat", priceDelta: 2000 },
            { id: "skm", label: "Tambah Susu Kental Manis", priceDelta: 1500 },
          ],
        },
        {
          id: "saus",
          title: "Saus",
          options: [
            { id: "tanpa", label: "Tanpa Saus", priceDelta: 0, default: true },
            { id: "mayo", label: "Saus Mayonaise", priceDelta: 2500 },
            { id: "srikaya", label: "Saus Srikaya", priceDelta: 3000 },
          ],
        },
      ],
    },
  },
  {
    id: 6,
    name: "Kopi Susu Gula Aren",
    description: "Espresso robusta dengan susu segar dan gula aren asli. Creamy, nikmat, dan pas manisnya.",
    price: 18000,
    category: "Minuman",
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=400&q=80",
    rating: 4.9,
    reviews: 512,
    favorite: true,
    badge: "Terlaris",
    detail: {
      prepTime: "5 - 7 mnt",
      portion: "1 Gelas",
      allergens: "Susu, Kafein",
      optionGroups: [
        {
          id: "gula",
          title: "Tingkat Kemanisan",
          options: [
            { id: "normal", label: "Normal (Default)", tag: "Favorit", priceDelta: 0, default: true },
            { id: "less", label: "Less Sugar", priceDelta: 0 },
            { id: "tanpa", label: "Tanpa Gula", priceDelta: 0 },
          ],
        },
        {
          id: "suhu",
          title: "Suhu",
          options: [
            { id: "es", label: "Dingin (Es)", priceDelta: 0, default: true },
            { id: "panas", label: "Panas", priceDelta: 0 },
          ],
        },
      ],
    },
  },
  {
    id: 7,
    name: "Roti Bakar Coklat",
    description: "Roti bakar buttery dengan lelehan coklat melimpah. Camilan manis yang simpel tapi memuaskan.",
    price: 15000,
    category: "Camilan",
    image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=400&q=80",
    rating: 4.6,
    reviews: 98,
    favorite: false,
    badge: "Baru!",
    detail: {
      prepTime: "6 - 8 mnt",
      portion: "2 Potong",
      allergens: "Gluten, Susu",
      optionGroups: [
        {
          id: "topping",
          title: "Topping",
          options: [
            { id: "coklat", label: "Coklat Melimpah", tag: "Rekomendasi", priceDelta: 0, default: true },
            { id: "keju", label: "Coklat + Keju", priceDelta: 3000 },
            { id: "skm", label: "Tambah Susu Kental Manis", priceDelta: 1500 },
          ],
        },
      ],
    },
  },
  {
    id: 8,
    name: "Mie Goreng Jawa",
    description: "Mie goreng manis-gurih khas Jawa dengan sayuran, ayam, dan telur. Dimasak dengan api besar.",
    price: 35000,
    category: "Makanan",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=400&q=80",
    rating: 4.7,
    reviews: 143,
    favorite: false,
    badge: "Kenyang Maksimal",
    detail: {
      prepTime: "10 - 12 mnt",
      portion: "1 Porsi",
      allergens: "Telur, Gluten, Kedelai",
      optionGroups: [
        pedas(2000),
        {
          id: "tambahan",
          title: "Tambahan",
          options: [
            { id: "tanpa", label: "Tanpa Tambahan", priceDelta: 0, default: true },
            { id: "telur", label: "Extra Telur", priceDelta: 4000 },
            { id: "ayam", label: "Extra Ayam", priceDelta: 6000 },
          ],
        },
      ],
    },
  },
];

export const featuredMenu = allMenus.find((m) => m.featured);
export const favoriteMenus = allMenus.filter((m) => m.favorite);

// ===== Helper opsi (sama seperti sebelumnya) =====
export function getDefaultChoices(menu) {
  const sel = {};
  menu.detail?.optionGroups?.forEach((g) => {
    sel[g.id] = (g.options.find((o) => o.default) || g.options[0]).id;
  });
  return sel;
}

export function getUnitPrice(menu, sel) {
  let p = menu.price;
  menu.detail?.optionGroups?.forEach((g) => {
    const o = g.options.find((x) => x.id === sel[g.id]);
    if (o) p += o.priceDelta || 0;
  });
  return p;
}

export function getOptionLabels(menu, sel) {
  const out = [];
  menu.detail?.optionGroups?.forEach((g) => {
    const o = g.options.find((x) => x.id === sel[g.id]);
    if (o) out.push(o.label);
  });
  return out;
}