const malla = {
  "Primer Año": {
    "1° Semestre": [
      { nombre: "Cálculo I", creditos: 5, id: "calc1" },
      { nombre: "Álgebra I", creditos: 5, id: "alg1" },
      { nombre: "Economía I", creditos: 4, id: "eco1" },
      { nombre: "Gestión de Empresas", creditos: 5, id: "gest1" },
      { nombre: "Derecho Corporativo I", creditos: 3, id: "der1" }
    ],
    "2° Semestre": [
      { nombre: "Cálculo II", creditos: 4, id: "calc2", prerequisitos: ["calc1"] },
      { nombre: "Álgebra II", creditos: 5, id: "alg2", prerequisitos: ["alg1"] },
      { nombre: "Economía II", creditos: 4, id: "eco2", prerequisitos: ["eco1"] },
      { nombre: "Contabilidad I", creditos: 5, id: "cont1", prerequisitos: ["der1"] },
      { nombre: "Gestión de Personas I", creditos: 3, id: "gp1", prerequisitos: ["gest1"] }
    ]
  },
  "Segundo Año": {
    "3° Semestre": [
      { nombre: "Cálculo III", creditos: 4, id: "calc3", prerequisitos: ["calc2"] },
      { nombre: "Contabilidad II", creditos: 5, id: "cont2", prerequisitos: ["cont1"] },
      { nombre: "Microeconomía I", creditos: 4, id: "micro1", prerequisitos: ["eco1"] },
      { nombre: "Estadística I", creditos: 4, id: "est1", prerequisitos: ["calc2", "alg2"] },
      { nombre: "Tecnologías de la Información I", creditos: 2, id: "tic1" },
      { nombre: "Formación General I", creditos: 2, id: "fg1" }
    ],
    "4° Semestre": [
      { nombre: "Macroeconomía I", creditos: 4, id: "macro1", prerequisitos: ["eco2"] },
      { nombre: "Cálculo Financiero", creditos: 3, id: "financ1", prerequisitos: ["calc2"] },
      { nombre: "Tecnologías de la Información II", creditos: 3, id: "tic2", prerequisitos: ["tic1"] },
      { nombre: "Contabilidad de Costos", creditos: 4, id: "costos", prerequisitos: ["cont1"] },
      { nombre: "Inglés Comunicativo I", creditos: 3, id: "ing1" },
      { nombre: "Estadística II", creditos: 4, id: "est2", prerequisitos: ["est1"] }
    ]
  },
  "Tercer Año": {
    "5° Semestre": [
      { nombre: "Finanzas I", creditos: 4, id: "fin1", prerequisitos: ["financ1"] },
      { nombre: "Gestión de Marketing I", creditos: 4, id: "mkt1", prerequisitos: ["gest1"] },
      { nombre: "Inglés Comunicativo II", creditos: 3, id: "ing2", prerequisitos: ["ing1"] },
      { nombre: "Derecho Corporativo II", creditos: 3, id: "der2", prerequisitos: ["der1"] },
      { nombre: "Microeconomía II", creditos: 4, id: "micro2", prerequisitos: ["micro1"] },
      { nombre: "Métodos Cuantitativos", creditos: 4, id: "mq", prerequisitos: ["alg2"] }
    ],
    "6° Semestre": [
      { nombre: "Finanzas II", creditos: 4, id: "fin2", prerequisitos: ["fin1"] },
      { nombre: "Gestión de Operaciones", creditos: 4, id: "op", prerequisitos: ["mq"] },
      { nombre: "Econometría I", creditos: 4, id: "ecoI", prerequisitos: ["est2"] },
      { nombre: "Macroeconomía II", creditos: 4, id: "macro2", prerequisitos: ["macro1"] },
      { nombre: "Administración Estratégica I", creditos: 4, id: "ae1", prerequisitos: ["fin1"] },
      { nombre: "Inglés Comunicativo III", creditos: 3, id: "ing3", prerequisitos: ["ing2"] }
    ]
  },
  "Cuarto Año": {
    "7° Semestre": [
      { nombre: "Evaluación de Proyectos", creditos: 4, id: "eval", prerequisitos: ["fin1", "micro2"] },
      { nombre: "Inglés Comunicativo IV", creditos: 3, id: "ing4", prerequisitos: ["ing3"] },
      { nombre: "Gestión de Marketing II", creditos: 4, id: "mkt2", prerequisitos: ["mkt1"] },
      { nombre: "Complementaria 1", creditos: 2, id: "comp1" },
      { nombre: "Electiva 1", creditos: 4, id: "elec1" },
      { nombre: "Gestión de Personas II", creditos: 4, id: "gp2", prerequisitos: ["ae1"] }
    ],
    "8° Semestre": [
      { nombre: "Electiva 2", creditos: 4, id: "elec2" },
      { nombre: "Electiva 3", creditos: 4, id: "elec3" },
      { nombre: "Electiva 4", creditos: 4, id: "elec4" },
      { nombre: "Administración Estratégica II", creditos: 5, id: "ae2", prerequisitos: ["ae1"] },
      { nombre: "Metodología de la Investigación en Administración", creditos: 5, id: "met", prerequisitos: ["ae1"] }
    ]
  },
  "Quinto Año": {
    "9° Semestre": [
      { nombre: "Electiva 5", creditos: 4, id: "elec5" },
      { nombre: "Electiva 6", creditos: 4, id: "elec6" },
      { nombre: "Electiva 7", creditos: 4, id: "elec7" },
      { nombre: "Electiva 8", creditos: 4, id: "elec8" },
      { nombre: "Electiva 9", creditos: 4, id: "elec9" }
    ],
    "10° Semestre": [
      { nombre: "Electiva 10", creditos: 4, id: "elec10" },
      { nombre: "Electiva 11", creditos: 4, id: "elec11" },
      { nombre: "Electiva 12", creditos: 4, id: "elec12" },
      { nombre: "Trabajo Profesional en Administración", creditos: 10, id: "tpa", prerequisitos: ["met"] }
    ]
  }
};

