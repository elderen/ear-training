import React from "react";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import Audio from "./audio.jsx";

class NoteQuiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      note1: null,
      note2: null,
      correct: 0,
      total: 0,
      showPercentage: false
    };
    this.assignSound = this.assignSound.bind(this);
    this.soundOne = this.soundOne.bind(this);
    this.soundTwo = this.soundTwo.bind(this);
    this.buttonOne = this.buttonOne.bind(this);
    this.buttonTwo = this.buttonTwo.bind(this);
    this.autoplay = this.autoplay.bind(this);
    this.results = this.results.bind(this);
  }
  componentDidMount() {
    console.log("Developed by Elderen Lee");
    this.assignSound();
  }

  assignSound() {
    let myNote1 = null,
      myNote2 = null;
    while (myNote1 == null || myNote2 == null || myNote1 == myNote2) {
      myNote1 = Math.floor(Math.random() * 11);
      myNote2 = Math.floor(Math.random() * 11);
    }
    this.setState(
      {
        note1: myNote1,
        note2: myNote2
      },
      () => {
        // console.log("Assigned sounds => ", this.state.note1, this.state.note2);
        this.autoplay();
      }
    );
  }

  autoplay() {
    let num = this.state.note1;
    let audioEl = document.getElementsByClassName(num)[0];
    let num2 = this.state.note2;
    let audioEl2 = document.getElementsByClassName(num2)[0];

    // change button colors
    let b1 = document.getElementById("b1");
    let b2 = document.getElementById("b2");

    // setTimeout(function() {
    // playing sound 1
    audioEl.play();
    b1.style.backgroundColor = "green";
    setTimeout(function() {
      b1.style.backgroundColor = "transparent";
      audioEl.pause();
      audioEl.currentTime = 0;

      // play sound 2
      audioEl2.play();
      b2.style.backgroundColor = "green";
      setTimeout(function() {
        b2.style.backgroundColor = "transparent";
        audioEl2.pause();
        audioEl2.currentTime = 0;
      }, 2000);
    }, 2000);
    // }, 500);
  }

  soundOne() {
    let num = this.state.note1;
    let audioEl = document.getElementsByClassName(num)[0];
    audioEl.pause();
    audioEl.currentTime = 0;
    audioEl.play();

    setTimeout(function() {
      audioEl.pause();
      audioEl.currentTime = 0;
    }, 2000);
  }
  soundTwo() {
    let num = this.state.note2;
    let audioEl = document.getElementsByClassName(num)[0];
    audioEl.pause();
    audioEl.currentTime = 0;
    audioEl.play();

    setTimeout(function() {
      audioEl.pause();
      audioEl.currentTime = 0;
    }, 2000);
  }

  buttonOne() {
    let myTotal = this.state.total + 1;
    if (this.state.note1 > this.state.note2) {
      console.log("correct");
      let myCorrect = this.state.correct + 1;
      this.setState(
        {
          correct: myCorrect,
          total: myTotal
        },
        () => {
          this.results("correct");
        }
      );
    } else {
      console.log("wrong");
      this.setState(
        {
          total: myTotal
        },
        () => {
          this.results("wrong");
        }
      );
    }
  }

  buttonTwo() {
    let myTotal = this.state.total + 1;
    if (this.state.note2 > this.state.note1) {
      console.log("correct");
      let myCorrect = this.state.correct + 1;
      this.setState(
        {
          correct: myCorrect,
          total: myTotal
        },
        () => {
          this.results("correct");
        }
      );
    } else {
      console.log("wrong");
      this.setState(
        {
          total: myTotal
        },
        () => {
          this.results("wrong");
        }
      );
    }
  }

  results(bool) {
    if (bool == "correct") {
      alert("correct");
      this.assignSound();
    } else if (bool == "wrong") {
      alert("wrong");
      this.assignSound();
    }
  }

  render() {
    return (
      <div style={styles.container}>
        <h1 style={styles.h1}>Note Quiz</h1>
        <div style={styles.imageContainer}>
          <Button id="b1" onClick={this.soundOne}>
            <span>
              <img src="speaker.png" width="80" height="80" />
            </span>
          </Button>
          <Button id="b2" onClick={this.soundTwo}>
            <span>
              <img src="speaker.png" width="80" height="80" />
            </span>
          </Button>
        </div>
        <p style={styles.q}>Which note is higher?</p>
        <div style={styles.buttonContainer}>
          <Button onClick={this.buttonOne} variant="contained" color="primary">
            A
          </Button>
          <Button onClick={this.buttonTwo} variant="contained" color="primary">
            B
          </Button>
        </div>
        <p>
          {this.state.correct} out of {this.state.total} correct
        </p>
        <p id="percentage">
          {((this.state.correct / this.state.total) * 100).toFixed(0)}%
        </p>
        {this.state.notes.map(note => {
          return <Audio key={note} note={note} autoplay muted />;
        })}
      </div>
    );
  }
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    border: "gray 0.5px solid",
    margin: "1%",
    padding: "1%",
    boxShadow: "0px 5px 15px 0px"
  },
  h1: {
    color: "black",
    textAlign: "center",
    margin: "1%",
    padding: "0%"
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
