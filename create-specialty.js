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

  const form = document.getElementById('form-crear-especialidades');
    
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const nombre = document.getElementById('nombre').value.trim();
            const descripcion = document.getElementById('descripcion').value.trim();
            const estado = document.getElementById('estado').value;

            const nuevaEspecialidad = {
                id: crypto.randomUUID(),
                name: nombre,
                description: descripcion,
                status: estado
            };

            const specialtiesStorage = localStorage.getItem('specialties');
            let specialties = specialtiesStorage ? JSON.parse(specialtiesStorage) : [];

            specialties.push(nuevaEspecialidad);

            localStorage.setItem('specialties', JSON.stringify(specialties));

            document.getElementById('res-nombre').textContent = nombre;
            document.getElementById('res-descripcion').textContent = descripcion;
            document.getElementById('res-estado').textContent = estado;
            
            const mensajeDiv = document.getElementById('mensaje-creacion');
            mensajeDiv.classList.remove('oculto');

            form.reset();

            setTimeout(() => {
                mensajeDiv.classList.add('oculto');
            }, 3000);
        });
    }

    const btnCancelar = document.getElementById('cancelar');
    if (btnCancelar) {
        btnCancelar.addEventListener('click', () => {
            window.location.href = 'specialty.html'; 
        });
    }
});