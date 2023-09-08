import { Component } from "react";
import { Container } from "react-bootstrap";

// import img7 from "../data/7.png";
// import img8 from "../data/8.png";
// import img9 from "../data/9.png";
// import img10 from "../data/10.png";
// import img11 from "../data/11.png";
// import img12 from "../data/12.png";
// import img13 from "../data/13.png";
// import img14 from "../data/14.png";
// import img15 from "../data/15.png";
// import img16 from "../data/16.png";
// import img17 from "../data/17.png";
// import img18 from "../data/18.png";
import MainSection from "./MainSection";
import MainMenu from "./MainMenu";

class Main extends Component {
  render() {
    return (
      <main>
        <div className="px-4">
          {/* <Container fluid className="px-4"> */}
          <MainMenu />
          <MainSection seriesName="Harry Potter" />
          <MainSection seriesName="Avengers" />
          <MainSection seriesName="Star Wars" />
          {/* </Container> */}
        </div>
      </main>
    );
  }
}

export default Main;
