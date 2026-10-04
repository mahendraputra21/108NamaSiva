# Product Requirements Document (PRD) & Design Brief
## Project: 108 NAMA SHIVA — A Journey Through the Names of the Divine
*A Contemplative Digital Sacred Book & Responsive Reading Sanctuary*
*Document Version: 2.0 (Simplified Scope — Pure Reading Sanctuary)*

---

### 1. Executive Summary & Product Vision
**108 NAMA SHIVA** is a serene, responsive digital manuscript and contemplative reading sanctuary dedicated to the study, reflection, and appreciation of the 108 sacred names (Aṣṭottara Śata Nāmāvalī) of Shiva.

#### Purpose & Core Identity:
The experience has **only five primary purposes**:
1. Explore the 108 Names of Shiva in an elegant manuscript codex.
2. Read the original, canonical meaning preserved from the ancient lontar source (*108 Nama Dewa Siwa*).
3. Understand the expanded philosophical essence of each name.
4. Contemplate through a short reflective passage or contemplative inquiry.
5. Explore the symbolic fine-art painting associated with each sacred attribute.

#### Explicit Negative Constraints (Non-Negotiable Scope Exclusions):
- **NOT an Audio App**: Zero ambient drone, zero Tanpura player, zero chimes, zero audio indicators, zero sound controls.
- **NOT a Meditation / Chanting Tool**: Zero reflection timers, zero Japa counters, zero bead progression tracking, zero recitation pacing tools.
- **NOT a Game or Social Platform**: Zero points, zero badges, zero streaks, zero progress rewards, zero user accounts, zero feeds or commenting.
- **NOT a SaaS Dashboard or Database**: No dense tables, cards, admin grids, or metrics.
- **The Core Axiom**: *"The interface must disappear behind the reading experience."*

---

### 2. User Mindsets & Target Audiences
1. **The Daily Contemplative Reader**: Opens the digital book during quiet moments (morning dawn, evening pause) on a smartphone to read a single folio slowly, absorb the reflective words, and contemplate in stillness.
2. **The Cultural, Literary & Philosophical Inquirer**: Compares authentic Balinese/Javanese palm-leaf lontar translations with classical Sanskrit Devanagari etymology and English philosophical commentary.
3. **The Gallery & Art Connoisseur**: Appreciates the symbolic, museum-grade fine art paintings paired with each attribute without visual distraction.

---

### 3. Canonical Content Model
Strict adherence to the source document (*108 Nama Dewa Siwa*). Every sacred folio follows an inviolable four-part hierarchy:

```
[ FOLIO 01 / 108 ]
OM ISTHRAYA NAMAHA
The Eternal · Yang Kekal
ॐ स्थिराय नमः

[ SYMBOLIC FINE ARTWORK ]

1. MAKNA SUMBER NASKAH (Source Meaning)
   Verbatim meaning derived directly from the canonical palm-leaf lontar text.
   (e.g., ISTHRAYA means "Yang Kekal" — divine permanence untouched by the tides of time).

2. HAKIKAT MENDALAM (Expanded Essence)
   A lucid, profound exposition connecting Sanskrit roots with universal consciousness,
   inner stillness, and non-dual philosophy for the modern reader.

3. RUANG RENUNGAN / BHAVANA (Contemplation Chamber)
   A concise, poetic inquiry or meditative passage designed for inner reflection.
   ("When everything around you changes rapidly, what part of you remains undisturbed?")
```

---

### 4. Information Architecture & Key Screens

#### 4.1. Landing / Sacred Opening (`Mobile Sacred Opening`)
- **Sacred Emblem**: Delicate, balanced gold hairline Om (Aum) calligraphy mark.
- **Typographic Header**: Classical editorial serif with bilingual subtitle (*"A Journey Through the Names of the Divine • Perjalanan Menyelami 108 Sifat Suci Sang Hyang Shiva"*).
- **Invitational Prose**: Subtle passage framing the book as an encounter with inner quietude.
- **Dual Pathways**:
  - Primary CTA: *Mulai Perjalanan / Begin the Journey* (opens Folio 01: Isthraya directly).
  - Secondary CTA: *Jelajahi 108 Nama / Explore All 108* (opens the Manuscript Index).
