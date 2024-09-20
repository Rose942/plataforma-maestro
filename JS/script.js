document.addEventListener('DOMContentLoaded', () => {
    const recadoForm = document.getElementById('recadoForm');
    const recadosList = document.getElementById('recadosList');
    const actividadForm = document.getElementById('actividadForm');
    const actividadesList = document.getElementById('actividadesList');
    const incidenciaForm = document.getElementById('incidenciaForm');
    const incidenciasList = document.getElementById('incidenciasList');
    const confirmarLecturaBtn = document.getElementById('confirmarLectura');
    const estadoConfirmacion = document.getElementById('estadoConfirmacion');

    // Manejar el envío de recados
    recadoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const recado = document.getElementById('recado').value;
        const recadoDiv = document.createElement('div');
        recadoDiv.textContent = recado;
        recadosList.appendChild(recadoDiv);
        recadoForm.reset();
    });

    // Manejar el envío de actividades
    actividadForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const actividad = document.getElementById('actividad').value;
        const actividadDiv = document.createElement('div');
        actividadDiv.textContent = actividad;
        actividadesList.appendChild(actividadDiv);
        actividadForm.reset();
    });

    // Manejar el envío de incidencias
    incidenciaForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const incidencia = document.getElementById('incidencia').value;
        const incidenciaDiv = document.createElement('div');
        incidenciaDiv.textContent = incidencia;
        incidenciasList.appendChild(incidenciaDiv);
        incidenciaForm.reset();
    });

    // Confirmación de lectura
    confirmarLecturaBtn.addEventListener('click', () => {
        estadoConfirmacion.textContent = 'Gracias, hemos registrado tu confirmación de lectura.';
    });
});