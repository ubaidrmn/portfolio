import styled from "styled-components";

export const HomeContainerStyled = styled.div`
    max-width: 100%;
    width: 100%;
    display: flex;
    padding-top: 50px;
    padding-bottom: 100px;

    img {
        height: 100px;
        width: 100px;
        border-radius: 100%;
        object-fit: cover;
        filter: grayscale(100%);
    }

    .child-container {
        max-width: 1000px;
        width: 100%;
        margin: 0px auto;
        padding-left: 30px;
        padding-right: 30px;
        box-sizing: border-box;
    }

    h1 {
        color: white;
        margin: 0px;
        margin-top: 20px;
        font-size: 35px;
    }

    h2 {
        color: white;
        margin: 0px;
        margin-top: 20px;
        font-size: 25px;
    }

    p {
        font-family: 'Special Elite', system-ui;
        color: white;
        margin: 0px;
        margin-top: 20px;
        font-size: 20px;
        font-weight: 200;
        line-height: 35px;
        color: grey;
    }

    span {
        color: #A76EFF;
    }

    #dots {
        font-size: 40px;
        animation-name: dots-animation;
        animation-duration: 1s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        overflow-x: hidden;
        width: 0px;
        color: white;
        margin: 0px;
        padding: 0px;
    }
    
    @keyframes dots-animation {
        0% { width: 0px; }
        50% { width: 25px; }
        100% { width: 35px; }
    }

    button {
        background-color: white;
        border-radius: 30px;
        color: black;
        outline: none;
        padding: 40px;
        padding-top: 10px;
        padding-bottom: 10px;
        border: 0px;
        font-size: 16px;
        font-weight: 600;
        font-family: Inter, sans-serif;
        margin-top: 20px;
        cursor: pointer;
        transition: 0.25s;
        border: 2px solid transparent;
    }

    button:hover {
        background-color: black;
        color: white;
        border: 2px solid white;
    }

    button:active {
        border: 2px solid #A76EFF;
    }

    @media (max-width: 1000px) {

        .img-parent {
            display: flex;
            flex-direction: row;
            justify-content: center;
        }

        #dots {
            margin: 0px auto;
        }

        p, h1, h2 {
            text-align: center;
        }

        .button-parent {
            display: flex;
            flex-direction: row;
            justify-content: center;
        }
    }
`;
