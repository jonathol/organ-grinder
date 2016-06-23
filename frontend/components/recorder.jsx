const React = require('react');
const Track = require("../util/track");
const KeyStore = require("../stores/key_store");

const Recorder = React.createClass ({
  getInitialState(){
    // console.log("gis");
    return {recording: false, track: new Track({})};
  },
  componentDidMount(){
    // console.log("cdm");

  },
  _handleChange(){
    console.log("hc");
    this.state.track.addNotes(KeyStore.noteNames());
  },

  _handleStart(){
    console.log("start");
    KeyStore.addListener(this._handleChange);
    this.state.track.startRecording();
    this.setState({recording: true});
  },

  _handleStop(){
    console.log("stop");
    // KeyStore.removeListener(this._handleChange);
    this.state.track.stopRecording();
    this.setState({recording: false});
    // debugger
  },

  _handlePlay(){
    console.log("play");
    console.log(this.state.track);
    this.state.track.play();
  },

  render(){
    let playStyle = "notplay";
    if (this.state.track.roll.length > 0){
      playStyle = "play";
    }
    let button = <button onClick={this._handleStart}>Start Recording</button>;
    if (this.state.recording) {
      button = <button onClick={this._handleStop}>Stop Recording</button>;
    }
    return(
      <div>
        {button}
        <button className={playStyle} onClick={this._handlePlay}>Play</button>
      </div>
    );
  }
});

module.exports = Recorder;
