'use client'
import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";

export default function TablaTareas({ tareas, Colaboradores, Descripcion, numRow = [] }) {

    const nombres = [{
        uid: "1",
        status: "Active",
        tarea: "CEO"
    },
    {
        uid: "2",

        status: "Active",
        tarea: "CTO"
    },

    {
        uid: "3",

        status: "Active",
        tarea: "COO"
    }

    ]

    return (
        <Table aria-label="Example static collection table">
            <TableHeader>
                <TableColumn>ASIGNADO</TableColumn>
                <TableColumn>TAREA</TableColumn>
                <TableColumn>STATUS</TableColumn>
            </TableHeader>
            <TableBody>
                {
                    nombres.map((item, index) => (
                        <TableRow key={index}>
                            <TableCell className=" ">{item.tarea}</TableCell>
                            <TableCell>{item.uid}</TableCell>
                            <TableCell> {item.status}</TableCell>
                        </TableRow>
                    ))
                }
                {/* <TableRow key="1">
                    <TableCell>{<Input />}</TableCell>
                    <TableCell>CEO</TableCell>
                    <TableCell>Active</TableCell>
                </TableRow> */}

            </TableBody>
        </Table>
    );
}
