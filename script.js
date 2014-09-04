$(document).ready(function(){
    var userZipCode = "#user-zip";
    	$('#alert-warning').hide();
    	$('#alert-success').hide();
        
        $(function(){
            $('.zip-entry').tooltip();
        });

        $('.zip-form-all').submit(function(event){
            event.preventDefault();
            //alert or console log if the function ran
            //create a var on submit
        });

        //Start validation
        $('.zip-form-all').bootstrapValidator({
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating:'glyphicon glyphicon-refresh',
            },
            fields: {
                userZipEntry:{
                    validators: {
                        stringLength: {
                            min: 5,
                            max: 5,
                            message:'The zip code must be 5 digits long.'
                        },
                        notEmpty: {
                            message: 'You must enter a 5 digit zip code to proceed.'
                        }
                    }
                }


            }

        });
        //End validation


//this closes the document.ready section
});

