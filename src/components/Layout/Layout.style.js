import styled, { createGlobalStyle } from "styled-components";

export const Primary = styled.main`
    padding: 100px
`;

export const GlobalStyles = createGlobalStyle`
{
    html,body,*,*:before,*:after{
        padding: 0;
        margin: 0;
        line-hight:1;
    }
}`;