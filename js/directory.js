function renderDirectory(dir, query, type) {
    var listingDiv = $('#directoryListing');

    // reset
    listingDiv.empty();

    dir.forEach(function (elem) {
        // Ignore element if not in search results
        if(query && !searchForOccurrences(elem, query)) return;

        // Ensure the filter is respected. Respect the filter!
        if(type === "Everyone" || elem.type === type) {
            var card = $('<div>').attr('class', 'directory-card');
            card.append($('<h4>').text(elem.fname + ' ' + elem.lname));
            card.append($('<p>').text(elem.title || elem.class));
            card.append($('<p>').text(elem.department || elem.curriculum));
            card.append($('<a>').attr('href', elem.rcs + '@rpi.edu').text(elem.rcs + '@rpi.edu'));

            listingDiv.append($('<div>').attr('class', 'col-md-3 col-sm-4').append(card))
        }
    })
}

function searchForOccurrences (elem, query) {
    var found = false;
    for(key in elem) {
        if(elem[key] && typeof elem[key] === 'string' && elem[key].toLowerCase().indexOf(query.toLowerCase())!=-1) {
            found = true;
        }
    }
    return found;
}

$(function() {
    // initial load
    renderDirectory(getDir(), "", "Everyone");

    // update filter indicator
    $('#filter').change(function (event) {
        $('#filterBtn').html($('#filter').val() + " ").append($('<span>').attr('class', 'caret'));
    });

    // Executes search
    $('#searchBtn').click(function (event) {
        renderDirectory(getDir(), $("#searchField").val(), $('#filter').val());
    })
});
