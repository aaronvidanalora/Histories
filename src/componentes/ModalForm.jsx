/* eslint-disable react/prop-types */
import { ModalContent, ModalHeader, ModalBody, ModalFooter, Textarea, Input, Button } from "@nextui-org/react";
import { CalendarIcon, PencilIcon } from 'lucide-react';

function ModalForm({ onClose, setDataHistoria, dataHistoria }) {
    return (
        <ModalContent>
            {(onClose) => (
                <>
                    <ModalHeader className="flex flex-col gap-1">
                        Editar Historia "{dataHistoria?.titulo || 'Historia sin título'}"
                    </ModalHeader>
                    <ModalBody>
                        <Input
                            autoFocus
                            endContent={
                                <CalendarIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                            }
                            label="Fecha"
                            placeholder="Ejemplo: Marzo de 2024"
                            variant="bordered"
                            value={dataHistoria?.fecha || ''}
                            onChange={(e) => setDataHistoria({ ...dataHistoria, fecha: e.target.value })}
                        />
                        <Input
                            endContent={
                                <PencilIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                            }
                            label="Título"
                            placeholder="Título de la historia"
                            variant="bordered"
                            value={dataHistoria?.titulo || ''}
                            onChange={(e) => setDataHistoria({ ...dataHistoria, titulo: e.target.value })}
                        />
                        <Textarea
                            label="Experiencia"
                            placeholder="Describe tu experiencia"
                            variant="bordered"
                            value={dataHistoria?.experiencia || ''}
                            onChange={(e) => setDataHistoria({ ...dataHistoria, experiencia: e.target.value })}
                        />
                        <Textarea
                            label="Comentario"
                            placeholder="Escribe comentarios"
                            variant="bordered"
                            value={dataHistoria?.comentario || ''}
                            onChange={(e) => setDataHistoria({ ...dataHistoria, comentario: e.target.value })}
                        />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" variant="flat" onPress={onClose}>
                            Cerrar
                        </Button>
                        <Button color="success" onPress={onClose}>
                            Editar
                        </Button>
                    </ModalFooter>
                </>
            )}
        </ModalContent>
    );
}

export default ModalForm;
