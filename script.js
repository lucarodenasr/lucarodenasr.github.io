function selectProjects(opt) {
    const proyectos = document.querySelectorAll('.proyecto');

    proyectos.forEach(proyecto => {
        if (proyecto.classList.contains(opt)) {
            proyecto.style.display = 'flex';

        } else {
            proyecto.style.display = 'none';
            if (opt == "All") {
                proyecto.style.display = 'flex';
            }
        }
    });
}