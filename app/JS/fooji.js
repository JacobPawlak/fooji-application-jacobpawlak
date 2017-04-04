(function() {
  $(document).ready(function() {
    console.log('ready!');
    $('#fun-button').click(function() {
      console.log('Clicked');
      $('#popup').toggleClass('.spooky');
    });
  });

}).call(this);
