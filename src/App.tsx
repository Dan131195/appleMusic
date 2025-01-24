import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";
import Player from "./components/Player";
import News from "./components/News";
import Radios from "./components/Radios";

function App() {
  return (
    <>
      <MyNavbar />
      <News />
      <Radios />
      <Player />
    </>
  );
}

export default App;
