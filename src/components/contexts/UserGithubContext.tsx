import { ReactNode, createContext, useEffect, useState } from "react";

interface ProfileGithub {
    id: string,
    name: string,
    bio: string,
    html_url: string,
    login: string,
    followers: number,
    avatar_url: string
}

interface Issue {
    id: string,
    url: string,
    title: string,
    body: string,
    number: number,
    comments: number,
    updated_at: string
}

interface UserGithubContextType {
    profile: ProfileGithub;
    issues: Issue[];
    issue: Issue;
    fetchIssues: (query?: string) => Promise<void>;
    fetchIssue: (id: number) => Promise<void>;
}

interface UserGithubProviderProps {
    children: ReactNode;
}

export const UserGithubContext = createContext({} as UserGithubContextType);

export function UserGithubProvider({children}: UserGithubProviderProps) {
    
    const [userProfile, setuserProfile] = useState<ProfileGithub>({
        id: '',
        name: '',
        bio: '',
        html_url: '',
        login: '',
        followers: 0,
        avatar_url: ''
      });
    const [issue, setIssue] = useState<Issue>({        
        id: '',
        url: '',
        title: '',
        number: 0,
        comments: 0,
        updated_at: '',
        body: ''
    });
    const [issues, setIssues] = useState<Issue[]>([]);
    
    async function fetchIssues(query?: string) {
        let url = new URL('https://api.github.com/search/issues?q=is:issue%20repo:Nicollastsb/Github-blog')
        if(query)
            url = new URL(`https://api.github.com/search/issues?q=${query}%20repo:Nicollastsb/Github-blog`)

        const response = await fetch(url)
        const data = await response.json()
        setIssues(data.items)
    }

    async function fetchIssueById (id: number){
        const url = new URL(`https://api.github.com/repos/Nicollastsb/Github-blog/issues/${id}`)
        const response = await fetch(url)
        const data = await response.json()
        setIssue(data)
    }

    async function loadUserProfile() {
        const response = await fetch('https://api.github.com/users/Nicollastsb')
        const data = await response.json()
        setuserProfile(data)
    }

    useEffect(()=>{
        loadUserProfile()  
        fetchIssues()
    }, [])

    return (
        <UserGithubContext.Provider 
            value={{ 
                profile: userProfile, 
                issues: issues,
                issue: issue,
                fetchIssues: fetchIssues,
                fetchIssue: fetchIssueById
            }}
        >
            {children}
        </UserGithubContext.Provider>
    )
}