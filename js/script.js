$(document).ready(function () {
	$("#phone").mask("+380 99 999-99-99");

	$('.myform').on('submit', function () {

		// Add text 'loading...' right after clicking on the submit button. 
		$('.output_message').text('Loading...');

		var form = $(this);
		$.ajax({
			// if it can't find email.php just chahge the url path to the full path, including your domain and all folders.
			url: "php/sender.php",
			method: form.attr('method'),
			data: form.serialize(),
			success: function (result) {

				// THIS IS WHAT I HAVE ADDED TO REMOVE EXCESS SPACES
				let d = result.split(" ");
				let y = d.slice(-1)[0];
				// THIS IS WHAT I HAVE ADDED TO REMOVE EXCESS SPACES

				if (y == 'success') {
					$('.output_message').text('Message Sent!');
				} else if (y == 'miss') {
					$('.output_message').text('Please fill in all the fields above.');
				} else {
					$('.output_message').text('Error Sending email!');
				}
			}
		});

		// Prevents default submission of the form after clicking on the submit button. 
		return false;
	});
});