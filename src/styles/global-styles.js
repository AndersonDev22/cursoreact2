import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;1,300&display=swap');

*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

html{
  font-size:62.5%;
}

body{
  font-size:1.6rem;
  font-family: ${({ theme }) => theme.font.family.default};
}

h1, h2, h3, h4, h5, h6 {
  font-family: ${({ theme }) => theme.font.family.secondary};
}
`;
