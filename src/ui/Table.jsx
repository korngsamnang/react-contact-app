import styled from "styled-components";

export const TableContainer = styled.div`
    display: flex;
    flex-direction: column;
    overflow-x: auto;
`;
export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-top: 0.5rem;
`;

export const TableHead = styled.thead`
    background-color: #f2f2f2;
`;

export const TableRow = styled.tr`
    &:nth-child(even) {
        background-color: #f9f9f9;
    }
`;

export const TableCell = styled.th`
    padding: 10px;
    text-align: left;
    font-weight: normal;
    white-space: nowrap;
`;

export const TableDataCell = styled.td`
    padding: 10px;
`;

export const ActionsContainer = styled.div`
    display: flex;
    gap: 5px;
`;

export const ActionButton = styled.button`
    //padding: 2px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: transparent;
    cursor: pointer;
`;
