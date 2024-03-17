import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const HeaderContainer = styled.header`
    background: linear-gradient(to bottom, ${props => props.theme["base-profile"]}, ${props => props.theme["base-border"]});
    height: 18.5rem;
    display: flex;
    ${mixins.fonts.titleCoda}

    >div{
        flex: 1;
    }
`;

export const LeftEffectContent = styled.div`
    display: flex;
    justify-content: start;
    padding-top: 70px;
    >img{
        width: 409px;
        height: 188px;
    }
`;

export const RightEffectContent = styled.div`
    display: flex;
    justify-content: end;
    padding-top: 30px;
    >img{
        width: 371px;
        height: 236px;
    }    
`;

export const HeaderContent = styled.div`
    width: 100%;
    max-width: 54rem;
    margin: 64px 0 134px 0;

    display: flex;
    flex-direction: column;
    align-items: center;
`;