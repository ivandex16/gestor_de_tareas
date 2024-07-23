'use client'
import React from 'react'
import { useParams } from 'next/navigation'
import DetalleProyect from '../cardTask/DetalleEntidad'
import { elemenProyect } from '@/app/api/dataTask'
import TablaTareas from '@/app/components/tablaTareas/TablaTareas'

export default function DetalleProyecto() {
    const params = useParams();

    const id = params.idProyect
    console.log('proyectId', id)
    const componentProps = {
        listTareas: elemenProyect.tareas
    }
    return (
        <div>
            <DetalleProyect title={elemenProyect.titulo} data={elemenProyect} Component={TablaTareas} componentProps={componentProps} />
        </div>
    )
}
