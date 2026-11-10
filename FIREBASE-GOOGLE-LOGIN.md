# YATRIQ — Google login and GitHub Pages deployment

## 1. Enable Google login (one-time Firebase setup)

Google sign-in cannot be activated by source code alone: the site owner must create a Firebase project and authorize the deployed website domain.

1. Open https://console.firebase.google.com/ and create a project named `yatriq-travel-planner` (or use your existing project).
2. In **Project settings → General → Your apps**, add a **Web app** and copy its Firebase configuration.
3. Open **Authentication → Get started → Sign-in method** and enable **Google**. Select a support email and save.
4. Open **Authentication → Settings → Authorized domains**. Add your exact GitHub Pages hostname, for example `YOUR_GITHUB_USERNAME.github.io`. If using a custom domain, add that domain too. Do not add `https://` or a path.
5. Edit `firebase-config.js` in the GitHub repository and replace `YOUR_API_KEY`, `YOUR_PROJECT_ID`, and `YOUR_APP_ID` with the values from the Firebase Web App config. Keep the `authDomain` and `projectId` values from Firebase.
6. Commit and push the change. Wait for the GitHub Pages workflow to finish, then reload the deployed site.

**Session behavior:** Firebase Auth uses `browserLocalPersistence`. A Google user stays signed in after refreshes and browser restarts until they click **Log out**. Sign-in is handled by Firebase; the browser never stores a Google password.

**Security:** Firebase web config is designed to be public. Never add a Firebase service-account JSON, private key, or other server secret to this repository. Configure Firebase Authentication authorized domains and any Firebase security rules before adding user-specific cloud data.

## 2. Deploy on GitHub Pages

1. Create a new GitHub repository, e.g. `yatriq-travel-planner`.
2. Upload all files and folders from this ZIP to the repository root (not the ZIP file itself). Preserve `.github/workflows/pages.yml`, `.nojekyll`, and the `assets/` folder.
3. In GitHub, open **Settings → Pages**. Under **Build and deployment**, choose **GitHub Actions** as the source.
4. Open the **Actions** tab and wait for the `Deploy YATRIQ to GitHub Pages` workflow to complete successfully.
5. Your site URL will be `https://YOUR_GITHUB_USERNAME.github.io/yatriq-travel-planner/` for a project repository. Add `YOUR_GITHUB_USERNAME.github.io` to Firebase Authorized domains as described above.

If the workflow does not start automatically, open Actions and run the Pages workflow manually, or make a small commit.

## 3. YATRIQ AI assistant

The travel planner includes a deterministic, explainable itinerary recommendation engine that runs in the browser. The floating chat assistant can connect to the included Cloudflare Worker for generative AI. To enable generative responses:

1. Deploy `llm-worker/worker.js` as a Cloudflare Worker using the included `llm-worker/wrangler.toml` as a starting point.
2. Add the provider API key as a Worker secret (never in GitHub Pages JavaScript), and configure the provider/model variables required by that Worker.
3. Set `window.YATRIQ_LLM_ENDPOINT` in `yatriq-config.js` to your deployed Worker HTTPS URL.
4. Redeploy GitHub Pages.

Without the Worker endpoint, YATRIQ's trip planning, budget calculations, and explainable recommendations still work; the chat assistant will clearly show its offline/rules-based fallback rather than pretending to be a live generative model.

## 4. Photos and itinerary cards

The national planner uses a distinct-photo assignment for attraction cards and a local fallback illustration if a remote image cannot load. Country-card photos for Australia, New Zealand, Canada, Sri Lanka and Cambodia and the Mysuru/Kochi featured-city photos have been refreshed. Remote photo providers can change or rate-limit images, so the built-in fallback prevents blank image boxes; it cannot guarantee every third-party photo URL remains available forever.

## Notes

- Google login is not the same as the existing traveller-details form. The form remains as a trip-planning detail step.
- This static GitHub Pages build does not include a private server or secure document upload. Do not collect real passport, Aadhaar, visa, or payment credentials in this demo.
- Do not commit private API keys. Keep all LLM secrets in the Cloudflare Worker environment.
