# YATRIQ — Your World. Your Journey. Powered by AI.

A responsive, front-end travel planner demo with India itineraries and a separate country-trips explorer for 39 countries.

## Run it
1. Extract the ZIP.
2. Open `index.html` in Chrome, Edge, or Firefox.
3. Internet access is recommended for destination photos, Google Maps, fonts, and the demo QR image.

No package installation or build step is required.

## Features
- Updated YATRIQ branding with a forest-green, ivory, and champagne design system.
- Separate **Country trips** section for Japan, France, Italy, Switzerland, UAE, Thailand, Indonesia, Maldives, Singapore, USA, UK, Australia, New Zealand, Canada, Nepal, Sri Lanka, Vietnam, Spain, Greece, Germany, South Korea, China, Malaysia, Turkey, Egypt, South Africa, Norway, Iceland, Portugal, Netherlands, Austria, Sweden, Finland, Brazil, Mexico, Cambodia, Philippines, Mauritius, and Qatar.
- Country plans respond to budget, trip length, and traveller count, and offer budget, comfort, and premium stay choices.
- Existing India city itinerary planner, day-wise schedules, destination maps, selected-place maps, and hotel suggestions retained.
- New **Multiple-city tour** option under “Where are you headed?”: choose 2–10 destination cities plus a starting city, require at least 6 days (and enough days to visit every city), and see a day-wise route, indicative intercity ticket estimates, a city map, and a tourist-place map.
- Multi-city itineraries avoid duplicate attraction names and use a slower pace on long trips (one main attraction per day for trips of 11+ days; up to two on shorter multi-city trips).
- Estimated outbound and return bus/train costs for India plans, and indicative round-trip flight estimates for international plans.
- Login details modal with name, email, phone, passport image/PDF and optional visa approval image/PDF selection.
- Select a suggested hotel and open a clearly labelled simulated checkout with a demo QR code.
- Responsive layout for mobile, tablet, and desktop.

## Important demo limitations
- This is a **front-end demo**, not a production travel-booking system. It does not authenticate accounts, upload documents, verify visas, reserve hotels, access live transport fares, or process real payments.
- Never upload real passport or visa documents to a public demo. The file controls only select local files; this version does not transmit them to a server.
- Fares, hotel costs, and itinerary estimates are illustrative and may be inaccurate. Confirm official visa requirements, live ticket prices, availability, taxes, and safety information before travelling.
- The QR code represents a sample booking reference only. No money is collected and no booking is confirmed.
- For production, add secure server-side authentication, encrypted document storage with explicit consent, a privacy policy, live transport/hotel APIs, and a certified payment provider in a secure backend.


## YATRIQ 2.0 view and demo flow

- The landing page is a dedicated Taj Mahal hero screen. Select **Plan my trip** and choose National or International.
- **National trips** and **Country trips** are separate views, not sections revealed by scrolling through one long page.
- The Login details form changes by trip type: national demo profiles ask for a fictional 12-digit Aadhaar number; international demo profiles ask for passport and visa sample files.
- Saving a demo profile opens the corresponding national or international planning agent.
- Checkout asks for a demo UPI ID or test card number before generating a QR. Never enter real identity or payment information. QR codes and payment confirmations are simulations only.
- Run by opening `index.html` in a modern browser. Internet is needed for remote photos, maps, and the sample QR generator.

## YATRIQ 2.1 — image resilience and attraction-led budgets

- Added image error fallbacks for international country cards, featured Indian cities, and itinerary attraction photos. If an individual remote image URL fails, the card loads a backup landscape image rather than leaving an empty image box.
- Updated the requested Australia, New Zealand, Canada, Sri Lanka, Egypt and Cambodia country-card image choices, plus Kochi and Mysuru featured-city image choices.
- Reworked country itineraries to use named, country-specific landmarks, museums, monuments, nature reserves and bookable experiences rather than generic street roaming.
- Daily attraction count now follows the available budget per traveller compared with the destination's indicative trip cost: budget-first = 1 main attraction/day, balanced = 2, comfort = 3, premium = up to 4 where practical.
- Added a warning when estimated return flights may consume a large part of the total budget. All prices remain illustrative estimates, not live availability or quotes.


