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
    {id: 1, nombre: "Dr. James Wilson", especialidad: "Cardiología", estado: "Activo", foto: "Nachi.jpeg"},
    {id: 2, nombre: "Dr. Elena Rodriguez", especialidad: "Neurología", estado: "Activo" , foto: "Martu.jpeg"},
    {id: 3, nombre: "Dr. Robert Chen", especialidad: "Pediatría", estado: "De Licencia", foto: "Lula.jpeg"}
  ];

  const tabla = document.getElementById('product-table-body')

  doctores.forEach(doctor => {

    const fila = document.createElement('tr');


    const nombre = document.createElement('td');
    const divDoctorInfo = document.createElement('div');
    divDoctorInfo.classList.add('doctor-info');

    const imgDoctor = document.createElement('img');
    imgDoctor.src = doctor.foto; 
    imgDoctor.alt = doctor.nombre;

    const spanNombre = document.createElement('span');
    spanNombre.classList.add('nombre-doc');
    spanNombre.textContent = doctor.nombre;

    divDoctorInfo.appendChild(imgDoctor);
    divDoctorInfo.appendChild(spanNombre);
    nombre.appendChild(divDoctorInfo);

    const especialidad = document.createElement('td');
    especialidad.textContent = doctor.especialidad;

    const estado = document.createElement('td');
    const spanEstado = document.createElement('span');
    spanEstado.textContent = doctor.estado;

    spanEstado.classList.add('estado');
    if (doctor.estado === 'Activo') {
      spanEstado.classList.add('activo');
    } else {
      spanEstado.classList.add('licencia');
    }
    
    estado.appendChild(spanEstado);

     const acciones = document.createElement('td');

    fila.appendChild(nombre);
    fila.appendChild(especialidad);
    fila.appendChild(estado);
    fila.appendChild(acciones);

    tabla.appendChild(fila);
  });
});