import { Button, Checkbox, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Textarea, Input } from "@nextui-org/react"; // Importa Input de @nextui-org/react, no de postcss
import Cards from "./componentes/Cards";
import { Calendar, Edit2, Link, LockIcon, MailIcon, PlusCircle } from 'lucide-react';
import { useDisclosure } from "@nextui-org/react";

export default function App() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold p-6">Mis historias</h1>
      <div className="flex justify-center items-center"></div>
      <div>
        <Cards />
      </div>
      <div className="p-10 justify-end flex">
        <button
          className="bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full flex items-center"
          onClick={onOpen} 
        >
          <PlusCircle size={45} />
        </button>
      </div>
      <Button onPress={onOpen} color="primary">Open Modal</Button>
      <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        placement="top-center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  endContent={
                    <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Email"
                  placeholder="Enter your email"
                  variant="bordered"
                />
                <Input
                  endContent={
                    <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                  variant="bordered"
                />
                <div className="flex py-2 px-1 justify-between">
                  <Checkbox
                    classNames={{
                      label: "text-small",
                    }}
                  >
                    Remember me
                  </Checkbox>
                  <Link color="primary" href="#" size="sm">
                    Forgot password?
                  </Link>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Sign in
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
    
  );
}