## YATRIQ 3.0 — explainable recommendation engine

- Added a transparent recommendation layer that calculates budget per traveller and per day, applies a destination-cost planning index, and recommends a practical attraction pace.
- Shows an explicit category-by-category budget envelope (travel, accommodation, food, local transport, attractions and contingency) so a reviewer can follow the calculation.
- National and international flows show why the recommendation was made and state the prototype's limits.
- Added a local SVG destination illustration fallback when remote photo hosts fail, so image cards do not remain blank. The fallback is illustrative artwork, not a photograph.
- This remains a front-end student prototype using curated attraction data and explainable rules. It is not a trained ML model or live AI API integration. Live fares, hotel availability, ticket availability, identity verification and payments are not connected.

### Demo checklist for evaluators
1. Start on the landing page and choose **Plan my trip**.
2. Demonstrate a National trip with a low budget, then increase the budget and show the explanation and attraction pace.
3. Open Country trips separately; select a country and compare a low versus high budget.
4. Point to the budget formula and explain that the category percentages are planning envelopes rather than live quotes.
5. Demonstrate hotel selection and clearly identify the QR/payment as simulated.
6. Do not use real Aadhaar, passport, visa or payment data in this demo.


## Open YATRIQ on a phone

The site is responsive and can be opened on Android or iPhone. It is a static website, so the simplest option is to host the whole folder and open its URL on your phone.

### Quick public preview with Netlify Drop
1. Extract `yatriq_mobile_upgrade.zip` on your computer.
2. Open <https://app.netlify.com/drop> in a browser and sign in if prompted.
3. Drag the extracted folder containing `index.html`, `script.js`, `style.css`, and `agent-engine.js` into the drop area. If the uploader rejects the folder, zip the folder contents and use the upload option it provides.
4. Netlify gives you a website URL. Open that URL on your phone, or send it to yourself.
5. Keep the site files together. Do not upload only `index.html`, because the JavaScript and CSS are required.

### Test on your phone over the same Wi-Fi (local preview)
1. On the computer, open a terminal in the extracted website folder.
2. Run `python -m http.server 8000`.
3. Find your computer's local IPv4 address in your network settings.
4. On your phone, connected to the same Wi-Fi, open `http://COMPUTER-IP:8000` (replace `COMPUTER-IP` with that address).
5. This local address normally works only while the server is running and both devices are on the same network.

Maps and external images require an internet connection. Trip prices are estimates, not live quotes or bookings. Multi-city bus/train ticket amounts use a simple illustrative heuristic and are not live route fares.


## Review section demo
- Four separate review sets appear for the home page, National trips, Country trips, and Multi-tour planner.
- The preloaded 3–5 star reviews are illustrative demo text, not verified customer testimonials. The displayed overall demo rating is 4.5/5.
- Visitors can write reviews; this front-end demo stores submitted reviews in that browser's local storage only. Reviews are not shared between devices or sent to a server.

## Backend option
This ZIP currently has a **front-end only** setup (HTML, CSS and JavaScript). A backend can be added using **Node.js + Express** with a **PostgreSQL or MySQL database (DBMS)** to store user accounts and submitted reviews centrally, validate ratings, and provide moderation/admin controls. The backend would typically live in a separate `server/` folder with files such as `server.js`, `db.js`, and `.env` (for secrets; never publish it).


## YATRIQ map usability and interaction polish

