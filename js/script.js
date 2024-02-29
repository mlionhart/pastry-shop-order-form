// executing main script when dom is ready and form has been submitted
$(document).ready(function () {
    $('#order').submit(function (evt) {

        // creating flag for validation
        const flag = true;
        // creating array for error div content
        let errors = [];

        //  beginning of validation for inputs
        const name = $('#name').val();
        if (name === '') { 
            $('#name').css('border','3px solid red');
            $('#namespan').html('You Must Fill Out Your First Name!!'); 
            flag = false;
            errors.push(['name', 'Please fill in your first name']) 
        }

        
        const address = $('#address').val();
        if (address === '') {
            $('#address').css('border','3px solid red');
            $('#addressspan').html('You Must Fill Out Your Address!!'); 
            flag = false;
            errors.push(['address', 'please fill out your address']);
        }
        
        const city = $('#city').val();
        if (city === '') {
            $('#city').css('border','3px solid red');
            $('#cityspan').html('You Must Fill Out A Valid City!!'); 
            flag = false;
            errors.push(['city', 'please fill in your city']);
        }
        
        const state = $('#state').val();
        if (state === '') {
            $('#state').css('border','3px solid red');
            $('#statespan').html('You Must Select A Valid State!!');
            flag = false;
            errors.push(['state', 'please select a state']);
        }
        
        const zip = $('#zip').val();
        if (zip === '') {
            $('#zip').css('border','3px solid red');
            $('#zipspan').html('Enter Your Zip Code!!'); 
            flag = false;
            errors.push(['zip', 'please enter your zip code']);
        }

        const email = $('#email').val();
        if (email === '') {
            $('#email').css('border','3px solid red');
            $('#emailspan').html('You Must Select A Valid Product!!');
            flag = false;
            errors.push(['email', 'please select a product']);
        }


        const phone = $('#phone').val();
        if (phone === '') {
            $('#phone').css('border','3px solid red');
            $('#phonespan').html('You Must Fill Out A Valid Phone Number!!'); 
            flag = false;
            errors.push(['phone', 'please Enter a phone number']);
        }

        const cell = $('#cell').val();
        if (cell === '') {
            $('#cell').css('border','3px solid red');
            $('#cellspan').html('Enter a Valid Cell Phone Number!!');
            flag = false;
            errors.push(['cell', 'please enter a cell phone number']);
        }


        const date = $('#date').val();
        if (date === '') {
            $('#date').css('border','3px solid red');
            $('#datespan').html('You Must Fill Out A Valid date!!'); 
            flag = false;
            errors.push(['date', 'please enter a valid date']);
        } // end of validation for input elements

        // Beginning of validation for select elements
        const cookies = $('#cookies').val();
        const cake = $('#cake').val();
        const othercakes = $('#othercakes').val();
        if ((cookies && cake && othercakes) === 'choose') {
            $('#buy').css('border','3px solid red');
            $('#selectspan').html('You Must Select a Product!!'); 
            flag = false;
            errors.push(['products', 'please select a product']);
        }
        
        const packageNum = $('#packagenum').val();
        if ((cookies != 'choose') && (packageNum === '')) {
            $('#packagenum').css('border','3px solid red');
            $('#packagespan').html('You must enter a quantity!!');
            flag = false;
            errors.puch(['cookie package', 'please enter number of cookie packages'])
        }

        const cakeNum = $('#cakenum').val();
        if ((cake != 'choose') && (cakeNum === '')) {
            $('#cakenum').css('border','3px solid red');
            $('#cakenumspan').html('You must enter a quantity!!');
            flag = false;
            errors.puch(['cake package', 'please enter quantity of cakes'])
        }

        const otherCakeNum = $('#othercakenum').val();
        if ((othercakes != 'choose') && (otherCakeNum === '')) {
            $('#othercakenum').css('border','3px solid red');
            $('#othercakespan').html('You must enter a quantity!!');
            flag = false;
            errors.puch(['pastrie packages', 'please enter number of pastrie packages'])
        } // end of select element validation

        // checkbox validation
        const checkboxFlag = false;
        $(':checkbox:checked').each(function () {
            checkboxFlag = true;
        });

        if (!checkboxFlag) {
            $('#ideaspan').html('Give Us Some Ideas!!');
            flag = false;
            errors.push(['terms', 'give us some ideas']);
        } 

        // error bucket and form submission prevent
        if (!flag) {
            let errorBucket = $('.errors');
            let output = '<h2>Form Errors - Please Correct:</h2>' + '<ul>';
            for (let index = 0; index < errors.length; index++) {
                output += '<li>' + errors[index][1] + '</li>';
                console.log('Error: complete ' + errors[index][0] + ' field');
            }
            output += '</ul>';
            errorBucket.html(output);
            // stops form from being submitted
            evt.preventDefault();
            // puts the currsor in first unfilled input
            $('#' + errors[0][0]).focus();
        }

    }); // end of order submit function

}); // end of doc ready function