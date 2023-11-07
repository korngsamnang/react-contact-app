import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateContact as updateContactApi } from "../../services/apiContact.js";
import toast from "react-hot-toast";

export const useUpdateContact = onClose => {
    const queryClient = useQueryClient();
    const { mutate: updateContact, isLoading: isUpdating } = useMutation({
        mutationFn: updateContactApi,
        onSuccess: () => {
            toast.success("Contact successfully updated");
            queryClient.invalidateQueries({ queryKey: ["contacts"] });
            onClose?.();
        },
        onError: err => toast.error(err.message),
    });

    return { updateContact, isUpdating };
};