- Added clear **Road map**, **Satellite**, and **3D in Google Maps** controls to national city/place maps, international trip maps, and multi-city maps. Road/satellite switch the embedded Google Maps layer; the 3D control opens the selected location in Google Maps in a new tab, where 3D availability depends on the location/device and the Google Maps interface.
- Added consistent active-state styling, keyboard focus indicators, and mobile-friendly wrapping for map controls.
- Fixed the **Edit preferences** button so it returns users to the planner, improved navigation buttons to scroll to the relevant planner section, and made the footer planning links open the trip-type chooser. The YATRIQ brand link now reliably returns to the top/home view.
- Map controls use Google Maps embeds and require internet access. The map is an interactive location view; it does not guarantee live routing, traffic, or 3D imagery inside the embedded frame. Use Google Maps for live directions.
- Automated checks completed: JavaScript syntax checks pass and the static HTML has no duplicate IDs. A full browser-driven test could not run in this environment, so please test the key flows in Chrome before presenting.


## YATRIQ 4.1 — review interaction and photo reliability fixes

### Reviews and ratings
- Each page has its own review collection: Home, National trips, International trips and Multi-national trips.
- The review header displays the overall YATRIQ demo rating and the active page's separate rating.
- The five star filters (1–5) stay hidden until the visitor clicks **More reviews**.
- The first More click reveals exactly five star buttons and loads 27 additional illustrative reviews (30 total in the initial batch).
- Selecting a star shows only reviews with that exact rating; clicking the selected star again restores all ratings. Further More clicks load up to 27 additional reviews at a time. The sample reviews are explicitly labelled as demo examples and are not real customer testimonials.
- Visitors can submit 1–5 star reviews. User submissions are stored in that browser only; they are not shared with other visitors without a backend.

### YATRIQ floating assistant and optional real LLM
- A floating YATRIQ assistant is available across the website. It can read the currently selected trip form context.
- Without an AI endpoint, the assistant clearly identifies that it is using a demo fallback. It does not pretend that a real LLM is connected.
- To connect a real LLM without publishing an API key, deploy the included `llm-worker/worker.js` as a Cloudflare Worker and store the provider key as a Worker secret.

#### Connect the live LLM (optional)
1. Create/sign in to a Cloudflare account and install Wrangler (`npm install -g wrangler`).
2. Open a terminal in the `llm-worker` folder and run `wrangler login`.
3. Add your OpenAI API key as a secret: `wrangler secret put OPENAI_API_KEY` (paste it only into the terminal prompt; never put it in `yatriq-config.js` or GitHub).
4. Deploy the Worker: `wrangler deploy`.
5. Copy the Worker URL printed by Wrangler.
6. Open `yatriq-config.js` and set `window.YATRIQ_LLM_ENDPOINT = 'https://YOUR-WORKER.YOUR-SUBDOMAIN.workers.dev';`.
7. Commit and push the updated site to GitHub Pages. The Worker keeps the provider key server-side; the static site only calls your Worker URL.

The live LLM requires an OpenAI API account and API usage may be billable. Set provider spending limits. The Worker uses `gpt-4o-mini` by default; set the `OPENAI_MODEL` Worker variable if you want another supported model. The Worker is a starter integration: before production, add origin restrictions, rate limiting, abuse monitoring and privacy disclosures.

### Budget warnings and route-map downloads
- National, International and Multi-national planners calculate additional indicative trip-cost estimates.
- Remaining budget is shown in green. If the estimated total exceeds the entered budget, a warning is shown and route-map download is disabled.
- When the estimated plan fits the budget, the route-map download button creates an HTML route summary with a Google Maps route link and the selected attractions.
- Estimates are planning assumptions only, not live ticket, hotel or flight quotes. Always verify prices before travel.

### GitHub Pages deployment
1. Extract the ZIP completely.
2. Open the extracted folder. `index.html` must be directly inside the folder you upload (not buried inside another nested folder).
3. Open your GitHub repository, e.g. `YATRIQAI`.
4. Choose **Add file → Upload files** and drag all extracted files and folders into the upload area. Keep `.github`, `assets`, and `llm-worker` folders intact.
5. Commit the changes to the `main` branch.
6. Open **Settings → Pages**. Under Build and deployment, choose **Deploy from a branch**, select `main` and `/ (root)`, then Save. If the repository already uses the included GitHub Actions Pages workflow, keep its configured Pages source and let the workflow deploy.
7. Open **Actions** and wait until the Pages workflow shows a green check. Then open the Pages URL shown in **Settings → Pages**.
8. If an old version remains, hard-refresh with `Ctrl + Shift + R` or open the site in a private window.

