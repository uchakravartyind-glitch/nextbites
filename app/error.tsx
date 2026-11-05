"use client";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <main className="state-page">
      <p className="eyebrow">Kitchen hiccup</p>
      <h1>Something went wrong.</h1>
      <p>We could not prepare this page. Please try loading it again.</p>
      <button className="state-page__action" type="button" onClick={() => reset()}>
        Try again
      </button>
    </main>
  );
}
