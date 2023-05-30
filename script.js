
let knowmore = document.getElementById('knowmore');

knowmore.addEventListener('click', function() {
  window.location.href = 'knowmore.html';
});

(function() {

    var quotes = $(".quotes1");
    var quoteIndex = -1;
  
    function showNextQuote() {
      ++quoteIndex;
      quotes.eq(quoteIndex % quotes.length)
        .fadeIn(1000)
        .delay(1000)
        .fadeOut(1000, showNextQuote);
    }
  
    showNextQuote();
  
  })();


(function() {

    var quotes = $(".quotes");
    var quoteIndex = -1;
  
    function showNextQuote() {
      ++quoteIndex;
      quotes.eq(quoteIndex % quotes.length)
        .fadeIn(1000)
        .delay(1000)
        .fadeOut(1000, showNextQuote);
    }
  
    showNextQuote();
  
  })();
