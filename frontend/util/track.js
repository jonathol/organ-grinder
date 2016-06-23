const KeyStore = require("../stores/key_store");
const KeyAction = require("../actions/key_actions");

function Track(attributes){
  this.name = attributes.name || "";
  this.roll = attributes.roll || [];
}

Track.prototype.startRecording = function () {
  this.roll = [];
  this.time = new Date();
};

Track.prototype.addNotes = function (newNotes) {
  console.log(this.time);
  let timeSlice = new Date() - this.time;
  console.log(timeSlice);
  let notes = newNotes || KeyStore._noteNames;
  this.roll.push({timeSlice: timeSlice, notes: notes});
};

Track.prototype.stopRecording = function () {
  this.addNotes([]);
};

Track.prototype.play = function () {

  if (this.interval) {
    return;
  } else {
    let playbackStartTime = Date.now();
    let currentNote = 0;
    const callback = function() {
      // debugger
      if (currentNote < this.roll.length) {
        if (Date.now() - playbackStartTime > this.roll[currentNote].timeSlice) {
          KeyAction.keyPressed(this.roll[currentNote].notes);
          currentNote++;
        }
      } else {
        clearInterval(this.interval);
        delete this.interval;
      }
    }.bind(this);
    this.interval = setInterval(callback, 10);
  }
};
module.exports = Track;
