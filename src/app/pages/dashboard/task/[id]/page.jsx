'use client'
import React from 'react'
import TaskCard from '../../../../components/cardTask/DetalleEntidad'
import { elemenTask } from '@/app/api/dataTask'
import CommentsBox from '@/app/components/comments/CommentsBox'
import { useParams } from 'next/navigation'

export default function Taskpage() {
    const params = useParams();

    console.log('task', params)
    return (
        <div className='container'>

            <TaskCard data={elemenTask} title={`Tarea ${params.id}`} Component={CommentsBox} />
        </div>
    )
}
