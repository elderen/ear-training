import React from "react";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <h1 className="title">Ear Training</h1>
        <p className="client">with Andy Yoon</p>
      </>
    );
  }
}

export default Home;
