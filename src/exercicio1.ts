interface Carro {
    marca: string;
    modelo: string;
    ano: number;
    motor?: string;  // Propriedade opcional
}

const meuCarro: Carro = {
    marca: "BMW",
    modelo: "E36",
    ano: 1998,
    motor: "2.5"
};

console.log(meuCarro);