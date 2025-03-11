type Aluno = {
    nome: string;
    faculdade: string;
};

type Profissional = {
    empresa: string;
    funcao: string;
};

type AlunoTrabalhador = Aluno & Profissional;

const registro: AlunoTrabalhador = {
    nome: "Gustavo",
    faculdade: "Ciência da Computação",
    empresa: "InovaTech",
    funcao: "Analista de Sistemas",
};

console.log(`Nome: ${registro.nome}`);
console.log(`Faculdade: ${registro.faculdade}`);
console.log(`Empresa: ${registro.empresa}`);
console.log(`Função: ${registro.funcao}`);