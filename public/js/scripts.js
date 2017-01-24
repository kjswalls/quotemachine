var quote = '';
var author = '';

$(function() {
    getQuote();

    // Get a new quote when the "new quote" link is clicked
    $('#new').on('click', function(e) {
        e.preventDefault;
        getQuote();
    })

    // Tweet the quote when the link is clicked
    $('#tweet').on('click', function(e) {
        var urlQuote = quote.replace(/ /g, '%20').replace(/'/g, "\\'").replace(/"/g, '\\"');
        // var urlQuote = encodeURIComponent(quote);
        console.log(urlQuote);
        var url = 'https://twitter.com/intent/tweet?text=' + '"' + urlQuote + '"' + '%20-%20' + author;
        $('#tweet').attr('href', url);
    });
});

function getQuote() {
    var $author = $('#author');
    var $quote = $('#quote');

    $('#author, .semi').fadeOut('slow', function() {
        $('#author, .semi').fadeIn('slow');
    });

    $quote.fadeOut('slow', function() {
        $quote.fadeIn('slow');
    });

    // Call to Quotes on Design API, per: https://quotesondesign.com/api-v4-0/
    $.ajax({
        url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=',
        success: function(data) {
            var post = data.shift();
            author = post.title.toLowerCase();

            // Strip <p> tags from the string, per: http://stackoverflow.com/questions/5002111/javascript-how-to-strip-html-tags-from-string
            quote = post.content.toLowerCase().replace(/<\/?[^>]+(>|$)/g, '');
            quote = quote.trim();

            $author.html("'" + author + "'");
            $quote.html("`" + quote + "`");
        },
        cache: false
    });
};