- **Foundational Pillars (Literary & Contemplative)**:
  - *Naskah Kuno Lontar* (Preserving authentic ancient lontar lineage & IAST transliteration).
  - *Tiga Dimensi Bacaan* (Three reading layers: Source, Essence, Contemplation).
  - *Akses Hening* (Distraction-free digital reading space).

#### 4.2. Name Detail / The Reading Sanctuary (`01. Om Isthraya Namaha`)
- **Mobile-First Layout**:
  - Uncompromised single-column vertical reading cascade for natural one-handed reading.
  - Header: Unobtrusive back/index link and persistent `[ ID | EN ]` toggle.
  - Folio Inscription, Devanagari pill, and centered fine-art canvas.
  - Generous typographic measure for *Makna Sumber*, *Hakikat Mendalam*, and *Ruang Renungan*.
  - Touch-friendly bottom bar: `← Previous (108. Haraya)`, `Folio Index Jump Drawer`, `Next (02. Prabhve) →`.
- **Desktop Adaptation**:
  - Balanced two-column editorial book spread:
    - *Left*: Sticky symbolic artwork, Devanagari calligraphy, chapter metadata.
    - *Right*: Comfortable reading column (60–75 characters per line) with the three content tiers.

#### 4.3. Explore / Manuscript Codex Index (`Mobile Manuscript Index`)
- **Editorial Structure**: Complete catalog of 108 names listed by folio number, Sanskrit Romanization, Devanagari script, and concise bilingual meaning.
- **Instant Search & Filter**:
  - Search field by name transliteration or folio number (e.g., "02", "Prabhve").
  - Thematic essence pills (*Keheningan / Stillness*, *Cahaya & Kuasa / Sovereignty*, *Kasih Karunia / Grace*, *Peleburan / Dissolution*, *Semesta / Universal Form*).
  - No database chrome or sorting grids; styled as an illuminated table of contents.

---

### 5. Global Real-Time Language Switching (ID ⇄ EN)
A core architectural requirement across all screens:
- **Persistent Header Control**: Subtle `[ ID | EN ]` toggle pill in the header.
- **Real-Time Client-Side Swap**:
  - Zero page reload.
  - Zero navigation away from current chapter.
  - Zero loss of scroll position or reading progression.
  - Local persistence via `localStorage` so returning readers keep their preferred language.
- **Full Content Localization**: Translates Name subtitles, Source Meanings, Expanded Essence, Contemplative inquiries, UI labels, and Codex entries seamlessly while maintaining identical layout proportions.

---

### 6. Design System & Visual Aesthetics ("Sacred Manuscript")
- **Palette**:
  - *Surface / Parchment*: `#FBF9F4` (Warm ivory / handmade paper).
  - *Substrate / Card Low*: `#F5F3EE` (Muted soft sand).
  - *Ink Primary*: `#13151D` (Deep carbon soot ink).
  - *Ink Secondary*: `#5E5D59` (Slate charcoal for commentaries and metadata).
  - *Aged Gold Leaf Accent*: `#C5A869` / `#9E7E38` (Restrained gold for emblems and accents).
  - *Border Hairline*: `#E6E2D8` (Whisper-thin bookbinding rules).
- **Typography**:
  - Headings & Names: *EB Garamond* / *Cinzel* (classical, letterspaced, dignified).
  - Body & Commentaries: *EB Garamond* (16–18px, optical line height 1.75 for maximum legibility).
  - Controls & Numbers: Refined modern sans-serif (*Inter* / *Plus Jakarta Sans*, uppercase tracking).
- **Art Direction**:
  - Symbolic museum-grade fine art painting aesthetic (watercolor washes, midnight celestial skies, warm antique gold dust).
  - Never literal or caricatured; archetypal forms (silent mountains, glowing dawn orbs, calm water ripples, infinite starlight).

---

### 7. Technical, PWA & Accessibility Specifications
- **Architecture**: Zero-backend static web application / Progressive Web App (PWA).
- **Offline Reliability**: Service worker caches all typography, JSON manuscript datasets, and fine art paintings for full offline reading anywhere.
- **Privacy & Simplicity**: Zero cookies, zero tracking scripts, zero account requirements.
- **Accessibility (a11y)**:
  - Minimum 4.5:1 text-to-background contrast ratio.
  - Minimum 48px × 48px touch targets for all mobile controls.
  - High semantic fidelity (`<article>`, `<header>`, `<nav>`) and screen-reader `aria-label` support for Devanagari characters.
