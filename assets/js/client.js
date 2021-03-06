function isValidEmailAddress(emailAddress) {
    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(emailAddress);
};

function stringMatch(stringOne, stringTwo) {
  console.log(stringOne + ":" + stringTwo + "=" + (stringOne===stringTwo));
  return (stringOne === stringTwo);
};

var app = {
  timers: {},
  callbacks: {
    checkLogin: function (data) {
      if (data.user) {
        window.location.replace('/'); // success
      } else {
        var $output = $(".login-form output");
        $output.text(data.message);
      }
    },

    signUp: function (data) {
      var $output = $(".signup-form output");
      $output.text(data);
      $(".login-form [name=email]").val( $(".signup-form [name=email]").val() );
      $(".login-form [name=password]").val( $(".signup-form [name=password]").val() );
      $(".login-form .submit").trigger("click");
    },
    
    updateSelect: function (data) {
      if(data.option) {
        $('#' + data.select).append('<option value="' + data.option.id + '">' + data.option.name + '</option>');
      }
    },

    output: function (data, $form) {
      if ($form){
        if (data.message) {
          $form.find("output").text(data.message)
        }
      }

      if (data.redirect) {
        location.href = data.redirect;
      }
 
      if (data.reload) {
        location.reload();
      }

      if (data.target) {
        location.hash = data.target;
      }

      if (data.callback && app.callbacks[data.callback]) {
        app.callbacks[data.callback]();
      }
    }
  },

  site: { // sitewide functionality
    setup: function () {
      
//      /* initialize soundcloud API with key */
//      SC.initialize({
//          /* This is the sample client_id. you should replace this with your own*/
//          client_id: "81211858"
//      });
//
//      /* Use soundcloud API to get track list */
//      SC.get("/users/the-sol-armada/tracks", {limit: 100}, function(tracks){
//        var trackList = ""
//        for (var i = 0; i < tracks.length; i++) {
//          /* populate trackList html */
//          trackList += tracks[i].title + "<br>";
//        }
//        $("#status").html(trackList);
//      });
//      $.get(
//        'https://api.soundcloud.com/tracks?client_id=2496d563bc04969008f51510c282da89', 
//        function (result) {
//          console.log(result);
//        }
//      );
//      
//        SC.initialize({
//          client_id: '2496d563bc04969008f51510c282da89',
//          redirect_uri: 'http://example.com/callback'
//        });
      window.setInterval(function() {
        var frame = document.getElementById('discord-widget');
        frame.src = frame.src;
      }, 40000);
      
      if($(window).width() < 968) {
        $('.sidebar').hide();
        $('body').css('background-image','none');
        $('footer').hide();
        $('.artical').css('background-color','rgba(0,0,0,0)');
        $('.logo').css('background-color','rgba(0,0,0,0)');
      }
      
      $(window).resize(function(){
        if($(window).width() < 1183) {
          $('.sidebar').hide();
          $('.articals').removeClass('col-md-9');
          $('.articals').addClass('col-md-12');
        }
        if($(window).width() > 1185) {
          $('.sidebar').show();
          $('.articals').removeClass('col-md-12');
          $('.articals').addClass('col-md-9');
        }
      });
      
      $('.number-only').keypress(function (e) {
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
          return false;
        }
      });
      
      $("body").on("click", ".submit", function () {
        var $form = $(this).parents("form").first();
        app.site.submitForm($form);
      });
      
      $("body").on("click", ".discord", function () {
        var win = window.open('https://discord.gg/0Vr0BMdhh6w3AcoX',"_blank");
        if(win) {
          win.focus();
        }
      });

      $("body").on("click", ".register", function () {
        var $form = $(this).parents("form").first();
        var $values = {};
        var $output = $('#register output');
        $output.text("");
        $.each($('#register').serializeArray(), function(i, field) {
          $values[field.name] = field.value;
        });
        
        if(isValidEmailAddress( $values['email'] )){
          console.log($values['password'] + ":" + $values['repassword'] + " = " + ($values['password']==$values['repassword']));
          if(stringMatch($values['password'], $values['repassword'])) {
            app.site.submitForm($form);
          } else {
            $output.text('Passwords did not match!');
          }
        } else {
            $output.text('That is not a valid email!');
        }
      });

//      $("form").on("keyup", "input", function (e){
//        if (e.which == 13) {
//          var $form = $(this).parents("form").first();
//          app.site.submitForm($form);
//        }
//      });
    },

    submitForm: function ($form) {
      var callback = $form.data().callback;
      var url = $form.attr("action");
      var data = $form.serialize();
      $.ajax({
        type: "POST",
        url: url,
        data: data,
        success: function (data) {
          if (app.callbacks[callback]){
            app.callbacks[callback](data, $form);
          }
        }
      });
    }
  }
}

app.site.setup();