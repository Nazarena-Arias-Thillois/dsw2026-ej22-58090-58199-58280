document.addEventListener('DOMContentLoaded', () => {
  const logoutButton = document.getElementById('logout');
  const menuButton = document.getElementById('menu');
  const nav = document.getElementById('sidebar');
  logoutButton.addEventListener('click', () => {
    window.location.href = 'login.html';
  });

  menuButton.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  const doctores = [
    {id: 1, nombre: "Dr. James Wilson", especialidad: "Cardiología", estado: "Activo"},
    {id: 2, nombre: "Dr. Elena Rodriguez", especialidad: "Neurología", estado: "Activo"},
    {id: 3, nombre: "Dr. Robert Chen", especialidad: "Pediatría", estado: "De Licencia"}
  ];

  const tabla = document.getElementById('product-table-body')

  doctores.forEach(doctor => {

    const fila = document.createElement('tr');

    const nombre = document.createElement('td');
    nombre.textContent = doctor.nombre;
    const especialidad = document.createElement('td');
    especialidad.textContent = doctor.especialidad;
    const estado = document.createElement('td');
    estado.textContent = doctor.estado;
    const acciones = document.createElement('td');

    fila.appendChild(nombre);
    fila.appendChild(especialidad);
    fila.appendChild(estado);
    fila.appendChild(acciones);

    tabla.appendChild(fila);
  });
});