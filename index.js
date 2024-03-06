function calcularFatorial() {
    const numero = parseInt(document.getElementById('numero').value);
    let resultado;

    if (isNaN(numero) || numero < 0) {
        resultado = "Por favor, insira um número inteiro não negativo.";
    } else if (numero === 0 || numero === 1) {
        resultado = 1;
    } else {
        let fatorial = 1;
        for (let i = 2; i <= numero; i++) {
            fatorial *= i;
        }
        resultado = fatorial;
    }

    document.getElementById('resultado').innerText = `O fatorial de ${numero} é: ${resultado}`;
}