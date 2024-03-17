import { useContext } from "react";
import { UserGithubContext } from "../contexts/UserGithubContext";
import { ContentPostContainer } from "./styles";
import Markdown from "react-markdown";

export function ContentPost() {
    const { issue } = useContext(UserGithubContext);
    return(
        <ContentPostContainer>
            <Markdown>{issue.body}</Markdown>
        </ContentPostContainer>
    )
}