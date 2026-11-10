/*
 * YATRIQ Google Authentication (Firebase Authentication)
 * Configure your Firebase web app in firebase-config.js.
 * Firebase LOCAL persistence remembers the signed-in account across reloads
 * and browser restarts until the user explicitly signs out.
 */
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import {
  getAuth, GoogleAuthProvider, signInWithPopup, signOut,
  setPersistence, browserLocalPersistence, onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

const loginButton = document.getElementById("googleLoginButton");
const logoutButton = document.getElementById("googleLogoutButton");
const userLabel = document.getElementById("googleUserLabel");

function showSetupMessage() {
  const message = "Google login needs your Firebase web-app configuration. Follow FIREBASE-GOOGLE-LOGIN.md, then add the values to firebase-config.js.";
  if (loginButton) loginButton.addEventListener("click", () => alert(message));
  if (userLabel) userLabel.textContent = "Google login setup required";
}
const config = window.YATRIQ_FIREBASE_CONFIG;
if (!config || !config.apiKey || config.apiKey === "YOUR_API_KEY") {
  showSetupMessage();
} else {
  try {
    const app = initializeApp(config);
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });

    await setPersistence(auth, browserLocalPersistence);

    loginButton?.addEventListener("click", async () => {
      loginButton.disabled = true;
      try {
        await signInWithPopup(auth, provider);
      } catch (error) {
        console.error("YATRIQ Google sign-in failed:", error);
        alert(error.code === "auth/unauthorized-domain"
          ? "This website domain is not authorized in Firebase. Add your GitHub Pages domain under Authentication → Settings → Authorized domains."
          : `Google sign-in failed: ${error.message}`);
      } finally {
        loginButton.disabled = false;
      }
    });

    logoutButton?.addEventListener("click", async () => {
      try { await signOut(auth); }
      catch (error) { console.error("YATRIQ sign-out failed:", error); alert("Could not sign out. Please try again."); }
    });

    onAuthStateChanged(auth, user => {
      if (loginButton) loginButton.hidden = Boolean(user);
      if (logoutButton) logoutButton.hidden = !user;
      if (userLabel) userLabel.textContent = user ? `Signed in: ${user.displayName || user.email || "Google user"}` : "";
      document.documentElement.dataset.yatriqAuth = user ? "signed-in" : "signed-out";
      window.YATRIQ_USER = user ? {
        uid: user.uid, displayName: user.displayName, email: user.email, photoURL: user.photoURL
      } : null;
      window.dispatchEvent(new CustomEvent("yatriq:auth-state", { detail: { user: window.YATRIQ_USER } }));
    });
  } catch (error) {
    console.error("YATRIQ Firebase initialization failed:", error);
    if (userLabel) userLabel.textContent = "Login configuration error";
  }
}
