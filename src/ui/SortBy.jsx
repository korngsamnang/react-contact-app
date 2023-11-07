import Select from "./Select.jsx";
import { useTableOperations } from "../contexts/TableOperationsContext.jsx";

const SortBy = ({ options }) => {
    const { sortBy, setSortBy } = useTableOperations();

    return (
        <Select
            options={options}
            type="white"
            value={sortBy}
            onChange={e => setSortBy(e.target.value)}
        />
    );
};

export default SortBy;
