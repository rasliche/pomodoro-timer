var Timer = function() {
  var breakTime = 5; // seconds
  var workTime = 10; // seconds
  var intervalID;

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

  this.startTimer = function($el) {
    while ($el.hasClass('tick')) {
      updateTimer();
    }
  };

  this.resetTimer = function() {

  };

  this.updateTimer = function($el) {};
};

$('document').ready(function() {
  var timer = new Timer();
  var $time = $('.time');
  var curTime = new Date();
  $('.work').append(function() {
    console.log(timer.getWorkTime());
    return timer.getWorkTime();
  });

  $time.html((curTime.getMinutes() <10 ? "0"+curTime.getMinutes() : curTime.getMinutes())+":"+(curTime.getSeconds() <10 ? "0"+curTime.getSeconds() : curTime.getSeconds()));
});
