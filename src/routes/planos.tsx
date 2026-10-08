import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/planos")({
  head: () => ({
    meta: [
      { title: "Planos — Mente Treino" },
      { name: "description", content: "Escolhe o plano de treino psicotécnico ideal para ti." },
      { property: "og:title", content: "Planos — Mente Treino" },
      { property: "og:description", content: "Gratuito, Pro e Intensivo: treino psicotécnico ao teu ritmo." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Planos,
});

const plans = [
  { name: "Gratuito", price: "0 Kz", items: ["Sessões de 8 questões", "Explicações básicas", "Melhor pontuação"] },
  { name: "Pro", price: "4 900 Kz/mês", items: ["Questões ilimitadas", "Explicações detalhadas por IA", "Histórico de progresso", "Simulados completos"], featured: true },
  { name: "Intensivo", price: "12 900 Kz/3 meses", items: ["Tudo do Pro", "Plano de estudo personalizado", "Relatórios por categoria"] },
];

function Planos() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-16">
      <h1 className="font-display text-5xl font-extrabold">Planos</h1>
      <p className="mt-3 text-muted-foreground">Começa grátis. Evolui quando quiseres.</p>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {plans.map((p) => (
          <div key={p.name} className={`rounded-lg border-2 p-7 ${p.featured ? "border-primary bg-card" : "border-border"}`}>
            <h2 className="font-display text-2xl font-semibold">{p.name}</h2>
            <p className="mt-2 text-3xl font-bold text-primary">{p.price}</p>
            <ul className="mt-6 space-y-2 text-sm">{p.items.map((it) => <li key={it}>— {it}</li>)}</ul>
            <Link to="/treino" className="mt-8 block rounded-md bg-primary py-3 text-center font-semibold text-primary-foreground">Escolher</Link>
          </div>
        ))}
      </div>
    </main>
  );
}
