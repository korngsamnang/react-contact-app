import styled, { css } from "styled-components";

export const Input = styled.input`
    ${props =>
        props.name === "search" &&
        css`
            border: 1px solid var(--color-grey-300);
            background-color: var(--color-grey-0);
            border-radius: var(--border-radius-sm);
            padding: 1rem 1rem;
            box-shadow: var(--shadow-sm);
            margin-right: 0.8rem;
        `}
    ${props =>
        props.name === "form" &&
        css`
            border: 1px solid var(--color-grey-300);
            background-color: var(--color-grey-0);
            border-radius: var(--border-radius-sm);
            padding: 0.8rem 1rem;
            box-shadow: var(--shadow-sm);
            margin-bottom: 10px;
            width: 100%;
        `}
`;
Input.defaultProps = {
    name: "form",
};
