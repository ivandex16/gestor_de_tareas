
"use client"
import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip, getKeyValue } from "@nextui-org/react";
import { EditIcon } from "./EditIcon";
import { DeleteIcon } from "./DeletIcon";
import { EyeIcon } from "./EyeIcon";
import Link from 'next/link'


import { columns, users } from "../../api/data"

const statusColorMap = {
  Enprogreso: "primary",
  Cancelado: "danger",
  Completado: "success",
  Porhacer: "warning",
};

export default function TableProyects({ data = [] }) {


  const renderCell = React.useCallback((data, columnKey) => {
    const cellValue = data[columnKey];



    switch (columnKey) {
      case "name":
        return (
          <User
            avatarProps={{ radius: "lg", src: data.avatar }}
            description={data.responsable}
            name={cellValue}
          >
            {data.responsable}
          </User>
        );
      case "role":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
            <p className="text-bold text-sm capitalize text-default-400">{data.team}</p>
          </div>
        );
      case "status":
        return (
          <Chip className="capitalize" color={statusColorMap[data.status.replace(/\s+/g, "")]} size="sm" variant="flat">
            {cellValue}
          </Chip>
        );
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Detalle">

              <Link className="text-lg text-default-400 cursor-pointer active:opacity-50" href={`/dashboard/proyect/${data._id}`}>
                <EyeIcon />
              </Link>
            </Tooltip>
            <Tooltip content="agregar tarea">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EditIcon />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Eliminar proyecto">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <DeleteIcon />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  console.log('proyectos ', data)
  return (
    <Table aria-label="Example table with custom cells" classNames={{
      base: "max-h-[470px] overflow-scroll",
      table: "min-h-[420px]",
    }}>
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={data}>
        {(item) => (
          <TableRow key={item._id}>
            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
