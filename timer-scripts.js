var Timer = function() {
  var breakTime = 5;
  var workTime = 25;
  var intervalID;

  this.getBreakTime = function() {
    return breakTime;
  };

  this.getWorkTime = function() {
    return workTime;
  };

  this.incBreakTime = function() {
    breakTime = ++breakTime;
  };

  this.decBreakTime = function() {
    breakTime = --breakTime;
  };

  this.incWorkTime = function() {
    workTime = ++workTime;
  };

  this.decWorkTime = function() {
    workTime = --workTime;
  };

  this.startTimer = function($el) {
    while ($el.hasClass('tick')) {
      updateTimer();
    }
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

  $('.break').append(function() {
    console.log(timer.getBreakTime());
    return timer.getBreakTime();
  });

  $time.html(curTime.getMinutes()+":"+curTime.getSeconds());
  $time.on('click', function() {
    $time.toggleClass('tick');
    console.log('ticked');
  });
});
