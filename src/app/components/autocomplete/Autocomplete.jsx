import React from 'react'
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";

import { FaCircle } from "react-icons/fa6";
export default function SelectLayout({ value = "", label = '', placeholder = 'buscar', dataList, handleChange, ariaLabel }) {
    const colors = [
        "default",
        "primary",
        "secondary",
        "success",
        "warning",
        "danger",
    ];



    const [color, setColor] = React.useState("default");

    const handleInputChange = (e) => {
        handleChange(e)

    }

    React.useEffect(() => {

        switch (value) {
            case 'Baja':
            case 'Completada':
                setColor("success");
                break;

            case 'Media':
            case 'Por hacer':
                setColor("warning");
                break;

            case 'En progreso':
                setColor("primary");
                break;

            case 'Alta':
            case 'Cancelado':
                setColor("danger");
                break;

            default:
                setColor("default");
                break;
        }


    }, [value])



    return (
        <Autocomplete
            label={label}
            placeholder={placeholder}
            color={color}
            size="sm"
            aria-label={ariaLabel}
            onInputChange={handleInputChange}
            //variant="bordered"
            defaultItems={dataList}
            startContent={<FaCircle className="text-xl" />}
            defaultSelectedKey="cat"
            className="max-w-xs"
            value={value}

        >
            {(item) => <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>}
        </Autocomplete>
    )
}
