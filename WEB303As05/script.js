/*
    Assignment 05
    Author: Hannan Salis
    Date Created: 2023-10-27
*/

class ContentItem {
    constructor(id, name, description, categoryGenre) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.categoryGenre = categoryGenre;
    }

    updateContentItem(id, name, description, categoryGenre) {
        if (this.id === id) {
            this.name = name || this.name;
            this.description = description || this.description;
            this.categoryGenre = categoryGenre || this.categoryGenre;
        }
    }

    toString() {
        return `
            <div class="content-item-wrapper" id="content-item-${this.id}">
                <h4>${this.name}</h4>
                <p>${this.description}</p>
                <div>${this.categoryGenre}</div>
            </div>
        `;
    }
}

const contentItems = [
    new ContentItem(0, 'Mercury', 'The closest planet to the Sun.', 'Rocky planet'),
    new ContentItem(1, 'Venus', 'Second planet from the Sun.', 'Rocky planet'),
    new ContentItem(2, 'Earth', 'Our home planet.', 'Rocky planet'),
    new ContentItem(3, 'Mars', 'Known as the Red Planet.', 'Rocky planet'),
    new ContentItem(4, 'Jupiter', 'The largest planet in our Solar System.', 'Gas giant')
];

// Update the theme title
$(document).ready(() => {
    $("#content h2").text("Planets in our Solar System");
});


contentItems.forEach(item => {
    $("#content-item-list").append(item.toString());
});

// Add CSS styles using jQuery
$(".content-item-wrapper").css({
    'border': '1px solid black',
    'width': '70%',
    'padding': '10px',
    'margin': '20px auto'
});

// Append buttons
$('body').append('<button id="successful-update">Successful Update</button>');
$('body').append('<button id="unsuccessful-update">Unsuccessful Update</button>');

// Button event handlers
$('#successful-update').click(() => {
    contentItems[0].updateContentItem(0, 'Updated Mercury', null, null);
    $("#content-item-list").empty();  // Clear current content
    contentItems.forEach(item => {
        $("#content-item-list").append(item.toString());  // Re-render
    });
});

$('#unsuccessful-update').click(() => {
    contentItems[0].updateContentItem(5, 'Unsuccessful Update', null, null);  // ID 5 doesn't exist
});
