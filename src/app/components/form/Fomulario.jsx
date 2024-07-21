
"use client"
import React from 'react';
import { Autocomplete, Input } from "@nextui-org/react";
import { DatePicker } from "@nextui-org/react";
import SelectLayout from '../autocomplete/Autocomplete';
import { estados, prioridad } from "@/app/api/dataTask";
import { Textarea } from "@nextui-org/react";

export default function Formulario() {

    const variant = 'flat' // ["flat", "flat", "flat", "flat"];

    return (

        <div className="w-full flex flex-col gap-4">

            <div key={variant} className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-3">
                <Input type="text" variant={variant} label="Nombre del proyecto" />
                <Input type="text" variant={variant} label="Responsable" placeholder="" />
                <DatePicker label="Fecha" className="max-w-[284px]" />

            </div>

            <div key={variant} className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-3">

                <Textarea
                    label="Descripcion"
                    placeholder="Enter your description"
                    className="max-w-xs"
                />
                <SelectLayout label='Estado' dataList={estados} />
                <SelectLayout label='Prioridad' dataList={prioridad} />
            </div>



        </div>

    );
}
