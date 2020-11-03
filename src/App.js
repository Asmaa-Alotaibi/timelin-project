import { ThemeProvider } from "styled-components";
import { Title, BImg, ListWrapper, GlobalStyle } from "./styles";
import BoxList from "./components/boxlist";
import photo from "./pic1.jpg";
const theme = {
  maincolor: "#242424",
  backgroundColor: "fuchsia",
  blue: "#000080",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div>
        <title>My TimeLine</title>
        <Title>Asmaa's Life TimeLine</Title>
        <BImg src={photo} alt="pic of timeline" />
      </div>
      <div class="container">
        <div class="row">
          <div class="col"> </div>
          <div class="col">
            <BoxList />
          </div>
          <div class="col"> </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
