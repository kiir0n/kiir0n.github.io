
let goback = document.getElementById('goback');

goback.addEventListener('click', function() {
  window.location.href = 'index.html';
});


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