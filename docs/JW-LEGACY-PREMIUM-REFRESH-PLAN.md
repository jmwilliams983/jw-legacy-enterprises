# JW Legacy Enterprises — Premium Website Refresh Plan

**Status:** Design and implementation plan only. Not yet built, approved for deployment, or published.  
**Site:** https://jw-legacy-enterprises.vercel.app  
**Repository:** https://github.com/jmwilliams983/jw-legacy-enterprises  
**Audience:** Prospective collaborators, creative partners, entrepreneurs, and visitors discovering founder-led projects.  
**Brand position:** An emerging, founder-led multi-service business; do not imply services, clients, licenses, revenues, or awards that have not been confirmed.

## 1. Creative direction

**North star:** "An ambitious creative enterprise with an established visual identity and a credible, honest growth story."

Keep the current midnight-navy, warm-gold, and cream palette. Improve visual rhythm, sophistication, specificity, perceived quality and purposeful graphics rather than adding clutter. The homepage should feel like a real business portfolio—not a bare text page or a generic AI-generated template.

**Visual principles**
- Premium and approachable rather than flashy.
- Clear hierarchy, bold editorial headlines, short readable supporting copy.
- Consistent design tokens and reusable components across all five pages.
- Alternating deep navy / warm off-white sections, thin brass borders, restrained background texture, polished typography.
- Strong, intentional project visuals—not generic stock photos purporting to be this business or its team.
- Subtle interactions that do not distract or reduce performance.

### Design tokens (adapt existing values; do not unnecessarily change brand colors)

| Role | Value |
|---|---|
| Midnight base | `#0B1218` |
| Deep navy | `#0F1C24` |
| Slate panel | `#192C35` |
| Signature gold | `#E3B975` |
| Gold highlight | `#F4D59D` |
| Warm cream | `#FAF7F0` |
| Ink on cream | `#182930` |
| Muted dark text | `#52616A` |

Use existing **Manrope** for headlines and **DM Sans** for body where available; retain system-font fallback. Base body 16–18px; generally 1.5–1.75 line-height for body, tighter headlines, comfortably sized mobile labels. Build a small set of spacing tokens (8 / 12 / 16 / 24 / 32 / 48 / 64px), card radii 16–22px, and soft elevation used sparingly.

## 2. Homepage: flagship experience (`index.html`)

### Header
- Keep the recognizable JW monogram and the full company name; avoid the appearance of an accidental "JW JW..." text duplication.
- Sticky/translucent navy header, subtle bottom border, gold current-page accent.
- Mobile hamburger, keyboard operability and 44px minimum tap target.
- One visible primary business-contact action, without overwhelming navigation.

### Hero — the strongest visual investment
- Retain the already published headline **"Build what’s next. Leave a legacy."** unless the user requests a copy change.
- Keep clear founder-led positioning: growing business for creative work, digital projects and future ventures.
- Two buttons: **Explore our focus areas** and **Start a conversation**.
- Upgrade existing JW monogram artwork into an intentional brand graphic with layered rings/lines, controlled gold highlights and balanced negative space. Optionally use a photo/graphic only if approved and properly licensed.
- On Samsung-sized screens, reduce unnecessary height: let the headline and one key action appear promptly, with no giant empty spacer or oversized artwork that pushes the message too far down.
- No autoplay video or large hero payload.

### Service / focus cards
- Keep three development categories: **Content & Media**, **Music & Entertainment**, **New Business Ventures**.
- Add restrained visual symbols, consistent numbered eyebrows, better spacing and a subtle hover/focus treatment.
- Include explicit status "In development" / "Future-focused"; do not advertise unconfirmed services as already bookable.
- Make cards equal height on desktop, naturally stacked on mobile.

### Why JW Legacy?
- Rework the existing "The work today. The impact tomorrow." values section into a compact, distinct brand story.
- Four actual guiding principles: **Ownership, Agility, Creativity, Legacy**.
- Emphasize credible process and purpose, not fake numbers or guarantees.
- Use abstract visual dividers or a simple founder/brand motif to distinguish this section from the service cards.

### Projects in Motion
- Keep the existing four cards:
  - **Main’O Color Rush** — Android closed test (invite required).
  - **Vibinook** — available social web app at https://vibinook.floot.app/
  - **Real Talk with Main’O** — separate founder writing platform at https://maino-myjourney.42web.io/real-talk
  - **Original Music & Media** — concept/development stage; no fabricated releases.
- Improve with a consistent visual treatment at the top of each card: approved app icons/screenshots where available, otherwise brand-colored abstract marks or simple CSS graphics.
- Make status labels visually distinct from CTAs; avoid made-up download counts, user testimonials or "available on Play Store" claims.
- On desktop use a deliberate 2x2 grid, on phones one full-width column. Preserve current verified links.

