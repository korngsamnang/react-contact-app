import styled from "styled-components";

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    margin: 0 auto;
`;

export const Label = styled.label`
    margin-bottom: 5px;
    display: block;
`;

export const Select = styled.select`
    border: 1px solid var(--color-grey-300);
    background-color: var(--color-grey-0);
    border-radius: var(--border-radius-sm);
    padding: 0.8rem 1rem;
    box-shadow: var(--shadow-sm);
    margin-bottom: 10px;
    width: 100%;
`;
