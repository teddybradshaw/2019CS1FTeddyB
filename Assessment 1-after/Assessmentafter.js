$('.box').click(
    function(){
        var myColor = $(this).css('background-color');
        $('#rectangle').css('background-color', myColor);
    }
)

$('.color3, .color4').click(
    function(){
        $('#rectangle').css('color', $(this).css('color'));
        $('#rectangle').text($(this).text());
    }
)

$("#box1").click(function(){
    $("#rectangle").css("background-color", "yellow");
});

$("#box2").click(function(){
    $("#rectangle").css("background-color", "blue");
});

$("box3").click(function(){
    $("#rectangle").css("background-color", "brown");
    $("#rectangle").text("4");
});

$("#box6").click(function(){
    $("#rectangle").css("background-color", "yellow");
});
