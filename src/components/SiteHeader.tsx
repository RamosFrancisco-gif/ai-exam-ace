import { Link } from "@tanstack/react-router";

export function SiteHeader() {
  const cls = "text-sm font-semibold text-muted-foreground hover:text-foreground";
  return (
    <header className="border-b border-border">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
        <Link to="/" className="font-display text-xl font-extrabold text-primary">Mente Treino</Link>
        <nav className="flex gap-5">
          <Link to="/treino" className={cls} activeProps={{ className: "text-foreground" }}>Treinar</Link>
          <Link to="/planos" className={cls} activeProps={{ className: "text-foreground" }}>Planos</Link>
        </nav>
      </div>
    </header>
  );
}
