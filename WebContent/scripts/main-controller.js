app.controller('homeCtrl', function($scope, $location, $state, $http, $rootScope) {

    $scope.openDefault = function () {
      //alert('');
    	//$("#defaultOpen").click();
      $scope.openCity(event, 'London', 1);
      $(".left-arr-menu").off().on("click", function () {
        $(".float-major-menu, .hide-arr-menu").show();
        $(".hide-arr-menu").addClass("midl-menu");
        $(".midl-menu").off().on("click", function () {
            $(".float-major-menu, .hide-arr-menu").hide();
            $(".float-menu").show();
          });
        $(".float-menu").hide();
      });
      $(".ide-det").text(function(index, currentText){return currentText.substr(0, 100);});
      $(".fnt-msg").off().on("mouseover", function () {
        $(this).next(".bck-msg").show();
        $(this).hide();
      });

      $(".bck-msg").off().on("mouseout", function () {
        $(this).prev(".fnt-msg").show();
        $(this).hide();
      });

      $(".sub-menus1 li").off().on("click", function () {
    	 $(this).addClass('selected');
    	 $(this).siblings('li').removeClass('selected');
        $(".float-major-menu").addClass("rght5");
        $(".hide-arr-menu").addClass("big-menu");
        $(".big-menu").off().on("click", function () {
        	$(".sub-menus1 li").removeClass('selected');
          $(".float-major-menu").removeClass("rght5");
          $(".hide-arr-menu").addClass("midl-menu");
          $(".midl-menu").off().on("click", function () {
            $(".float-major-menu, .hide-arr-menu").hide();
            $(".float-menu").show();
          });
        });
      });
      /*setTimeout(function () {
    	  $("#defaultOpen").click();
      }, 2000);*/
    };

      $scope.openCity =  function(evt, cityName, flag) {
    // Declare all variables

    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(cityName).style.display = "block";
    
    if(flag){
    	$(".tablinks").eq(0).addClass(' active');
    }
    //evt.currentTarget.className += " active";
  };
});

