var RayAllen = new Audio("Ray Allen.mp3")
var Kobeshot = new Audio("Kobe last game.mp3")

$('#box1').click(
    function(){
        $('#KOBE').fadeIn();
    }
);

$('#basketball').click(
    function(){
        RayAllen.play();
        TweenMax.to('#basketball',1.7,{x: 0,y: 200,delay:6,});
    }
    
);

$('#basketball2').click(
    function(){
        TweenMax.to('#basketball2',1,{x: 160, y: -92,delay:11,});
        Kobeshot.play();
    }
)

$('#basketball3').click(
    function(){
        TweenMax.to('#basketball3',1,{x: -175, y: 109,delay:1,});
    }
)