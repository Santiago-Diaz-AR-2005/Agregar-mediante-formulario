const form = document.getElementById('formEmpleados');
const empleadosDiv = document.getElementById('empleados');


form.addEventListener('submit', (e) => {
    e.preventDefault();
const datos = new FormData(form);
const cuit = datos.get('CUIT');
const apellido = datos.get('Apellido');
const nombres = datos.get('NOMBRES');
const domicilio = datos.get('DOMICILIO');
const provincia = datos.get('PROVINCIA');
const localidad = datos.get('LOCALIDAD');
const telefono = datos.get('TELEFONO');

console.log(cuit, apellido, nombres, domicilio, provincia, localidad, telefono);

const tarjeta = document.createElement('div');
    tarjeta.classList.add('tarjeta'); // CSS después lo decorás

    tarjeta.innerHTML = `
        <h3>${apellido}, ${nombres}</h3>
        <p><strong>CUIT:</strong> ${cuit}</p>
        <p><strong>Domicilio:</strong> ${domicilio}</p>
        <p><strong>Provincia:</strong> ${provincia}</p>
        <p><strong>Localidad:</strong> ${localidad}</p>
        <p><strong>Teléfono:</strong> ${telefono}</p>
    `;

    // Agregar la tarjeta al contenedor
    empleadosDiv.appendChild(tarjeta);

    // Limpiar formulario
    form.reset();
});