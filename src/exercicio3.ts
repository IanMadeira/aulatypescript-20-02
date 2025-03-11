function reverterLista<T>(lista: T[]): T[] {
    return lista.slice().reverse();
}

const valores = [10, 20, 30, 40, 50];
console.log(reverterLista(valores)); // [50, 40, 30, 20, 10]

const frutas = ["morango", "uva", "laranja"];
console.log(reverterLista(frutas)); 