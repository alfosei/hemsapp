document.addEventListener('DOMContentLoaded', function() {
    // Get references to the menu buttons
    var monitorButton = document.getElementById('monitor-btn');
    var controlButton = document.getElementById('control-btn');
    var scheduleButton = document.getElementById('schedule-btn');
    var tariffButton = document.getElementById('tariff-btn');
    
    // Add click event listeners to the menu buttons
    monitorButton.addEventListener('click', function() {
      window.location.href = 'monitor.html'; // Replace with the path to your monitor page
    });
    
    controlButton.addEventListener('click', function() {
      window.location.href = 'control.html'; // Replace with the path to your control page
    });
    
    scheduleButton.addEventListener('click', function() {
      window.location.href = 'schedule.html'; // Replace with the path to your schedule page
    });
    
    tariffButton.addEventListener('click', function() {
      window.location.href = 'tariff.html'; // Replace with the path to your tariff manager page
    });
  });
  