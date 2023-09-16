/*
	WEB 303 Assignment 1 - jQuery
	Name: Hannan Salis
	Student ID:0820285 
*/

$(document).ready(function() {
    // Event handler for changes in salary or percent fields
    $('#yearly-salary, #percent').on('change', function() {
        // Get the values of salary and percent fields
        var salary = parseFloat($('#yearly-salary').val());
        var percent = parseFloat($('#percent').val());

        // Calculate the amount
        var amount = (salary * percent) / 100;

        // Round to two decimal places
        amount = amount.toFixed(2);

        // Display the amount in the span#amount element with a dollar sign
        $('#amount').text('$' + amount);
    });
});
