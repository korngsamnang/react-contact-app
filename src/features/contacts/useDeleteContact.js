import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteContact as deleteContactApi } from "../../services/apiContact.js";
import toast from "react-hot-toast";

export const useDeleteContact = () => {
    const queryClient = useQueryClient();
    const { mutate: deleteContact, isLoading: isDeleting } = useMutation({
        mutationFn: deleteContactApi,
        onSuccess: () => {
            toast.success("Contact successfully deleted");
            queryClient.invalidateQueries({ queryKey: ["contacts"] });
        },
        onError: err => toast.error(err.message),
    });

    return { deleteContact, isDeleting };
};
