import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CreateContact as CreateContactApi } from "../../services/apiContact.js";
import toast from "react-hot-toast";

export const useCreateContact = onClose => {
    const queryClient = useQueryClient();
    const { mutate: createContact, isLoading: isCreating } = useMutation({
        mutationFn: CreateContactApi,
        onSuccess: () => {
            toast.success("New contact successfully created");
            queryClient.invalidateQueries({ queryKey: ["contacts"] });
            onClose?.();
        },
        onError: err => toast.error(err.message),
    });

    return { createContact, isCreating };
};
