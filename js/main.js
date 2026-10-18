/* ===================== Rendering (no need to edit below) ===================== */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;" }[c]));
const vegMark = '<span class="veg-mark" role="img" aria-label="Vegetarian"></span>';

// Links & contact details
$$("[data-tel]").forEach(a => a.href = "tel:" + SITE.phone);
$$("[data-directions]").forEach(a => a.href = SITE.directionsUrl);
$$("[data-reviews]").forEach(a => a.href = SITE.reviewsUrl);
$("#addr").textContent = SITE.address;
$("#footAddr").textContent = SITE.address;
$("#phoneText").textContent = SITE.phoneDisplay;
$("#footPhone").textContent = SITE.phoneDisplay;
$$("[data-zomato]").forEach(a => SITE.zomato ? a.href = SITE.zomato : a.remove());
$$("[data-insta]").forEach(a => SITE.instagram ? a.href = SITE.instagram : a.remove());
$("#hours").textContent = SITE.hours || "Please call to confirm current timings";
$("#statusHours").innerHTML = SITE.hours ? `<strong>Open ${esc(SITE.hours.replace(/^Daily, /, "daily, "))}.</strong>` : "<strong>Opening hours not yet confirmed.</strong>";
$("#services").innerHTML = SITE.services.map(s => `<li>${esc(s)}</li>`).join("");
if (SITE.zomatoRating) $("#zomatoRating").textContent = `★ ${SITE.zomatoRating.value} on Zomato delivery (${SITE.zomatoRating.count} ratings)`;
$("#mapFrame").src = "https://www.google.com/maps?q=" + encodeURIComponent(SITE.mapEmbedQuery) + "&output=embed";
$("#year").textContent = new Date().getFullYear();
if (SITE.whatsapp) {
  const wa = $("#waFloat");
  wa.href = "https://wa.me/" + SITE.whatsapp + "?text=" + encodeURIComponent("Hi " + SITE.name + ", I found you on your website.");
  wa.hidden = false;
}

// Price lookup
const priceOf = {};
SITE.menu.forEach(g => g.items.forEach(([n, p]) => priceOf[n] = p));
const totalDishes = SITE.menu.reduce((n, g) => n + g.items.length, 0);
$("#dishCount").textContent = Math.floor(totalDishes / 10) * 10 + "+";

// Popular cards
$("#popularGrid").innerHTML = SITE.popular.map(([name, cat, grad, photo]) => `
  <article class="food-card reveal">
    <div class="photo-ph${photo ? " has-photo" : ""}" style="background:linear-gradient(135deg,${grad})">
      ${photo ? `<img src="${esc(photo)}" alt="${esc(name)}" width="800" height="600" loading="lazy" />`
      : `<span class="ph-label"><svg class="icon"><use href="#i-camera"/></svg>Photo placeholder</span>`}
    </div>
    <div class="food-body">
      <div class="food-top">${vegMark}<span class="food-cat">${esc(cat)}</span></div>
      <h3>${esc(name)}</h3>
      <p>${esc(SITE.popularText?.[name] || `From our ${cat} menu.`)}</p>
      <div class="food-price">₹${priceOf[name] ?? "—"}</div>
    </div>
  </article>`).join("");

// Full menu with filters + search
let activeCat = "All";
const cats = ["All", ...SITE.menu.map(g => g.category)];
$("#filters").innerHTML = cats.map(c => `<button type="button" class="filter" aria-pressed="${c === "All"}" data-cat="${esc(c)}">${esc(c)}</button>`).join("");

