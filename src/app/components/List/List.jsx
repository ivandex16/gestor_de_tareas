'use client'
import React from 'react'
import { Listbox, ListboxItem, Chip, ScrollShadow, Avatar } from "@nextui-org/react";
import { ListboxWrapper } from "./ListboxWrapper";


export const List = ({ listTareas = [] }) => {

    if (!Array.isArray(listTareas)) {
        throw new Error('listTareas must be an array');
    }
    const [values, setValues] = React.useState(new Set(["2"]));

    console.log('')

    console.log('values ', values)
    const arrayValues = Array.from(values);

    const topContent = React.useMemo(() => {
        if (!arrayValues.length) {
            return null;
        }

        return (
            <ScrollShadow
                hideScrollBar
                className="w-full flex py-0.5 px-2 gap-1"
                orientation="horizontal"
            >
                {arrayValues.map((value) => (
                    <Chip key={value}>{listTareas.find((tarea) => `${tarea.id}` === `${value}`).tarea}</Chip>
                ))}
            </ScrollShadow>
        );
    }, [arrayValues.length]);

    return (
        <ListboxWrapper>
            <Listbox
                //topContent={topContent}
                classNames={{
                    base: "max-w-xs",
                    list: "max-h-[300px] overflow-scroll",
                }}
                defaultSelectedKeys={["1"]}
                items={listTareas}
                label="Assigned to"
                selectionMode="multiple"
                onSelectionChange={setValues}
                variant="flat"
            >
                {(item) => (
                    <ListboxItem key={item.id} textValue={item.tarea}>
                        <div className="flex gap-2 items-center">
                            {/* <Avatar alt={item.tarea} className="flex-shrink-0" size="sm" src={item.avatar} /> */}
                            <div className="flex flex-col">
                                <span className="text-small">{item.tarea}</span>
                                {/* <span className="text-tiny text-default-400">{item.email}</span> */}
                            </div>
                        </div>
                    </ListboxItem>
                )}
            </Listbox>
        </ListboxWrapper>
    );
}
