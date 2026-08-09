export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 py-8 text-slate-400">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-center text-sm sm:flex-row sm:text-left">
        <p>© {year} KI im Saalekreis e.V. (in Gründung) · Christopher Büchner</p>
        <p>Bad Lauchstädt · Saalekreis</p>
      </div>
    </footer>
  );
}
