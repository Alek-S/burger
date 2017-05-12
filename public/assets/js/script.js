$( document ).ready(function(){

	//submit new burger
	$('#submit').on('click', function(){
		let newBurger = $('textarea').val();

		if(newBurger.length > 1 &&  newBurger.length <= 20 ){ 
			$.post(window.location.origin + '/api/new/' + newBurger);
		}else{
			event.preventDefault();
		}
	});

	//devour burger
	$('.devourBtn').on('click', function(){

		$.ajax(window.location.origin + '/api/update/' + $(this).attr('id'), {
			type :'PUT'
        }).done(function(){
        	location.reload();
        });

    });

});