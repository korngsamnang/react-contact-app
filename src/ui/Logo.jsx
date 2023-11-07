import styled from "styled-components";

const Logo = () => {
    const StyledLogo = styled.img`
        width: 15rem;
    `;

    return (
        <>
            <StyledLogo src="/black-no-bg.svg" alt="" />
        </>
    );
};

export default Logo;
