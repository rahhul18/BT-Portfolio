// main text

var animationDelay = 2500;

animateHeadline($('.cd-headline'));

function animateHeadline($headlines) {
   $headlines.each(function(){
      var headline = $(this);
      //trigger animation
      setTimeout(function(){ hideWord( headline.find('.is-visible') ) }, animationDelay);
      //other checks here ...
   });
}
function hideWord($word) {
   var nextWord = takeNext($word);
   switchWord($word, nextWord);
   setTimeout(function(){ hideWord(nextWord) }, animationDelay);
}

function takeNext($word) {
   return (!$word.is(':last-child')) ? $word.next() : $word.parent().children().eq(0);
}

function switchWord($oldWord, $newWord) {
   $oldWord.removeClass('is-visible').addClass('is-hidden');
   $newWord.removeClass('is-hidden').addClass('is-visible');
}



// COUNTER


$(document).ready(function() {

    var counters = $(".count");
    var countersQuantity = counters.length;
    var counter = [];
  
    for (i = 0; i < countersQuantity; i++) {
      counter[i] = parseInt(counters[i].innerHTML);
    }
  
    var count = function(start, value, id) {
      var localStart = start;
      setInterval(function() {
        if (localStart < value) {
          localStart++;
          counters[id].innerHTML = localStart;
        }
      }, 40);
    }
  
    for (j = 0; j < countersQuantity; j++) {
      count(0, counter[j], j);
    }
  });


  // PROGRESS BAR 

  $('#jq').LineProgressbar({
 
      percentage: 100,
    
      ShowProgressCount:true
    
    });

    $('#jp').LineProgressbar({
 
      percentage: 90,
    
      ShowProgressCount:true
    
    });

    $('#ji').LineProgressbar({
 
      percentage: 75,
    
      ShowProgressCount:true
    
    });
    
    $('#jr').LineProgressbar({
 
      percentage: 80,
    
      ShowProgressCount:true
    
    });

    $('#js').LineProgressbar({
 
      percentage: 90,
    
      ShowProgressCount:true
    
    });

    $('#jt').LineProgressbar({
 
      percentage: 55,
    
      ShowProgressCount:true
    
    });


