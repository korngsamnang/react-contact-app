import { useState } from "react";
import Heading from "../../ui/Heading.jsx";
import { Input } from "../../ui/Input.jsx";
import { Button, ButtonGroup } from "../../ui/Button.jsx";
import { useCreateContact } from "./useCreateContact.js";
import { FormContainer, Label, Select } from "../../ui/Form.jsx";

const CreateContactForm = ({ onCloseModal }) => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState("Active");

    const { createContact, isCreating } = useCreateContact(onCloseModal);

    const handleSubmit = e => {
        e.preventDefault();
        if (!name || !phone || !email) return;
        const contact = {
            id: Date.now(),
            name,
            number: phone,
            email,
            status,
        };
        createContact(contact);
    };

    return (
        <>
            <Heading as="h2">Create Contact</Heading>
            <FormContainer>
                <form onSubmit={handleSubmit}>
                    <Label>Name:</Label>
                    <Input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        disabled={isCreating}
                    />

                    <Label>Phone:</Label>
                    <Input
                        type="tel"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        disabled={isCreating}
                    />

                    <Label>Email:</Label>
                    <Input
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        disabled={isCreating}
                    />

                    <Label>Status:</Label>
                    <Select
                        value={status}
                        onChange={e => setStatus(e.target.value)}
                        disabled={isCreating}
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
                        <Button disabled={isCreating}>Create</Button>
                    </ButtonGroup>
                </form>
            </FormContainer>
        </>
    );
};

export default CreateContactForm;
