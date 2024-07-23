import { configApi } from "../config.api";
export async function guardarProyectoApi(data) {
  await fetch(`${configApi.base}:${configApi.port}/proyects`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // Tipo de contenido
    },
    body: JSON.stringify(data), // Convierte el objeto a formato JSON
  })
    .then((response) => response.json())
    .then((result) => {
      console.log("Respuesta del servidor:", result);
    })
    .catch((error) => {
      console.error("Error al realizar la solicitud:", error);
    });
}

export async function getProyectsApi() {
  const response = await fetch(`${configApi.base}:${configApi.port}/proyects`);
  const data = await response.json();
  return data;
}

export async function obtenerProyectoPorId(id) {
  const response = await fetch(
    `${configApi.base}:${configApi.port}/proyects/${id}`
  );
  const data = await response.json();
  return data;
}
