const React = require("react");
const KeyActions = require("../actions/key_actions");

const Mapping = {
  65: 'C5',
  83: 'D5',
  68: 'E5',
  70: 'F5',
  71: 'G5',
  72: 'A5',
  74: 'B5',
  75: 'C6',
};

module.exports = function (){
  const _handleKeyDown = function(event){
    const keyCode = event.keyCode;
    KeyActions.keyPressed(Mapping[keyCode]);
  };

  const _handleKeyUp = function(event){
    const keyCode = event.keyCode;
    KeyActions.keyLifted(Mapping[keyCode]);
  };

  $(document).on("keydown",_handleKeyDown);
  $(document).on("keyup",_handleKeyUp);
};
