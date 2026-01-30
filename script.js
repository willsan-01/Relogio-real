const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

setInterval(() => {
  const agora = new Date()

  horas.textContent = String(agora.getHours()).padStart(2, '0')
  minutos.textContent = String(agora.getMinutes()).padStart(2, '0')
  segundos.textContent = String(agora.getSeconds()).padStart(2, '0')
}, 1000)