### Testing checklist before presenting
- Switch between Home, National, International and Multi-national pages; confirm the review section title and rating change.
- Filter 1, 2, 3, 4 and 5-star reviews; click More and confirm 27 more matching reviews load.
- Submit a review with each rating from 1 to 5 and verify it appears after submission.
- Try both a low and a higher budget in all three planners. Confirm green savings for a fitting plan and a disabled route download for an over-budget plan.
- Click the floating YATRIQ assistant on every page. It should show a clear demo fallback until a Worker URL is configured.
- Check attraction photos with internet access; Wikipedia/Wikimedia may not have a matching photograph for every place, in which case the site uses a category-appropriate fallback rather than a repeated generic road image.

**Prototype note:** YATRIQ is still a student travel-planning demo. Reviews are local-browser data, estimates are heuristic, map downloads link to Google Maps, and no transport/hotel booking or payment is performed.

### YATRIQ 4.1 — review controls and attraction image fixes
- Review filters are collapsed initially. The More reviews button opens exactly five controls (1★ through 5★) and loads the next batch of reviews.
- Each star filter displays only matching reviews. Clicking the selected filter again restores all ratings.
- Overall rating is calculated separately from the active page rating; Home, National, International and Multi-national views each display their own page rating.
- Removed broad Wikipedia thumbnail lookups from attraction schedules because ambiguous search results could replace a landmark with an unrelated road or street image. Curated destination/category images are used instead.
- Multi-city gallery cards now use the same curated image resolver rather than an unreliable broad Commons file search.
- Added a final image-error handler for images inserted dynamically after a trip is generated. If a third-party image host fails, a branded local SVG fallback appears instead of a blank/broken image. Real remote photographs still require an internet connection and the image host to be available.
- Multi-city itinerary creation button remains above the city-photo gallery. The multi-city hotel gallery remains immediately before the ratings section.
- Static deployment: no npm build step is required. Keep the full folder structure and deploy the contents of this ZIP to the repository root.

## YATRIQ final review and image reliability patch

- The homepage and each planner review view have one **More reviews** button. It does not navigate to a planner or change the current page.
- First click reveals the five star filters and expands the visible review list to 30. Further clicks append up to 27 reviews at a time.
- Selecting 1, 2, 3, 4 or 5 stars shows only reviews with that exact rating. The filters remain hidden until More is clicked.
- Each page has its own review set and average; the overall score is calculated separately across all page sets.
- Added a bundled local SVG image fallback (`assets/yatriq-photo-fallback.svg`) for remote photos that fail. This prevents broken-image icons and removes duplicated fallback text over destination-card labels.
- Destination photography is still sourced from remote Unsplash image URLs where available. The local fallback is an illustration, not a photograph. For guaranteed real photographs without internet dependence, add licensed photo files to the assets folder and update the corresponding image paths.

### GitHub Desktop deployment
1. Extract the ZIP.
2. Open the existing `YATRIQAI` repository folder using GitHub Desktop → Repository → Show in Explorer.
3. Copy the extracted ZIP contents into the repository root and replace the old files. Keep `.github` and `assets` folders.
4. In GitHub Desktop, use commit summary: `Fix review expansion, star filters and image fallbacks`.
5. Optional commit description: `Make More expand reviews without navigation, reveal exact star filters, load reviews in batches, and add local image fallbacks for failed remote photos.`
6. Click **Commit to main**, then **Push origin**.
7. Open the repository's **Actions** tab and wait for the Pages workflow to show a green check.
8. Open the published site and press `Ctrl + Shift + R` to bypass cached files.


## Google login and deployment

See [FIREBASE-GOOGLE-LOGIN.md](FIREBASE-GOOGLE-LOGIN.md) for Firebase Google sign-in setup, GitHub Pages deployment, and optional live AI Worker configuration. Google sign-in uses Firebase browser-local persistence and remains active until logout.
