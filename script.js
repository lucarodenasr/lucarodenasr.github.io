let img = document.getElementById("imgProyecto")
let p = document.getElementById("pProyecto")
let date = document.getElementById("dateProyecto")

const descripciones = {
    'mannad': 'Aplicación móvil en React Native para la gestión de tareas colaborativas.',
    'auto': 'Script en Python que automatiza procesos repetitivos y optimiza flujos de trabajo.',
    'ajedrez': 'Juego de ajedrez interactivo desarrollado con JavaScript y diseño minimalista.'
};

const dates = {
    'mannad': '2025',
    'auto': '2023',
    'ajedrez': '2024'
};

function selectProjects(opt) {
    const proyectos = document.querySelectorAll('.proyecto')
    const btns = document.querySelectorAll('.btn-opt')
    btns.forEach(btn => {
        btn.classList.remove("focus")
        if (btn.textContent == opt) {
            btn.classList.add("focus")
        }
    })

    proyectos.forEach(proyecto => {
        if (proyecto.classList.contains(opt)) {
            proyecto.style.display = 'flex'
        } else {
            proyecto.style.display = 'none'
            if (opt == "Todos") {
                proyecto.style.display = 'flex'
            }
        }
    })
}

function showSection(id) {
    document.querySelectorAll('section').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

function showProject(id) {
    img.src = 'Img/' + id + '.png';
    img.classList.add('active');
    if (descripciones[id]) {
        p.textContent = descripciones[id];
    } else {
        p.textContent = 'Proyecto sin descripción disponible.';
    }

    if (dates[id]) {
        date.textContent = dates[id];
    }
}