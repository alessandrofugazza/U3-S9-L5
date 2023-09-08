import { Component } from "react";

import MainSection from "./MainSection";
import MainMenu from "./MainMenu";

class Main extends Component {
  render() {
    return (
      <main>
        <div className="px-4">
          <MainMenu />
          <MainSection seriesName="Harry Potter" />
          <MainSection seriesName="Avengers" />
          <MainSection seriesName="Star Wars" />
        </div>
      </main>
    );
  }
}

export default Main;
