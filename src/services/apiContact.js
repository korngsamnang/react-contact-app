import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3500",
});

export const getContacts = async () => {
    try {
        const res = await api.get("/contacts");
        return res.data;
    } catch (err) {
        throw new Error("Contacts could not be loaded");
    }
};

export const CreateContact = async (contact = {}) => {
    try {
        const res = await api.post("/contacts", contact);
        return res.data;
    } catch (err) {
        throw new Error("Contact could not be created");
    }
};
export const updateContact = async contact => {
    try {
        const res = await api.patch(`/contacts/${contact.id}`, contact);
        return res.data;
    } catch (err) {
        throw new Error("Contact could not be updated");
    }
};

export const deleteContact = async id => {
    try {
        await api.delete(`/contacts/${id}`);
    } catch (err) {
        throw new Error("Contact could not be deleted");
    }
};
