import styled from "styled-components";
import CreateContact from "../features/contacts/CreateContact.jsx";
import { Input } from "./Input.jsx";
import Logo from "./Logo.jsx";
import Row from "./Row.jsx";
import Heading from "./Heading.jsx";

const StyledHeader = styled.header`
    color: rebeccapurple;
    padding-top: 0.6rem;
    padding-bottom: 2rem;
`;

const Header = () => {
    return (
        <StyledHeader>
            <Row type="horizontal">
                <Heading as="h1">My Contact</Heading>
                {/*<Logo />*/}
                <div>
                    <Input placeholder="Search" name="search" />
                    <CreateContact />
                </div>
            </Row>
        </StyledHeader>
    );
};

export default Header;
