$(document).ready(function(){
    $("#hello").addClass("hello-world");
    $("#hello").text("Hello World!")

    $("a").attr("href", "http://www.facebook.com/");

    // $("h1").click(function() {
    //     $("h1").css("color", "red");
    // })

    $("button").click(function(){
        $("h1").css("color", "red");
    })

    $("input").keypress(function(event){
        console.log(event.key);
        $("#hello").text(event.key)
    })
});

