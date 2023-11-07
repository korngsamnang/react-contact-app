import { GlobalStyles } from "./styles/GlobalStyles.js";
import Header from "./ui/Header.jsx";
import styled from "styled-components";
import ContactTable from "./features/contacts/ContactTable.jsx";
import { Toaster } from "react-hot-toast";
import Spinner from "./ui/Spinner.jsx";
import { useContacts } from "./features/contacts/useContacts.js";
import Contact from "./features/contacts/Contact.jsx";

const Container = styled.div`
    //width: 100%;
    max-width: 900px;
    margin: 0 auto;

    padding: 10px;
    //@media (min-width: 1024px) {
    //    & {
    //        width: 60%;
    //    }
    //}
`;

const App = () => {
    const { isLoading, isError } = useContacts();
    // console.log(isError);
    // if (isLoading || isError) return <Spinner />;
    return (
        <Container>
            <GlobalStyles />
            <Contact />
            <Toaster
                position="top-center"
                gutter={12}
                containerStyle={{ margin: "8px" }}
                toastOptions={{
                    success: {
                        duration: 3000,
                    },
                    error: {
                        duration: 5000,
                    },
                    style: {
                        fontSize: "16px",
                        maxWidth: "500px",
                        padding: "16px 24px",
                        backgroundColor: "var(--color-grey-0)",
                        color: "var(--color-grey-700)",
                    },
                }}
            />
        </Container>
    );
};

export default App;
