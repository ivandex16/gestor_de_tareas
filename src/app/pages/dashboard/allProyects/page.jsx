'use client'
import TableProyects from "@/app/components/tablaProyectos/TableProyects";
import { useApi } from "@/app/hooks/useApi";
import React from "react";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function DashboardPage() {
  const { data, loading, error } = useApi('http://localhost:3000/proyects', 'GET')

  if (loading) return <div>Loading...</div>
  console.log('loading', loading)
  console.log('data', data)


  if (error) alert('error al recibir la data')

  return data ? (
    <div>
      <Button variant="ghost" color="primary">
        <Link href={'/pages/dashboard/crearProyecto'}>
          Agregar Proyecto
        </Link>
      </Button>
      <TableProyects data={data} />
    </div>
  ) : (
    <div>No hay datos</div>
  );
}
