import { useContacts } from "./useContacts.js";
import {
    Table,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "../../ui/Table.jsx";
import Spinner from "../../ui/Spinner.jsx";
import ContactRow from "./ContactRow.jsx";
import { useTableOperations } from "../../contexts/TableOperationsContext.jsx";

const ContactTable = () => {
    const { isLoading, isError, error } = useContacts();
    const { contacts } = useTableOperations();

    if (isLoading) return <Spinner />;
    if (isError) return <p>{error.message}</p>;
    if (!contacts?.length) return <p>No contact to display</p>;

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>No.</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <tbody>
                    {contacts.map((contact, index) => (
                        <ContactRow
                            contact={contact}
                            index={index}
                            key={contact.id}
                        />
                    ))}
                </tbody>
            </Table>
        </TableContainer>
    );
};

export default ContactTable;
