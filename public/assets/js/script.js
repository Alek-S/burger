$( document ).ready(function(){

	$('#submit').on('click', function(){
		let newBurger = $('textarea').val() 
		$.post(window.location.origin + '/api/new/' + newBurger);
	});

	$('.devourBtn').on('click', function(){

		$.ajax(window.location.origin + '/api/update/' + $(this).attr('id'), {
			type :'PUT'
        }).done(function(res){ //get best match
        	location.reload();
        });
    });
});