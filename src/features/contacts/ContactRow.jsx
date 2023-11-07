import {
    ActionButton,
    ActionsContainer,
    TableCell,
    TableDataCell,
    TableRow,
} from "../../ui/Table.jsx";
import { BsEye, BsPencil, BsTrash } from "react-icons/bs";
import { useDeleteContact } from "./useDeleteContact.js";
import Modal from "../../ui/Modal.jsx";
import ConfirmDelete from "../../ui/ConfirmDelete.jsx";
import UpdateContactForm from "./UpdateContactForm.jsx";
import ContactView from "./ContactView.jsx";

const ContactRow = ({ contact, index }) => {
    const { deleteContact, isDeleting } = useDeleteContact();

    return (
        <TableRow>
            <TableCell>{index + 1}</TableCell>
            <TableCell>{contact.name}</TableCell>
            <TableCell>{contact.number}</TableCell>
            <TableCell>{contact.email}</TableCell>
            <TableCell>{contact.status}</TableCell>
            <TableDataCell>
                <ActionsContainer>
                    <Modal>
                        <Modal.Open opens="update">
                            <ActionButton>
                                <BsPencil />
                            </ActionButton>
                        </Modal.Open>
                        <Modal.Window name="update">
                            <UpdateContactForm contactToUpdate={contact} />
                        </Modal.Window>
                    </Modal>
                    <Modal>
                        <Modal.Open opens="view">
                            <ActionButton>
                                <BsEye />
                            </ActionButton>
                        </Modal.Open>
                        <Modal.Window name="view">
                            <ContactView contactToView={contact} />
                        </Modal.Window>
                    </Modal>

                    <Modal>
                        <Modal.Open opens="delete">
                            <ActionButton>
                                <BsTrash />
                            </ActionButton>
                        </Modal.Open>
                        <Modal.Window name="delete">
                            <ConfirmDelete
                                onConfirm={() => deleteContact(contact.id)}
                                resourceName="contact"
                                disabled={isDeleting}
                            />
                        </Modal.Window>
                    </Modal>
                </ActionsContainer>
            </TableDataCell>
        </TableRow>
    );
};

export default ContactRow;
