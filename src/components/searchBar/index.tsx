import { useForm } from "react-hook-form";
import { SearchBarContainer, SearchBarInput, SearchBarTitle } from "./styles";
import * as z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { UserGithubContext } from "../contexts/UserGithubContext";

const searchFormSchema = z.object({
    query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchBar() {

    const {fetchIssues, issues} = useContext(UserGithubContext);
    const{
        register, 
        handleSubmit
    } = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSchema),
    })
    
    async function handleSearchIssues(data: SearchFormInputs){
        await fetchIssues(data.query);
    }

    return(
        <SearchBarContainer>
            <SearchBarTitle>
                <span>Publicações</span>
                <span>{issues.length} {issues.length == 1 ? 'publicação' : 'publicações'}</span>
            </SearchBarTitle>
            <SearchBarInput onSubmit={handleSubmit(handleSearchIssues)}>
                <input 
                    type="text"
                    placeholder="Buscar conteúdo"
                    {...register('query')}    
                    onKeyDown={(event) => {
                        if (event.key === 'Enter') {
                          event.preventDefault(); // Para evitar o envio padrão do formulário
                          handleSubmit(handleSearchIssues)();
                        }
                      }}
                />
            </SearchBarInput>
        </SearchBarContainer>
    )
}