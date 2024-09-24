document.getElementById('validacao').addEventListener('submit', function(event) {
    event.preventDefault();

    const num1 = parseFloat(document.getElementById('numero1').value);
    const num2 = parseFloat(document.getElementById('numero2').value);
    const resultado = document.getElementById('resultado');
    const erro = document.getElementById('erro');

    resultado.textContent = '';
    erro.textContent = '';

    if (num2 > num1) {

        resultado.textContent = 'Fomulário validado!';
    } else {
        erro.textContent = 'Erro: O segundo número deve ser maior que o primeiro';
    }
});