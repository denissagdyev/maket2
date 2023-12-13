$('.burgermenu').hide();
$('.burgerx').hide();
$('.burger').on('click', function() {
	$('.burgerx').show();
	$('.burger').hide();
	$('.burgermenu').slideDown();
  });
  $('.burgerx').on('click', function() {
	$('.burger').show();
	$('.burgerx').hide();
	$('.burgermenu').slideUp();
  });