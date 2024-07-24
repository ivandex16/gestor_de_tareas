import { configApi } from "../config.api";
import { NextResponse } from "next/server";

var Baseurl = `${configApi.base}:${configApi.port}/${configApi.version}`;

export async function guardarProyectoApi(data) {
  await fetch(`http://localhost:3001/api/v1/proyects`, {
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
  const response = await fetch(`http://localhost:3001/api/v1/proyects`, {
    next: { revalidate: 3600 },
  });
  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  console.log("response", response);
  const data = await response.json();
  return data;
}

export async function obtenerProyectoPorId(id) {
  try {
    const response = await fetch(`http://localhost:3001/api/v1/proyects/${id}`);
    console.log("response", response);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener el proyecto:", error);
  }
}
