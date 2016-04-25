$(function() {
    // update filter indicator
    $('#filter').change(function (event) {
        $('#filterBtn').html($('#filter').val() + " ").append($('<span>').attr('class', 'caret'));
    });

    // Executes search
    $('#searchBtn').click(function (event) {
        $("#searchField").val()
    })
});
