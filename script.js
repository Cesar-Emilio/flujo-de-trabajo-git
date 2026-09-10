const contenedor = document.getElementById('contenedor');
const btnGenerar = document.getElementById('btnGenerar');
const contador = document.getElementById('contador');

let totalGeneradas = 0;

function generarColorHex() {
  const letras = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letras[Math.floor(Math.random() * 16)];
  }
  return color;
}

function crearTarjetas(cantidad) {
  contenedor.innerHTML = '';

  for (let i = 0; i < cantidad; i++) {
    const color = generarColorHex();

    const tarjeta = document.createElement('div');
    tarjeta.classList.add('tarjeta');
    tarjeta.style.backgroundColor = color;
    tarjeta.textContent = color;

    contenedor.appendChild(tarjeta);
  }
}

btnGenerar.addEventListener('click', () => {
  crearTarjetas(5);
  totalGeneradas++;
  contador.textContent = `Paletas generadas: ${totalGeneradas}`;
  document.body.style.backgroundColor = generarColorHex() + '33';
});

crearTarjetas(5);