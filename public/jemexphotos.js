//Partie HTML

/*
<div class="demo">
  <div class="demo__help">
    Choose a photo
  </div>
  <div class="demo__gallery">
    <div class="demo__placeholder"></div>
    <div class="demo__placeholder"></div>
    <div class="demo__placeholder"></div>
    <div class="demo__placeholder"></div>
    <div class="demo__placeholder"></div>
    <div class="demo__placeholder"></div>
    <div class="demo__placeholder"></div>
    <div class="demo__placeholder"></div>
    <div class="demo__placeholder"></div>
    <div class="demo__placeholder"></div>
    <div class="demo__placeholder"></div>
    <div class="demo__placeholder"></div>
    <div class="demo__placeholder"></div>
    <div class="demo__placeholder"></div>
    <div class="demo__placeholder"></div>
    <div class="demo__placeholder"></div>
    <div class="demo__placeholder"></div>
    <div class="demo__placeholder"></div>
    <div class="demo__placeholder"></div>
    <div class="demo__placeholder"></div>
    <div class="demo__placeholder"></div>
    <div class="demo__placeholder"></div>
    <div class="demo__placeholder"></div>
    <div class="demo__placeholder"></div>
  </div>  
</div>
//END PARTIE HTML
*/



//Partie HTML
$partSize: 110px;
$margins: 2px;
$rows: 4; //change this also in js
$cols: 6; //change this also in js
$perspective: 700px;
$transTime: 0.3s;
$border-radius: 5px;
$shadow-size: 10px;
$demo-bg: linear-gradient(60deg, #5B5893, darken(#6A66A6, 30%));
$gallery-bg: #eee;

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.demo {
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
  background: $demo-bg;
  
  &__gallery {
    width: $cols * $partSize + 2 * $cols * $margins + 2 * $margins;
    height: $rows * $partSize + 2 * $rows * $margins + 2 * $margins;
    padding: $margins;
    flex-shrink: 0;
    
    background: $gallery-bg;
    
    perspective: $perspective;
    border-radius: $border-radius;
  }
  
  &__placeholder {
    width: $partSize;
    height: $partSize;
    margin: $margins;
    float: left;
    background-color: lightslategrey;
    border-radius: $border-radius;
  }
  
  &__part {
    position: relative;
    float: left;
    
    width: $partSize;
    height: $partSize;
    margin: $margins;
  
    transform: rotateY(180deg);
    transform-style: preserve-3d;
    transition: all $transTime ease-in-out;
   
    &:hover .demo__part-front {
      box-shadow: 0 0 $shadow-size black;
      transform: scale(0.96);
      
      &:after {
        opacity: 0;
      }
    }    
  }
  
  &__part-front, &__part-back {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    
    overflow: hidden;    
    backface-visibility: hidden;
    border-radius: $border-radius;
    cursor: pointer;
    
    
  }
  
  &__part-front {
    background-color: lightslategrey;
    background-size: cover;
    background-position: center;
    
    transform: rotateX(0deg);
    transition: all $transTime / 1.5 ease;
    
    &:after {
      position: absolute;
      top: 0;
      left: 0;
      
      width: 100%;
      height: 100%;
      
      background-color: black;
      
      content: "";
      opacity: 0.5;      
      transition: all $transTime / 1.5 ease;
    }
  }
  
  &__part-back {
    transform: rotateY(180deg) rotateX(0deg);
  }
  
  &__part-back-inner {
    width: $partSize * $cols + $margins * ($cols - 1) * 2;
    height: $partSize * $rows + $margins * ($rows - 1) * 2;    
    
    background-image: url(http://kirillkiyutin.com/img/nyc/nyc1.jpg);
    background-size: cover;
    background-position: center;
    
    backface-visibility: hidden;
  }
  
  &__help {
    margin-bottom: 7px;
    font-size: 30px;
    font-family: "Yanone Kaffeesatz", sans-serif;
    
    color: white;
    
    & a {
      color: white;
      
      &:hover {
        color: #E39999;
      }
    }
  }
}

@for $row from 1 through $rows {
  @for $col from 1 through $cols {
    .demo__part-#{$row}-#{$col} .demo__part-back-inner {
      transform: translate( -($col - 1) * ($partSize + $margins * 2), -($row - 1) * ($partSize + $margins * 2) );
    }
  }
}

.show-front {
  transform: none;
}
//END PARTIE CSS
*/

"use strict";
$(document).ready(function() {

  var rows = 4; //change this also in css
  var cols = 6; //change this also in css
  var staggerTime = 150;

  var urls = [
    "https://kiyutink.github.io/nyc/nyc1.jpg",
    "https://kiyutink.github.io/nyc/nyc2.jpg",
    "https://kiyutink.github.io/nyc/nyc3.jpg",
    "https://kiyutink.github.io/nyc/nyc4.jpg",
    "https://kiyutink.github.io/nyc/nyc5.jpg",
    "https://kiyutink.github.io/london/london1.jpg",
    "https://kiyutink.github.io/london/london2.jpg",
    "https://kiyutink.github.io/london/london3.jpg",
    "https://kiyutink.github.io/madrid/madrid1.jpg",
    "https://kiyutink.github.io/madrid/madrid2.jpg",
    "https://kiyutink.github.io/madrid/madrid3.jpg",
    "https://kiyutink.github.io/beijing/beijing1.jpg",
    "https://kiyutink.github.io/beijing/beijing2.jpg",
    "https://kiyutink.github.io/beijing/beijing3.jpg",
    "https://kiyutink.github.io/moscow/moscow1.jpg",
    "https://kiyutink.github.io/moscow/moscow2.jpg",
    "https://kiyutink.github.io/moscow/moscow3.jpg",
    "https://kiyutink.github.io/sidney/sidney1.jpg",
    "https://kiyutink.github.io/sidney/sidney2.jpg",
    "https://kiyutink.github.io/sidney/sidney3.jpg",
    "https://kiyutink.github.io/tokyo/tokyo1.jpg",
    "https://kiyutink.github.io/tokyo/tokyo2.jpg",
    "https://kiyutink.github.io/tokyo/tokyo3.jpg",
    "https://kiyutink.github.io/la/la3.jpg"
  ];

  var $gallery = $(".demo__gallery");
  var $help = $(".demo__help");
  var partsArray = [];
  var reqAnimFr = (function() {
    return window.requestAnimationFrame || function(cb) {
      setTimeout(cb, 1000 / 60);
    }
  })();

  
  $gallery.html('');
  for (let row = 1; row <= rows; row++) {
    partsArray[row - 1] = [];
    for (let col = 1; col <= cols; col++) {
      $gallery.append(`<div class="show-front demo__part demo__part-${row}-${col}" row="${row}" col="${col}"><div class="demo__part-back"><div class="demo__part-back-inner"></div></div><div class="demo__part-front"></div></div>`);
      partsArray[row - 1][col - 1] = new Part();
    }
  }
  
  var $parts = $(".demo__part");
  var $image = $(".demo__part-back-inner");
  var help = true;

  for (let i = 0; i < $parts.length; i++) {
    $parts.find(".demo__part-front").eq(i).css("background-image", `url(${urls[i]})`);
  }

  $gallery.on("click", ".demo__part-front", function() {

    $image.css("background-image", $(this).css("background-image"));
    if (help) {
      $help.html("Click any of the tiles to get back");
      help = false;
    }

    let row = +$(this).closest(".demo__part").attr("row");
    let col = +$(this).closest(".demo__part").attr("col");
    waveChange(row, col);
  });

  $gallery.on("click", ".demo__part-back", function() {
    if (!isShowingBack()) return;

    $help.html(`Check out my other <a target="blank" href="https://codepen.io/kiyutink/">pens</a> and follow me on <a target="_blank" href="https://twitter.com/kiyutin_k">twitter</a>`);

    setTimeout(function() {
      for (let row = 1; row <= rows; row++) {
        for (let col = 1; col <= cols; col++) {
          partsArray[row - 1][col - 1].showing = "front";
        }
      }
    }, staggerTime + $parts.length * staggerTime / 10);
    
    
    showFront(0, $parts.length);
    
  });
  
  function showFront(i, maxI) {
    if (i >= maxI) return;
    $parts.eq(i).addClass("show-front");
    
    reqAnimFr(function() {
      showFront(i + 1);
    });
  }

  function isShowingBack() {
    return partsArray[0][0].showing == "back" && partsArray[0][cols - 1].showing == "back" && partsArray[rows - 1][0].showing == "back" && partsArray[rows - 1][cols - 1].showing == "back";
  }

  function Part() {
    this.showing = "front";
  }

  function waveChange(rowN, colN) {
    if (rowN > rows || colN > cols || rowN <= 0 || colN <= 0) return;
    if (partsArray[rowN - 1][colN - 1].showing == "back") return;
    $(".demo__part-" + rowN + "-" + colN).removeClass("show-front");
    partsArray[rowN - 1][colN - 1].showing = "back";
    setTimeout(function() {
      waveChange(rowN + 1, colN);
      waveChange(rowN - 1, colN);
      waveChange(rowN, colN + 1);
      waveChange(rowN, colN - 1);
    }, staggerTime);
  }
});
