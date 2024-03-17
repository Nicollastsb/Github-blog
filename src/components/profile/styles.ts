import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const ProfileContainer = styled.div`
    background: ${props => props.theme["base-profile"]};

    width: 100%;
    max-width: 54rem;
    height: 212px;
    margin: -5.5rem auto;
    
    border-radius: 10px;
    display: flex;
    flex-direction: row;

    >img{
        padding: 2rem 2rem 2rem 2.5rem;
        border-radius: 8px;
    }
`;

export const ProfileTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2rem 2rem 2rem 0; 
    width: 100%;
    gap: 8px;
`;


export const ProfileTitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    >span{
        ${mixins.fonts.titleL}
    }
    >a {
        display: flex;
        align-items: center;
        gap: 0.5rem;        
        cursor: pointer;
        ${mixins.fonts.gitHubUrl}        
        &:hover {
            text-decoration: underline;
        }
    }
`;

export const ProfileDescriptionContainer = styled.div`
    >span{
        ${mixins.fonts.titleM}
    }
`;

export const ProfileBottomContainer = styled.div`
    display: flex;
    margin-top: auto;
    gap: 1.5rem;
    >div {
        display: flex;
        align-items: center;
        gap: 0.5rem;              
        ${mixins.fonts.gitHubUrl}     

        >a {
            cursor: pointer;
            ${mixins.fonts.titleM}
            text-decoration: none;
            &:hover {
            text-decoration: underline;
            text-decoration-color:  ${props => props.theme["base-text"]};
        }
        }

        >svg{
            color: ${props => props.theme["base-label"]};
        }
        >span{
            ${mixins.fonts.titleM}
        }
    }
`;