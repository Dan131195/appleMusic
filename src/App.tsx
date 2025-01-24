import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";
import Player from "./components/Player";
import News from "./components/News";
import Radios from "./components/Radios";
import Releases from "./components/Releases";
import Explorer from "./components/Explorer";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <>
      <MyNavbar />
      <News />
      <Radios />
      <Releases />
      <Explorer />
      <MyFooter />
      <Player />
    </>
  );
}

export default App;
