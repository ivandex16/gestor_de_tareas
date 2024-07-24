
'use client'
import React, { useEffect } from 'react'
import DetalleProyect from '@/app/components/cardTask/DetalleEntidad'
import { elemenProyect } from '@/app/api/dataTask'
//import { List } from '@/app/components/List/List'
import TablaTareas from '@/app/components/tablaTareas/TablaTareas'
// import { useParams } from 'next/navigation'
import { obtenerProyectoPorId } from '@/app/api/repository/proyecto.repository'

export default function pages() {

    // const params = useParams();
    // const id = params.idProyect
    // const [data, setData] = React.useState([]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const data = await obtenerProyectoPorId(id);
    //             setData(data);
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     };

    //     fetchData();
    // }, []);



    const componentProps = {
        listTareas: elemenProyect.tareas
    }
    return (
        <div>
            <DetalleProyect title={elemenProyect.titulo} Component={TablaTareas} componentProps={componentProps} />
        </div>
    )
}
