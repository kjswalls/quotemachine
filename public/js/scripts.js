$(function() {
    var authors = [];
    var quotes = [];

    // Call to forismatic API, per: http://forismatic.com/en/api/
    $.getJSON('http://api.forismatic.com/api/1.0/', 'method=getQuote&format=json&lang=en', function(data) {
        authors.push(data.quoteAuthor);
        quotes.push(data.quoteText);
    });

    console.log(authors);
    console.log(quotes);
});
