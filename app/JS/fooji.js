(function() {
  $(document).ready(function() {
    var state;
    state = void 0;
    console.log('ready!');
    state = 0;
    $('#fun-button').click(function() {
      console.log('Clicked');
      if (state === 0) {
        $(this).after('<div class=\'popup\'>You clicked it!</div>');
        state = 1;
      } else if (state === 1) {
        $('.popup').remove();
        state = 0;
      }
    });
  });

}).call(this);