const container = document.getElementById("malla");
const cursosMap = new Map();

function crearCurso(curso) {
  const div = document.createElement("div");
  div.className = "curso";
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.disabled = curso.prerequisitos && curso.prerequisitos.length > 0;
  checkbox.id = curso.id;
  const label = document.createElement("label");
  label.htmlFor = curso.id;
  label.textContent = `${curso.nombre} (${curso.creditos} créditos)`;

  checkbox.addEventListener("change", () => {
    div.classList.toggle("completado", checkbox.checked);
    cursosMap.forEach(c => {
      if (c.prerequisitos) {
        const cumplidos = c.prerequisitos.every(pid => document.getElementById(pid).checked);
        document.getElementById(c.id).disabled = !cumplidos;
      }
    });
  });

  div.appendChild(checkbox);
  div.appendChild(label);
  cursosMap.set(curso.id, curso);
  return div;
}

const mainContainer = document.createElement("div");
mainContainer.className = "container";

for (const [año, semestres] of Object.entries(malla)) {
  const añoDiv = document.createElement("div");
  añoDiv.className = "anio";

  const añoHeader = document.createElement("h2");
  añoHeader.textContent = año;
  añoDiv.appendChild(añoHeader);

  const semestresDiv = document.createElement("div");
  semestresDiv.className = "semestres";

  for (const [semestre, cursos] of Object.entries(semestres)) {
    const semDiv = document.createElement("div");
    semDiv.className = "semestre";
    const semTitle = document.createElement("h3");
    semTitle.textContent = semestre;
    semDiv.appendChild(semTitle);
    cursos.forEach(curso => semDiv.appendChild(crearCurso(curso)));
    semestresDiv.appendChild(semDiv);
  }

  añoDiv.appendChild(semestresDiv);
  mainContainer.appendChild(añoDiv);
}

container.appendChild(mainContainer);
