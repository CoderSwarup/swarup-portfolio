# How to Use Umami Analytics

## What is Umami

Umami is a privacy-focused, cookie-less web analytics platform. This project uses
[Umami Cloud](https://cloud.umami.is) as the primary hosting option.

## Setup (Umami Cloud)

### 1. Get your credentials

1. Create an account at [cloud.umami.is](https://cloud.umami.is).
2. Add a website in the Umami dashboard.
3. Copy the **Website ID** and the **Tracking Script URL** (looks like
   `https://cloud.umami.is/script.js`).

### 2. Set environment variables

In `.env` (never commit this file):

```bash
NEXT_PUBLIC_UMAMI_SRC="https://cloud.umami.is/script.js"
NEXT_PUBLIC_UMAMI_ID="your-umami-website-id"
```

See `.env.example` for the template. The app reads these via `src/config/index.ts`
and will log an error if either value is missing.

### 3. How the script is loaded

`src/components/analytics/UmamiAnalytics.tsx` renders a `next/script` component
with `strategy="afterInteractive"`:

```tsx
<Script
  id="umami-analytics"
  src={umamiSrc}
  data-website-id={umamiId}
  strategy="afterInteractive"
  async
/>
```

This is the recommended approach for Next.js — it loads the tracker after the page
becomes interactive, avoiding blocking the initial render.

## Tracking Custom Events

### The `useUmami` hook

`src/hooks/use-umami.ts` wraps `window.umami.track()` in a type-safe hook. It
returns a `trackEvent` function constrained by the `AnalyticsEvent` discriminated
union defined in `src/types/analytics.ts`.

**Currently, the only usage is in `src/components/common/ThemeSwitch.tsx`** — it
tracks a `theme_toggle` event with `from`, `to`, and `location` data when the user
switches themes.

### Adding a new tracked event

1. Add the event name and data shape to `AnalyticsEventData` in
   `src/types/analytics.ts`:

```ts
button_click: {
  buttonId: string;
  section?: string;
  action?: string;
};
```

2. Use it in a component:

```tsx
const { trackEvent } = useUmami();

trackEvent({
  name: 'button_click',
  data: { buttonId: 'hero_cta', section: 'hero' },
});
```

The type system enforces that `data` matches the shape defined for that event name.
If the Umami script hasn't loaded (ad blocker, still loading), calls are silently
no-ops — they won't throw.

### Reference: Umami tracker functions

From the [Umami docs](https://docs.umami.is/docs/tracker-functions):

```js
// Track current page
umami.track();

// Track a named event
umami.track('signup-button');

// Track with data
umami.track('signup-button', { plan: 'newsletter', id: 123 });

// Assign a session ID
umami.identify('unique_id');

// Save session data
umami.identify('unique_id', { name: 'Bob', email: 'bob@example.com' });
```

Event data limits: strings max 500 chars, numbers max 4 decimal precision, objects
max 50 properties.

## Self-Hosted (Optional)

If you fork this project and want to self-host Umami instead of using Cloud:

1. Install Umami per [Umami's install docs](https://docs.umami.is/docs/install).
2. In your Umami dashboard, add your website and copy the Website ID.
3. Update the two env vars in `.env`:
   - `NEXT_PUBLIC_UMAMI_SRC` — your self-hosted tracker script URL (e.g.
     `https://analytics.yourdomain.com/script.js`)
   - `NEXT_PUBLIC_UMAMI_ID` — the Website ID from your Umami instance

No application code changes needed — only the env values change. See Umami's
[environment variables](https://docs.umami.is/docs/environment-variables) for
self-hosted server configuration (database, ports, bot filtering, etc.).
