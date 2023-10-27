$(document).ready(function () {

    $(".accordion-label").click(function () {
        $(this).next('.content').slideToggle().parent().siblings().find('.content').slideUp();
    });

    $(".tabs button").click(function () {
        const tabIndex = $(this).data('tab');
        $(`.tab-content[data-content=${tabIndex}]`).show().siblings('.tab-content').hide();
    });

});