### Closing invitation
- Replace a generic-looking contact banner with a clear invitation: **"Have an idea worth building?"** / **"Start a conversation with JW Legacy Enterprises."**
- Supporting copy should honestly say service offerings are developing and collaboration inquiries are welcome.
- Send visitors to `contact.html`; do not simulate a working message form.

## 3. Supporting pages

**About (`about.html`):** Strong founder-led introduction, mission and values, a clean process/vision timeline. Distinguish real biography from future ambitions; optionally add an approved founder photo later.

**Services (`services.html`):** Clearly describe the three areas, explain what is conceptual vs currently available, show a 3-step approach (Explore → Develop → Refine), keep honest FAQ and contact links.

**Projects (`projects.html`):** Use the same four project identities, status terms and destinations as the homepage. Larger visuals where approved; one consistent portfolio system; no redundant company-self project card.

**Contact (`contact.html`):** Prominent business email `jwlegacyenterprises@gmail.com`, easy tap-to-email and copy controls, clear inquiry examples, reasonable response wording, privacy-conscious approach. The static site currently sends no form submissions; keep it that way unless a real backend is configured and separately approved.

**Footer:** Consistent business name, useful page links, working email link, accessible contrast, current-year copyright. Keep personal site linked but clearly identified as founder's *separate* site.

## 4. Motion and responsive behavior

- Motion: 160–250ms subtle hover/focus/entrance; avoid scroll-driven motion until basic UI is tested. Respect `prefers-reduced-motion`.
- Mobile-first: test about 320, 360, 390, 430, 768, 1024 and desktop widths.
- No horizontal page overflow, clipped cards, side-to-side scrolling or overlapping sticky header.
- Buttons/tabs keyboard accessible, high contrast, no hidden focus indicator.
- Fast loading: compress real image assets, use correct dimensions and lazy loading below fold, avoid unnecessary JS and heavy libraries.
- Maintain original `index.html`, `about.html`, `services.html`, `projects.html`, `contact.html`, `styles.css`, `script.js` static architecture; no framework migration for cosmetic improvements.

## 5. Build phases

### Phase 1 — Foundation (first approved PR)
- [ ] Harmonize `styles.css`: spacing, type scale, panel/card tokens, hover/focus states.
- [ ] Refresh hero, monogram treatment, CTA buttons and section flow in `index.html`.
- [ ] Update three service cards and four project cards for polished hierarchy without changing truthful statuses or links.
- [ ] Verify mobile layout and menu at real Android viewport sizes.
- [ ] Preserve all five page links, business email, content, accessibility semantics.

### Phase 2 — Rich visuals and consistency (separate PR)
- [ ] Obtain approved/owned Color Rush and Vibinook icons/screenshots.
- [ ] Add purposeful graphics to card media areas with responsive aspect ratios.
- [ ] Unify page heroes, cards, and contact CTA across About, Services, Projects, Contact.
- [ ] Refine footer and responsive spacing based on actual phone screenshots.
- [ ] Optional restrained animation after performance checks.

### Phase 3 — Launch and business credibility (only with confirmed facts)
- [ ] Review business service availability, legal details and official company name with owner.
- [ ] Add authentic founder details, projects, proof of work as supplied; no fabricated reviews, partners, metrics or client logos.
- [ ] Verify page titles, descriptions, social cards and accessibility/SEO basics.
- [ ] Evaluate a dedicated business domain separately; do not modify `mainowilliams.com` or personal Bludit hosting.

## 6. Review and release process

1. Review the current `main` branch and existing screenshots. Confirm source content and assets.
2. Work on a dedicated **review branch** in `jmwilliams983/jw-legacy-enterprises`; create an auditable draft PR.
3. Build and inspect a **Vercel preview** before merging. Check narrow mobile, desktop and contact links.
4. Obtain explicit approval to publish. Merge the PR into `main` only after approval.
5. Check Vercel production deployment is **READY** at https://jw-legacy-enterprises.vercel.app and has the matching commit SHA.
6. Check the live pages on Samsung mobile Chrome. Keep personal site and domain untouched.

## 7. Definition of done

- [ ] Clear premium navy-and-gold visual language, not merely bigger shadows.
- [ ] Attractive, intentional hero with text readable immediately on mobile.
- [ ] Three honest service focus areas remain correct.
- [ ] Four founder-project cards have accurate statuses and working URLs.
- [ ] All five pages feel like one cohesive business site.
- [ ] Contact email works; no broken form or fictional company claims.
- [ ] Real phone screenshot review: no overflow, clipping, cramped text or broken menu.
- [ ] No measurable regression in page weight from unnecessary animations or assets.
- [ ] User signs off on preview and production is verified after merge.

**Important:** This file is a plan only. Nothing in this document by itself implements changes, connects a domain or establishes currently offered services.
