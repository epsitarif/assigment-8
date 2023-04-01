import Header from "./components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./components/Card/Card";
import "./App.css";
import QueAndA from "./components/QueAndA/QueAndA";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Card></Card>
      <QueAndA></QueAndA>
    </div>
  );
}

export default App;
