// WEB303 Assignment 3
// Author: Hannan Salis
// Student ID: 0820285
// Date Created: 2023-09-26
        function getTeamInfoWithGetJSON() {
            $.getJSON('team.json', function(data) {
                // Step 2b: Loop through the elements of the array
                $.each(data, function(index, member) {
                    // Step 2c: Insert name, position, and bio
                    $('#team').append('<h2>' + member.name + '</h2>');
                    $('#team').append('<h5>' + member.position + '</h5>');
                    $('#team').append('<p>' + member.bio + '</p>');
                });
            });
        }

        // Step 3a: Method for $.ajax request
        function getTeamInfoWithAjax() {
            // Step 3b: Display "Loading..." message
            $('#team').text('Loading...');

            $.ajax({
                type: 'GET',
                url: 'team.json',
                dataType: 'json',
                success: function(data) {
                    // Step 3d: Display data
                    $('#team').empty(); // Remove "Loading..." message
                    $.each(data, function(index, member) {
                        $('#team').append('<h2>' + member.name + '</h2>');
                        $('#team').append('<h5>' + member.position + '</h5>');
                        $('#team').append('<p>' + member.bio + '</p>');
                    });
                },
                error: function() {
                    // Step 3c: Display error message
                    $('#team').text('Error: Content could not be retrieved');
                }
            });
        }

        // Step 4: Call one of the methods in a ready function
        $(document).ready(function() {
            // You can choose which method to call here
            // getTeamInfoWithGetJSON();
            getTeamInfoWithAjax(); // Uncomment this line to use the $.ajax method

            // BONUS: Delay content display for 3 seconds
            setTimeout(function() {
                $('#team').fadeIn(); // Assuming you want to fade in the content
            }, 3000);
        });