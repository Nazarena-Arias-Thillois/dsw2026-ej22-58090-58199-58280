document.addEventListener('DOMContentLoaded', () => {
    let especialidades = [];

    cargarEspecialidades();

    const buscarButton = document.getElementById('buscador');
    buscarButton.addEventListener('click', () => {
    filtrarEspecialidades();
    });

    async function cargarEspecialidades(params) {
        try {
            const response = await fetch('specialties.json');
            const especialidades = await response.json();

            renderizarTabla(especialidades);
        }catch(error){
            console.error("Error al cargar el archivo: ", error)
        }
    }

    function renderizarTabla(datos){
        const body = document.getElementById('specialtiesTable');
        body.innerHTML = '';

        datos.forEach(item => {
            const fila = document.createElement('tr');

            const nombre = document.createElement('td');
            nombre.textContent = item.nombre;

             const descripcion = document.createElement('td');
            descripcion.textContent = item.descripcion; 

            fila.appendChild(nombre);
            fila.appendChild(descripcion);

            body.appendChild(fila);
        });
    }

    function filtrarEspecialidades(){
        const texto = document.getElementById('busqueda').value.toLowerCase();

        const filtradas = especialidades.filter(item => 
            item.nombre.toLowerCase().includes(texto)
        );
        renderizarTabla(filtradas);
    }
});