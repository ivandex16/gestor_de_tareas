
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
import { redirect, useRouter } from 'next/navigation';
import { useParams } from 'next/navigation'
import { estados, prioridad } from "@/app/api/dataTask";
import { obtenerProyectoPorId } from "@/app/api/repository/proyecto.repository";
//import CommentsBox from "../comments/CommentsBox";
import { Chip } from "@nextui-org/react";

function getColorItem(value, Update) {

    switch (value) {
        case 'baja':
        case 'Completada':
            Update("success");
            break;

        case 'media':
        case 'Por hacer':
            Update("warning");
            break;

        case 'En progreso':
            Update("primary");
            break;

        case 'alta':
        case 'Cancelado':
            Update("danger");
            break;

        default:
            Update("default");
            break;
    }
}

export default function DetalleEntidad({ title = '', Component, componentProps }) {
    const [data, setData] = React.useState([]);

    const router = useRouter();
    const params = useParams();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await obtenerProyectoPorId(params.idProyect);
                if (!data) {


                }
                setData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);



    const [values, setValues] = useState({
        estado: data.status,
        prioridad: data.priority
    })


    useEffect(() => {

        if (data.status && data.priority)
            setValues((prev) => ({
                ...prev,
                estado: data.status,
                prioridad: data.priority
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

    const [color, setColor] = useState("default");
    const [color2, setColor2] = useState("default");

    React.useEffect(() => {

        getColorItem(data.status, setColor)
        getColorItem(data.priority, setColor2)


    }, [data])
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
                    {/* <div>{<SelectLayout value={values.estado} dataList={estados} label="" placeholder="Select state" handleChange={handleChangeEstado} ariaLabel="estado" />}</div> */}
                    <div> <Chip color={color}> {data.status}</Chip></div>
                    <div className='flex gap-2 items-center'> <span><MdOutlinePriorityHigh /></span> Prioridad</div>
                    {/* <div>{<SelectLayout dataList={prioridad} value={values.prioridad} label="" placeholder="Select priority" handleChange={HanleChangePrioridad} ariaLabel="prioridad" />}</div> */}
                    <div> <Chip color={color2}> {data.priority}</Chip></div>
                    <div className='flex gap-2 items-center'> <span><PiUsersFill /> </span>Responsable</div>
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
