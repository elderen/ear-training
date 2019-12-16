import React from "react";

class NoteQuiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={styles.container}>
        <h1 style={styles.h1}>Note Quiz</h1>
        <div style={styles.imageContainer}>
          <img src="speaker.png" width="60" height="60"/>
          <img src="speaker.png" width="60" height="60"/>
        </div>
        <p style={styles.q}>Which note is higher?</p>
        <div style={styles.buttonContainer}>
          <button>1</button>
          <button>2</button>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column"
  },
  h1: {
    color: "black",
    textAlign: "center",
    margin: "1%",
    pading: "0%"
  },
  imageContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: "row"
  },
  q: {
    textAlign: "center"
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: "row"
  }
};

export default NoteQuiz;
