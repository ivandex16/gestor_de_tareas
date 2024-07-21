import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, RadioGroup, Radio } from "@nextui-org/react";
import { EditIcon } from "../tablaProyectos/EditIcon";

export default function MiModal({ children }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [scrollBehavior, setScrollBehavior] = React.useState("inside");

    return (
        <div className="flex flex-col gap-2">
            <Button isIconOnly onPress={onOpen}>  <EditIcon /></Button>

            <RadioGroup
                label="Select scroll behavior"
                orientation="horizontal"
                value={scrollBehavior}
                onValueChange={setScrollBehavior}
            >
                <Radio value="inside">inside</Radio>
                <Radio value="outside">outside</Radio>
            </RadioGroup>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                scrollBehavior={scrollBehavior}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                Modal Title
                            </ModalHeader>
                            <ModalBody>
                                {children}
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={onClose}>
                                    Action
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    );
}
