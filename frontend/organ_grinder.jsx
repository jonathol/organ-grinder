const React = require('react');
const ReactDOM = require('react-dom');
// const Dispatcher = require('./dispatcher/dispatcher');
// const Note = require('./util/notes');
// const AddKeyListeners = require("./util/add_key_listeners");
// const KeyStore = require("./stores/key_store");
const Organ = require("./components/organ");
const Recorder = require('./components/recorder');

const MyComponent = React.createClass({
  render() {
    return(
      <div>
        <Organ />
        <Recorder />
      </div>
    );
  }
});

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<MyComponent />, document.getElementById('root'));
});
