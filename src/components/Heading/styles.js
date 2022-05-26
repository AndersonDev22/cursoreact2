import styled, { css } from 'styled-components'

const titleSize = {
  small: (theme) => css`
    font-size:${theme.font.sizes.medium};
    `,

  medium: (theme) => css`
    font-size:${theme.font.sizes.large};
    `,
};

export const Title = styled.h1`
  ${({ theme, colorDark, size }) => css`
    color:${colorDark ? theme.colors.primaryColor : theme.colors.white}
    ${titleSize[size](theme)};
  `}
`;
