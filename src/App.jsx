import Header from "./components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Time from "./components/Time/Time";

import Home from "./components/Home/Home";
import BookMark from "./components/BookMark/BookMark";
import SingleCard from "./components/SingleCard/SingleCard";
import Card from "./components/Card/Card";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Card></Card>
      {/* <Time></Time>
        <Home></Home>
        <BookMark></BookMark> */}
    </div>
  );
}

export default App;
