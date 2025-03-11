interface Carro {
    marca: string;
    modelo: string;
    ano: number;
    motor?: string;
}

const meuCarro: Carro = {
    marca: "BMW",
    modelo: "E36",
    ano: 1998,
    motor: "2.8"
};

console.log(meuCarro);