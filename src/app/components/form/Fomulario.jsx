
"use client"
import React from 'react';
import { Autocomplete, Input } from "@nextui-org/react";
import { DatePicker } from "@nextui-org/react";
import SelectLayout from '../autocomplete/Autocomplete';
import { estados, prioridad } from "@/app/api/dataTask";
import { Textarea } from "@nextui-org/react";
import SelectAsignacion from '../autocomplete/SelectAsignacion';
import { Divider } from "@nextui-org/react";
import TablaTareas from '../tablaTareas/TablaTareas';
import { Button } from "@nextui-org/react";
import { useRouter } from 'next/navigation';
import { guardarProyectoApi } from '@/app/api/repository/proyecto.repository';

export default function Formulario() {
    const variant = 'flat' // ["flat", "flat", "flat", "flat"];
    const router = useRouter();
    const tareas = []
    const [asignados, setAsignados] = React.useState([])

    const [myArray, setMyArray] = React.useState([1]);

    const [values, setValues] = React.useState({
        name: '',
        responsable: '',
        date: '',
        priority: '',
        status: '',
        description: '',
        tasks: []
    });




    React.useEffect(() => {
        console.log('values', values);
    }, [values])


    const updateValues = (name, value) => {
        setValues((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    const agregarTarea = (name, values) => {
        setValues(prevValues => {
            // Crear una copia de la tarea específica que deseas actualizar
            const updatedTask = {
                ...prevValues[name][0], // copiar la primera tarea
                asignados: [...prevValues[name][0][name], values] // agregar el nuevo asignado
            };

            // Actualizar el array de tareas
            const updatedTasks = [...prevValues[name]];
            updatedTasks[0] = updatedTask;

            // Retornar el nuevo estado
            return {
                ...prevValues,
                task: updatedTasks
            };
        });
    }

    const updateTaskProperty = (index, property, newValue) => {
        setValues(prevValues => ({
            ...prevValues,
            task: prevValues.task.map((t, i) => {
                if (i === index) {
                    if (property === 'asignados') {
                        // Combina los valores existentes con los nuevos valores para 'asignados'
                        // Supongamos que 'newValue' es una cadena separada por comas
                        const newAsignados = newValue.split(',').map(value => value.trim());
                        return {
                            ...t,
                            asignados: [...new Set([...t.asignados, ...newAsignados])]
                        };
                    } else {
                        // Actualiza otras propiedades directamente
                        return {
                            ...t,
                            [property]: newValue
                        };
                    }
                }
                return t;
            })
        }));
    };



    const handleChange = (e) => {

        const { name, value } = e.target;
        updateValues(name, value)
    }

    const handleChangeDate = (date) => {

        updateValues('date', date.toString())
    }



    const handleChangeAsignacion = (user) => {
        updateValues('responsable', user)


    }




    const handleChangeStado = (e) => {

        updateValues('status', e)
    }


    const handleChangePriorida = (e) => {

        updateValues('priority', e)
    }

    const handleGoBack = () => {
        router.back(); // Regresa a la ruta anterior
    };



    React.useEffect(() => {
        console.log('values', values)
    }, [values])



    const handleSubmit = () => {
        guardarProyectoApi(values)
            .then((result) => {
                console.log("Respuesta del servidor:", result);
                //router.push('/dashboard');
            })
            .catch((error) => {
                console.error("Error al realizar la solicitud:", error);
            });
    }

    return (

        <div className="w-full flex flex-col gap-4">

            <div className="h-64 grid grid-rows-2 grid-flow-col gap-4">
                <Input type="text" variant={variant} label="Nombre del proyecto" name='name' size='sm' onChange={handleChange} className='' />
                {/* <Input type="text" variant={variant} label="Responsable" placeholder="" name='responsable' onChange={handleChange} /> */}
                <DatePicker label="Fecha" className="max-w-[284px]" name='date' onChange={handleChangeDate} size='sm' />
                <SelectAsignacion handleChange={handleChangeAsignacion} label="Responsable" />
                <Textarea
                    label="Descripcion"
                    placeholder="Enter your description"
                    className="max-w-xs"
                    value={values.description}
                    onChange={handleChange}
                    name='description'

                />
                <SelectLayout label='Estado' dataList={estados} handleChange={handleChangeStado} />
                <SelectLayout label='Prioridad' dataList={prioridad} handleChange={handleChangePriorida} />

            </div>







            {/* <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-3">

                <div className='flex flex-col w-screen'>
                    <div className='flex flex-wrap gap-2 items-center my-3'>
                        <Button color="secondary" variant="shadow" onClick={() => agregarFila(1)}>
                            Agregar
                        </Button>

                    </div>

                    <TablaTareas
                        numRow={myArray}

                        Descripcion={() => <Textarea
                            label=""
                            name='tareas'
                            placeholder=""
                            aria-label='tareas'
                            className="max-w-xs"
                            onChange={handleTareaDescripcion}

                        />}

                    />

                </div>

            </div> */}

            <div className="flex flex-wrap gap-4 items-center">

                <Button color="primary" variant="shadow" onClick={handleSubmit}>
                    Guardar
                </Button>
                <Button color="default" variant="shadow" onClick={handleGoBack}>
                    Cancelar
                </Button>
            </div>

        </div>

    );
}
