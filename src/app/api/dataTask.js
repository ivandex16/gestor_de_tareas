export const elemenTask = {
  id: 1,
  titulo: "Tarea 1",
  descripcion: "",
  estado: "En progreso",
  asignado: "jon  Doe",
  fecha: "2022-11-11",
  nombreProyecto: "Proyecto 1",
  prioridad: "Alta",

  comentarios: [],
};

export const elemenProyect = {
  id: 1,
  titulo: "Proyecto 1",
  descripcion: "",
  estado: "En progreso",
  asignado: "Tony Reichert",
  fecha: "2022-11-11",
  nombreProyecto: "Proyecto 1",
  prioridad: "Alta",
  tareas: [
    {
      id: 1,
      tarea: "Tarea 1",
    },
    {
      id: 2,
      tarea: "tarea 2",
    },
    {
      id: 3,
      tarea: "tarea 3",
    },
  ],
  comentarios: [],
};

export const estados = [
  { label: "En progreso", value: "En progreso" },
  { label: "Completada", value: "Completada" },
  { label: "Por hacer", value: "Pendiente" },
  { label: "Cancelado", value: "Cancelado" },
];

export const prioridad = [
  { label: "Baja", value: "Baja" },
  { label: "Media", value: "Media" },
  { label: "Alta", value: "Alta" },
];
