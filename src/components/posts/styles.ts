import styled from "styled-components";
import { mixins } from "../../styles/mixins";
import { NavLink } from "react-router-dom";

export const PostsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
    row-gap: 2rem;

    padding-top: 3rem;
    width: 100%;
    max-width: 54rem;
    margin: 0 auto;
`;

export const Post = styled(NavLink)`
    background-color: ${props => props.theme["base-post"]};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    border-radius: 10px;
    gap: 1.25rem;
    height: 16.25rem;
    overflow: hidden;
    text-decoration: none;
`;

export const PostTitle = styled.div`
    background-color: ${props => props.theme["base-post"]};
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 1rem;

    div:first-of-type {
        ${mixins.fonts.titleMPost}      
    }
    
    div:nth-of-type(2) {
        width: 5rem;
        ${mixins.fonts.textS}      
    }
`;

export const PostContentText = styled.div`
    ${mixins.fonts.textM} 
    overflow: hidden;
    display: -webkit-box;
    width: 100%;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical; 
`;