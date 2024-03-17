import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const HeaderPostContainer = styled.div`
    background: ${props => props.theme["base-profile"]};

    width: 100%;
    max-width: 54rem;
    margin: -5.5rem auto;
    padding: 2rem;
    
    border-radius: 10px;
    display: flex;
    flex-direction: column;
`;

export const HeaderPostTitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    >span, a {        
        display: flex;
        align-items: center;
        ${mixins.fonts.gitHubUrl}  
        gap: 0.5rem; 
        &:hover {       
            cursor: pointer;
            text-decoration: underline;
            text-decoration-color:  ${props => props.theme["blue"]};
        }       
    }
`;

export const HeaderPostTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    height: 100%;
`;

export const NamePostContainer = styled.div`
    padding-top: 1.25rem;
    padding-bottom: 0.5rem;
    >span{        
        ${mixins.fonts.titleL}  
    }
`;

export const PostBottomContainer = styled.div`
    display: flex;
    margin-top: auto;
    gap: 1.5rem;
    >div {
        display: flex;
        align-items: center;
        gap: 0.5rem;              

        >svg{
            color: ${props => props.theme["base-label"]};
        }
        >span{
            ${mixins.fonts.titleM}
        }
    }
`;