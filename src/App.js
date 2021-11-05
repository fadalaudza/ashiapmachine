import React, { Component } from "react";
import "./App.css";
import logo from "./res/atta.png";
import Ashiap from "./res/Ashiap.wav";
import Foreground from "./component/Foreground";
import Background from "./component/Background";
import Video from "./component/Video";

class App extends Component {
  state = {
    timesClicked: 0
  };

  playMusic = () => {
    const audio = new Audio(Ashiap);
    audio.play();
    this.setState({
      timesClicked: this.state.timesClicked + 1
    });
  };

  clickedCaption = () => {
    let clicked = this.state.timesClicked;
    let clickString = value => "Udah ngomong 'Ashiap' " + value + "kali.";

    if (clicked === 0) return <div>Klik pada layar, dan rasakan sensasinya</div>;
    else if (clicked === 1) return <div>{clickString("se")}</div>;
    else return <div>{clickString(`${clicked} `)}</div>;
  };

  render() {
    return (
      <div className="App" onClick={e => this.playMusic()}>
        <Foreground />
        <Video />
        <Background />
        <div className="content">
          <header className="App-header">
            <h1 style={{ margin: "0" }}>ASHIAP MACHINE v0.1</h1>
            <div>
              <embed
                src={logo}
                className="App-logo"
                style={{ height: "17em" }}
              />
            </div>
            <div style={{ marginTop: "1em" }}>{this.clickedCaption()}</div>
          </header>
        </div>
        <div className="version">- Version 0.1</div>
      </div>
    );
  }
}

export default App;
