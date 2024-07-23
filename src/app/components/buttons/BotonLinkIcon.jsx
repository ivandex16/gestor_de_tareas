
'use client'
import React from 'react'
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { IoMdAdd } from "react-icons/io";

export default function BotonLinkIcon({ url }) {
    return (

        <Button variant="shadow" color="primary" endContent={<IoMdAdd />} className='my-2'>

            <Link href={url}>
                <span>Agregar Proyecto </span>
            </Link>
        </Button>

    )
}
