import React from "react";
import ReactDOM from "react-dom";

import About from "./components/about.jsx"
import Home from "./components/home.jsx"
import NoteQuiz from "./components/noteQuiz.jsx"
import Footer from "./components/footer.jsx"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  
  render() {
    return (
      <>
        <Home />
        <NoteQuiz />
        <Footer />
      </>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"));