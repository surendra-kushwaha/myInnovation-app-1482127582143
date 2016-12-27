app.controller('homeCtrl', function($scope, $location, $state, $http, $rootScope) {
	
	$scope.backsShow = function () {
		$('.fronts, .new-rght').hide();
		$('.backs').show();
	};
	
	$scope.frontsShow = function () {
		$('.fronts, .new-rght').show();
		$('.backs').hide();	
	};
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
      $(".fnt-msg").mouseenter(function () {
        $(this).next(".bck-msg").show();
        $(this).hide();
      });
      $(".bck-msg").mouseenter(function () {
    	  $(this).show();
      });
      $('body').not('.bck-msg').mouseenter(function () {
    	  $(".fnt-msg").show();
    	  $(".bck-msg").hide();
      });
      $(".bck-msg").mouseleave(function () {
        $(this).prev(".fnt-msg").show();
        $(this).hide();
      });
      
      $("ul.tab li a").off().on("click", function () {
    	  $(this).addClass('active').parent('li').siblings('li').children('a').removeClass('active');
    	  if($(this).text() != 'SUB IDEAS' && $(this).text() != 'POPULAR IDEAS'){
    		  $scope.openCity(event, 'Paris');
    	  }else{
    		  $scope.openCity(event, 'London');
    	  }
    	  
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
    //$(this).addClass('active').parent('li').siblings('li').children('a').removeClass('active');
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
       // tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(cityName).style.display = "block";
    
    if(flag){
    	$(".tablinks").eq(0).addClass(' active');
    }
    //evt.currentTarget.className += " active";
  };
  
  $scope.iconRaise = function () {
	  $(".rolls span img").hover(function () {
    	  t = $(this).attr('src');
    	 var tt = t.split(".png");
    	 console.log(tt[0]+"1.png");
    	 if(tt[0] != 'images/Details_views-icon'){
    	 $(this).attr('src', tt[0]+"_Hover.png");
    	 }
    	}, function () {
    		$(this).attr('src', t);
    	});
	  
	  $(".ide-det").each(function () {
		   var textt = $(this).text().substring(0, 200);
		   if($(this).text().length>200){
		 	textt = textt+"...";
		    }
		  $(this).text(textt);
		});
  }
});

