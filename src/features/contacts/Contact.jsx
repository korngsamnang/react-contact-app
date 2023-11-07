import Header from "../../ui/Header.jsx";
import ContactTable from "./ContactTable.jsx";
import Row from "../../ui/Row.jsx";
import Heading from "../../ui/Heading.jsx";
import CabinTableOperations from "./ContactTableOperations.jsx";
import { TableOperationsProvider } from "../../contexts/TableOperationsContext.jsx";

const Contact = () => {
    return (
        <TableOperationsProvider>
            <Header />
            <Row type="horizontal">
                <Heading as="h3">All Contacts</Heading>
                <CabinTableOperations />
            </Row>
            <ContactTable />
        </TableOperationsProvider>
    );
};

export default Contact;
