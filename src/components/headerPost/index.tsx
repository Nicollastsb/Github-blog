import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PostBottomContainer, HeaderPostContainer, HeaderPostTextContainer, HeaderPostTitleContainer, NamePostContainer } from "./styles";
import { ArrowSquareOut, CaretLeft, GithubLogo } from "@phosphor-icons/react";
import { faCalendarDay, faComment } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { UserGithubContext } from "../contexts/UserGithubContext";
import { formatDistanceToNow } from 'date-fns'

export function HeaderPost() {
    const { issue, profile } = useContext(UserGithubContext);
    
    return(
        <HeaderPostContainer>
            <HeaderPostTitleContainer>
                <NavLink to="/" title="Home"><CaretLeft size={12} /> <span>VOLTAR</span> </NavLink>
                <a href={issue.url} target="_blank"> <span>VER NO GITHUB</span> <ArrowSquareOut size={12} /></a>
            </HeaderPostTitleContainer>
            <HeaderPostTextContainer>
                <NamePostContainer>
                    <span>{issue.title}</span>
                </NamePostContainer>
                <PostBottomContainer>
                    <div>
                        <GithubLogo size={18} />
                        <span>{profile.login}</span>
                    </div>
                    <div>
                        <FontAwesomeIcon size="lg" icon={faCalendarDay}/>
                        <span>{issue.updated_at && formatDistanceToNow(new Date(issue.updated_at), {
                            addSuffix: true
                        })}</span>
                    </div>
                    <div>
                        <FontAwesomeIcon size="lg" icon={faComment}/>
                        <span>{issue.comments} comentários</span>
                    </div>
                </PostBottomContainer>
            </HeaderPostTextContainer>
        </HeaderPostContainer>
    )
}