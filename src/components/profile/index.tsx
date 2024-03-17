import { ProfileBottomContainer, ProfileContainer, ProfileDescriptionContainer, ProfileTextContainer, ProfileTitleContainer } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { GithubLogo } from "@phosphor-icons/react";
import { useContext } from "react";
import { UserGithubContext } from "../contexts/UserGithubContext";

export function Profile() {
    const {profile} = useContext(UserGithubContext);

    return(
        <ProfileContainer>
            <img src={profile.avatar_url} alt=""/>
            <ProfileTextContainer>
                <ProfileTitleContainer> 
                    <span>{profile.name}</span>
                    <a href={profile.html_url} target="_blank"><span>GITHUB</span> <FontAwesomeIcon icon={faArrowUpRightFromSquare}/></a>                   
                </ProfileTitleContainer>
                <ProfileDescriptionContainer>
                    <span>{profile.bio}</span>
                </ProfileDescriptionContainer>
                <ProfileBottomContainer>
                    <div><a href={profile.html_url} target="_blank"><GithubLogo size={18} /><span>Github</span></a></div>
                    <div><FontAwesomeIcon size="lg" icon={faBuilding}/><span>Rocketseat</span></div>
                    <div><FontAwesomeIcon size="lg" icon={faUserGroup}/><span>{profile.followers} Seguidores</span></div>
                </ProfileBottomContainer>
            </ProfileTextContainer>
        </ProfileContainer>
    )
}