import { HeaderContainer, HeaderContent, LeftEffectContent, RightEffectContent } from "./styles";
import lefteffect from '../../assets/lefteffect.svg'
import righteffect from '../../assets/righteffect.svg'
import logo from '../../assets/logo.svg'

export function Header() {
    return(
        <HeaderContainer>
            <LeftEffectContent><img src={lefteffect} alt="" /></LeftEffectContent>            
            <HeaderContent>
                <div><img src={logo} alt="" /></div>
                <div>GITHUB BLOG</div>
            </HeaderContent>
            <RightEffectContent><img src={righteffect} alt="" /></RightEffectContent>
        </HeaderContainer>
    )
}