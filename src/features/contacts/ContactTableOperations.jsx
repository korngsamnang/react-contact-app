import TableOperations from "../../ui/TableOperations.jsx";
import Filter from "../../ui/Filter.jsx";
import SortBy from "../../ui/SortBy.jsx";

const CabinTableOperations = () => {
    return (
        <TableOperations>
            <Filter
                options={[
                    { value: "all", label: "All" },
                    { value: "active", label: "Active" },
                    { value: "inactive", label: "Inactive" },
                ]}
            />
            <SortBy
                options={[
                    { value: "name-asc", label: "Sort by name (A-Z)" },
                    { value: "name-desc", label: "Sort by name (Z-A)" },
                    {
                        value: "phone",
                        label: "Sort by phone",
                    },
                    {
                        value: "email-asc",
                        label: "Sort by email (A-Z)",
                    },
                    {
                        value: "email-desc",
                        label: "Sort by email (Z-A)",
                    },
                    {
                        value: "status",
                        label: "Sort by status",
                    },
                ]}
            />
        </TableOperations>
    );
};

export default CabinTableOperations;
