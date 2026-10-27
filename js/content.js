/* =====================================================================
   SITE CONTENT – edit this file to update the website
   (name, phone, address, hours, reviews, menu and prices).
   Layout and behaviour live in js/main.js; styling in css/styles.css.
   ===================================================================== */
const SITE = {
  name: "MOTAA BHAI KITCHEN",
  phone: "+919109101199",
  phoneDisplay: "+91 91091 01199",
  whatsapp: "919109101199",   // set null to hide the WhatsApp button
  address: "267, Mahatma Gandhi Road, Bada Ganpati, Malharganj, Indore, Madhya Pradesh 452002",
  directionsUrl: "https://www.google.com/maps/search/?api=1&query=MOTA+BHAII%2C+267+Mahatma+Gandhi+Road%2C+Indore%2C+Madhya+Pradesh+452002",
  mapEmbedQuery: "267 Mahatma Gandhi Road, Bada Ganpati, Malharganj, Indore 452002",
  reviewsUrl: "https://www.google.com/maps/search/?api=1&query=MOTA+BHAII%2C+267+Mahatma+Gandhi+Road%2C+Indore%2C+Madhya+Pradesh+452002",
  hours: "Daily, 12 noon – 12 midnight",   // owner confirmed (Oct 2026)
  instagram: "https://www.instagram.com/_motabhaii_/",
  zomato: "https://zomato.onelink.me/xqzv/2u3wdd5c",
  // From Zomato listing: Lunch, Dinner, Home delivery, Takeaway, Vegetarian only, Digital payments
  // No seating area (owner confirmed) – takeaway and delivery only.
  services: ["Takeaway", "Home delivery on Zomato", "Digital payments accepted"],
  // Google rating (owner confirmed, Oct 2026). Add `count` (e.g. 120) to show "Based on N reviews".
  rating: { value: 4.1, count: null },
  // Zomato delivery rating, Oct 2026.
  zomatoRating: { value: 4.4, count: "5,500+" },

  // Excerpts from public Google reviews (owner confirmed).
  reviews: [
    { text: "Overall Fully satisfied with food and tasty food within affordable price.", author: "Google reviewer" },
    { text: "Best quality at affordable rates", author: "Google reviewer" },
  ],

  // From the restaurant's printed menu card (Motaa Bhai Kitchen - Menu.pdf). Curries & rice: 450ml serving.
  menu: [
    { category: "Paneer", note: "Serving 450ml", items: [
      ["Chole Paneer",150],["Masala Paneer",150],["Matar Paneer",160],["Palak Paneer",170],["Paneer Chatpata",170],
      ["Paneer Handi",170],["Paneer Hydrabadi",180],["Paneer Kolhapuri",180],["Kadhai Paneer",180],["Paneer Lababdar",180],
      ["Butter Paneer Masala",190],["Paneer Bhurji",190],["Shahi Paneer",190],["Paneer Afghani",200],["Paneer Nimadi",210],
      ["Paneer Tikka Masala",210],["Paneer Punjabi",210],["Paneer Kofta",220] ] },
    { category: "Kaju", note: "Serving 450ml", items: [
      ["Kaju Curry",190],["Kaju Takatak",180],["Kaju Chatpata",180],["Kaju Masala",190],["Kaju Paneer Masala",200],["Kaju Paneer Makhana",220] ] },
    { category: "Sev", note: "Serving 450ml", items: [
      ["Sev Tamatar",100],["Sev Masala",100],["Sev Matar",120],["Sev Dry Bhurji",120],["Dudh Sev",130],["Sev Mawa",130],["Sev Paneer",140] ] },
    { category: "Dal", note: "Serving 450ml", items: [
      ["Dal Jeera",100],["Dal Fry",110],["Dal Green Chilli Fry",110],["Dal Butter Fry",130],["Dal Kolhapuri",130],
      ["Dal Tadka",140],["Dal Green Chilli Tadka",140],["Dal Double Tadka",160] ] },
    { category: "Seasonal Veg", note: "Serving 450ml", items: [
      ["Aloo Jeera",100],["Aloo Gujrati",100],["Aloo Chole",120],["Bhindi Fry",120],["Bhindi Masala",120],["Chana Masala",120],
      ["Aloo Gobi Masala",130],["Green Peas Masala",130],["Mix Veg",130],["Punjabi Chole",130],["Punjabi Dum Aloo",130],
      ["Stuff Capsicum",150],["Stuff Tomato",150],["Malai Kofta",220] ] },
    { category: "Mushroom", note: "Serving 450ml", items: [
      ["Mushroom Masala",190],["Mushroom Matar",190],["Kadhai Mushroom",190],["Mushroom Paneer",200] ] },
    { category: "Rice & Biryani", note: "Serving 450ml", items: [
      ["Plain Rice",90],["Jeera Rice",100],["Masala Rice",120],["Matar Pulao",120],
      ["Veg Pulao",130],["Butter Khichdi",130],["Punjabi Khichdi",160],["Veg Biryani",160] ] },
    { category: "Chinese", note: "Serving 450ml", items: [
      ["Hakka Noodle",60],["Veg Noodle",70],["Schezwan Noodle",80],["Veg Manchurian",90],["Veg Fried Rice",100],
      ["Schezwan Fried Rice",110],["Chilli Paneer",160],["Paneer 65",160],["Chilli Mushroom",180] ] },
    { category: "Breads & Paratha", note: "Freshly prepared", items: [
      ["Tawa Roti",7],["Tawa Butter Roti",9],["Tawa Paratha",30],["Laccha Paratha",35],["Aloo Paratha",50],
      ["Sev Paratha",50],["Paneer Paratha",60],["Mix Paratha",60] ] },
    { category: "Salad, Papad & Raita", items: [
      ["Onion Salad",20],["Dry Papad",20],["Masala Dry Papad",30],["Mirchi Fry",30],["Green Salad",50],["Boondi Raita (300ml)",60] ] },
    { category: "Thali & Beverages", items: [
      ["Regular Thali",100],["Bisleri (500ml)",10],["Bisleri (1L)",20] ] },
  ],

  // Featured cards: [dish name, category, fallback gradient, photo]; descriptions live in `popularText` below
  // Photos are representative stock images from Unsplash (Unsplash License: free for commercial use,
  // no credit required), NOT taken at the restaurant. Replace with the restaurant's own photos when available.
  // Sources: thali unsplash.com/photos/bKmSUcAGrvI · paneer vgTntT8PmIM · aloo jeera VhKL_ftnDTw ·
  //          dal O_MFjbig3hA · biryani Ta2gPvMoV_0 (all colour-graded dark & warm)
  popular: [
    ["Regular Thali", "Thali", "#c76b1a,#F4A623", "images/popular/regular-thali.jpg"],
    ["Paneer Tikka Masala", "Paneer", "#9b1f2b,#e2643a", "images/popular/paneer-tikka-masala.jpg"],
    ["Aloo Jeera", "Seasonal Veg", "#b23a1f,#f08a3c", "images/popular/aloo-jeera.jpg"],
    ["Dal Tadka", "Dal", "#c98a12,#f3c04a", "images/popular/dal-tadka.jpg"],
    ["Punjabi Chole", "Seasonal Veg", "#a0522d,#f0b46b", "images/popular/punjabi-chole.jpg"], // AI image supplied by owner
    ["Veg Biryani", "Rice & Biryani", "#8a3d14,#e5a03a", "images/popular/veg-biryani.jpg"],
  ],
  // One-line descriptions shown on the Popular Picks cards
  popularText: {
    "Regular Thali": "A complete vegetarian meal on one plate – great value for lunch or dinner.",
    "Paneer Tikka Masala": "Soft paneer in a rich, spiced tomato-onion gravy.",
    "Aloo Jeera": "Potatoes tossed with cumin and dry spices – simple and comforting.",
    "Dal Tadka": "Yellow dal finished with a sizzling tadka of ghee, garlic and red chilli.",
    "Punjabi Chole": "Chickpeas slow-cooked in a tangy, spiced Punjabi-style gravy.",
    "Veg Biryani": "Fragrant basmati rice layered with vegetables and whole spices.",
  },

  // Gallery tiles: [label, size classes, fallback gradient, photo?]
  // Paneer: Pexels 31249588 (Pexels License, no credit needed), colour-graded dark & warm.
  // Representative photo, not taken at the restaurant.
  // Sev Tamatar: AI-generated image supplied by the owner (no credit needed).
  gallery: [
    // Thali close-up: tighter crop of the Popular Picks thali photo (Unsplash bKmSUcAGrvI, no credit needed)
    // Layout (4 columns): thali 2×2 · kitchen tall · paneer + sev stacked · shop signboard as a full-width banner
    ["Regular Thali", "g-wide g-tall", "#9b1f2b,#F4A623", { src: "images/gallery/thali-closeup.jpg" }],
    ["Our kitchen", "g-tall", "#3a2a22,#7A1721", { src: "images/gallery/kitchen.jpg" }], // owner-supplied photo
    ["Paneer dish", "", "#b23a1f,#f08a3c", { src: "images/gallery/paneer-dish.jpg" }],
    ["Sev Tamatar", "", "#c98a12,#f3c04a", { src: "images/gallery/sev-tamatar.jpg" }],
    ["Our shop · Bada Ganpati", "g-full", "#7A1721,#c76b1a", { src: "images/shop-exterior.jpg", pos: "50% 4%" }],
  ],
};
