let img = document.getElementById("imgProyecto")
let p = document.getElementById("pProyecto")
let date = document.getElementById("dateProyecto")

const descripciones = {
    'mannad': 'Aplicación móvil en React Native para la gestión de gastos e ingresos y agregar notas, pensado para usarlo en un proyecto personal.',
    'auto': 'Pequeño programa para PC hecho en python para automatizar la eliminacion de archivos, mediante extension de archivo y seleccionando una carpeta.',
    'ajedrez': 'Proyecto de Ajedrez online con estilo minimalista, Backend en PHP y Frontend en JavaScript.',
    'oalarma': 'Aplicación móvil en React Native para activar una alarma de una forma personalizada, pensado para usarlo en un proyecto personal.'
};

const dates = {
    'mannad': '2025',
    'auto': '2023',
    'ajedrez': '2024',
    'oalarma': '2025',
    'logos': '2025',
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
        p.textContent = 'Proximamente...';
    }

    if (dates[id]) {
        date.textContent = dates[id];
    }
}

const sectionProyectos = document.getElementById("proyectos");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        document.body.style.backgroundColor = "var(--beige)";
      } else {
        document.body.style.backgroundColor = "var(--white)";
      }
    });
  },
  { threshold: 0.5 }
);

observer.observe(sectionProyectos);
