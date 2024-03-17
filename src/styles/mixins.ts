import { css } from 'styled-components'

export const mixins = {
  fonts: {
    titleCoda: css`
      font-family: 'Coda', sans-serif;
      font-size: 1.5rem;
      line-height: 160%;
      font-weight: 400;
      color: ${props => props.theme["blue"]};
    `,
    
    gitHubUrl: css`
      font-family: 'Nunito', sans-serif;
      font-size: 0.75rem;
      line-height: 160%;
      font-weight: 700;
      color: ${props => props.theme["blue"]};
    `,

    titleL: css`
      font-family: 'Nunito', sans-serif;
      font-size: 1.5rem;
      line-height: 130%;
      font-weight: 700;
      color: ${props => props.theme["white"]};
    `,

    titleM: css`
      font-family: 'Nunito', sans-serif;
      font-size: 1rem;
      line-height: 160%;
      font-weight: 400;
      color: ${props => props.theme["base-text"]};
    `,

    titleMPost: css`
      font-family: 'Nunito', sans-serif;
      font-size: 1.25rem;
      line-height: 160%;
      font-weight: 700;
      color: ${props => props.theme["base-title"]};
    `,
    
    titleS: css`
      font-family: 'Nunito', sans-serif;
      font-size: 1.125rem;
      line-height: 160%;
      font-weight: 700;
      color: ${props => props.theme["base-subtitle"]};
    `,
    
    textS: css`
      font-family: 'Nunito', sans-serif;
      font-size: 0.875rem;
      line-height: 160%;
      font-weight: 400;
      color: ${props => props.theme["base-span"]};
    `,
    
    textM: css`
      font-family: 'Nunito', sans-serif;
      font-size: 1rem;
      line-height: 160%;
      font-weight: 400;
      color: ${props => props.theme["base-text"]};
    `,
  },
}
