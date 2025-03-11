interface Armazem<T> {
    adicionar(item: T): void;
    listarTodos(): T[];
}

type Pessoa = {
    nome: string;
    email: string;
};

class CadastroPessoa implements Armazem<Pessoa> {
    private pessoas: Pessoa[] = [];

    adicionar(item: Pessoa): void {
        this.pessoas.push(item);
    }

    listarTodos(): Pessoa[] {
        return this.pessoas;
    }
}

const bancoPessoas = new CadastroPessoa();

bancoPessoas.adicionar({ nome: "Carlos", email: "ricardinho@gmail.com" });
bancoPessoas.adicionar({ nome: "Ana", email: "aninha@gmail.com" });

console.log(bancoPessoas.listarTodos());