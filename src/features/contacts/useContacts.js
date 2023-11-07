import { useQuery } from "@tanstack/react-query";
import { getContacts } from "../../services/apiContact.js";

export const useContacts = () => {
    const {
        data: contacts,
        isLoading,
        isError,
        error,
    } = useQuery({
        queryKey: ["contacts"],
        queryFn: getContacts,
        // select: data => data.sort((a, b) => b.id - a.id),
    });

    return { contacts, isLoading, isError, error };
};
