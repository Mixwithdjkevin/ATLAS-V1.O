/**
 * ==========================================================================
 * MIX WITH DJ KEVIN - THE ULTIMATE DJ RESOURCE
 * Official Application Engine (js/app.js)
 * Clean, Modular, High-Performance Vanilla JavaScript
 * ==========================================================================
 */

// Global App State
const DJApp = {
  // Config
  whatsappNumber: "919082535931", // DJ Kevin Official WhatsApp
  superprofileBase: "https://superprofile.bio/mixwithdjkevin",
  
  // Data Store
  products: [
    {
      id: "prod-001",
      title: "17GB Mega Bollywood & English Commercial MP3 Bundle",
      category: "mega-bundles",
      categoryLabel: "Mega Bundle",
      description: "17GB collection of Bollywood and English commercial DJ tracks. Perfect for clubs, weddings, private events and professional DJs.",
      price: "₹1,200",
      badge: "🔥 BEST SELLER",
      image: "/src/assets/images/regenerated_image_1785346738418.png",
      buyLink: "https://superprofile.bio/vp/🔥-17gb-new-year-2026-dj-mega-bundle",
      audioSample: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      isBestSeller: true,
      isFeatured: true,
      isFree: false,
      tracklist: [
        "128 BPM - Bollywood Commercial Club Refix",
        "130 BPM - English Peak Hour Festival Intro Edit",
        "100 BPM - Punjabi Dancehall Drum Fix",
        "126 BPM - Retro Bollywood Disco Re-Drum",
        "128 BPM - Global Mainstage Anthem Cut"
      ]
    },
    {
      id: "prod-002",
      title: "17GB Rekordbox + Serato Hot Cue Mega Bundle",
      category: "mega-bundles",
      categoryLabel: "Mega Bundle",
      description: "Professional Rekordbox and Serato playlist bundle with hot cues ready for live performance.",
      price: "₹1,999",
      badge: "⭐ PRO DJ PICK",
      image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&h=450&q=80",
      buyLink: "https://superprofile.bio/vp/🔥-new-year-2026-–-17gb-rekordbox-dj-playlist-bundle-🔥",
      audioSample: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
      isBestSeller: true,
      isFeatured: true,
      isFree: false,
      tracklist: [
        "A Cue: 8-Bar Intro Clean Beat",
        "B Cue: Vocal Hook Drop Marker",
        "C Cue: Snare Roll Build-Up Trigger",
        "D Cue: High-Energy Drop Hot Cue",
        "E Cue: Outro 8-Bar Loop Buffer"
      ]
    },
    {
      id: "prod-003",
      title: "DJ Original Extended Mega Pack – 10GB",
      category: "original-playlists",
      categoryLabel: "Original Playlist",
      description: "Extended DJ edits designed for seamless professional mixing.",
      price: "₹399",
      badge: "🎵 DJ ESSENTIAL",
      image: "https://images.unsplash.com/photo-1571266028243-3716f02d2d2e?auto=format&fit=crop&w=800&h=450&q=80",
      buyLink: "https://superprofile.bio/vp/dj-original-extended-mega-pack-–-10gb",
      audioSample: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
      isBestSeller: false,
      isFeatured: true,
      isFree: false,
      tracklist: [
        "Bollywood Extended Intro Club Edit (320kbps)",
        "Commercial Dance Extended Re-Drum Cut",
        "Afro Beat Extended Rhythm Fix",
        "Deep House Extended Transition Mix"
      ]
    },
    {
      id: "prod-004",
      title: "11GB Roadshow MP3 Collection – Haldi, Visarjan & More",
      category: "roadshow-collection",
      categoryLabel: "Roadshow Collection",
      description: "Roadshow collection for Haldi, Visarjan, processions and outdoor DJ events.",
      price: "₹399",
      badge: "🎉 EVENT READY",
      image: "/src/assets/images/regenerated_image_1785345499210.png",
      buyLink: "https://superprofile.bio/vp/🎶-11gb-roadshow-mp3-collection-–-haldi--visarjan---more-🎶",
      audioSample: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
      isBestSeller: false,
      isFeatured: true,
      isFree: false,
      tracklist: [
        "Haldi Ceremony High Energy Dholak Beat",
        "Visarjan Procession Heavy Bass Tasha Cut",
        "Street Baraat Brass Horns Smasher",
        "Ganpati Utsav Loud Speaker Soundcheck Fix"
      ]
    },
    {
      id: "prod-005",
      title: "Bollywood Wedding Dance Hits – Rekordbox Hot Cues",
      category: "wedding-collection",
      categoryLabel: "Wedding Collection",
      description: "Professional Bollywood wedding playlist prepared with Rekordbox Hot Cues.",
      price: "₹599",
      badge: "💍 WEDDING ESSENTIAL",
      image: "/src/assets/images/regenerated_image_1785347025716.png",
      buyLink: "https://superprofile.bio/vp/🎧-bollywood-wedding-dance-hits-–-original---remix-pack--rekordbox---mp3-",
      audioSample: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
      isBestSeller: true,
      isFeatured: true,
      isFree: false,
      tracklist: [
        "Bride Entrance Slow Strings & Flute Build",
        "Sangeet High Energy Family Group Dance Cut",
        "Baraat High Tempo Dhol Slam (Cue Tagged)",
        "Couple Romantic First Dance Soft Grid"
      ]
    },
    {
      id: "prod-006",
      title: "Bollywood Wedding Dance Hits – MP3 Version",
      category: "wedding-collection",
      categoryLabel: "Wedding Collection",
      description: "Wedding DJ playlist in MP3 format.",
      price: "₹399",
      badge: "🎵 MP3 COLLECTION",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&h=450&q=80",
      buyLink: "https://superprofile.bio/vp/🎧-bollywood-wedding-dance-hits-–-original---remix-pack--mp3-version-",
      audioSample: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
      isBestSeller: false,
      isFeatured: true,
      isFree: false,
      tracklist: [
        "Wedding Sangeet Hit Medley MP3",
        "Celebration Dhol & Brass Mashup",
        "Bollywood Couple Dance MP3 Master",
        "Party Finale Peak Hour MP3 Cut"
      ]
    },
    {
      id: "prod-007",
      title: "Bollywood Original Hot Cues",
      category: "remix-hot-cues",
      categoryLabel: "Hot Cue Collection",
      description: "Professional Bollywood original playlist with Hot Cues.",
      price: "₹1,500",
      badge: "🔥 MOST POPULAR",
      image: "/src/assets/images/regenerated_image_1785347217107.png",
      buyLink: "https://superprofile.bio/vp/bollywood-original-hot-cues--your-instant-party-starter--634",
      audioSample: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      isBestSeller: true,
      isFeatured: true,
      isFree: false,
      tracklist: [
        "Original Track A: 8-Bar Intro & Vocal Cue",
        "Original Track B: Beat-grid Mapped Chorus Cue",
        "Original Track C: Clean Outro Loop Cue",
        "Original Track D: Instant Drop Marker"
      ]
    },
    {
      id: "prod-008",
      title: "Bollywood Remix Hot Cues",
      category: "remix-hot-cues",
      categoryLabel: "Hot Cue Collection",
      description: "High-energy Bollywood remix playlist with professionally prepared Hot Cues.",
      price: "₹999",
      badge: "⚡ REMIX EDITION",
      image: "/src/assets/images/regenerated_image_1785347213617.png",
      buyLink: "https://superprofile.bio/vp/bollywood-dance-remix-hot-cues--your-instant-party-starter-",
      audioSample: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
      isBestSeller: false,
      isFeatured: true,
      isFree: false,
      tracklist: [
        "Remix Cut A: Toneplay Scratch Cue",
        "Remix Cut B: Bass Drop Fire Trigger",
        "Remix Cut C: Snare Roll Build Cue",
        "Remix Cut D: Outro 8-Bar Fade Marker"
      ]
    },
    {
      id: "prod-009",
      title: "Garba 15GB Pack 2026",
      category: "festival-collection",
      categoryLabel: "Festival Collection",
      description: "Professional Navratri Garba playlist collection.",
      price: "₹399",
      badge: "🪔 FESTIVAL SPECIAL",
      image: "/src/assets/images/regenerated_image_1785346812470.png",
      buyLink: "https://superprofile.bio/vp/15gb-navratri-garba-pack-",
      audioSample: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
      isBestSeller: false,
      isFeatured: true,
      isFree: false,
      tracklist: [
        "Dodhiya 2-Taali Traditional Rhythm Pack",
        "3-Taali High Energy Garba Beats",
        "Sanledo Non-Stop Fusion Beats",
        "Mataji Aarti & Raas Garba Finale"
      ]
    },
    {
      id: "prod-010",
      title: "Free Rekordbox Demo Playlist",
      category: "free-downloads",
      categoryLabel: "Free Download",
      description: "Download a free Rekordbox demo playlist and experience the quality before purchasing.",
      price: "FREE",
      badge: "🎁 FREE DOWNLOAD",
      image: "https://images.unsplash.com/photo-1516873240891-4bf014598ab4?auto=format&fit=crop&w=800&h=450&q=80",
      buyLink: "https://superprofile.bio/vp/bollywood-original-hot-cues--your-instant-party-starter--634",
      audioSample: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
      isBestSeller: false,
      isFeatured: true,
      isFree: true,
      tracklist: [
        "Free Demo Track 1 (Rekordbox Cue Mapped)",
        "Free Demo Track 2 (8-Bar Intro Cut)",
        "Free Demo Track 3 (Camelot Key Mapped)"
      ]
    }
  ],

  courses: [
    {
      id: "course-online",
      title: "ONLINE DJ MASTERCLASS (PRO CERTIFIED)",
      subtitle: "Learn Professional DJing From Anywhere In The World",
      badge: "Most Popular",
      level: "Beginner to Advanced",
      duration: "6 Weeks (Live 1-on-1 + HD Video Portal)",
      price: "₹14,999",
      image: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?auto=format&fit=crop&w=800&q=80",
      syllabus: [
        "Beatmatching by ear & phrase matching fundamentals",
        "Rekordbox & Serato DJ Pro full ecosystem setup",
        "Music curation, key matching & library management",
        "Creative EQing, FX transitions & loop slicing",
        "Hot cue preparation & live toneplay techniques",
        "Gig preparation, branding & client booking strategies"
      ]
    },
    {
      id: "course-offline",
      title: "OFFLINE IN-STUDIO ACADEMY PROGRAM",
      subtitle: "Hands-On Practical Training On Pioneer CDJ-3000 & DJM-A9",
      badge: "In-Studio Experience",
      level: "Comprehensive Hands-On",
      duration: "8 Weeks (In-Person Studio Batch)",
      price: "₹29,999",
      image: "https://images.unsplash.com/photo-1571266028243-3716f02d2d2e?auto=format&fit=crop&w=800&q=80",
      syllabus: [
        "Direct physical training on industry standard Pioneer flagship gear",
        "Scratching, turntablism, transformer & chirp scratch drills",
        "Club acoustic control, booth monitors & mixer gain staging",
        "Live audience reading, energy management & peak-hour sets",
        "Studio recording your first official 60-minute promo mix",
        "Lifetime access to DJ Kevin's VIP playlist vault & mentorship"
      ]
    }
  ],

  freeDownloads: [
    {
      id: "dl-001",
      title: "FREE REKORDBOX DEMO PLAYLIST",
      format: "Rekordbox XML / MP3",
      size: "Instant Download",
      trackCount: "Demo Cue Pack",
      desc: "Download a free Rekordbox demo playlist and experience the quality before purchasing.",
      fileUrl: "https://superprofile.bio/vp/bollywood-original-hot-cues--your-instant-party-starter--634"
    },
    {
      id: "dl-002",
      title: "BPM & CAMELOT KEY DJ QUICK CHART",
      format: "PDF Document",
      size: "4.5 MB",
      trackCount: "Quick Reference Guide",
      desc: "High-resolution printable PDF cheat sheet for harmonic mixing, key compatibility, and energy scales.",
      fileUrl: "https://superprofile.bio/vp/bollywood-original-hot-cues--your-instant-party-starter--634"
    },
    {
      id: "dl-003",
      title: "FREE WARM-UP TRANSITION TOOLKIT",
      format: "320kbps MP3s",
      size: "210 MB",
      trackCount: "15 Transition Edits",
      desc: "Smooth tempo shifting tracks (75 BPM to 128 BPM) designed for seamless set warmups.",
      fileUrl: "https://superprofile.bio/vp/bollywood-original-hot-cues--your-instant-party-starter--634"
    },
    {
      id: "dl-004",
      title: "FREE SCRATCH & VOCAL FX DROP ZIP",
      format: "24-bit WAV Audio",
      size: "85 MB",
      trackCount: "100+ Vocal Chops & Drops",
      desc: "High quality DJ drop FX, vinyl scratches, laser risers, and crowd hype vocals.",
      fileUrl: "https://superprofile.bio/vp/bollywood-original-hot-cues--your-instant-party-starter--634"
    }
  ],

  // Current Audio State
  currentAudio: null,
  currentTrackId: null,

  // Init Method
  init() {
    this.setupHeaderScroll();
    this.setupMobileDrawer();
    this.renderProducts();
    this.renderCourses();
    this.renderFreeDownloads();
    this.setupSearchAndFilter();
    this.setupAudioPlayer();
    this.setupContactForms();
    console.log("Mix With DJ Kevin - App Engine Loaded successfully.");
  },

  // Header Scroll Blur
  setupHeaderScroll() {
    const header = document.querySelector(".site-header");
    if (!header) return;
    
    window.addEventListener("scroll", () => {
      if (window.scrollY > 30) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  },

  // Mobile Nav Drawer
  setupMobileDrawer() {
    const toggleBtn = document.getElementById("mobileToggle");
    const closeBtn = document.getElementById("drawerClose");
    const drawer = document.getElementById("mobileDrawer");
    const backdrop = document.getElementById("drawerBackdrop");

    if (!toggleBtn || !drawer) return;

    const openDrawer = () => {
      drawer.classList.add("open");
      if (backdrop) backdrop.classList.add("open");
      document.body.style.overflow = "hidden";
    };

    const closeDrawer = () => {
      drawer.classList.remove("open");
      if (backdrop) backdrop.classList.remove("open");
      document.body.style.overflow = "auto";
    };

    toggleBtn.addEventListener("click", openDrawer);
    if (closeBtn) closeBtn.addEventListener("click", closeDrawer);
    if (backdrop) backdrop.addEventListener("click", closeDrawer);

    // Close on drawer link click
    const drawerLinks = drawer.querySelectorAll("a");
    drawerLinks.forEach(link => link.addEventListener("click", closeDrawer));
  },

  // Render Product Grid
  renderProducts(filteredList = null) {
    const grid = document.getElementById("productGrid");
    if (!grid) return;

    const listToRender = filteredList || this.products;

    if (listToRender.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 4rem 1rem; color: var(--text-secondary);">
          <i class="ri-disc-line" style="font-size: 3rem; color: var(--gold-primary); display: block; margin-bottom: 1rem;"></i>
          <h3>No products found matching your filter</h3>
          <p style="margin-top:0.5rem; font-size:0.95rem;">Try selecting another category or resetting search terms.</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = listToRender.map(product => `
      <div class="product-card" data-category="${product.category}">
        <div class="product-media">
          <img src="${product.image}" alt="${product.title}" loading="lazy" referrerPolicy="no-referrer" />
          <span class="product-tag">${product.categoryLabel}</span>
          ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
        </div>
        <div class="product-body">
          <h3 class="product-title">${product.title}</h3>
          <p class="product-desc">${product.description}</p>
          
          <div style="display: flex; gap: 0.5rem; margin-bottom: 1.25rem;">
            <button class="btn btn-outline-gold btn-sm" style="flex: 1;" onclick="DJApp.playAudioSample('${product.id}', '${product.title.replace(/'/g, "\\'")}', '${product.audioSample}', '${product.image}')">
              <i class="ri-play-fill"></i> Audio Preview
            </button>
            <button class="btn btn-outline-gold btn-sm" onclick="DJApp.openTracklistModal('${product.id}')">
              <i class="ri-list-check-2"></i> Tracklist
            </button>
          </div>

          <div class="product-footer">
            <div class="price-box">
              <span class="price-current">${product.price}</span>
            </div>
            <a href="${product.buyLink}" target="_blank" rel="noopener noreferrer" class="btn btn-gold btn-sm">
              ${product.isFree ? 'Download <i class="ri-download-cloud-line"></i>' : 'Buy Now <i class="ri-arrow-right-line"></i>'}
            </a>
          </div>

          <div class="card-guarantees">
            <span><i class="ri-checkbox-circle-fill"></i> Instant Download</span>
            <span><i class="ri-shield-check-fill"></i> Secure Payment</span>
            <span><i class="ri-infinite-line"></i> Lifetime Access</span>
          </div>
        </div>
      </div>
    `).join("");
  },

  // Render Academy Courses
  renderCourses() {
    const grid = document.getElementById("coursesGrid");
    if (!grid) return;

    grid.innerHTML = this.courses.map(course => `
      <div class="course-card">
        <div class="course-header">
          <span class="course-badge">${course.badge}</span>
          <h3 class="course-title">${course.title}</h3>
          <p class="course-subtitle">${course.subtitle}</p>
        </div>
        <div class="course-body">
          <div style="display: flex; gap: 1rem; color: var(--gold-primary); font-weight: 600; font-size: 0.9rem; margin-bottom: 1.5rem; background: var(--bg-surface); padding: 0.8rem 1rem; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle);">
            <div><i class="ri-time-line"></i> ${course.duration}</div>
            <div>•</div>
            <div><i class="ri-award-line"></i> ${course.level}</div>
          </div>
          
          <div class="course-syllabus">
            <h4 style="font-size: 1rem; color: #FFF; margin-bottom: 1rem; text-transform: uppercase;">Curriculum Highlights:</h4>
            ${course.syllabus.map(item => `
              <div class="syllabus-item">
                <i class="ri-checkbox-circle-fill"></i>
                <span>${item}</span>
              </div>
            `).join("")}
          </div>

          <div style="display: flex; align-items: center; justify-content: space-between; border-top: 1px solid var(--border-subtle); padding-top: 1.5rem; margin-top: 1rem;">
            <div>
              <span style="font-size: 0.8rem; color: var(--text-muted); display: block;">Course Investment</span>
              <span style="font-size: 1.5rem; font-weight: 800; color: var(--gold-primary); font-family: var(--font-heading);">${course.price}</span>
            </div>
            <a href="https://wa.me/${this.whatsappNumber}?text=Hi%20DJ%20Kevin,%20I%20want%20to%20enquire%20about%20the%20${encodeURIComponent(course.title)}" target="_blank" class="btn btn-whatsapp">
              <i class="ri-whatsapp-line" style="font-size: 1.2rem;"></i> WhatsApp Enquiry
            </a>
          </div>
        </div>
      </div>
    `).join("");
  },

  // Render Free Downloads
  renderFreeDownloads() {
    const grid = document.getElementById("freeDownloadsGrid");
    if (!grid) return;

    grid.innerHTML = this.freeDownloads.map(dl => `
      <div class="feature-card" style="display: flex; flex-direction: column; justify-content: space-between;">
        <div>
          <div class="feature-icon">
            <i class="ri-download-cloud-2-line"></i>
          </div>
          <div style="display: flex; gap: 0.5rem; margin-bottom: 0.5rem;">
            <span class="badge-gold" style="margin-bottom:0;">${dl.format}</span>
            <span class="badge-gold" style="margin-bottom:0; border-color: rgba(255,255,255,0.1); color: var(--text-secondary);">${dl.size}</span>
          </div>
          <h3 style="font-size: 1.25rem; color: #FFF; margin-top: 0.75rem; margin-bottom: 0.5rem;">${dl.title}</h3>
          <p style="color: var(--text-secondary); font-size: 0.9rem; line-height: 1.5; margin-bottom: 1.5rem;">${dl.desc}</p>
        </div>
        <button onclick="DJApp.handleDownload('${dl.title}', '${dl.fileUrl}')" class="btn btn-gold btn-full">
          <i class="ri-download-line"></i> Free Instant Download
        </button>
      </div>
    `).join("");
  },

  // Search & Filter Setup
  setupSearchAndFilter() {
    const searchInput = document.getElementById("storeSearch");
    const sortSelect = document.getElementById("storeSort");
    const filterTabs = document.querySelectorAll(".filter-tab");

    let currentCategory = "all";
    let searchQuery = "";

    const applyFilters = () => {
      let result = [...this.products];

      if (currentCategory !== "all") {
        result = result.filter(p => p.category === currentCategory);
      }

      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase();
        result = result.filter(p => 
          p.title.toLowerCase().includes(query) || 
          p.description.toLowerCase().includes(query) ||
          p.categoryLabel.toLowerCase().includes(query)
        );
      }

      if (sortSelect) {
        if (sortSelect.value === "price-low") {
          result.sort((a, b) => parseInt(a.price.replace(/\D/g, '')) - parseInt(b.price.replace(/\D/g, '')));
        } else if (sortSelect.value === "price-high") {
          result.sort((a, b) => parseInt(b.price.replace(/\D/g, '')) - parseInt(a.price.replace(/\D/g, '')));
        } else if (sortSelect.value === "popular") {
          result.sort((a, b) => (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0));
        }
      }

      this.renderProducts(result);
    };

    filterTabs.forEach(tab => {
      tab.addEventListener("click", () => {
        filterTabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
        currentCategory = tab.dataset.category || "all";
        applyFilters();
      });
    });

    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        searchQuery = e.target.value;
        applyFilters();
      });
    }

    if (sortSelect) {
      sortSelect.addEventListener("change", applyFilters);
    }
  },

  // Tracklist Modal
  openTracklistModal(productId) {
    const product = this.products.find(p => p.id === productId);
    if (!product) return;

    const modalHtml = `
      <div class="modal-overlay open" id="tracklistModal">
        <div class="modal-container">
          <div class="modal-header">
            <h3><i class="ri-disc-line gold-gradient-text"></i> ${product.title}</h3>
            <button class="modal-close" onclick="DJApp.closeModal('tracklistModal')">&times;</button>
          </div>
          <div class="modal-body">
            <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">Sample tracklist preview included in this pack:</p>
            <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1.25rem;">
              <ul style="display: flex; flex-direction: column; gap: 0.8rem;">
                ${product.tracklist ? product.tracklist.map((track, i) => `
                  <li style="display: flex; align-items: center; gap: 0.75rem; font-size: 0.9rem; color: #FFF; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 0.6rem;">
                    <span style="color: var(--gold-primary); font-weight: 700; width: 24px;">${i + 1}.</span>
                    <span>${track}</span>
                  </li>
                `).join("") : ''}
              </ul>
            </div>
            <div style="margin-top: 1.75rem; display: flex; justify-content: space-between; align-items: center;">
              <div class="price-box">
                <span class="price-current">${product.price}</span>
              </div>
              <a href="${product.buyLink}" target="_blank" class="btn btn-gold">${product.isFree ? 'Free Download Now' : 'Buy Complete Pack Now'}</a>
            </div>
          </div>
        </div>
      </div>
    `;

    // Remove existing modal if any
    this.closeModal('tracklistModal');
    document.body.insertAdjacentHTML('beforeend', modalHtml);
  },

  closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.remove();
    }
  },

  // Audio Sampler Engine
  setupAudioPlayer() {
    this.audioElement = new Audio();
    
    const playBtn = document.getElementById("playerPlayBtn");
    const closeBtn = document.getElementById("playerCloseBtn");
    const progressBar = document.getElementById("playerProgress");
    const fillBar = document.getElementById("playerFill");
    const currentTimeEl = document.getElementById("playerCurrentTime");
    const durationTimeEl = document.getElementById("playerDuration");

    if (!playBtn) return;

    this.audioElement.addEventListener("timeupdate", () => {
      if (this.audioElement.duration) {
        const pct = (this.audioElement.currentTime / this.audioElement.duration) * 100;
        if (fillBar) fillBar.style.width = `${pct}%`;
        if (currentTimeEl) currentTimeEl.textContent = this.formatTime(this.audioElement.currentTime);
        if (durationTimeEl) durationTimeEl.textContent = this.formatTime(this.audioElement.duration);
      }
    });

    this.audioElement.addEventListener("ended", () => {
      if (playBtn) playBtn.innerHTML = '<i class="ri-play-fill"></i>';
    });

    playBtn.addEventListener("click", () => {
      if (this.audioElement.paused) {
        this.audioElement.play();
        playBtn.innerHTML = '<i class="ri-pause-fill"></i>';
      } else {
        this.audioElement.pause();
        playBtn.innerHTML = '<i class="ri-play-fill"></i>';
      }
    });

    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        this.audioElement.pause();
        const playerBar = document.getElementById("audioPlayerBar");
        if (playerBar) playerBar.classList.remove("active");
      });
    }

    if (progressBar) {
      progressBar.addEventListener("click", (e) => {
        const rect = progressBar.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const width = rect.width;
        const duration = this.audioElement.duration;
        if (duration) {
          this.audioElement.currentTime = (clickX / width) * duration;
        }
      });
    }
  },

  playAudioSample(id, title, url, image) {
    const playerBar = document.getElementById("audioPlayerBar");
    const titleEl = document.getElementById("playerTrackTitle");
    const imageEl = document.getElementById("playerTrackImage");
    const playBtn = document.getElementById("playerPlayBtn");

    if (!playerBar) return;

    if (this.currentTrackId === id && !this.audioElement.paused) {
      this.audioElement.pause();
      if (playBtn) playBtn.innerHTML = '<i class="ri-play-fill"></i>';
      return;
    }

    this.currentTrackId = id;
    this.audioElement.src = url;
    this.audioElement.play();

    if (titleEl) titleEl.textContent = title;
    if (imageEl) imageEl.src = image;
    if (playBtn) playBtn.innerHTML = '<i class="ri-pause-fill"></i>';

    playerBar.classList.add("active");
    this.showToast(`Now Previewing: ${title}`);
  },

  formatTime(secs) {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  },

  // Handle Free Downloads
  handleDownload(title, fileUrl) {
    this.showToast(`Preparing download: ${title}...`);
    setTimeout(() => {
      window.open(fileUrl, "_blank");
    }, 1200);
  },

  // Contact & Form Handlers
  setupContactForms() {
    const contactForm = document.getElementById("contactForm");
    if (!contactForm) return;

    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("formName").value;
      const phone = document.getElementById("formPhone").value;
      const message = document.getElementById("formMessage").value;

      const text = `Hi DJ Kevin,%0A%0AMy Name: ${encodeURIComponent(name)}%0AMy Phone: ${encodeURIComponent(phone)}%0AMessage: ${encodeURIComponent(message)}`;
      const waUrl = `https://wa.me/${this.whatsappNumber}?text=${text}`;

      this.showToast("Redirecting to WhatsApp to send message...");
      setTimeout(() => {
        window.open(waUrl, "_blank");
      }, 1000);
    });
  },

  // Toast Notification System
  showToast(message) {
    let container = document.querySelector(".toast-container");
    if (!container) {
      container = document.createElement("div");
      container.className = "toast-container";
      document.body.appendChild(container);
    }

    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `<i class="ri-notification-badge-line"></i> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateX(50px)";
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }
};

// Auto Initialize on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  DJApp.init();
});
