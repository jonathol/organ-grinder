const React = require('react');
const Note = require('../util/notes');
const TONES = require('../constants/tones');
const KeyStore = require('../stores/key_store');
const AddKeyListeners = require('../util/add_key_listeners');

const NoteKey = React.createClass({
  getInitialState() {
    return {notePlaying: false};
  },

  componentDidMount(){
    KeyStore.addListener(this._handleChange);
    this.note = new Note(TONES[this.props.noteName]);
  },

  componentWillUnmount(){
    KeyStore.removeListener(this._handleChange);
  },

  _handleChange(){
    if (Object.keys(KeyStore.noteNames()).includes(this.props.noteName)){
      this.setState({notePlaying: true});
    } else {
      this.setState({notePlaying: false});
    }
  },

  render(){
    let style = "";
    if (typeof this.note !== "undefined") {
      if (this.state.notePlaying) {
        this.note.start();
        style = "pressed";
      } else {
        this.note.stop();
      }
    }
    return(
      <div className={"key " + style} >{this.props.noteName}</div>
    );
  }
});

module.exports = NoteKey;
