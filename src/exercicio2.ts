interface Operacao {
    (x: number, y: number): number;
}

const calcularProduto: Operacao = (x, y) => x * y;


console.log(calcularProduto(2, 3));
console.log(calcularProduto(5, 10));
console.log(calcularProduto(-4, 7));
console.log(calcularProduto(0, 100)); 