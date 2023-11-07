import { Table, TableCell, TableHead, TableRow } from "../../ui/Table.jsx";

const ContactView = ({ contactToView }) => {
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Status</TableCell>
                </TableRow>
            </TableHead>
            <tbody>
                <TableRow>
                    <TableCell>{contactToView.name}</TableCell>
                    <TableCell>{contactToView.number}</TableCell>
                    <TableCell>{contactToView.email}</TableCell>
                    <TableCell>{contactToView.status}</TableCell>
                </TableRow>
            </tbody>
        </Table>
    );
};

export default ContactView;
