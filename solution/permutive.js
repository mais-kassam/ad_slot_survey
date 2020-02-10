$( document ).ready(function() {

  var title = document.querySelector('h2').textContent
  var author = document.querySelector('h3').querySelector('b').textContent
  var categories = document.getElementsByName('categories')[0].content.split(',')
  
  permutive.track('Pagview', {page:{
    title: title, 
    author: author,
    categories: categories
  }})

  var depth = [25, 50, 75, 100]
  var prevPos
  var pointer = depth[0]

  function positionChecker(pos, prevPos, no){
    if((prevPos < no && pos >= no) || (prevPos > no && pos <= no)){
      scrollEvent(no)
    }

    if(pos < prevPos){
      pointer = depth[no/25 - 1]
    }else if(pos > prevPos){
      pointer = depth[no/25]
    }
  }

  document.addEventListener("scroll", function(){
    var pos = getScrollPosition();

    if(pos > 0 && pos < 25){
      pointer = depth[0]
      prevPos = pos
    }else if(pos >= 25 && pos < 50){
      positionChecker(pos, prevPos, 25)
      prevPos = pos
    }else if(pos >= 50 && pos < 75){
      positionChecker(pos, prevPos, 50)
      prevPos = pos
    }else if(pos >= 75 && pos < 100){
      positionChecker(pos, prevPos, 75)
      prevPos = pos
    }else if(pos > 75 && pos == pointer){
      if(prevPos !== pos){
        scrollEvent(100)
      }
    }
  });

  function getScrollPosition(){
    return Math.ceil(scrollPosition = window.scrollY / screen.height * 100);
  }

  function scrollEvent(scrollDepth){
    permutive.track('Scroll', {
      scroll_depth: scrollDepth
    })
  }


});


/* var options = {
    success: function(event) {
      // success result
      console.log(event)
    },
    error: function(errors) {
      console.log(errors);
    }
  }

  var found;
  var categories;

  // After Dom load
  $( document ).ready(function() {
    // Get Title
    var title = document.getElementsByTagName('h2')[0].innerText || '';
    // Get Author
    var author = document.querySelectorAll('h3, b')[1].innerText || '';
    // Get Meta tag
    var cateResult = document.querySelectorAll('meta') || '';

    // Find Categories in meta tag list
    for (var i = 0; i < cateResult.length; i++) {
      if( cateResult[i]['name'] === 'categories') {
        found = cateResult[i]['content'];
      }
    }

    // Formate Array list as per (,)
    var categories = found.split(',');

    window.permutive.track('Pageview', {
      article: {
        title:title,
        author:author,
        categories:categories
      }
    }, options);

    if(document.getElementById('myElement').classList.contains("jw-state-playing")){
      window.permutive.track('videoPlay', {});
    }
  });

  permutive.segment(22455, function(result) {
    if (result) {
      // The user meets the isEngaged criteria

      window.googletag.cmd.push(function() {
          window.googletag.pubads().setTargeting('permutive', 'gaming');
      });
    }
  });

  // Find browser postion
  document.onscroll = function() {

    var postion = showBrowserPosition(document.body);
    var roundNum = Math.round(postion);

    if ( roundNum === 25 ) {
      getPostion(roundNum);
    } else if ( roundNum === 50  ) {
      getPostion(roundNum);
    } else if ( roundNum === 75 ) {
      getPostion(roundNum);
    } else if ( roundNum === 100 ) {
      getPostion(roundNum);
    }
  };

  function getPostion(roundNum) {
    // console.clear();
    var postionPercentage =  roundNum + '%';
    var scroll_depth = parseFloat( roundNum / 100).toFixed(2);
    console.log( 'Percentage' , postionPercentage );
    console.log( 'scroll_depth' ,scroll_depth );

    window.permutive.track('Scroll', {
      scroll_depth:Number(scroll_depth)
    }, options);
  }

  function showBrowserPosition(element) {
      var parent = element.parentNode,
      findPostion = (element.scrollTop || parent.scrollTop) / (parent.scrollHeight - parent.clientHeight ) * 100;
      return findPostion;
  };

  window.googletag = window.googletag || {}
  window.googletag.cmd = window.googletag.cmd || [] */
