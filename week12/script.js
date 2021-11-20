console.log("theMessage is here! (the javascript is here)")

var d = new Date();
      var n = d.getHours();
      if (n > 19 || n < 6)
        $("#body").css("background", "url('references/sleep.gif')");
      else if (n > 8 && n < 16)
        $("#body").css("background", "url('references/geo.gif')");
      else
        $("#body").css("background", "url('references/free.gif')");


jQuery(document).ready(function( $ ){

    var thehours = new Date().getHours();
        var themessage;
        var school = ('have fun at school');
        var sleep = ('enjoy your rest');
        var free = ('enjoy your freetime');
            
                if (thehours >= 19 && thehours < 6) {
                    themessage = sleep;
                $("#greeting").addClass("sleep");
            
                } else if (thehours >= 8 && thehours < 16) {
                    themessage = school;
                $("#greeting").addClass("school");
            
                } else {
                    themessage = free;
                $("#greeting").addClass("free");
                }
            
                $('#greeting').append(themessage);
              
            });