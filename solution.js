function greetUser(name){
  $("#greeting").text("Hello,"+name);
}
function switchImage(gallery){
  $("#gallery-main").attr("src", gallery);
}

  var safeColors = ['12','33','66','99','dc','ff'];
var rand = function() {
    return Math.floor(Math.random()* 6);
};
var randomColor = function() {
    var r = safeColors[rand()];
    var g = safeColors[rand()];
    var b = safeColors[rand()];
    return "#"+r+g+b;
};
function changeBackgroundColor(){
   $("body").css("background-color", randomColor);
}
//back[Math.floor(Math.random() * back.length)];//