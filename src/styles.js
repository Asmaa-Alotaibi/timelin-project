import styled, { createGlobalStyle, creatGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
    color:#242424;
    background-color:papayawhip; 
}
`;
const Title = styled.h1`
  text-align: center;
  color: #4b0082;
`;
const BImg = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 350px;
  height: 200px;
`;
const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
`;

export { Title, BImg, ListWrapper, GlobalStyle };
