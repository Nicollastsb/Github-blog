import { Posts } from "../../components/posts";
import { Profile } from "../../components/profile";
import { SearchBar } from "../../components/searchBar";

export function HomeBlog() {

    return(
        <>
            <Profile/>
            <SearchBar/>
            <Posts/>
        </>
    )
}