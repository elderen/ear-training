import React from "react";

class Audio extends React.Component {
  render() {
    return (
      <audio className={this.props.note}>
        <source src={`./piano/${this.props.note}.mp3`}></source>
      </audio>
    );
  }
}
export default Audio;
