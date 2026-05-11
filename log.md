# KPPL Site Migration — Log

Migration of content + assets from the old site (`KamalaPrintingPress-master/` + live site https://kamalaprintingpress.com/) into the new design at `kppl-main/`. This file records the plan, decisions, and what changed in each session, so the work is auditable and pickup-able later.

---

## Phase-wise plan

### Phase 0 — Foundation cleanup (DONE in earlier session)
- Replaced template `<title>`, favicon, navbar, footer across all 15 non-index pages with KPP-branded versions.
- Rewrote all 6 service-detail pages (offset / digital / design / lamination / spotuv / laser) with KPP copy + sidebar.
- Cleaned services.html (6 real services, dropped USD pricing plans + "John Doe" designer grid).
- Trimmed Lorem-ipsum filler cards from index.html Media Coverage section.
- Set `form-process.php` destination email to `kamalaprintingpress@gmail.com`.

### Phase 1 — Research (DONE this session)
- Read all 9 old machine pages — captured technical specs, images, and which service each maps to.
- Re-fetched live site `about.html` and `contact.html` for current copy.
- Discovered Emo Creation (sister firm, founded by Sajal Singh Raghuvanshi in 2017, emocreation.in) on old site.
- Discovered the contact page had a Google Maps embed (lat 25.30478, lng 82.95595).

### Phase 2 — About page enrichment (THIS SESSION)
Add to `about.html` everything that today only exists on the old site:
- Founder name **Shri Anjani Kumar Singh**, founding year **1990** stated explicitly.
- Full company-profile paragraph (paraphrased but with the year and history).
- Products list (Brochure, Catalogue, Poster, Leaflet, Folders, Wobblers, Newsletter, Menu Card, Greeting Card, Calendar, Corporate Stationery, Utility Boxes & Envelope).
- "Our Infrastructure" section with three tables: Pre-Press / Press / Post-Press capabilities — taken straight from old about.html.
- "Sister Firm" mention of Emo Creation with link to emocreation.in.

### Phase 3 — Service-detail enrichment (THIS SESSION)
Each of the 6 service-detail pages gets a "Machinery on this service" block with the relevant equipment + a short spec list, sourced from the 9 old machine pages:
- **offsetprinting.html** ← Heidelberg Speedmaster SM 74 (4-colour) + SM 74 (5-colour + UV + Coater)
- **digitalprinting.html** ← cross-link to Emo Creation (sister firm specialises in digital)
- **printingdesigning.html** ← Technova VioStar plates, CTP, Heidelberg PPI, HP Proliant workstations
- **lamination.html** ← no specific old machine page (BOPP/PVC/Thermal mentioned in old post-press list)
- **spotuv.html** ← Autoprint Fine Coat 80 (UV & Aqueous Coater)
- **lasercutting.html** ← Maxima EXB 35 die-cutter + Polar N 92 paper cutter + Boxtech carton folder/gluer (positioned as "precision cutting & finishing" since KPPL's equipment is die-cutting, not laser — see Decision D-2)

### Phase 4 — Wire up real KPPL photos (THIS SESSION)
The 40+ real KPP photos at `assets/img/new/` are unused. Replace template stock images with real ones:
- Home banner carousel → real machine photos (DSC_9343, DSC_9348, DSC_9388, DSC_9396, IMG_20160705_152842).
- About page hero → a real facility photo.
- Service-detail page sliders (`service/dtls1-3.jpg`) → per-service real photos (mapping in Decision D-3).
- Media Coverage section → restore the 3 real coverage logos (`news-img-1.jpg`, `news-img-2.png`, `news-img-3.png`).

### Phase 5 — YouTube videos + Google Maps (THIS SESSION)
- Embed the 2 YouTube videos from old index (IDs `IiYUWbbrABA` and `R12aS6Slgt0`) on the new home page in a new "See the press in action" section.
- Add the Google Maps embed (from old `contact.html`) into the new `contact.html`.

### Phase 6 — Verification (THIS SESSION)
- Grep for any remaining Pixis/Lorem/template content.
- Verify every image src points to an existing file.
- Make sure the nav-bar "active" highlighting is correct per page.
- Update this log with completion notes.

---

## Decisions

**D-1 — Keep blog / faq / product / designer template pages in place but leave them out of the nav.**
- Why: The user's nav has Product/Blog as `#` (deliberate — pages not ready). Until the user decides their fate, no need to either fully build them out or delete them. Foundation cleanup applied so they're at least branded correctly.
- Revisit when: user asks about those four pages by name.

**D-2 — Keep the "Laser Cutting" service category, but populate it with the precision-cutting machinery KPPL actually has (Maxima EXB 35 die-cutter, Polar N 92 paper cutter, Boxtech carton folder/gluer).**
- Why: New design committed to 6 service categories including "Laser Cutting". The old site doesn't show a laser cutter, only mechanical die-cutting and guillotine cutting. Rather than silently invent equipment, the page describes the precision-cutting capability KPPL does have. Page heading stays "Laser Cutting" to match nav, but body acknowledges die / guillotine cutting too.
- Revisit when: user confirms whether KPPL has acquired a laser cutter (page can then be updated to describe it), or whether to rename the service.

**D-3 — Photo-to-service mapping for service-detail page sliders.**
- offsetprinting.html → DSC_9343, DSC_9348, DSC_9388 (Heidelberg SM-74 4c + 5c)
- digitalprinting.html → Feature-1-1.jpg + 2 others (closest match in old site, since no dedicated digital-press photos exist in the old asset set)
- printingdesigning.html → 100_1670, 100_1669, 100_1668 (Technova VioStar / CTP)
- lamination.html → IMG_20160705_152802, 152812, 152830 (Autoprint coater photos — coating is closely related to lamination)
- spotuv.html → IMG_20160705_152842, 152821, 152830 (Autoprint Fine Coat)
- lasercutting.html → 100_1652, 100_1653, 100_1664 (Maxima EXB / Boxtech)
- Why: Best fit between available photographs and each service. The old site has no laser, digital, or pure lamination photos — using closest-related machine photos rather than template stock.

**D-4 — Drop the dedicated "Screen Printing" service.**
- Why: Old site had a Grafica Nano-Print screen-printing page, but the new 6-service nav has no slot for it. Adding a 7th service mid-migration changes the design. Mention the Grafica Nano-Print machine in the about-page Infrastructure section so the capability is documented, but don't surface it as a service category.
- Revisit when: user asks to add screen printing as a service.

**D-5 — Emo Creation (sister firm).**
- Where to place it: a single short "Sister firm" callout on the about page, linking to `https://www.emocreation.in/`. Also briefly link from the digital-printing service page since Emo Creation specialises in digital.
- Why: It's relationship info, not a primary KPPL service. Belongs on about, not its own page.

**D-6 — YouTube videos placement.**
- Embed both videos as a "See the press in action" section on the home page, between the existing About area and Testimonials.
- Why: Visual proof points work hardest where conversion happens (home page). Keeping both because they show different machines/views.

**D-7 — Google Maps embed kept verbatim.**
- Reuse the same iframe `src` from old contact.html on the new contact page. The maps URL has the place ID baked in so the pin lands correctly.
- Why: No reason to regenerate it; the old one already targets "Kamala Press Pvt ltd | Best Offset Printing & Digital Printing in Varanasi".

---

## Change log (newest first)

### Session 8 — full machinery page added (DONE)

User pointed out that the 8 detailed machine pages from the live site (autoprint-fine-coat.html, boxtech.html, grafica-nanoprinting-screen-printing.html, heidelberg-speedmaster.html, heidelberg-speedmaster-sm74.html, maxima-exa-35.html, polar-n-92-paper-cutting.html, technova-viostar.html) — with their full descriptive copy, complete spec tables and image galleries — weren't in the new site. Only summary cards existed.

- Created [machinery.html](kppl-main/machinery.html) — a single consolidated page with all 8 machines, each rendered as its own section with anchor (`#heidelberg-sm74-4c`, `#heidelberg-sm74-5c`, `#technova-viostar`, `#autoprint-fine-coat`, `#polar-n-92`, `#maxima-exb-35`, `#boxtech`, `#grafica-nano-print`). Each section has: full descriptive copy carried over from the live site verbatim (with light British-English copyediting), the complete technical-spec table(s), and a 3-or-4-image gallery using the real photos at `assets/img/new/`. A two-column TOC at the top jumps to any machine.
- The page has its own page-scoped `<style>` block defining `.machine-section`, `.machinery-toc`, `.machine-gallery` etc. — kept inline rather than added to `style.css` because it's only used by this one page.
- **Wired into the site:**
  - Footer Quick Links across all 15 other HTML pages now includes "Machinery" (added between "Service" and "About Us").
  - About page Infrastructure section now ends with a "See Full Machine Specs &amp; Galleries" CTA button linking to `machinery.html`.
  - Each per-machine card on the relevant service-detail pages now has a "View full specs & gallery »" link to the matching anchor on machinery.html:
    - offsetprinting.html → `#heidelberg-sm74-4c` and `#heidelberg-sm74-5c`
    - printingdesigning.html → `#technova-viostar`
    - spotuv.html → `#autoprint-fine-coat`
    - lasercutting.html → `#maxima-exb-35`, `#polar-n-92`, `#boxtech`

## Decisions (additional)

**D-21 — One consolidated machinery page, not 8 separate machine pages.**
- Why: The old site had 8 separate machine pages plus a dropdown nav. The new design committed to 6 service categories and a flat 6-item top nav — 8 more machine pages would bloat the IA without adding value. A single `/machinery.html` with deep-link anchors gives users the same content one click away, lets us link contextually from service pages, and keeps the nav clean.
- How to apply: Future machine additions/removals are one-page edits, not one-page-per-machine. Link new machines from the relevant service-detail page's machinery card.

## Answer to "anything still empty?"

After Session 8 the only gaps that remain (in priority order):

1. **2 Media Coverage articles missing on the home page** (Print & Publishing and the older PrintWeek piece) link to `#` because I never confirmed their canonical URLs — wait, scratch that, those got fixed in Session 3.
2. **No client logos / customer list** — every reputable printer has one. None on the new site. Future enhancement when KPPL provides logos.
3. **No additional real testimonials** — only Mukesh Khatri's. The 2 fake "John Doe / Evanaa" testimonials I removed in Session 3 left a single-card slider on the home page.
4. **No Privacy Policy / Terms pages** — not in current scope but standard for production sites.
5. **Laser cutter spec is still generic** — the model name and detailed specs in `lasercutting.html` and on the machinery page are not filled in for the laser cutter specifically (no model number was supplied). Currently described as "Laser Cutter" with capability bullets only. Open task from Session 4 (D-11).
6. **FormSubmit one-time activation** — first form submission triggers a confirmation email to `kamalaprintingpress@gmail.com` that someone must click before subsequent submissions deliver.

### Session 7 — home banner reverted to template look (DONE)

User preferred the original template's banner styling (hero + 3-4 stylised thumbnails of print samples / colour rollers / Pantone swatches) over the real-KPP-machine carousel I'd swapped in during Session 4. One of the real-photo thumbs also wasn't rendering (cropped/off-grid) due to my Session-6 CSS override forcing `height: 120px`.

- Reverted `index.html` banner-img + banner-into-slider to the template paths: hero `assets/img/home3/new5.jpg`, four carousel items `assets/img/home3/mainsmall{5,2,3,4}.jpg`.
- Dropped the `.banner-into-slider .banner-item img { height: 120px; object-fit: cover; }` rule from `style.css`. The template's native CSS at `style.css:888-896` (positioning, rounded corners, layout) now controls the banner thumbs.
- The service-detail slider rule and media-coverage card rule from Session 6 are kept — those are still needed.

**Decision D-20 — Template hero on home, real photos elsewhere.**
- Why: User said the second screenshot's look (template hero + curated thumbs) was preferred. The home page's hero is a marketing slot where the polished template visuals carry more weight than authentic-but-busy machine photos. Real KPP photos still appear throughout the site — about-page hero, every inner banner background, all 5 of 6 service-detail sliders, and all 3 machine photos in the about-page video section.
- How to apply: To swap the home hero back to real photos later, change the four `assets/img/home3/mainsmall*.jpg` paths in `index.html` lines 141-154.

### Session 6 — nav fixes, breadcrumbs, image sizing, GitHub-Pages-friendly form (DONE)

User reported several issues from screenshots and asked for a static-host-friendly form. All fixed:

1. **Nav active state was wrong on every page** — every non-index page had `class="nav-link active"` on the About link instead of the page's actual section (so on the Services page, the About tab was highlighted). Root cause: a bug in the original Session-1 migration script that I never noticed. Fully rebuilt the nav block across all 14 non-index pages with the correct `active` per page (about → About, contact → Contact, all 6 service pages → Services, blog/blog-details → Blog, product → Product, services → Services). About / Faq / Designer / 404 → none.
2. **Product and Blog nav links** were placeholder `#`. Now point to `product.html` and `blog.html` across all 15 pages (including index, which got a targeted Product/Blog-only swap so the existing in-page anchor scrolling on Home/About/Services kept working).
3. **Service-detail breadcrumbs** showed only `Home > [Service]`. Now `Home > Services > [Service]` on all 6 service pages so the IA is consistent regardless of how users land on the page.
4. **Image sizing** standardised by appending a `/* === KPPL overrides (Session 6) === */` block to [style.css](kppl-main/assets/css/style.css):
   - Home banner carousel: every `.banner-into-slider .banner-item img` is `height: 120px; object-fit: cover`.
   - Service-detail main slider: every `.service-dtls-slider .service-dtls-item img` is `height: 480px; object-fit: cover` so all photos fit the same 16:9-ish slot — fixes the lamination page where some slides "didn't show up" because their natural height was very different from others.
   - Media coverage cards (`.blog-area-two` and `.blog-area`): logo area is `height: 220px` with white background and `object-fit: contain` + `padding: 24px 28px` so logos like PrintWeek, Heidelberg and Print & Publishing all render at consistent visual weight without cropping.
5. **Contact form: PHP → FormSubmit (GitHub Pages compatible).**
   - [contact.html](kppl-main/contact.html) form now has `action="https://formsubmit.co/kamalaprintingpress@gmail.com" method="POST"` plus three hidden inputs (`_subject`, `_template=table`, `_captcha=false`).
   - [contact-form-script.js](kppl-main/assets/js/contact-form-script.js) rewritten to POST to FormSubmit's AJAX endpoint `https://formsubmit.co/ajax/kamalaprintingpress@gmail.com` so the inline "Message sent" UX is preserved (no page reload).
   - The old `assets/php/form-process.php` is now dead code but left in place — harmless on GitHub Pages, easy to revive if the user ever moves to PHP hosting.
   - **First-time activation**: FormSubmit will email `kamalaprintingpress@gmail.com` on the very first submission with a confirmation link. Someone has to click it once before subsequent submissions deliver.

## Decisions (additional)

**D-17 — Always include Services in service-detail breadcrumbs.**
- Why: Service pages are conceptually under Services in the IA regardless of how a user got there. Doing dynamic referrer-based breadcrumbs would be fragile (fails on bookmarks, new tabs, direct URLs). Static `Home > Services > [Service]` is consistent and unambiguous.
- How to apply: All 6 service-detail pages have the three-step breadcrumb.

**D-18 — Form on FormSubmit (free, no signup, no PHP).**
- Why: Site is heading to a static host (the old site has a `CNAME` suggesting GitHub Pages). FormSubmit needs no signup, no API key, and just routes form submissions to the configured email after a one-time activation. Compared to Formspree (50/mo free with signup) and Web3Forms (requires API key), FormSubmit is the lowest-friction option for the user.
- How to apply: To change the destination email, update the URL in both `contact.html` (`action="..."`) and `contact-form-script.js` (`url: "..."`).

**D-19 — Image sizing via global CSS overrides, not per-page inline styles.**
- Why: The banner-carousel and service-dtls-slider issues affect many pages; a CSS override is one rule, vs. dozens of inline styles. Easier to retune later.
- How to apply: To resize, edit the `KPPL overrides (Session 6)` block at the bottom of `assets/css/style.css`.

### Session 5 — banner backgrounds, service titles, Emo Creation removed (DONE)

User shared two screenshots of service-detail pages showing "1920 x 400" and "850 x 500" placeholder boxes, plus asked to remove Emo Creation from everywhere. Three root causes identified and fixed:

1. **Inner-banner placeholders.** The `inner-bg1` … `inner-bg12` CSS classes point to `assets/img/inner-banner/{n}.jpg` — and those files are the template's gray "1920 x 400" placeholders (never replaced with real photos). The CSS `.inner-banner` rule already sets `background-size: cover; background-position: center center;`, so the simplest fix is an inline `style="background-image: url(...)"` on each `<div class="inner-banner inner-bgN">` to override. Done across all 14 pages with a real KPPL photo per page (mapping in log: about/offset → DSC_9343, services/blog → DSC_9388, digital → Feature-1-1, design/faq → 100_1670, lamination → IMG_20160705_152830, spot UV → IMG_20160705_152842, laser → 100_1652, blog-details/contact → DSC_9396, product → Feature-2, designer → DSC_9343).
2. **"Service Details" placeholder titles.** All 6 service-detail pages had `<h3>Service Details</h3>` and `<li>Service Details</li>` in the inner-banner section instead of the actual service name. Replaced with the correct heading per page (Offset Printing, Digital Printing, Printing & Designing, Lamination, Spot UV & Foiling, Laser Cutting).
3. **digitalprinting.html slider.** Was still pointing at template placeholders `service/dtls1-3.jpg` — the "850 x 500" gray boxes from the second screenshot. Replaced with `new/Feature-1-1.jpg`, `Feature-2.jpg`, `Feature-3-1.jpg` (the old site's home-page feature photos that were originally captioned as Digital / Offset / Design — closest stand-in we have for the Ricoh/Canon presses since no dedicated photos exist).
4. **Emo Creation removed everywhere.** Three places: the dedicated "Sister Firm Area" section on `about.html` (entire `<section>` removed), the small "Sister firm — Emo Creation" callout card at the bottom of digitalprinting.html's Machinery Area, and the "we also route through our sister firm Emo Creation" paragraph in both digitalprinting.html body and blog-details.html. Grep for `Emo Creation` / `emocreation` / `Sajal Singh` / `Raghuvanshi` / `sister firm` (case-insensitive) across all 15 HTML pages now returns 0 matches.

## Decisions (additional)

**D-15 — Banner backgrounds via inline style override, not by replacing the placeholder files.**
- Why: Two reasons. (a) Cleaner provenance — each page's hero photo is visible right on the inner-banner div, so future edits don't need a separate CSS audit. (b) The `inner-bg*` placeholder JPEGs at `assets/img/inner-banner/` might still be used somewhere I haven't audited; leaving them in place is safer than overwriting.
- How to apply: To swap a banner photo, change the inline `style="background-image: url(...)"` on the `inner-banner` div in that page's HTML. The CSS class stays the same.

**D-16 — Emo Creation deliberately removed from the site.**
- Why: User asked to remove "from everywhere." Whatever the relationship is now between KPPL and Emo Creation, it shouldn't appear on the KPPL site without explicit re-add.
- How to apply: Do not reintroduce. If user later wants to re-add a sister-firm callout, the previous text is recoverable from git history / earlier log entries.

### Session 4 — orphan pages built out, laser cutter restored (DONE)

User confirmed: KPPL does have a laser cutter; the "Get Inspired" 3rd-outlet was dropped (already done in Session 3); orphaned blog / blog-details / faq / product / designer pages should all be kept and updated for KPPL.

- **lasercutting.html — machinery section restructured.** Promoted a primary "Laser Cutter" card to the top with a `#fff7f2` callout background and an orange left border (matches the site accent `#ff743c`). Reframed the Maxima EXB 35 / Polar N 92 / Boxtech cards underneath as "Supporting Cutting & Finishing Equipment" — they're still real and relevant, but no longer mis-presented as laser equipment. The laser card is text-only because no specific model/specs were supplied; a `<!-- TODO: laser model + specs -->` would be a good place for the user to fill in detail.
- **blog.html — rebuilt as "News & Updates".** Three sections: 3 short "From Kamala Press" cards (Ricoh C9500, Ricoh C7200X, Canon C9010 VP) linking to either blog-details.html or external coverage; the 2 YouTube videos under "Inside the Press"; and 4 cards under "Media archive" pointing to Monotech.in, Indian Printer & Publisher, Print & Publishing and PrintWeek India. Mirrors and extends the homepage Media Coverage section so blog.html is a real destination, not a template.
- **blog-details.html — long-form Ricoh C9500 article.** Full ~400-word piece on the Nov 2024 Ricoh Pro C9500 install with specs (49.9" sheet, 470 gsm, 115 ppm), the business rationale (digital demand grew post-Canon, post-first-Ricoh), what it means for clients, and external coverage links. Sidebar with Related Posts, Categories, Contact and Tags widgets. Becomes a template for future blog posts.
- **faq.html — 8 real printing FAQs.** Replaced 8 Lorem-ipsum FAQs with real ones: services offered (with actual press model names), MOQ, turnaround, design services, file formats, paper stocks / finishes, delivery, working hours. Dropped the duplicate "Ask Any Questions" contact form section — contact.html already has the form.
- **product.html — "What We Print" portfolio gallery.** Replaced the e-commerce-style cards (with $29 +vat / cart icons / hearts) with a 9-tile portfolio gallery: Brochures & Catalogues, Invitations & Greeting Cards, Posters & Leaflets, Visiting Cards & Stationery, Book Covers & Publications, Packaging Cartons, Menu Cards, Calendars, Folders. No prices, no cart — just categories with photos + short descriptions and a single "Send Us a Brief" CTA. Also dropped the residual USD pricing-plan section ($30/60/90 monthly/yearly) that survived earlier cleanup.
- **designer.html — "Our Team" page.** Removed the 8 fake "John Doe / Knot Doe / Emily Doe / Evanaa" designer profiles. Replaced with a leadership section featuring Shri Anjani Kumar Singh (founder, 1990, with contact details), then three function cards: Pre-Press Studio, Press Floor, Post-Press & Finishing — keeping it accurate without inventing staff bios.
- **Verification:** `grep` for residual Pixis / Lorem / Brand-Identy / John-Doe / NYC content across all 15 pages now returns **0 matches**. The orphaned pages are still not in the main nav (Product/Blog still link to `#`); user can wire them up when ready.

## Decisions (additional)

**D-11 — Laser cutter is real; supporting equipment kept as "post-press cutting & finishing."**
- Why: User confirmed KPPL does have a laser cutter. Maxima EXB 35 / Polar N 92 / Boxtech are real but they're die-cutter / guillotine / folder-gluer — not laser. Promoted a primary laser-cutter card to the top, reframed the others below as supporting equipment.
- How to apply: When the laser model + specs become available, fill them into the primary card on lasercutting.html (it's currently text-only without a model name).

**D-12 — blog.html as news + media archive, not generic blog template.**
- Why: KPPL doesn't have a content team writing weekly blog posts. The natural content is press announcements (Ricoh / Canon installs) + industry coverage of those announcements. So blog.html surfaces both in one place rather than mixing real coverage with placeholder "Lorem ipsum blog post" slots.
- How to apply: When KPPL ships future newsworthy work (new client, new machine, award), add a card to the "From Kamala Press" row at the top of blog.html and a matching long-form entry following the blog-details.html template.

**D-13 — product.html is a portfolio gallery, not an e-commerce catalogue.**
- Why: KPPL is a B2B commercial press, not an online store. Showing $29 +vat / cart icons creates the wrong impression. The page now sells *categories of work* with a "Send Us a Brief" CTA — quoting still happens by phone/email/form.

**D-14 — designer.html is "Our Team" with one named leader + role-based cards.**
- Why: Only confirmed name is the founder (Shri Anjani Kumar Singh). Inventing designer bios was the original sin; refusing to inflate the team page beyond what's verified is better than re-introducing fake profiles.
- How to apply: As KPPL shares real team info (key managers, head designers, plant heads), replace the role-based cards with named profiles.

### Session 3 — recent coverage, digital fleet, socials (DONE)

User provided real article URLs, the LinkedIn page, and titles for the two YouTube videos. Two major findings that changed earlier work:

1. **YouTube video titles confirmed:** `IiYUWbbrABA` = SM 74 4-colour, `R12aS6Slgt0` = SM 74 5-colour. Updated index.html iframes with descriptive titles + captions under each.
2. **KPPL has its own digital fleet — three production digital presses:**
   - Canon ImagePress C9010 VP — installed 2022.
   - Ricoh Pro C7200X — installed 2023 (first Ricoh).
   - Ricoh Pro C9500 — installed November 2024 (115 ppm, up to 470 gsm, sheets up to 49.9").

   This invalidated my Session-2 digital-printing page that framed all KPPL digital work as going through Emo Creation. Rewrote `digitalprinting.html`:
   - Body intro now states the actual digital investment with dates and capabilities.
   - Machinery Area replaced: 3 cards (Ricoh C9500 / Ricoh C7200X / Canon C9010 VP) + a smaller Emo Creation callout card for personalisation / very-short-run work.
3. **About-page Press table** now segmented into Offset / Digital / Screen subgroups with the three digital presses (Ricoh C9500, Ricoh C7200X, Canon C9010 VP) added with install years.
4. **Media Coverage on index.html expanded from 3 cards to 6** with real URLs, dated, in reverse-chronological order: Monotech (Nov 2024), Indian Printer & Publisher (Nov 2024), LinkedIn Monotech (2023), PrintWeek Canon (Apr 2022), Print & Publishing (date n/a), PrintWeek SM-74 (Jun 2013). Each card has the outlet name as an orange caption, the article title as h3, the date, and a Read More CTA. Layout: 3 across × 2 rows (col-lg-4 col-md-6). Article URLs all updated to the canonical versions the user supplied (notably the newer PrintWeek path).
5. **Testimonials cleanup** — removed the two fake "John Doe" and "Evanaa" Lorem-ipsum testimonial cards that I missed in Sessions 1-2. Mukesh Khatri's real testimonial is now the only one (the slider becomes a single-card display until more real testimonials are gathered).
6. **Social icons — LinkedIn only.** Footer `social-bottom` block (placeholder Facebook / Twitter / Instagram all linking to `#`) replaced with a single LinkedIn icon linking to `https://www.linkedin.com/company/kamala-press-pvt-ltd/`. Applied via a one-shot PowerShell script across all 15 HTML files (404.html had no social block, skipped).

## Decisions (additional)

**D-8 — Digital printing is KPPL's own service, not just Emo Creation's.**
- Why: Verified from PrintWeek (Apr 2022), LinkedIn Monotech (2023), Indian Printer & Publisher (Nov 2024), and Monotech.in (Nov 2024) articles that KPPL has been investing aggressively in digital production presses for three years. The earlier "Emo Creation handles all digital" framing was wrong.
- How to apply: digitalprinting.html now positions the three digital presses as primary, with Emo Creation as a complementary sister firm for the very-short-run / personalisation tail.

**D-9 — Single LinkedIn icon in footer rather than placeholder Facebook/Twitter/Instagram.**
- Why: Only LinkedIn confirmed as an active KPPL channel. Leaving 3 social icons all linking to `#` looks like an unfinished site.
- Revisit when: user confirms additional social channels (Facebook / Instagram / YouTube channel) — add them back to `<ul class="social-bottom">`.

**D-10 — Media Coverage card layout: 3×2 grid with orange outlet caption.**
- Why: 6 articles fit naturally in a 3×2 grid. Adding a small coloured outlet caption (orange `#ff743c` matching the site's accent colour) above the headline makes the source obvious without relying on outlet logos for every card (we don't have logos for LinkedIn, Indian Printer Publisher, Monotech.in).

### Session 2 — content carry-over (DONE)

- Wrote this plan to `log.md`.
- **Phase 2 (about.html):** added founder name (Shri Anjani Kumar Singh) + founding year 1990 to the Company Profile heading in the main about-area. Inserted three new sections between About Area End and Choose Area:
  1. **Products & Services** — 12 product-type cards (Brochures, Catalogues, Posters, Leaflets & Folders, Wobblers, Newsletters, Menu Cards, Greeting Cards, Calendars, Corporate Stationery, Utility Boxes, Envelopes) using the existing `.choose-card` styling so it visually fits.
  2. **Our Infrastructure** — three Bootstrap-bordered tables (Pre-Press / Press / Post-Press) listing every machine from the old machine pages + the old about-page tables. Followed by a post-press capabilities prose list.
  3. **Sister Firm: Emo Creation** — short callout with founder name (Sajal Singh Raghuvanshi, 2017) and a "Visit Emo Creation" button linking to https://www.emocreation.in/.
- **Phase 3 (service pages):** injected a `<!-- Machinery Area -->` section between Service Dtls End and Footer Area on each of the 6 service-detail pages. Each page now shows the real KPPL equipment relevant to that service with photo, prose description, and a bulleted spec list:
  - offsetprinting.html → Heidelberg SM 74 (4-colour) + SM 74 (5-colour + UV + Coater).
  - digitalprinting.html → Emo Creation cross-link card (no dedicated digital press at KPPL).
  - printingdesigning.html → Technova VioStar plates + CTP/PPI/Proliant pre-press stack.
  - lamination.html → process list (thermal / BOPP / PVC / UV alternative) — no specific machine page in old site.
  - spotuv.html → Autoprint Fine Coat 80.
  - lasercutting.html → Maxima EXB 35 die-cutter + Polar N 92 paper cutter + Boxtech folder/gluer (per Decision D-2).
- **Phase 4 (real photos):** home banner now shows real DSC_9388 / DSC_9343 / 100_1670 / IMG_20160705_152842 / 100_1664 instead of template stock. Service-detail page sliders (`service-dtls-slider`) on 5 of 6 service pages updated per Decision D-3 photo mapping. digitalprinting.html slider untouched (no dedicated digital-press photos exist). Restored 3-card Media Coverage section on index.html using `news-img-2.png` and `news-img-3.png` for the second and third outlets — URLs for Print & Publishing and Heidelberg Get Inspired left as `#` since they weren't recoverable from the live site or old source (see open item below).
- **Phase 5 (videos + maps):** added "See the Press in Action" section to index.html between About Area and Testimonial Area with two YouTube embeds (IDs `IiYUWbbrABA` and `R12aS6Slgt0`). Added Google Maps embed (same coordinates as old contact.html) to contact.html between Contact Area End and Footer Area.
- **Phase 6 (verify):** confirmed all wired-up photo paths point to existing files in `assets/img/new/`. Remaining template content is contained to the 4 orphaned pages (blog/blog-details/faq/product) per Decision D-1.

## Open items / handoff

These need user input or external data and were deliberately left for later:

- **Media Coverage outlet 2 and 3 URLs.** The live site references "PrintWeek India / Print-Publishing.com / Speedmaster Get Inspired" as covered-in outlets. We have the PrintWeek article URL only. The other two cards on index.html link to `#`. If you have the original article URLs (or can ask the agency that built the live site), drop them into [index.html](index.html) lines around the Media Coverage block.
- **D-2: Is there an actual laser cutter at KPPL?** lasercutting.html currently describes the die-cutter + paper cutter + folder/gluer instead. If a laser cutter has been acquired since, update the page; if not, consider renaming the service to "Die Cutting & Precision Finishing" in the nav and footer.
- **D-1: Orphaned template pages.** blog.html / blog-details.html / faq.html / product.html / designer.html still hold Pixis template content (29 remaining Lorem-ipsum hits). They aren't reachable from the nav (Product/Blog point to `#`). Decide: build real content, delete the files, or leave as-is.
- **PHP hosting requirement.** The contact form still posts to `assets/php/form-process.php`. Will not work on GitHub Pages. Need either PHP-capable hosting or a third-party form service (Formspree / Getform / Web3Forms / Formsubmit).
- **Old site's CSS class names.** Old site used `.about-group`, `.heading-title`, `.services-group-section-headline`, etc. — none of which are styled in the new template. None of those class names are referenced from the new HTML so no styling issues, just noting in case anyone goes spelunking.
- **Duplicate slider images.** `assets/img/new/` contains `slider1.jpg` AND `slider1 (2).jpg` (and same for 2–5). These look like Windows duplicate-rename artefacts from copying. Safe to delete the `(2)` versions if you want a cleaner folder.
- **Migration scripts.** Three temp PowerShell scripts were used during this session (`migrate-pages.ps1`, `migrate-service-pages.ps1`, `migrate-services-and-index.ps1`, `migrate-machinery.ps1`, `migrate-photos.ps1`). All deleted after running. Re-create from this log if you ever need to re-apply.

