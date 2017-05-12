$( document ).ready(function(){

	$('#submit').on('click', function(){
		let newBurger = $('textarea').val() 
		console.log( $('textarea').val() );

		$.post(window.location.origin + '/api/new/' + newBurger);

	});

});