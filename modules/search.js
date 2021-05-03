export const artistSearch = () => {

const jsonconnect = {
    "async": true,
    "crossDomain": true,
    "url": "http://cors.io/?https://github.com/davidjlanglois/davidjlanglois.github.io/blob/master/json/collection.json",
    "method": "GET",
    };

    let ajaxResponse = null;
    $.ajax(jsonconnect).done(function (response) {
    ajaxResponse = response;
    console.log("GET Success!");
    });

    $("#artist_search").keyup (function() {
        let result = ajaxResponse.find(x => x.Artist === $(this).val());
        $("#search_result").html(result ? `${result.Title} - ${result.Format}` : "Sorry, no matches!");
    })
};