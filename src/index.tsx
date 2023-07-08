import "./assets/index.css"

import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom";
import { App } from "./components/app"
import { StoreProvider } from "./store";
import * as Sentry from "@sentry/browser";

const rootElement = document.getElementById("root")

if (!(rootElement instanceof HTMLElement)) {
  throw new Error("Root element not found")
}

const root = createRoot(rootElement);
const robotoStylesheet = document.createElement("link");

robotoStylesheet.rel = "stylesheet";
robotoStylesheet.href = "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap";

document.head.appendChild(robotoStylesheet);

if (import.meta.env.PROD) {
  Sentry.init({
    dsn: "https://22d46fb83fa64a72afa81c3dd91203c4@o1166576.ingest.sentry.io/4505504548192256",
    integrations: [
      new Sentry.BrowserTracing({
        // Set `tracePropagationTargets` to control for which URLs distributed tracing should be enabled
        tracePropagationTargets: [/http:\/\/localhost:5173/, /https:\/\/aminnairi.github.io\/motorcycle-roadtrip-checklist/],
      }),
      new Sentry.Replay(),
    ],
    // Performance Monitoring
    tracesSampleRate: 1.0, // Capture 100% of the transactions, reduce in production!
    // Session Replay
    replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
    replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
  });
}

root.render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <StoreProvider>
        <App />
      </StoreProvider>
    </BrowserRouter>
  </StrictMode>
)
