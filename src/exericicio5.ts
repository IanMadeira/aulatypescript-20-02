type RetornoAPI = string | boolean;

function avaliarRetorno(retorno: RetornoAPI): void {
    if (typeof retorno === "string") {
        console.log(`Resposta da API: ${retorno}`);
    } else if (typeof retorno === "boolean") {
        console.log(retorno ? "Sucesso total!" : "Deu ruim, tente novamente.");
    }
}

avaliarRetorno("Conexão estabelecida.");
avaliarRetorno(true);
avaliarRetorno(false);