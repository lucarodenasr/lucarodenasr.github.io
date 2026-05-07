
const proyectos = [
    {
        nombre: "MANNAD",
        descripcion: "Aplicación móvil en React Native para la gestión de gastos e ingresos y agregar notas, pensado para usarlo en un proyecto personal.",
        imagen: "/imgsProyectos/mannad.png",
    },
    {
        nombre: "AutoFiles",
        descripcion: "Pequeño programa para PC hecho en python para automatizar la eliminacion de archivos, mediante extension de archivo y seleccionando una carpeta.",
        imagen: "/imgsProyectos/autofiles.png",
    },
    {
        nombre: "Ajederez",
        descripcion: "Proyecto web de Ajedrez online con estilo minimalista, Backend en PHP y Frontend en JavaScript.",
        imagen: "/imgsProyectos/ajedrez.png",
    },
    {
        nombre: "OAlarma",
        descripcion: "Aplicación móvil desarrollada en Android Studio para activar una alarma de una forma personalizada, pensado para usarlo en un proyecto personal.",
        imagen: "/imgsProyectos/oalarma.png",
    },
    {
        nombre: "Logos",
        descripcion: "Colección de logos diseñados para diferentes proyectos.",
        imagen: "/imgsProyectos/logos.png",
    },
];

const contenedor = document.getElementById("navProyectos");
const descripcion = document.getElementById("descProyecto");
const imagen = document.getElementById("imgProyecto");
let current = 0;

proyectos.forEach((proyecto, index) => {
    const li = document.createElement("li");
    const a = document.createElement("a");

    a.textContent = proyecto.nombre;
    a.addEventListener("click", () => mostrarProyecto(index));
    li.appendChild(a);
    if (index === current) {
        li.classList.add("currentProject");
    }
    contenedor.appendChild(li);
    if (index < proyectos.length - 1) {
        const hr = document.createElement("hr");
        contenedor.appendChild(hr);
    }
});

onload = () => {
    document.querySelectorAll("#navProyectos li")[current].classList.add("currentProject");
    const proyecto = proyectos[current];
    descripcion.textContent = proyecto.descripcion;
    imagen.src = proyecto.imagen;
};

function mostrarProyecto(index) {
    document.querySelectorAll("#navProyectos li")[current].classList.remove("currentProject");
    document.querySelectorAll("#navProyectos li")[index].classList.add("currentProject");
    current = index;
    const proyecto = proyectos[index];
    descripcion.textContent = proyecto.descripcion;
    imagen.src = proyecto.imagen;
}