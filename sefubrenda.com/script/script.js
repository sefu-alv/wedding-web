$(document).ready(function() {
    var countdownDate = new Date("aug 17, 2024 16:0:0").getTime();
    var countdownTimer = $("#countdown-timer");
  
    function updateTimer() {
      var now = new Date().getTime();
      var distance = countdownDate - now;
  
      if (distance <= 0) {
        clearInterval(timerInterval);
        countdownTimer.html("Event has started!");
        return;
      }
  
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      countdownTimer.html(days + " Days " + hours + " Hours " + minutes + " Minutes " + seconds + " Seconds");
    }
  
    var timerInterval = setInterval(updateTimer, 1000);
    updateTimer(); // Initial update to prevent initial delay
  });
  