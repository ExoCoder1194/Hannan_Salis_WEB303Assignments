/*
    Assignment 9
    Name: Hannan Salis
    ID: 0820285
    Date: Nov 16, 2023
*/
$(document).ready(function() {
    $.getJSON('characters.json', function(characters) {
        $.each(characters, function(index, character) {
            $('#charactersTable tbody').append(
                '<tr>' +
                '<td>' + character.firstName + '</td>' +
                '<td>' + character.lastName + '</td>' +
                '<td>' + character.alias + '</td>' +
                '<td>' + character.superPower + '</td>' +
                '<td>' + character.firstAppearance + '</td>' +
                '<td>' + character.teamAffiliation + '</td>' +
                '</tr>'
            );
        });
        updateButtonCounts();
    }).fail(function() {
        console.error("Error loading JSON data");
    });

    // Search function
    $("#searchButton").click(function() {
        var searchText = $("#searchInput").val().toLowerCase();
        $("table tr").each(function() {
            $(this).css("background-color", "");
            var firstName = $(this).find("td:first").text().toLowerCase();
            if (firstName.includes(searchText)) {
                $(this).css("background-color", "darkgreen").css("color", "white");
            }
        });
    });

    // Filter function
    $("#filterAM").click(function() {
        filterCharacters('A', 'M');
    });

    $("#filterNZ").click(function() {
        filterCharacters('N', 'Z');
    });

    function filterCharacters(startLetter, endLetter) {
        $("table tr").each(function() {
            var lastName = $(this).find("td").eq(1).text();
            if (lastName[0] >= startLetter && lastName[0] <= endLetter) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
        updateButtonCounts();
    }

    function updateButtonCounts() {
    }
});
