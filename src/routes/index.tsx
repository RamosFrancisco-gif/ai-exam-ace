import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mente Treino — Prepara-te para exames psicotécnicos" },
      { name: "description", content: "Treina raciocínio lógico, sequências, analogias e cálculo com explicações e modo cronometrado." },
      { property: "og:title", content: "Mente Treino — Prepara-te para exames psicotécnicos" },
      { property: "og:description", content: "Treino psicotécnico com explicações, cronómetro e progresso." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Home,
});

const features = [
  ["Sequências", "Números e letras com padrões escondidos."],
  ["Lógica", "Silogismos e deduções como nos exames reais."],
  ["Analogias", "Relações entre conceitos, rápidas e precisas."],
  ["Cálculo", "Percentagens, proporções e problemas práticos."],
];

function Home() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-16">
      <p className="text-sm font-semibold uppercase tracking-widest text-primary">Preparação honesta, resultados reais</p>
      <h1 className="font-display mt-4 max-w-3xl text-5xl font-extrabold leading-tight md:text-6xl">
        Chega ao exame psicotécnico já treinado.
      </h1>
      <p className="mt-6 max-w-xl text-lg text-muted-foreground">
        Exercícios cronometrados com a explicação do raciocínio em cada resposta. Aprende os padrões e ganha velocidade.
      </p>
      <div className="mt-8 flex gap-3">
        <Link to="/treino" className="rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground hover:opacity-90">Começar treino grátis</Link>
        <Link to="/planos" className="rounded-md border border-border px-6 py-3 font-semibold hover:bg-accent">Ver planos</Link>
      </div>
      <div className="mt-20 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-4">
        {features.map(([t, d]) => (
          <div key={t} className="bg-background p-6">
            <h3 className="font-display text-xl font-semibold">{t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{d}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
