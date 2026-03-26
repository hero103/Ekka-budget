// products-data.js
// All product data for EkkaBudget – corrected and unified

const products = {
  // HP Pavilion 15
  "HP-Pavilion-15": {
    name: "HP Pavilion 15",
    price: "₹41,999",
    mainImage: "images/hp-main.jpg",
    thumbnails: [
      "images/hp-main.jpg",
      "images/hp-side.jpg",
      "images/hp-keyboard.jpg"
    ],
    specs: [
      { label: "Processor", value: "Intel Core i5-1235U" },
      { label: "RAM", value: "8GB DDR4" },
      { label: "Storage", value: "512GB SSD" },
      { label: "Display", value: "15.6\" FHD IPS" },
      { label: "Graphics", value: "Intel Iris Xe" },
      { label: "Battery", value: "Up to 8 hours" },
      { label: "Weight", value: "3.8 lbs" }
    ],
    description: "The HP Pavilion 15 is a versatile laptop perfect for students and professionals. With its 12th Gen Intel Core i5 processor and 512GB SSD, it handles everyday tasks and multitasking with ease. The 15.6\" Full HD display delivers crisp visuals, and the lightweight design makes it easy to carry.",
    affiliateLink: "https://amazon.com/hp-pavilion-15"
  },
//acer acerspire
  "acer-aspire-5": {
  name: "Acer Aspire 5",
  price: "₹37,999",
  mainImage: "images/acer-main.jpg",
 thumbnails: [
      "images/acer-open.jpg",
      "images/acer-side.jpg",
      "images/acer-open.jpg"
    ],
  specs: [
    { label: "Processor", value: "AMD Ryzen 5 5500U" },
    { label: "RAM", value: "8GB DDR4" },
    { label: "Storage", value: "256GB NVMe SSD" },
    { label: "Display", value: "15.6\" Full HD IPS" },
    { label: "Graphics", value: "AMD Radeon Graphics" },
    { label: "Battery", value: "Up to 10 hours" },
    { label: "Weight", value: "3.97 lbs" }
  ],
  description: "The Acer Aspire 5 is a budget-friendly powerhouse. With its AMD Ryzen 5 processor and Radeon graphics, it handles everyday tasks, streaming, and light productivity with ease. The Full HD IPS display offers vibrant colors, and the backlit keyboard makes typing comfortable.",
  affiliateLink: "https://amazon.com/acer-aspire-5",

  // NEW FIELDS FOR REVIEW PAGE
  rating: 4.5,
  badge: "Editors' Choice – Best Budget Laptop",
  designReview: "The Aspire 5 features a subtle, professional design with a silver aluminum lid and plastic base. It feels sturdy for its price, with minimal flex. The 15.6-inch chassis is reasonably portable, and the hinge allows a 180° lay‑flat. Port selection is generous: USB‑C, HDMI, Ethernet, and three USB‑A ports.",
  performanceReview: "Equipped with the Ryzen 5 5500U (6 cores/12 threads), this laptop handles everyday tasks, office work, and even light photo editing with ease. The 8GB RAM is sufficient for most users, but the single channel limits performance a bit. The 256GB SSD is fast, though you may want to upgrade storage later.",
  displayReview: "The 15.6\" Full HD IPS panel is bright (250 nits) and offers good viewing angles. Colors are accurate enough for media consumption and productivity. The bezels are thin on the sides, giving a modern look. Speakers are downward‑firing and get reasonably loud, but lack bass – fine for video calls and casual use.",
  batteryReview: "With a 50Wh battery, the Aspire 5 lasts around 7‑8 hours of mixed usage (web browsing, video streaming, documents). Charging is via the included 65W adapter, which gets you to 50% in about an hour.",
  pros: [
    "Excellent price‑to‑performance ratio",
    "Good port selection",
    "Decent Full HD IPS display",
    "Solid build for the price"
  ],
  cons: [
    "Single‑channel RAM limits performance",
    "Mediocre speakers",
    "Plastic lid (only keyboard deck is metal)"
  ],
  ratingBreakdown: {
    design: 4.0,
    performance: 4.3,
    display: 4.0,
    battery: 4.2,
    value: 4.8
  },
  finalVerdict: "The Acer Aspire 5 remains one of the best budget laptops you can buy in 2026. It offers a great balance of performance, features, and build quality at a price that's hard to beat. If you're a student, a professional on a budget, or someone who needs a reliable everyday laptop, the Aspire 5 should be at the top of your list."
},

  // HP 15 255R G10
  "HP-15-255R-G10": {
    name: "HP 15 255R G10",
    price: "₹27,990",
    mainImage: "images/HP 15.jpg",
    thumbnails: [
      "images/hp-main.jpg",
      "images/hp-side.jpg",
      "images/hp-keyboard.png"
    ],
    specs: [
      { label: "Processor", value: "AMD Ryzen 7 7535U" },
      { label: "RAM", value: "8GB DDR4" },
      { label: "Storage", value: "512GB SSD" },
      { label: "Display", value: "15.6\" HD" },
      { label: "Graphics", value: "AMD Radeon Graphics" },
      { label: "Battery", value: "Up to 7 hours" },
      { label: "Weight", value: "4.1 lbs" }
    ],
    description: "The HP 15 255R G10 is an affordable entry-level laptop great for basic tasks like web browsing, document editing, and streaming. Its compact design and solid battery life make it a reliable companion for students on a budget.",
    affiliateLink: "https://amazon.com/hp-15-255r-g10"
  },

  // ASUS VivoBook 15
  "ASUS-VIVOBOOK-15": {
    name: "ASUS VivoBook 15",
    price: "₹32,990",
    mainImage: "images/ASSUS-main.jpg",
    thumbnails: [
      "images/ASSUS-main.jpg",
      "images/ASSUS-side.jpg",
      "images/ASSUS-keyboard.jpg"
    ],
    specs: [
      { label: "Processor", value: "Intel Core i3-1215U" },
      { label: "RAM", value: "8GB DDR4" },
      { label: "Storage", value: "256GB SSD" },
      { label: "Display", value: "15.6\" FHD" },
      { label: "Graphics", value: "Intel UHD" },
      { label: "Battery", value: "Up to 7 hours" },
      { label: "Weight", value: "3.9 lbs" }
    ],
    description: "The ASUS VivoBook 15 offers reliable performance for everyday computing. Its slim profile and NanoEdge display make it perfect for students and home users who need a stylish, portable laptop.",
    affiliateLink: "https://amazon.com/asus-vivobook-15"
  },

  // Acer Aspire 3
  "acer-aspire-3": {
    name: "Acer Aspire 3",
    price: "₹27,990",
    mainImage: "images/lenovo-main.jpg",
    thumbnails: [
      "images/lenovo-main.jpg",
      "images/lenovo-side.jpg",
      "images/lenovo-keyboard.jpg"
    ],
    specs: [
      { label: "Processor", value: "Intel Core i3-1305U" },
      { label: "RAM", value: "8GB DDR4" },
      { label: "Storage", value: "512GB SSD" },
      { label: "Display", value: "15.6\" HD" },
      { label: "Graphics", value: "Intel UHD Graphics" },
      { label: "Battery", value: "Up to 7 hours" },
      { label: "Weight", value: "4.1 lbs" }
    ],
    description: "The Acer Aspire 3 is an affordable entry-level laptop perfect for students. With its Intel Core i3 processor and 512GB SSD, it handles everyday tasks smoothly. Its lightweight design makes it easy to carry around campus.",
    affiliateLink: "https://amazon.com/acer-aspire-3"
  },

  // HP Victus
  "HP-Victus": {
    name: "HP Victus",
    price: "₹69,000",
    mainImage: "images/victus-main.jpeg",
    thumbnails: [
      "images/victus-main.jpeg",
      "images/victus-alti.jpeg",
      "images/victus-keyboard.jpeg"
    ],
    specs: [
      { label: "Processor", value: "AMD Ryzen 7-8645HS" },
      { label: "RAM", value: "8GB DDR4" },
      { label: "Storage", value: "512GB SSD" },
      { label: "Display", value: "15.6\" HD" },
      { label: "Graphics", value: "NVIDIA GeForce RTX 2050 4GB" },
      { label: "Battery", value: "Up to 7 hours" },
      { label: "Weight", value: "4.1 lbs" }
    ],
    description: "The HP Victus delivers powerful performance for gamers and creators. With its AMD Ryzen 7 processor and dedicated RTX 2050 graphics, it handles modern games and creative workloads with ease.",
    affiliateLink: "https://amazon.com/hp-victus"
  },

  // Dell 15
  "Dell-15": {
    name: "Dell 15",
    price: "₹36,490",
    mainImage: "images/dell-main.jpg",
    thumbnails: [
      "images/dell-main.jpg",
      "images/dell-side.jpg",
      "images/dell-keyboard.jpg"
    ],
    specs: [
      { label: "Processor", value: "AMD Ryzen 3 7320U" },
      { label: "RAM", value: "8GB DDR4" },
      { label: "Storage", value: "512GB SSD" },
      { label: "Display", value: "15.6\" FHD (120Hz)" },
      { label: "Graphics", value: "Integrated" },
      { label: "Battery", value: "Up to 7 hours" },
      { label: "Weight", value: "1.63 kg" }
    ],
    description: "Dell 15 features a smooth 120Hz display, making scrolling and everyday use incredibly fluid. Its thin and light design, combined with solid performance, makes it an excellent choice for students.",
    affiliateLink: "https://techlomedia.in/top-products/best-laptops-under-rs-40000/",
     rating: 4.0,
  badge: "Smooth Display",
  designReview: "...",
  performanceReview: "...",
  displayReview: "...",
  batteryReview: "...",
  pros: ["...", "..."],
  cons: ["..."],
  ratingBreakdown: { design: 4.0, performance: 4.0, display: 4.5, battery: 4.0, value: 4.2 },
  finalVerdict: "..."

  },

  // Acer Aspire Lite
  "Acer-Aspire-Lite": {
    name: "Acer Aspire Lite",
    price: "₹35,990",
    mainImage: "images/Acer Aspire Lite-main.jpg",
    thumbnails: [
      "images/Acer Aspire Lite-main.jpg",
      "images/acer-side.jpg",
      "images/Acer Aspire Lite-keyboard.jpg"
    ],
    specs: [
      { label: "Processor", value: "AMD Ryzen 3-5300U" },
      { label: "RAM", value: "16GB DDR4" },
      { label: "Storage", value: "512GB SSD" },
      { label: "Display", value: "15.6\" Full HD" },
      { label: "Graphics", value: "AMD Radeon Graphics" },
      { label: "Battery", value: "Up to 7 hours" },
      { label: "Weight", value: "1.59 kg" }
    ],
    description: "The Acer Aspire Lite is ideal for heavy multitasking, thanks to its 16GB of RAM. Juggle dozens of browser tabs, stream music, and work on documents without lag – all in a lightweight package.",
    affiliateLink: "https://techlomedia.in/top-products/best-laptops-under-rs-40000/"
  },

  // ThinkPad X1 Carbon
  "ThinkPad-X1-Carbon": {
    name: "ThinkPad X1 Carbon",
    price: "₹85,990",
    mainImage: "images/thinkpadx1-main.png",
    thumbnails: [
      "images/thinkpadx1-main.png",
      "images/thinkpadx1-side.png",
      "images/thinkpadx1-keyboard.png"
    ],
    specs: [
      { label: "Processor", value: "Intel Core i7-1165G7" },
      { label: "RAM", value: "16GB LPDDR4x" },
      { label: "Storage", value: "512GB NVMe SSD" },
      { label: "Display", value: "14\" WUXGA IPS" },
      { label: "Graphics", value: "Intel Iris Xe" },
      { label: "Battery", value: "Up to 15 hours" },
      { label: "Weight", value: "1.13 kg" }
    ],
    description: "The ThinkPad X1 Carbon is an ultra‑premium business laptop with a carbon‑fiber body, exceptional keyboard, and all‑day battery. Perfect for professionals on the go.",
    affiliateLink: "https://amazon.com/thinkpad-x1-carbon"
  },

  // HP EliteBook 745 G6
  "HP-EliteBook-745-G6": {
    name: "HP EliteBook 745 G6",
    price: "₹44,990",
    mainImage: "images/hp754-main.png",
    thumbnails: [
      "images/hp754-main.png",
      "images/hp745-side.png",
      "images/hp745-keyboard.png"
    ],
    specs: [
      { label: "Processor", value: "AMD Ryzen 5 PRO 3500U" },
      { label: "RAM", value: "16GB DDR4" },
      { label: "Storage", value: "512GB SSD" },
      { label: "Display", value: "14\" FHD IPS" },
      { label: "Graphics", value: "AMD Radeon Vega 8" },
      { label: "Battery", value: "Up to 10 hours" },
      { label: "Weight", value: "1.6 kg" }
    ],
    description: "The HP EliteBook 745 G6 combines business‑class security with solid performance. Its durable build and long battery life make it a great choice for professionals.",
    affiliateLink: "https://amazon.com/hp-elitebook-745-g6"
  },

  // MacBook Air (2017)
  "MacBook-Air-2017": {
    name: "MacBook Air (2017)",
    price: "₹59,990",
    mainImage: "images//MacBook-main.png",
    thumbnails: [
      "images//MacBook-main.png",
      "images//MacBook-side.png",
      "images//MacBook-keyboard.png"
    ],
    specs: [
      { label: "Processor", value: "Intel Core i5 (7th gen)" },
      { label: "RAM", value: "8GB LPDDR3" },
      { label: "Storage", value: "128GB SSD" },
      { label: "Display", value: "13.3\" LED" },
      { label: "Graphics", value: "Intel HD Graphics 6000" },
      { label: "Battery", value: "Up to 12 hours" },
      { label: "Weight", value: "1.35 kg" }
    ],
    description: "The classic MacBook Air delivers legendary battery life and a fanless design in a thin, light aluminum body. Perfect for macOS fans on a budget.",
    affiliateLink: "https://amazon.com/macbook-air-2017"
  },

  // ThinkPad T14 Gen 1
  "thinkpad-t14-gen-1": {
    name: "ThinkPad T14 Gen 1",
    price: "₹49,990",
    mainImage: "images/thinkpadt14-keyboard.png",
    thumbnails: [
      "images/thinkpadt14-main.png",
      "images/thinkpadt14-side.png",
      "images/thinkpadt14-keyboard.png"
    ],
    specs: [
      { label: "Processor", value: "Intel Core i5-10210U / i7-10610U" },
      { label: "RAM", value: "16GB DDR4" },
      { label: "Storage", value: "512GB SSD" },
      { label: "Display", value: "14\" FHD IPS" },
      { label: "Graphics", value: "Intel UHD Graphics" },
      { label: "Battery", value: "Up to 10 hours" },
      { label: "Weight", value: "1.55 kg" }
    ],
    description: "ThinkPad T14 Gen 1 is built to military‑grade standards for durability. With 16GB RAM, it handles heavy multitasking, making it ideal for power users.",
    affiliateLink: "https://amazon.com/thinkpad-t14-gen1"
  },

  // Girl Slim Fit Shirt
  "Girl-Slim-Fit-Shirt": {
    name: "Girl Slim Fit Shirt",
    price: "₹925",
    mainImage: "images/girlfit-side.jpg",
    thumbnails: [
      "images/girlfit-a.jpg",
      "images/girl-slim-fit-shirt-b.png",
      "images/girl-slim-fit-shirt-c.png"
    ],
    specs: [
      { label: "Brand", value: "Levi's" },
      { label: "Material", value: "100% Cotton" },
      { label: "Fit", value: "Slim Fit" },
      { label: "Color", value: "Light Blue" },
      { label: "Size", value: "XS, S, M, L" },
      { label: "Care", value: "Machine wash cold" },
      { label: "Origin", value: "Imported" }
    ],
    description: "Stylish slim‑fit shirt for women, made from soft, breathable cotton. Perfect for casual outings or office wear.",
    affiliateLink: "https://amazon.in/dp/example-girl-shirt"
  },

  // Graphics T‑Shirt
  "Graphic-T-Shirt": {
    name: "Graphic T-Shirt",
    price: "₹915",
    mainImage: "images/boyshirt-main.png",
    thumbnails: [
      "images/boyshirt-main.png",
      "images/boyshirt-in.png",
      "images/graphic-tshirt-c.png"
    ],
    specs: [
      { label: "Brand", value: "Roadster" },
      { label: "Material", value: "100% Cotton" },
      { label: "Fit", value: "Regular Fit" },
      { label: "Color", value: "Black" },
      { label: "Size", value: "S, M, L, XL" },
      { label: "Care", value: "Machine wash cold" },
      { label: "Origin", value: "India" }
    ],
    description: "Trendy graphic t‑shirt made from premium cotton. The bold print adds personality to your everyday style.",
    affiliateLink: "https://amazon.in/dp/example-graphic-tshirt"
  },

  // Lightweight Jacket
  "Lightweight-Jacket": {
    name: "Lightweight Jacket",
    price: "₹1,299",
    mainImage: "images/jacket-a.png",
    thumbnails: [
      "images/jacket-a.png",
      "images/jacket-b.png",
      "images/jacket-c.png"
    ],
    specs: [
      { label: "Brand", value: "Adidas" },
      { label: "Material", value: "Polyester" },
      { label: "Fit", value: "Regular Fit" },
      { label: "Color", value: "Navy Blue" },
      { label: "Size", value: "S, M, L, XL" },
      { label: "Care", value: "Machine wash cold" },
      { label: "Origin", value: "Imported" }
    ],
    description: "A versatile lightweight jacket perfect for cool evenings or layering. Water‑resistant and packable.",
    affiliateLink: "https://amazon.in/dp/example-jacket"
  },

  // Slim Fit Shirt
  "Slim-Fit-Shirt": {
    name: "Slim Fit Shirt",
    price: "₹730",
    mainImage: "images/menfit.png",
    thumbnails: [
      "images/slim-fit-shirt-a.png",
      "images/slim-fit-shirt-b.png",
      "images/slim-fit-shirt-c.png"
    ],
    specs: [
      { label: "Brand", value: "Peter England" },
      { label: "Material", value: "100% Cotton" },
      { label: "Fit", value: "Slim Fit" },
      { label: "Color", value: "Navy Blue" },
      { label: "Size", value: "S, M, L, XL" },
      { label: "Care", value: "Machine wash cold / Hand wash" },
      { label: "Origin", value: "India" }
    ],
    description: "Classic slim‑fit shirt from Peter England. Made from soft, wrinkle‑resistant cotton – a wardrobe essential.",
    affiliateLink: "https://amazon.in/dp/example-slim-fit-shirt"
  },

//Luxury Beauty • Indulge in Elegance
 // Slim Fit Shirt
  "Dr-Seth-sunscreen": {
    name: "Dr-Seth-sunscreen",
    price: "₹730",
    mainImage: "luxury-beauty/drseth-main.jpg",
    thumbnails: [
      "luxury-beauty/drseth-main.jpg",
      "luxury-beauty/drseth-side.jpg",
      "luxury-beauty/drseth-key.jpg",
      "luxury-beauty/drseth-test.jpg"
    ],
    specs: [
      { label: "Brand", value: "Peter England" },
      { label: "Material", value: "100% Cotton" },
      { label: "Fit", value: "Slim Fit" },
      { label: "Color", value: "Navy Blue" },
      { label: "Size", value: "S, M, L, XL" },
      { label: "Care", value: "Machine wash cold / Hand wash" },
      { label: "Origin", value: "India" }
    ],
    description: "Classic slim‑fit shirt from Peter England. Made from soft, wrinkle‑resistant cotton – a wardrobe essential.",
    affiliateLink: "https://amazon.in/dp/example-slim-fit-shirt"
  },

//luxuriouse beauty
   "Nuteregenai": {
    name: "Nuteregenai",
    price: "₹730",
    mainImage: "luxury-beauty/sunsceen-main.jpg",
    thumbnails: [
      "luxury-beauty/sunsceen-main.jpg",
      "luxury-beauty/Nuteregenai-side.jpg",
      "luxury-beauty/Nuteregenai.jpg",
      "luxury-beauty/Nuteregenai.jpg"
    ],
    specs: [
      { label: "Brand", value: "Peter England" },
      { label: "Material", value: "100% Cotton" },
      { label: "Fit", value: "Slim Fit" },
      { label: "Color", value: "Navy Blue" },
      { label: "Size", value: "S, M, L, XL" },
      { label: "Care", value: "Machine wash cold / Hand wash" },
      { label: "Origin", value: "India" }
    ],
    description: "Classic slim‑fit shirt from Peter England. Made from soft, wrinkle‑resistant cotton – a wardrobe essential.",
    affiliateLink: "https://amazon.in/dp/example-slim-fit-shirt"
  },


  //luxuriouse beauty
   "MOUCCOUSTACH": {
    name: "MOUCCOUSTACH",
    price: "₹730",
    mainImage: "luxury-beauty/moustacch-main.jpg",
    thumbnails: [
      "luxury-beauty/moustacch-main.jpg",
      "luxury-beauty/moustacch-out.jpg",
      "luxury-beauty/moustacch-side.jpg",
      "luxury-beauty/Nuteregenai.jpg"
    ],
    specs: [
      { label: "Brand", value: "Peter England" },
      { label: "Material", value: "100% Cotton" },
      { label: "Fit", value: "Slim Fit" },
      { label: "Color", value: "Navy Blue" },
      { label: "Size", value: "S, M, L, XL" },
      { label: "Care", value: "Machine wash cold / Hand wash" },
      { label: "Origin", value: "India" }
    ],
    description: "Classic slim‑fit shirt from Peter England. Made from soft, wrinkle‑resistant cotton – a wardrobe essential.",
    affiliateLink: "https://amazon.in/dp/example-slim-fit-shirt"
  },





};

// Ensure the object is available globally (if used in a browser)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = products;
}