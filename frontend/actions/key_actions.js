const React = require('react');
const Dispatcher = require('../dispatcher/dispatcher');

module.exports = {
  keyPressed(noteName){
    Dispatcher.dispatch({
      actionType: "ADD_NOTE_NAME",
      noteName: noteName
    });
  },
  keyLifted(noteName){
    Dispatcher.dispatch({
      actionType: "REMOVE_NOTE_NAME",
      noteName: noteName
    });
  }
};
