var slideshow = remark.create({
  ratio: '16:9',
  navigation: {
    scroll: false,
    touch: false,
    click: false
  },
  highlightLines: true,
  highlightStyle: 'monokai'
});

slideshow.on('showSlide', function (slide) {
  // Check for any slide function
  var slideName = slide.properties.name
  if (!slideName) {
    return false;
  }
  var slideFunc = slideName.replace('-', ''),
      slideFuncEval = eval(slideFunc);
  if ($.isFunction(slideFuncEval)) {
    slideFuncEval();
  }
});

var workflowoverflowInit;
function workflowoverflow() {
  if (!workflowoverflowInit) {
    workflowKillingMeStart()
    workflowoverflowInit = true;
  }
}

function doge(func_options) {
  if (typeof func_options === "undefined") func_options = '';
  if (func_options == "clear") {
    $('.dogeText').remove();
  } else {
    av_doge_texts = Array('LESS', 'Stylus', 'SASS', 'CSS', 'CoffeScript', 'Dart', 'Jade', 'HAML', 'Handlebars', 'Template', 'Layout', 'HTML', 'EJS', 'Mocha', 'Jasmine', 'JSLint', 'casperJS', 'Nightwatch.js', 'UglifyJS', 'Minify', 'Refresh', 'Save', 'Load', 'Deploy', 'Upload', 'Test', 'Assets', 'Imagemin', 'Icons', 'Sprites', 'Webfont', 'FTP');
    av_doge_colors = Array('#F56E41', '#FFD43D', '#19B842');
    $("#slide-workflow-overflow").append('<div style="font-family:\'Comic Sans MS\', cursive, sans-serif;font-size:70px;line-height:44px;position:absolute;top:'+(Math.floor(Math.random()*$(window).height()+$(document).scrollTop()-300)+100)+'px;left:'+(Math.floor(Math.random()*$(window).width()-400)+100)+'px;color:'+av_doge_colors[Math.floor(Math.random()*av_doge_colors.length)]+'" class="dogeText">'+av_doge_texts[Math.floor(Math.random()*av_doge_texts.length)]+'</div>');
  }
  return null;
}

function workflowKillingMeStart() {
  var amount = 200,
      i = 1;
  var go = setInterval(function() {
    doge();
    i++;
    if (i >= amount) {
      clearInterval(go);
    }
  }, 25);

}

// Remote
var socket = io();
// socket.on('connection', function(socket){
  socket.on('slideChange', function(data){
    if (data == 'next') {
      slideshow.gotoNextSlide();
      return;
    }
    if (data == 'prev') {
      slideshow.gotoPreviousSlide();
      return;
    }
  });
// });