import styled from "styled-components";

export const NavbarStyled = styled.div`
    max-width: 100%;
    width: 100%;
    color: white;
    padding-top: 30px;
    padding-bottom: 30px;
    box-sizing: border-box;

    .navbar-child {
        max-width: 1000px;
        margin: 0px auto;
        width: 100%;
        display: flex;
        justify-content: flex-end;
        padding-left: 30px;
        padding-right: 30px;
        box-sizing: border-box;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    .navbar-child p {
        margin: 0px;
        margin-left: 20px;
        font-size: 16px;
        cursor: pointer;
        text-decoration: underline;
    }

`;
