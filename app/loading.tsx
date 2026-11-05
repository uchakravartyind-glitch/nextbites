export default function Loading() {
  return (
    <main className="state-page" aria-busy="true" aria-live="polite">
      <div className="loading-skeleton" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <h1>Preparing something delicious…</h1>
      <p>Loading your recipes.</p>
    </main>
  );
}
