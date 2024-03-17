import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const SearchBarContainer = styled.div`
    width: 100%;
    max-width: 54rem;
    padding-top: 10rem;
    gap: 0.75rem;

    display: flex;
    flex-direction: column;
    margin: 0 auto;

`;

export const SearchBarTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    span:first-of-type {
        ${mixins.fonts.titleS}      
    }
    
    span:nth-of-type(2) {
        ${mixins.fonts.textS}      
    }
`;

export const SearchBarInput = styled.div`
    display: flex;
    flex-direction: column;

    input{
        padding: 0.75rem 1rem 0.75rem 1rem;
        border: 1px solid ${props => props.theme["base-label"]};
        border-radius: 6px;
        background-color: ${props => props.theme["base-input"]};
        color: ${props => props.theme["base-label"]};
    }

    input::placeholder {
        color: ${props => props.theme["base-label"]};
    }
`;