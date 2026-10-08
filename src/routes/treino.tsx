import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { QUESTIONS, shuffle, type Question } from "@/lib/questions";

export const Route = createFileRoute("/treino")({
  head: () => ({
    meta: [
      { title: "Treinar — Mente Treino" },
      { name: "description", content: "Sessão de treino psicotécnico cronometrada com explicações." },
      { property: "og:title", content: "Treinar — Mente Treino" },
      { property: "og:description", content: "Responde, vê a explicação e melhora a tua pontuação." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Treino,
});

const SECONDS = 45;
const KEY = "mente-treino-best";

function Treino() {
  const [qs, setQs] = useState<Question[]>([]);
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(SECONDS);
  const [best, setBest] = useState(0);

  const start = () => { setQs(shuffle(QUESTIONS).slice(0, 8)); setI(0); setPicked(null); setScore(0); setTime(SECONDS); };
  useEffect(() => { start(); setBest(Number(localStorage.getItem(KEY) || 0)); }, []);

  const done = qs.length > 0 && i >= qs.length;
  const q = qs[i] as Question;

  useEffect(() => {
    if (!q || picked !== null) return;
    if (time <= 0) { setPicked(-1); return; }
    const t = setTimeout(() => setTime((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [time, picked, q]);

  useEffect(() => {
    if (done && score > best) { localStorage.setItem(KEY, String(score)); setBest(score); }
  }, [done, score, best]);

  const choose = (k: number) => { if (picked !== null) return; setPicked(k); if (k === q.answer) setScore((s) => s + 1); };
  const next = () => { setI((n) => n + 1); setPicked(null); setTime(SECONDS); };

  if (!qs.length) return null;

  if (done) return (
    <main className="mx-auto max-w-2xl px-5 py-16 text-center">
      <h1 className="font-display text-5xl font-extrabold">{score} / {qs.length}</h1>
      <p className="mt-3 text-muted-foreground">Melhor pontuação: {best}</p>
      <button onClick={start} className="mt-8 rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground">Nova sessão</button>
    </main>
  );

  return (
    <main className="mx-auto max-w-2xl px-5 py-12">
      <div className="flex items-center justify-between text-sm font-semibold text-muted-foreground">
        <span>{q.category} · {i + 1}/{qs.length}</span>
        <span className={time <= 10 ? "text-destructive" : ""}>{time}s</span>
      </div>
      <div className="mt-2 h-1 rounded bg-muted"><div className="h-1 rounded bg-primary transition-all" style={{ width: `${(time / SECONDS) * 100}%` }} /></div>
      <h1 className="font-display mt-8 text-3xl font-semibold leading-snug">{q.prompt}</h1>
      <div className="mt-8 grid gap-3">
        {q.options.map((o, k) => {
          const state = picked === null ? "border-border hover:bg-accent"
            : k === q.answer ? "border-primary bg-primary/10"
            : k === picked ? "border-destructive bg-destructive/10" : "border-border opacity-60";
          return <button key={k} onClick={() => choose(k)} className={`rounded-md border-2 px-5 py-4 text-left font-semibold ${state}`}>{o}</button>;
        })}
      </div>
      {picked !== null && (
        <div className="mt-8 rounded-md bg-card p-5 border border-border">
          <p className="font-semibold">{picked === q.answer ? "Correto!" : picked === -1 ? "Tempo esgotado." : "Não foi desta."}</p>
          <p className="mt-2 text-muted-foreground">{q.explanation}</p>
          <button onClick={next} className="mt-5 rounded-md bg-primary px-5 py-2 font-semibold text-primary-foreground">Seguinte</button>
        </div>
      )}
    </main>
  );
}
