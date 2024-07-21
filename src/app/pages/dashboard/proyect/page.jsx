import React from 'react'
import DetalleProyect from '../../../components/cardTask/DetalleEntidad'
import { elemenProyect } from '@/app/api/dataTask'
import { List } from '@/app/components/List/List'

export default function pages() {
    const propsComponenst = {
        listTareas: elemenProyect.tareas
    }
    return (
        <div>
            <DetalleProyect title={elemenProyect.titulo} data={elemenProyect} Component={List} propsComponet={propsComponenst} />
        </div>
    )
}
