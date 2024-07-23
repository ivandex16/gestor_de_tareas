//'use client'
import TableProyects from "@/app/components/tablaProyectos/TableProyects";
//import { useApi } from "@/app/hooks/useApi";
import React from "react";
//import ButtonsAdd from "@/app/components/buttons/buttonsAdd";
import { getProyectsApi } from "@/app/api/repository/proyecto.repository";
import BotonLinkIcon from "@/app/components/buttons/BotonLinkIcon";
import TablaMain from "@/app/components/tablaProyectos/TablaMain";


'/pages/dashboard/nuevoProyecto'

export default async function DashboardPage() {
  //const { data, loading, error } = useApi('http://localhost:3000/proyects', 'GET')

  const datos = await getProyectsApi('http://localhost:3000/proyects')



  return datos ? (
    <div className=" container m-auto">
      <BotonLinkIcon url={'/pages/dashboard/nuevoProyecto'} />
      <TableProyects data={datos} />
      {/* <TablaMain data={datos} /> */}
    </div>
  ) : (
    <div>cargando...</div>
  );
}
