
$(document).ready ->
  state = undefined
  console.log 'ready!'
  state = 0
  $('#fun-button').click ->
    console.log 'Clicked'
    if state == 0
      $(this).after '<div class=\'popup\'>You clicked it!</div>'
      state = 1
    else if state == 1
      $('.popup').remove()
      state = 0
    return
  return
