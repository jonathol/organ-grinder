const React = require('react');
const AddKeyListeners = require('../util/add_key_listeners');
const TONES = require('../constants/tones');
const NoteKey = require("../components/note_key");

const Organ = React.createClass({
  componentDidMount(){
    AddKeyListeners();
  },
  render(){
    return(
      <div className="organ">
        {
          Object.keys(TONES).map(function(tone){
            return <NoteKey key={tone} noteName={tone} />;
          })
        }
      </div>
    );
  }
});

module.exports = Organ;