function renderMenu() {
  const q = $("#menuSearch").value.trim().toLowerCase();
  const groups = SITE.menu
    .filter(g => activeCat === "All" || g.category === activeCat)
    .map(g => ({ ...g, items: g.items.filter(([n]) => !q || n.toLowerCase().includes(q)) }))
    .filter(g => g.items.length);
  $("#menuColumns").innerHTML = groups.map(g => `
    <div class="menu-group">
      <h3>${esc(g.category)}</h3>${g.note ? `<p class="menu-group-note">${esc(g.note)}</p>` : ""}
      ${g.items.map(([n, p]) => `
        <div class="menu-item">${vegMark}<span>${esc(n)}</span><span class="dots"></span><span class="price">₹${p}</span></div>`).join("")}
    </div>`).join("");
  $("#menuEmpty").style.display = groups.length ? "none" : "block";
}
$("#filters").addEventListener("click", e => {
  const b = e.target.closest(".filter"); if (!b) return;
  activeCat = b.dataset.cat;
  $$(".filter").forEach(x => x.setAttribute("aria-pressed", x === b));
  renderMenu();
});
$("#menuSearch").addEventListener("input", renderMenu);
renderMenu();

// Rating & reviews
const r = SITE.rating;
$("#ratingNum").textContent = r.value.toFixed(1);
$("#ratingStars").innerHTML = [1,2,3,4,5].map(i =>
  `<svg class="icon" style="opacity:${i <= Math.round(r.value) ? 1 : .3}"><use href="#i-star"/></svg>`).join("");
if (r.count) $("#reviewCount").textContent = `Based on ${r.count} reviews`; else $("#reviewCount").remove();
$("#reviewCards").innerHTML = SITE.reviews.map(rv => `
  <figure class="review-card reveal" style="margin:0">
    <span class="quote" aria-hidden="true">“</span>
    <blockquote>${esc(rv.text)}</blockquote>
    <footer>— ${esc(rv.author)}, via Google</footer>
  </figure>`).join("");

// Gallery
$("#galleryGrid").innerHTML = SITE.gallery.map(([label, cls, grad, photo]) => `
  <figure class="${cls} reveal">
    <div class="photo-ph${photo ? " has-photo" : ""}" style="background:linear-gradient(135deg,${grad})">
      ${photo ? `<img src="${esc(photo.src)}" alt="${esc(label)}" loading="lazy"${photo.pos ? ` style="object-position:${esc(photo.pos)}"` : ""} />`
              : `<span class="ph-label"><svg class="icon"><use href="#i-camera"/></svg>${esc(label)}</span>`}
    </div>
    ${photo ? `<figcaption>${esc(label)}</figcaption>` : ""}
  </figure>`).join("");
// FAQ
const FAQ = [
  ["Where is MOTAA BHAI KITCHEN located?", `${SITE.address}. Use the “Get Directions” button for Google Maps.`],
  ["Is the restaurant vegetarian?", "Yes. MOTAA BHAI KITCHEN is a pure vegetarian kitchen, and every dish on the menu is vegetarian."],
  ["What is the approximate price range?", "Prices on the current menu card range from ₹7 (tawa roti) to ₹220, with a Regular Thali at ₹100. Prices may change, so please confirm with the restaurant."],
  ["How can customers contact the restaurant?", `Call ${SITE.phoneDisplay}, or visit the restaurant at Bada Ganpati, Indore.`],
  ["What are the opening hours?", `${esc(SITE.hours || "Please call to confirm")}. Timings can change on festivals, so please call ahead if you are visiting late.`],
  ["Is takeaway or delivery available?", `Yes. Takeaway is available at the restaurant, and home delivery is available through <a href="${esc(SITE.zomato)}" target="_blank" rel="noopener">Zomato</a>.`],
  ["Do you accept online / UPI payments?", "Yes, digital payments are accepted."],
];
$("#faqList").innerHTML = FAQ.map(([q, a]) => `
  <details><summary>${esc(q)}<svg class="icon"><use href="#i-plus"/></svg></summary><p>${a}</p></details>`).join("");

// Sticky nav shadow + mobile menu
const nav = $("#nav");
addEventListener("scroll", () => nav.classList.toggle("scrolled", scrollY > 10), { passive: true });
const toggle = $("#menuToggle"), links = $("#navLinks");
toggle.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
});
links.addEventListener("click", e => { if (e.target.closest("a")) { links.classList.remove("open"); toggle.setAttribute("aria-expanded", false); } });

// Reveal-on-scroll
const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }), { threshold: .12 });
$$(".reveal").forEach(el => io.observe(el));
