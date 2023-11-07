import { createContext, useContext, useState } from "react";
import { useContacts } from "../features/contacts/useContacts.js";

const TableOperationsContext = createContext({});

export const TableOperationsProvider = ({ children }) => {
    const { contacts } = useContacts();
    const [filterOption, setFilterOption] = useState("all");
    const [sortBy, setSortBy] = useState("name-asc");

    let filterContacts;
    if (filterOption === "all") filterContacts = contacts;
    if (filterOption === "active")
        filterContacts = contacts.filter(
            contact => contact.status === "Active"
        );
    if (filterOption === "inactive")
        filterContacts = contacts.filter(
            contact => contact.status === "Inactive"
        );
    if (sortBy === "name-asc")
        filterContacts?.sort((a, b) => a.name.localeCompare(b.name));
    if (sortBy === "name-desc")
        filterContacts?.sort((a, b) => b.name.localeCompare(a.name));
    if (sortBy === "phone")
        filterContacts?.sort((a, b) => a.number.localeCompare(b.number));
    if (sortBy === "email-asc")
        filterContacts?.sort((a, b) => a.email.localeCompare(b.email));
    if (sortBy === "email-desc")
        filterContacts?.sort((a, b) => b.email.localeCompare(a.email));
    if (sortBy === "status")
        filterContacts?.sort((a, b) => a.status.localeCompare(b.status));
    const sortContacts = filterContacts;

    return (
        <TableOperationsContext.Provider
            value={{
                sortBy,
                setSortBy,
                filterOption,
                setFilterOption,
                contacts: sortContacts,
            }}
        >
            {children}
        </TableOperationsContext.Provider>
    );
};

export const useTableOperations = () => {
    return useContext(TableOperationsContext);
};
