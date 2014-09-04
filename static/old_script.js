$(document).ready(function(){
	$('#alert-warning').hide('fast');
	$('#alert-success').hide('fast');


});
var userZipValue = '#user-zip-value'.val().trim();


$('.zip-instruction').hover(
	function(){
	$(this).tooltip('show');
});

$('.search-button').hover(
  	function(){
        $(this).addClass('btn btn-success');
        },
        function(){
            $(this).removeClass('btn btn-success');
            $(this).addClass('btn btn-primary');
        });



//start API call//

 

$('#search-button').click(
	function(){
			$.ajax({
				type: 'GET',
			  	dataType: 'json',
			  	url: 'http://api.tvmedia.ca/tv/v2',
			  	data: {
			  		postalCode 'userZipValue'
			  	}
			  success: success
			});
});
//end API call