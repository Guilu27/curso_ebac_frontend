const alunos = [];

const quantidadeDeAlunos = 27;

for (let i = 1; i <= quantidadeDeAlunos; i++) {
  const aluno = { nome: `Aluno${i}`, nota: Math.floor(Math.random() * 10) };
  alunos.push(aluno);
}

const alunosAprovando = alunos.filter((aluno) => aluno.nota >= 6);

const quantidadeDeAlunosAprovados = alunosAprovando.length;

console.log(alunos);
console.log(alunosAprovando);

console.log(
  `A quantidade de alunos aprovados é de ${quantidadeDeAlunosAprovados}`
);
