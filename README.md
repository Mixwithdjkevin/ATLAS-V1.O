# MIX WITH DJ KEVIN - THE ULTIMATE DJ RESOURCE

Welcome to the official source code for **Mix With DJ Kevin** - the ultimate web destination for professional DJ playlist packs, Rekordbox remix hot cues, Musik N Beatz Academy courses, and free DJ tools.

---

## 🌟 Features & Highlights

- **Dark Luxury Aesthetic**: Premium dark theme (`#060608`) with metallic gold accents (`#E5C158`), glassmorphism overlays, and smooth CSS3 animations.
- **Pure Vanilla Tech Stack**: Built strictly with HTML5, CSS3, and modern vanilla ES6 JavaScript — zero dependencies, zero framework overhead, fast loading.
- **GitHub Pages Ready**: 100% static client-side codebase completely ready to host directly on GitHub Pages or any static CDN host.
- **DJ Playlist Shop**:
  - Categories: *Mega Bundles*, *Wedding Collection*, *Roadshow Collection*, *Festival Collection*, *Original Playlists*, *Remix Hot Cues*.
  - Instant search filter by keyword, category tabs, and sorting options.
  - Interactive tracklist modal preview.
  - Audio sample player bar with live progress tracking.
  - SuperProfile direct buy integration.
- **Musik N Beatz Academy**:
  - Online DJ Course & In-Studio Offline Course listings.
  - Detailed curriculum highlights & direct WhatsApp admission enquiry.
- **Free Downloads Hub**:
  - Sample hot cue packs, Camelot key cheat sheets, transition toolkits, and scratch FX drops.
- **Contact & WhatsApp Integration**:
  - Direct message generator pre-filled with user inquiries sent straight to WhatsApp.

---

## 📁 File & Folder Structure

```
mix-with-dj-kevin/
├── index.html            # Homepage (Hero, Best Sellers, Features, Academy Callout)
├── store.html            # DJ Playlist Shop (Filterable product catalog, tracklists)
├── academy.html          # Musik N Beatz Academy (Online & Offline DJ Courses)
├── downloads.html        # Free Downloads (Hot Cue packs, PDFs, Scratch FX)
├── about.html            # About DJ Kevin (Biography, Mission, Vision, Studio Setup)
├── contact.html          # Contact Page (Direct channels, WhatsApp message builder)
├── css/
│   └── style.css         # Main stylesheet (Variables, Gold theme, Glassmorphism)
├── js/
│   └── app.js            # Main JS engine (Product catalog, player, search, modals)
├── images/
│   ├── logo/             # Logo branding assets
│   ├── hero/             # High-res hero banners and DJ Kevin portraits
│   └── products/         # Product cover artwork
└── README.md             # Documentation & deployment guide
```

---

## 🛠️ How To Add New Products

Adding new playlist packs or hot cue collections is extremely simple.

1. Open `js/app.js`.
2. Locate the `products` array inside `DJApp`.
3. Add a new product object following this template:

```js
{
  id: "prod-007",
  title: "NEW BOLLYWOOD PEAK HOUR PACK",
  category: "original-playlists", // Category tag
  categoryLabel: "Original Playlist",
  description: "200+ Peak hour Bollywood club edits with 8-bar intro cues.",
  price: "₹799",
  originalPrice: "₹1,599",
  bpm: "128 - 132 BPM",
  key: "Key Tagged",
  trackCount: "200+ Tracks",
  image: "https://your-image-url.com/cover.jpg",
  superprofileLink: "https://superprofile.bio/mixwithdjkevin/product/your-product-slug",
  audioSample: "https://your-audio-url.com/sample.mp3",
  isBestSeller: false,
  isFeatured: true,
  tracklist: [
    "Track 1 Name - Intro Edit",
    "Track 2 Name - Re-Drum Fix",
    "Track 3 Name - Heavy Drop"
  ]
}
```

---

## 🚀 GitHub Pages Deployment Guide

To deploy this project to GitHub Pages:

1. Create a new repository on GitHub named `mixwithdjkevin` (or your preferred repo name).
2. Commit and push all files (`index.html`, `store.html`, `css/`, `js/`, `images/`, etc.) to the `main` branch.
3. In your GitHub repository:
   - Click on **Settings**.
   - Navigate to **Pages** on the left menu.
   - Under **Source**, select `Deploy from a branch`.
   - Select the `main` branch and `/ (root)` folder.
   - Click **Save**.
4. GitHub Pages will build and publish your site at:
   `https://<your-username>.github.io/<repo-name>/`

---

## 📱 Customizing Contact & WhatsApp Details

- To update the target WhatsApp number:
  - Open `js/app.js` and edit `whatsappNumber: "919876543210"` at the top of the file.
- To update SuperProfile links:
  - Edit `superprofileBase` or individual `superprofileLink` properties in `js/app.js`.

---

© 2026 Mix With DJ Kevin. The Ultimate DJ Resource.
