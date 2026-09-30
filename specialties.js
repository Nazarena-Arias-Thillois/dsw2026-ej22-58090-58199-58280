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
    let especialidades = [];

    cargarEspecialidades();
    
    const buscarInput = document.getElementById('busqueda');
    if (buscarInput) {
        buscarInput.addEventListener('input', filtrarEspecialidades);
    }

    function cargarEspecialidades() {
        const storedData = localStorage.getItem('specialties');
        especialidades = storedData ? JSON.parse(storedData) : [];
        renderizarTabla(especialidades);
    }

    function renderizarTabla(datos) {
        const tbody = document.getElementById('specialtiesTable'); 
        if(!tbody) return;

        tbody.textContent = ''; 
        
        datos.forEach(item => {
            const fila = document.createElement('tr');

            const tdNombre = document.createElement('td');
            tdNombre.classList.add('nombre');
            
            const iconoDecorativo = document.createElement('div');
            iconoDecorativo.classList.add('icono-especialidad');
            
            const iMed = document.createElement('i');
            iMed.classList.add('fa-solid', 'fa-stethoscope'); 
            
            const textoNombre = document.createElement('span');
            textoNombre.textContent = item.name;

            iconoDecorativo.appendChild(iMed);
            tdNombre.appendChild(iconoDecorativo);
            tdNombre.appendChild(textoNombre);

            const tdDescripcion = document.createElement('td');
            tdDescripcion.textContent = item.description; 

            const tdEstado = document.createElement('td');
            const spanEstado = document.createElement('span');
            const textoEstado = item.status || 'Activo'; 
            
            spanEstado.textContent = textoEstado;
            spanEstado.classList.add('estado', textoEstado.toLowerCase());
            tdEstado.appendChild(spanEstado);

            const tdAcciones = document.createElement('td');
            
            const iconoEditar = document.createElement('i');
            iconoEditar.classList.add('fa-solid', 'fa-pen', 'accion', 'editar');

            const iconoEliminar = document.createElement('i');
            iconoEliminar.classList.add('fa-solid', 'fa-trash', 'accion', 'eliminar');
            iconoEliminar.addEventListener('click', () => eliminarEspecialidad(item.id));

            tdAcciones.appendChild(iconoEditar);
            tdAcciones.appendChild(iconoEliminar);

            fila.appendChild(tdNombre);
            fila.appendChild(tdDescripcion);
            fila.appendChild(tdEstado);
            fila.appendChild(tdAcciones);

            tbody.appendChild(fila);
        });
    }

    function filtrarEspecialidades() {
        const texto = document.getElementById('busqueda').value.toLowerCase();
        const storedData = localStorage.getItem('specialties');
        const dataBase = storedData ? JSON.parse(storedData) : [];

        const filtradas = dataBase.filter(item => 
            item.name.toLowerCase().includes(texto) ||
            item.description.toLowerCase().includes(texto)
        );
        
        renderizarTabla(filtradas);
    }
    function eliminarEspecialidad(id) {

        const storedData = localStorage.getItem('specialties');
        let dataBase = storedData ? JSON.parse(storedData) : [];

        dataBase = dataBase.filter(item => item.id !== id);

        localStorage.setItem('specialties', JSON.stringify(dataBase));
        renderizarTabla(dataBase);
    }
});