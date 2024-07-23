
'use client'
import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Image } from "@nextui-org/react";
import SelectLayout from "../autocomplete/Autocomplete";
import { TbProgress } from "react-icons/tb";
import { PiUsersFill } from "react-icons/pi";
import { CiCalendarDate } from "react-icons/ci";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { MdOutlinePriorityHigh } from "react-icons/md";
import { Button } from "@nextui-org/react";
//import Link from 'next/link'
import { useRouter } from 'next/navigation';


import { estados, prioridad } from "@/app/api/dataTask";
//import CommentsBox from "../comments/CommentsBox";

export default function DetalleEntidad({ data = {}, title = '', Component, componentProps }) {

    const router = useRouter();

    console.log('data', data);

    const [values, setValues] = useState({
        estado: "",
        prioridad: ""
    })


    useEffect(() => {
        setValues((prev) => ({
            ...prev,
            estado: data.estado,
            prioridad: data.prioridad
        }))
    }, [data])

    const handleGoBack = () => {
        router.back(); // Regresa a la ruta anterior
    };



    const handleChangeEstado = (e) => {

        setValues((prev) => ({
            ...prev,
            estado: e
        }))
    }


    const HanleChangePrioridad = (e) => {
        setValues((prev) => ({
            ...prev,
            prioridad: e
        }))
    }
    return (
        <Card className="max-w-[600px]">
            <CardHeader className="flex gap-3">
                <Image
                    alt="nextui logo"
                    height={40}
                    radius="sm"
                    src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                    width={40}
                />
                <div className="flex flex-col">
                    <p className="text-md">{title} </p>

                </div>
            </CardHeader>
            <Divider />
            <CardBody>
                <div className='grid gap-4 grid-cols-2 grid-rows-2'>
                    <div className='flex gap-2 items-center' > <span><TbProgress /></span>  status</div>
                    <div>{<SelectLayout value={values.estado} dataList={estados} label="" placeholder="Select state" handleChange={handleChangeEstado} ariaLabel="estado" />}</div>

                    <div className='flex gap-2 items-center'> <span><MdOutlinePriorityHigh /></span> Prioridad</div>
                    <div>{<SelectLayout dataList={prioridad} value={values.prioridad} label="" placeholder="Select priority" handleChange={HanleChangePrioridad} ariaLabel="prioridad" />}</div>

                    <div className='flex gap-2 items-center'> <span><PiUsersFill /> </span>asignado</div>
                    <div>{data.responsable} </div>
                    <div className='flex gap-2 items-center'> <span><CiCalendarDate /></span>fecha inicio</div>
                    <div>{data.date}</div>
                    <div className='flex gap-2 items-center'> <span><AiOutlineFundProjectionScreen /></span> Projecto</div>
                    <p>{data.name}</p>

                </div>
                {Component && (
                    <>
                        <Divider className="my-4" />
                        <Component {...componentProps} />
                    </>
                )}


            </CardBody>
            <Divider />
            <CardFooter>
                <div className="flex flex-wrap gap-4 items-center">
                    <Button color="primary">
                        Guardar
                    </Button>

                    <Button color="danger" onClick={handleGoBack}>


                        Atras

                    </Button>
                </div>
                {/* <Link
                    isExternal
                    showAnchorIcon
                    href="https://github.com/nextui-org/nextui"
                >
                    Visit source code on GitHub.
                </Link> */}
            </CardFooter>
        </Card>
    );
}
