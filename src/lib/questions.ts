export type Question = {
  id: number;
  category: "Sequências" | "Lógica" | "Analogias" | "Cálculo";
  prompt: string;
  options: string[];
  answer: number;
  explanation: string;
};

export const QUESTIONS: Question[] = [
  { id: 1, category: "Sequências", prompt: "Qual o próximo número? 2, 6, 12, 20, 30, …", options: ["40", "42", "44", "36"], answer: 1, explanation: "As diferenças são 4, 6, 8, 10 — a seguinte é 12, logo 30 + 12 = 42." },
  { id: 2, category: "Sequências", prompt: "Qual o próximo número? 3, 9, 27, 81, …", options: ["162", "243", "108", "324"], answer: 1, explanation: "Cada termo é multiplicado por 3: 81 × 3 = 243." },
  { id: 3, category: "Sequências", prompt: "Qual a próxima letra? A, C, F, J, …", options: ["M", "N", "O", "P"], answer: 2, explanation: "Saltos de +2, +3, +4, +5: J + 5 = O." },
  { id: 4, category: "Lógica", prompt: "Todos os gatos são mamíferos. Alguns mamíferos voam. Logo:", options: ["Alguns gatos voam", "Nenhum gato voa", "Não se pode concluir que gatos voam", "Todos os mamíferos são gatos"], answer: 2, explanation: "Os mamíferos que voam podem não incluir nenhum gato — a conclusão não é garantida." },
  { id: 5, category: "Lógica", prompt: "Ana é mais alta que Bia. Bia é mais alta que Carla. Quem é a mais baixa?", options: ["Ana", "Bia", "Carla", "Não se sabe"], answer: 2, explanation: "Ordem: Ana > Bia > Carla, portanto Carla é a mais baixa." },
  { id: 6, category: "Analogias", prompt: "Livro está para ler assim como garfo está para…", options: ["Cozinhar", "Comer", "Cortar", "Prato"], answer: 1, explanation: "Relação objeto → ação principal: lê-se um livro, come-se com um garfo." },
  { id: 7, category: "Analogias", prompt: "Médico está para hospital assim como professor está para…", options: ["Aluno", "Livro", "Escola", "Aula"], answer: 2, explanation: "Relação profissional → local de trabalho." },
  { id: 8, category: "Cálculo", prompt: "Um produto custa 80 Kz e tem 25% de desconto. Quanto fica?", options: ["55 Kz", "60 Kz", "65 Kz", "70 Kz"], answer: 1, explanation: "25% de 80 = 20; 80 − 20 = 60." },
  { id: 9, category: "Cálculo", prompt: "Se 3 máquinas fazem 3 peças em 3 minutos, quantas peças fazem 6 máquinas em 6 minutos?", options: ["6", "9", "12", "18"], answer: 2, explanation: "Cada máquina faz 1 peça em 3 min → em 6 min faz 2. 6 máquinas × 2 = 12." },
  { id: 10, category: "Sequências", prompt: "Qual o intruso? 2, 3, 5, 9, 11, 13", options: ["3", "9", "11", "13"], answer: 1, explanation: "Todos são números primos exceto o 9 (3 × 3)." },
  { id: 11, category: "Lógica", prompt: "Se chove, a rua fica molhada. A rua está seca. Logo:", options: ["Choveu", "Não choveu", "Vai chover", "Nada se conclui"], answer: 1, explanation: "Contrapositiva: se a rua não está molhada, então não choveu." },
  { id: 12, category: "Analogias", prompt: "Quente está para frio assim como alto está para…", options: ["Grande", "Baixo", "Largo", "Longe"], answer: 1, explanation: "Relação de antónimos." },
];

export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const t = a[i] as T; a[i] = a[j] as T; a[j] = t;
  }
  return a;
}
