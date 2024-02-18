$(document).ready(function(){
    $("#hide").click(function(){
      $("p").hide();
    });

    $("#show").click(function(){
      $("p").show();
    });

    $("button").click(function(){
    $("#div1").fadeIn();
    $("#div2").fadeIn("slow");
});


    $("button").click(function(){
    $("#div1").fadeOut();
    $("#div2").fadeOut("slow");
    });

    $("#btn2").click(function(){
        $("ol").append("<li>Appended item</li>");
      });

      $("#btn3").click(function(){
        $("h2").html("Hello <b>world!</b>");
      });
  });

