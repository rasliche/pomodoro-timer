var Timer = function() {
  var self = this;
  var breakTime = 5; // seconds
  var workTime = 10; // seconds
  var working = true;
  var ticking = false; // if ticking, can't start the timer again
  var intervalID;
  var sessionTime = workTime;
  var resetTime;

  this.getBreakTime = function() {
    return breakTime;
  };

  this.getWorkTime = function() {
    return workTime;
  };

  this.incBreakTime = function() {
    breakTime = ++breakTime;
    console.log("this.breakTime is now: " + breakTime);
  };

  this.decBreakTime = function() {
    breakTime = --breakTime;
    console.log("this.breakTime is now: " + breakTime);
  };

  this.incWorkTime = function() {
    workTime = ++workTime;
    console.log("this.workTime is now: " + workTime);
  };

  this.decWorkTime = function() {
    workTime = --workTime;
    console.log("this.workTime is now: " + workTime);
  };

  this.toggleWork = function() {
    working = working ? false : true;
    sessionTime = working ? workTime : breakTime;
    this.resetTimer();
    console.log("We are now working: " + working);
  };

  this.startTimer = function() {
    if (!ticking) {
      ticking = !ticking;
      console.log("Starting the timer");
      sessionTime = working ? workTime : breakTime;
      intervalID = window.setInterval(function() {
        if (sessionTime > 0) {
          console.log(sessionTime);
          console.log("Entered the Interval");
          sessionTime -= 1;
          $('.timeDisplay').html(self.updateTimer());
        } else {
          window.clearInterval(intervalID);
          self.toggleWork();
          self.updateTimer();
        }
      }, 1000);
    }
  };

  this.resetTimer = function() {
    // Cleared the intervalID set by the
    // startTimer() method
    window.clearInterval(intervalID);
    sessionTime = working ? workTime : breakTime;
    this.updateTimer();
    resetTime = undefined;
    ticking = false;
  };

  this.updateTimer = function() {
    console.log("Trying to display Time");

    var sessionMinutes = Math.floor(sessionTime / 60);
    var sessionSeconds = Math.floor(sessionTime % 60);
    var timeStr = sessionMinutes+":"+
      (sessionSeconds > 9 ? sessionSeconds : ("0"+sessionSeconds));
    $('.timeDisplay').html(timeStr);
  };
};

var timer = new Timer();

// ToDo:
// - Auto continue your sessions
// - Adjust times
// - Style
// -- Change colors based on type of timer
// -- Sound?

$('document').ready(function() {
  $('.timeDisplay').html(timer.updateTimer());

  $('.startTimer').on('click', function() {
    timer.startTimer();
  });

  $('.resetTimer').on('click', function() {
    timer.resetTimer();
    timer.updateTimer();
  });

  $('.toggleWork').on('click', function() {
    timer.toggleWork();
  });
});
