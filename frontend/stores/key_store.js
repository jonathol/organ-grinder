const Store = require('flux/utils').Store;
const Dispatcher = require("../dispatcher/dispatcher");
// const Set = require('set');
const KeyStore = window.KeyStore = new Store(Dispatcher);

const _noteNames = {};

KeyStore.__onDispatch = function(action){
  switch (action.actionType) {
    case "ADD_NOTE_NAME":
      _noteNames[action.noteName] = true;
      this.__emitChange();
      break;
    case "REMOVE_NOTE_NAME":
      // const idx = _noteNames.indexOf(action.noteName);
      // _noteNames.splice(idx,1);
      delete(_noteNames[action.noteName]);
      this.__emitChange();
      break;
  }
};

KeyStore.noteNames = function(){
  return Object.assign({},_noteNames);
};

module.exports = KeyStore;
