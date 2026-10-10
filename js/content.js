/* =====================================================================
   SITE CONTENT – edit this file to update the website
   (name, phone, address, hours, reviews, menu and prices).
   Layout and behaviour live in js/main.js; styling in css/styles.css.
   ===================================================================== */
const SITE = {
  name: "MOTA BHAI KITCHEN",
  phone: "+919109101199",
  phoneDisplay: "+91 91091 01199",
  whatsapp: "919109101199",   // confirmed from menu board; set null to hide the WhatsApp button
  address: "267, Mahatma Gandhi Road, Bada Ganpati, Malharganj, Indore, Madhya Pradesh 452002",
  directionsUrl: "https://www.google.com/maps/search/?api=1&query=MOTA+BHAII%2C+267+Mahatma+Gandhi+Road%2C+Indore%2C+Madhya+Pradesh+452002",
  mapEmbedQuery: "267 Mahatma Gandhi Road, Bada Ganpati, Malharganj, Indore 452002",
  reviewsUrl: "https://www.google.com/maps/search/?api=1&query=MOTA+BHAII%2C+267+Mahatma+Gandhi+Road%2C+Indore%2C+Madhya+Pradesh+452002",
  hours: "Daily, 12 noon – 12 midnight",   // from Zomato listing (Oct 2026) – owner to confirm
  hoursVerified: false,
  instagram: "https://www.instagram.com/_motabhaii_/",
  zomato: "https://www.zomato.com/indore/mota-bhaii-indian-kitchen-malharganj",
  // From Zomato listing: Lunch, Dinner, Home delivery, Takeaway, Vegetarian only, Digital payments
  services: ["Dine-in", "Takeaway", "Home delivery on Zomato", "Digital payments accepted"],
  rating: { value: 4.1, count: null, verified: false },
  // Zomato delivery rating, Oct 2026. Dining rating there is 3.8 from only 5 reviews.
  zomatoRating: { value: 4.4, count: "5,500+" },

  // Review excerpts supplied in the brief. Add reviewer names/dates only as they appear on Google.
  reviews: [
    { text: "Overall Fully satisfied with food and tasty food within affordable price.", author: "Google reviewer", verified: false },
    { text: "Best quality at affordable rates", author: "Google reviewer", verified: false },
  ],

  // Transcribed from the menu board photo. Items with verify:true were hard to read.
  menu: [
    { category: "Thali", items: [["Regular Thali", 100]] },
    { category: "Paneer Sabji", items: [
      ["Choley Paneer",150],["Masala Paneer",150],["Batla Paneer",160],["Palak Paneer",170],["Paneer Chatpata",170],
      ["Paneer Handi",170],["Paneer Hyderabadi",180],["Paneer Kolhapuri",180],["Kadhai Paneer",180],["Paneer Lababdar",180],
      ["Butter Paneer Masala",190],["Paneer Bhurji",190],["Shahi Paneer",190],["Paneer Afghani",200],["Paneer Bhurji Curry",200],
      ["Paneer Pasanda",210],["Paneer Nimadi (spicy)",210],["Paneer Tikka Masala",210],["Paneer Punjabi",210] ] },
    { category: "Kaju", items: [
      ["Kaju Takatak",180],["Kaju Chatpata",180],["Kaju Masala",190],["Kaju Paneer Masala",200],["Kaju Paneer Makhana",220],["Kaju Methi Matar",240] ] },
    { category: "Sev", items: [
      ["Sev Masala",100],["Sev Tamatar",100],["Sev Matar",120],["Sev Dry Bhurji",120],["Dudh Sev",130],["Sev Mawa",130],["Sev Paneer",140] ] },
    { category: "Dal", items: [
      ["Dal Jeera",100],["Dal Fry",110],["Dal Green Chilli Fry",110],["Dal Butter Fry",130],["Dal Kolhapuri",130],
      ["Dal Tadka",140],["Dal Green Chilli Tadka",140],["Dal Double Tadka",160] ] },
    { category: "Seasonal Veg", items: [
      ["Aloo Jeera",100],["Aloo Gujrati",100],["Aloo Choley",120],["Aloo Gobi Masala",130],["Bhindi Fry",120],["Bhindi Masala",120],
      ["Mix Green Peas Masala",130],["Mix Veg",130],["Punjabi Choley",130],["Punjabi Dum Aloo",130],["Chana Masala",120],
      ["Stuffed Tomato",150],["Stuffed Capsicum",150],["Mushroom Masala",190],["Mushroom Matar",190],["Mushroom Paneer",200],
      ["Kaju Mushroom",200],["Chilli Mushroom",180],["Kadhai Mushroom",190],["Malai Kofta",220],["Paneer Kofta",220] ] },
    { category: "Roti", items: [
      ["Tawa Roti",7],["Tawa Roti Butter",9],["Tawa Paratha",30],["Laccha Paratha",35],["Aloo Paratha",50,true],
      ["Sev Paratha",50],["Mix Paratha",60],["Paneer Paratha",60] ] },
    { category: "Rice", items: [
      ["Plain Rice",90],["Jeera Rice",100],["Onion Chilli Rice",110],["Masala Rice",120],["Matar Pulao",120],
      ["Veg Pulao",130],["Butter Khichdi",130],["Punjabi Khichdi",160],["Veg Biryani",160] ] },
    { category: "Chinese", items: [
      ["Hakka Noodles",60,true],["Veg Noodles",70,true],["Schezwan Noodles",80,true],["Manchurian",90,true],["Veg Fried Rice",100,true],
      ["Schezwan Fried Rice",110,true],["Chilli Paneer",160,true],["Chilli Mushroom",180,true],["Paneer 65",160,true] ] },
    { category: "Salad & Sides", items: [
      ["Onion Salad",20],["Green Salad",50],["Masala Dry Papad",30],["Masala Fry Papad",30],["Boondi Raita",60],["Mirchi Fry",30] ] },
  ],

  // Featured cards: [dish name, category, gradient for photo placeholder]
  popular: [
    ["Regular Thali", "Thali", "#c76b1a,#F4A623"],
    ["Paneer Tikka Masala", "Paneer Sabji", "#9b1f2b,#e2643a"],
    ["Sev Tamatar", "Sev", "#b23a1f,#f08a3c"],
    ["Dal Tadka", "Dal", "#c98a12,#f3c04a"],
    ["Kaju Paneer Makhana", "Kaju", "#a0522d,#f0b46b"],
    ["Veg Biryani", "Rice", "#8a3d14,#e5a03a"],
  ],

  gallery: [
    ["Food · thali close-up", "g-wide g-tall", "#9b1f2b,#F4A623"],
    ["Food · paneer dish", "", "#b23a1f,#f08a3c"],
    ["Interior · seating", "", "#5a0f17,#9b1f2b"],
    ["Exterior & signage", "g-wide", "#7A1721,#c76b1a"],
    ["Food · sev tamatar", "", "#c98a12,#f3c04a"],
    ["Kitchen (if owner approves)", "", "#3a2a22,#7A1721"],
  ],
};
