import { useContext } from "react";
import { Post, PostContentText, PostTitle, PostsContainer } from "./styles";
import { UserGithubContext } from "../contexts/UserGithubContext";
import { formatDistanceToNow } from 'date-fns'

export function Posts() {    
    const { issues } = useContext(UserGithubContext);

    return(
        <PostsContainer>
            {issues && issues.map(issue =>{
                return (
                    <Post to={`/Github-blog/Post/${issue.number}`} title="Post" key={issue.id}>
                        <PostTitle>
                            <div>{issue.title}</div>
                            <div>
                                {issue.updated_at && formatDistanceToNow(new Date(issue.updated_at), {
                                    addSuffix: true
                                })}
                            </div>
                        </PostTitle>
                        <PostContentText>{issue.body}</PostContentText>
                    </Post>
                )
            })}
        </PostsContainer>
    )
}