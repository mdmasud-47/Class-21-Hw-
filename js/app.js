 //selector
 // $(Selector).action()

/*$(document).ready(function(){
    $("button").click(function(){
        $("p:first").hide();
    });
});*/

$(document).ready(function(){
    $("#click").click(function(){
        $("ul li:first-child").hide()
    })
})

$(document).ready(function(){
    $("tr:odd").css("background-color", "pink");
})

$(document).ready(function(){
    $("p").click(function(){
        $(this).hide()
    })
})

$(document).ready(function(){
    $("#p1").mouseup(function(){
        alert("You entered p1")
    })
})
//input selector

$(document).ready(function(){
    $("input").focus(function(){
      $(this).css("background-color", "red");
    });
    $("input").blur(function(){
      $(this).css("background-color", "blue");
    });
  });
 
  //fade Toggle
  $(document).ready(function(){
    $("button").click(function(){
      $("#div1").fadeToggle();
      $("#div2").fadeToggle("slow");
      $("#div3").fadeToggle(3000);
    });
  });
//slide

  $(document).ready(function(){
    $("#flip").click(function(){
      $("#panel").slideToggle("slow");
    });
  });

  //animation
  $(document).ready(function(){
    $("#btn").click(function(){
    $("#div").animate({
      left: '300px',
      opacity: '0.5',
      width: '300px',
      height: '300px'
    })
    })
  })

  //chining
  $(document).ready(function(){
    $("#chining").click(function(){
      $("#p2").css("color", "red").slideUp(2000).slideDown(2000);
    })
  })


  //Get
  $(document).ready(function(){
    $("#get").click(function(){
      alert("value:"+$("#name").val())
    })
  })