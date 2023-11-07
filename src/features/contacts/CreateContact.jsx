import { Button } from "../../ui/Button.jsx";
import Modal from "../../ui/Modal.jsx";
import CreateContactForm from "./CreateContactForm.jsx";

const CreateContact = () => {
    return (
        <Modal>
            <Modal.Open opens="create">
                <Button>Create</Button>
            </Modal.Open>
            <Modal.Window name="create">
                <CreateContactForm />
            </Modal.Window>
        </Modal>
    );
};

export default CreateContact;
