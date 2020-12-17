var inputSalarioPorMes = document.querySelector('#ganho-mes')
var inputHorasPorDia = document.querySelector('#horas-dia')
var spanValorHora = document.querySelector('#resposta')


function calcularValorHora() {
    var qtdTotalDeHoras = inputHorasPorDia.value * 22
    var valorDeHora = (inputSalarioPorMes.valueAsNumber / qtdTotalDeHoras).toFixed(2).replace(".", ",")

    spanValorHora.textContent = `R$ ${valorDeHora}`
}