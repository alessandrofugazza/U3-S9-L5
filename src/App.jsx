import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import MyFooter from "./components/MyFooter";
import MyNav from "./components/MyNav";
import Main from "./components/Main";
import Footer from "./components/Footer";
// import Welcome from "./components/Welcome";
// import BookList from "./components/BookList";
// import fantasyBooks from "./data/fantasy.json";
// import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <MyNav />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
