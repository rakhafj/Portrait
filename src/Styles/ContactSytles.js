import styled from "styled-components";

export const Wrapper = styled.div`
    .btn {
        i {
            font-size: 1rem;
        }
        &-sosmed {
            font-size: 1.5rem;
        }
        &-rounded {
            border-radius: 20px;
        }
    }
    &.outer {
        
    }
    &.inner {
        border: 2px solid silver;
        -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.3);
        -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.3);
        box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.3);
        background: white;
        max-width: fit-content;
    }
    &.two {
        background: url("img/display/contactus.svg");
        background-size: 100%;
        background-position: center;
        background-repeat: no-repeat;
        @media (max-width: 767.98px) {
            height: 30vh;
        }
    }
`;