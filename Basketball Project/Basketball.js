var RayAllen = new Audio("Ray Allen.mp3")

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