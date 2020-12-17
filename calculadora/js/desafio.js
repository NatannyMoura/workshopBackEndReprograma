let valorHora = document.querySelector('#valor-hora')
let horasProjeto = document.querySelector('#horas-projeto')
let resp = document.querySelector('#resposta')

console.log('Valor Hora', valorHora)
console.log('Horas Projeto', horasProjeto)


function calcular() {
    let total = (valorHora.valueAsNumber * horasProjeto.valueAsNumber).toFixed(2).replace(".", ",")
    resp.innerHTML = `O total do seu projeto é:<strong> R$ ${total}</strong> `
}