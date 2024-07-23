const columns = [
  { name: "NAME", uid: "name" },
  { name: "RESPONSABLE", uid: "responsable" },
  { name: "PRIORITY", uid: "priority" },
  { name: "STATUS", uid: "status" },
  { name: "DESCRIPTION", uid: "description" },
  { name: "ACTIONS", uid: "actions" },
];

export const columns2 = [
  { name: "ID", uid: "id", sortable: true },
  { name: "PROYECTO", uid: "proyecto", sortable: true },
  { name: "RESPONSABLE", uid: "responsable", sortable: true },
  { name: "ESTADO", uid: "estado", sortable: true },
  { name: "DESCRIPCION", uid: "descripcion" },
  { name: "PRIORIDAD", uid: "priodridad" },
  { name: "STATUS", uid: "status", sortable: true },
  { name: "ACTIONS", uid: "actions" },
];

export const statusOptions = [
  { name: "Active", uid: "active" },
  { name: "Paused", uid: "paused" },
  { name: "Vacation", uid: "vacation" },
];

const users = [
  {
    id: 1,
    project: "poryecto 1",
    name: "Tony Reichert",
    role: "CEO",
    team: "Management",
    status: "en progreso",
    age: "29",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    email: "tony.reichert@example.com",
  },
  {
    id: 2,
    project: "poryecto 2",
    name: "Zoey Lang",
    role: "Technical Lead",
    team: "Development",
    status: "completada",
    age: "25",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    email: "zoey.lang@example.com",
  },
  {
    id: 3,
    project: "poryecto 3",
    name: "Jane Fisher",
    role: "Senior Developer",
    team: "Development",
    status: "por hacer",
    age: "22",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    email: "jane.fisher@example.com",
  },
  {
    id: 4,
    project: "poryecto 4",
    name: "William Howard",
    role: "Community Manager",
    team: "Marketing",
    status: "en progreso",
    age: "28",
    avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
    email: "william.howard@example.com",
  },
  {
    id: 5,
    project: "poryecto 5",
    name: "Kristen Copper",
    role: "Sales Manager",
    team: "Sales",
    status: "en progreso",
    age: "24",
    avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
    email: "kristen.cooper@example.com",
  },
];

export { columns, users };
