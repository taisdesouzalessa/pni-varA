
$(".state2, .state3").hide();


$("#vote-hotspot-creepy, #skip-hotspot-creepy").click(function(){
    $(".state1").hide();
    $(".state2").show();
});

$("#vote-hotspot-buy").click(function(){
    $(".state2").hide();
    $(".state3").show();
});

$("#previous-hotspot-buy").click(function(){
    $(".state2").hide();
    $(".state1").show();
});


$("#close").click(function(){
    $(".state3").hide();
    $(".state1").show();
});


var lips = document.getElementById('lips');
function changeSmile(slider) {
    var sliderVal = slider.value,
        rotateDegree = - sliderVal * 1.8;
    lips.style.webkitTransform = "rotateX(" + rotateDegree + "deg)";
    lips.style.transform = "rotateX(" + rotateDegree + "deg)";
}