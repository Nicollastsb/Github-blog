import { useParams } from "react-router-dom";
import { ContentPost } from "../../components/contentPost";
import { HeaderPost } from "../../components/headerPost";
import { ContentPostContainer } from "./styles";
import { useContext, useEffect } from "react";
import { UserGithubContext } from "../../components/contexts/UserGithubContext";

export function Post() {
    const { postId } = useParams();
    const { fetchIssue } = useContext(UserGithubContext);
    
    async function getIssue (id: number){
        await fetchIssue(id);
    }
    
    useEffect(()=>{
        if(postId)
            getIssue(Number(postId))
    }, [])

    return(
        <ContentPostContainer>
            <HeaderPost/>
            <ContentPost/>
        </ContentPostContainer>
    )
}