var xTarget = Math.floor(Math.random() * $( window ).width())-400;
var yTarget = -Math.floor(Math.random() * $( window ).height())+200;

var jump = new Audio("jump.mp3")
var ted = new Audio("ted.mp3")



$('#baseball').click(
    function(){
     TweenMax.to('#baseball',.5,{x:-9,y:95,ease:Sine.easeOut});
     TweenMax.to('#baseball',2,{x: xTarget,y: yTarget,delay:.4,ease:Sine.easeOut,onComplete:outcome});
    }
    
);


var homePlate=[523,717];
var rightfoulline=[984.250];
var leftfoulline=[57,250];

var diffX = Math.abs(rightfoulline-homePlate)
var diffY = Math.abs(leftfoulline-homePlate)
console.log(distance(diffX,diffY));



function outcome(){
    var ball = $( "#baseball" );
    var ballPosition = ball.position();
    var ballX = ballPosition.left;
    var ballY = ballPosition.top;
    var player = $('#exampleboxrightfield');
    var playerPosition = player.position();
    var playerX = playerPosition.left;
    var playerY = playerPosition.top;

   
    if( distance(ballX,ballY,playerX,playerY) < 350 ){
        console.log ('out')
        $('#fielder').fadeIn();
        jump.play();
    }  
    else{
        ted.play();   
    }

    
    
    console.log(distance(ballX,ballY, playerX, playerY));
    
} 


function distance(x1,y1,x2,y2){
    var sideA = Math.abs(x1-x2);
    var sideB = Math.abs(y1-y2);
  return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
}



$('#box1').click(
    function(){
        $('[player]').fadeOut();
        $('#firstbase').fadeIn();
    }
);

$('#box2').click(
    function(){
        $('[player]').fadeOut();
        $('#secondbase').fadeIn();
    }
);

$('#box3').click(
    function(){
        $('[player]').fadeOut();
        $('#shortstop').fadeIn();
    }
);


$('#box4').click(
    function(){
        $('[player]').fadeOut();
        $('#thirdbase').fadeIn();
    }
);

$('#box5').click(
    function(){
        $('[player]').fadeOut();
        $('#pitcher').fadeIn();
    }
);

$('#box6').click(
    function(){
        $('[player]').fadeOut();
        $('#rightfield').fadeIn();
    }
);

$('#box7').click(
    function(){
        $('[player]').fadeOut();
        $('#centerfield').fadeIn();
    }
);

$('#box8').click(
    function(){
         $('[player]').fadeOut();
        $('#leftfield').fadeIn();
    }
);

$('#box9').click(
    function(){
        $('[player]').fadeOut();
        $('#catcher').fadeIn();
    }
);

$('#box10').click(
    function(){
        $('[player]').fadeOut();
        $('#hitter').fadeIn();
    }
);