$(document).ready(function () {
    $.getJSON('character.json', function (data) {
        var tableBody = $('#characterTable tbody');

        $.each(data, function (i, character) {
            var row = $('<tr></tr>');


            row.append('<td>' + character.firstName + '</td>');
            row.append('<td>' + character.lastName + '</td>');
            row.append('<td>' + character.dateOfBirth + '</td>');
            row.append('<td>' + character.occupation + '</td>');
            row.append('<td>' + character.affiliation + '</td>');

            tableBody.append(row);
        });
    });

    $('.sort-header').on('click', function (e) {
        e.preventDefault();

        var sortKey = $(this).data('sort');

        var table = $('#characterTable');
        var rows = table.find('tbody > tr').toArray().sort(comparer($(this).index()));


        this.asc = !this.asc;

        if (!this.asc) {
            rows = rows.reverse();
        }

        for (var i = 0; i < rows.length; i++) {
            table.append(rows[i]);
        }


        updateChevrons($(this));
    });

    function comparer(index) {
        return function (a, b) {
            var valA = getCellValue(a, index), valB = getCellValue(b, index);
            return $.isNumeric(valA) && $.isNumeric(valB) ? valA - valB : valA.localeCompare(valB);
        };
    }

    function getCellValue(row, index) {
        return $(row).children('td').eq(index).text();
    }
    function updateChevrons(header) {
        $('.chevron').addClass('hidden');
        var chevron = header.find('.chevron');
        chevron.removeClass('hidden');
        if (header[0].asc) {
            chevron.html('&#x25B2;');
        } else {
            chevron.html('&#x25BC;');
        }
    }
});