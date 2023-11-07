import { useState } from "react";
import styled from "styled-components";
import Heading from "../../ui/Heading.jsx";
import { Input } from "../../ui/Input.jsx";
import { Button } from "../../ui/Button.jsx";
import { FormContainer, Label, Select } from "../../ui/Form.jsx";
import { useUpdateContact } from "./useUpdateContact.js";

const ButtonGroup = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
`;

const UpdateContactForm = ({ contactToUpdate, onCloseModal }) => {
    const [name, setName] = useState(contactToUpdate.name);
    const [phone, setPhone] = useState(contactToUpdate.number);
    const [email, setEmail] = useState(contactToUpdate.email);
    const [status, setStatus] = useState(contactToUpdate.status);

    const { updateContact, isUpdating } = useUpdateContact(onCloseModal);

    const handleUpdate = e => {
        e.preventDefault();
        if (!name || !phone || !email) return;
        const contact = {
            ...contactToUpdate,
            name,
            number: phone,
            email,
            status,
        };
        updateContact(contact);
    };

    return (
        <>
            <Heading as="h2">Update Contact</Heading>
            <FormContainer>
                <form onSubmit={handleUpdate}>
                    <Label>Name:</Label>
                    <Input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        disabled={isUpdating}
                    />

                    <Label>Phone:</Label>
                    <Input
                        type="tel"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        disabled={isUpdating}
                    />

                    <Label>Email:</Label>
                    <Input
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        disabled={isUpdating}
                    />

                    <Label>Status:</Label>
                    <Select
                        value={status}
                        onChange={e => setStatus(e.target.value)}
                        disabled={isUpdating}
                    >
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                    </Select>

                    <ButtonGroup>
                        <Button
                            type="reset"
                            variation="secondary"
                            onClick={onCloseModal}
                        >
                            Cancel
                        </Button>
                        <Button disabled={isUpdating}>Update</Button>
                    </ButtonGroup>
                </form>
            </FormContainer>
        </>
    );
};

export default UpdateContactForm;
