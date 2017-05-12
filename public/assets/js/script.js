$( document ).ready(function(){

	$('#submit').on('click', function(){
		let newBurger = $('textarea').val() 
		$.post(window.location.origin + '/api/new/' + newBurger);
	});

	$('.devourBtn').on('click', function(){
		$.post(window.location.origin + '/api/update/' + $(this).attr('id'),function(){
			location.reload();
		});
	});

});