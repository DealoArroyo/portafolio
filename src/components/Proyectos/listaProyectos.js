import logistika from '../../assets/logistika.jpeg';
import menteSana from '../../assets/mentesana.jpeg';
import prevout from '../../assets/prevout.jpeg';

const proyectos = [
    {
        id: 1,
        nombre: "Logistika y Soluciones Gastronómicas",
        Descripcion: "Aplicación web para cotizar eventos completos o servicios extra. Se maneja una base de datos para almacenar a los clientes registrados. Esto ahorra un 30 % de tiempo al hacer que el cliente encuentre el menú, salón, servicios e incluso ofertas.",
        imagen: logistika,
        alt: "Aplicación web de Logistika."
    },
    {
        id: 2,
        nombre: "MenteSana",
        Descripcion: "Página web informativa sobre lo necesarios que es acudir a un psicólogo en cualquier momento. Ofrece un catálogo de expertos en varias ramas de la psicología.",
        imagen: menteSana,
        alt: "Landing Page de consultorio de psicólogos."
    },
    {
        id: 3,
        nombre: "Prevout",
        Descripcion: "Aplicación de escritorio para una institución académica. Esta aplicación mide las probabilidades en que un alumno pueda salirse de esta institución, dependiendo de factores en evaluaciones psicométricas y diagnósticas. Se realizó una red neuronal para medir estas probabilidades.",
        imagen: prevout,
        alt: "Aplicación de escritorio para institución."
    }
];

export default proyectos;