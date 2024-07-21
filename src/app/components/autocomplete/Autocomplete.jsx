import React from 'react'
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";

import { FaCircle } from "react-icons/fa6";
export default function SelectLayout({ label = '', placeholder = 'buscar', dataList }) {
    const colors = [
        "default",
        "primary",
        "secondary",
        "success",
        "warning",
        "danger",
    ];

    const [value, setValue] = React.useState("");
    const [color, setColor] = React.useState("default");

    const handleInputChange = (e) => {
        setValue(e)




    }

    React.useEffect(() => {

        switch (value) {
            case 'Completada':
                setColor("success");
                break;

            case 'Por hacer':
                setColor("warning");
                break;

            case 'En progreso':
                setColor("primary");
                break;

            case 'Cancelado':
                setColor("danger");
                break;

            default:
                setColor("default");
                break;
        }

        console.log('value ', value)
    }, [value])

    console.log('color ', color)
    console.log('value ', value)

    return (
        <Autocomplete
            label={label}
            placeholder={placeholder}
            color={color}
            size="sm"
            onInputChange={handleInputChange}
            //variant="bordered"
            defaultItems={dataList}
            startContent={<FaCircle className="text-xl" />}
            defaultSelectedKey="cat"
            className="max-w-xs"

        >
            {(item) => <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>}
        </Autocomplete>
    )
}
