app.controller('homeCtrl', function($scope, $location, $state, $http, $rootScope) {

    $scope.openDefault = function () {
      //alert('');
      $scope.openCity(event, 'London');
      $(".left-arr-menu").off().on("click", function () {
        $(".float-major-menu, .hide-arr-menu").show();
        $(".float-menu").hide();
      });

      $(".fnt-msg").off().on("mouseover", function () {
        $(this).next(".bck-msg").show();
        $(this).hide();
      });

      $(".bck-msg").off().on("mouseout", function () {
        $(this).prev(".fnt-msg").show();
        $(this).hide();
      });

      $(".sub-menus1").off().on("click", function () {
        $(".float-major-menu").addClass("rght5");
        $(".hide-arr-menu").addClass("big-menu");
        $(".big-menu").off().on("click", function () {
          $(".float-major-menu").removeClass("rght5");
          $(".hide-arr-menu").addClass("midl-menu");
          $(".midl-menu").off().on("click", function () {
            $(".float-major-menu, .hide-arr-menu").hide();
            $(".float-menu").show();
          });
        });
      });
    };

      $scope.openCity =  function(evt, cityName) {
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
    //evt.currentTarget.className += " active";
  };
    $scope.homeContents = [{
        "title": "Financial Services",
        "description": "Citibank Mobile Challenge (EALA) competition in search of innovation and ideas that truly change the way the world banks. Ideate and transform concept to working prototype in 4 weeks.",
        "imgSrc": "images/fwallet_home.jpg",
        "homeId": "finance"
    }, {
        "title": "Health & Public Service",
        "description": "Client is a large NA healthcare provider, having a complex integration architecture with several layers, using on-prem solution. There is an IT transformation initative to simplify the architecture and move to a cloud based solution. Client requested project team to revert with an approach involving relevant and newer technology, and agile/liquid development, and show how it would align to their strategy and roadmap.",
        "imgSrc": "images/drug_group_dropshadow.jpeg",
        "homeId": "health"
    }, {
        "title": "Products",
        "description": "Client is a fictitious NA Electronics retailer who is struggling with issues related to customer engagement in store. Customers reach out to store associates for help, who either need to be highly trained or use computers at designated locations for guidance. The retailer wants to increase customer engagement by providing services like checkout and information about products wherever the customer is at the store.",
        "imgSrc": "images/smartass_home.jpg",
        "homeId": "products"
    }, {
        "title": "Communications Media & Technology",
        "description": "The client, who is a tier 1 Telco based in NA, is putting up a proposal to implement the new ASC 606 accounting standard. Accenture client team want to showcase Accenture’s way for migrating to the new accounting standard through an interactive and engaging interface. They would also like to use this tool to familiarize their team with this new standard and the migration approach.",
        "imgSrc": "images/smart_associate.jpg",
        "homeId": "communications"
    }, {
        "title": "Resources",
        "description": "Internal industry asset to leverage existing SOA platforms and enterprise resources, to showcase business capabilities around contract registration in the Utilities space.",
        "imgSrc": "images/Wealth_home.jpg",
        "homeId": "resources"
    }, {
        "title": "Cross Industry",
        "description": "Large NA Retailer having thousands of stores, currently using a legacy AS400 to manage pricing at store. Looking for innovative solutions to enable mobility and ease-of-use for store associates – as part of its strategic goal to improve the associate productivity. The retailer does not want to change the existing core systems running at store and the new solution is required to use the existing infrastructure.",
        "imgSrc": "images/Homepage_As400.jpeg",
        "homeId": "crossIndustry"
    }];
    var idds = [];
    $scope.iniit = function () {
    	$(".scroll-menus").show();
    };
    $(".scroll-menus div a").click(function() {
        $('html, body').animate({
            scrollTop: $($(this).attr("href")).offset().top - 64
        }, 500);
        idds = [];
        $scope.scrollFn();
    });
    $(window).on('scroll', function() {
        $scope.scrollFn();
    });
    $scope.scrollFn = function() {
    	idds = [];
    	$(".sub-drops").hide();
        $(".home-items>div").each(function(i, v) {
            if ($(window).scrollTop() >= $(this).offset().top-80) {
            	//$(".scroll-menus").show();
        		//$(".scroll-menus1").hide();
                idds.push($(this).attr("id"));

            }else{
            	//$(".scroll-menus").hide();
        		//$(".scroll-menus1").show();
            	//console.log("spert");
            	//$(".scroll-menus div").removeClass('active').children().find('.span').hide();
            }
        });
        if($("." + idds.slice(-1).pop()).length!=0){
        	console.log($("." + idds.slice(-1).pop()).length);
        	switch(idds.slice(-1).pop()) {
        	case 'finance':
        		objs = {
        			"finance":72,
        			"health":134,
        			"product":186,
        			"communications":241,
        			"resources":288,
        			"crossIndustry":338
        		};
        		$scope.adjuHeight();
        		break;
        	case 'health':
        		objs = {
        			"finance":72,
        			"health":124,
        			"product":187,
        			"communications":241,
        			"resources":288,
        			"crossIndustry":338
        		};
        		$scope.adjuHeight();
        		break;
        	case 'products':
        		objs = {
        			"finance":72,
        			"health":134,
        			"product":186,
        			"communications":241,
        			"resources":299,
        			"crossIndustry":360
        		};
        		$scope.adjuHeight();
        		break;
        	case 'communications':
        		objs = {
        			"finance":72,
        			"health":134,
        			"product":186,
        			"communications":241,
        			"resources":325,
        			"crossIndustry":378
        		};
        		$scope.adjuHeight();
        		break;
        	case 'resources':
        		objs = {
        			"finance":72,
        			"health":134,
        			"product":186,
        			"communications":241,
        			"resources":295,
        			"crossIndustry":346
        		};
        		$scope.adjuHeight();
        		break;
        		/*case 'crossIndustry':
        		objs = {
        			"finance":72,
        			"health":134,
        			"product":186,
        			"communications":241,
        			"resources":288,
        			"crossIndustry":338
        		};
        		$scope.adjuHeight();
        		break;
        	case default:
        		objs = {
        			"finance":72,
        			"health":134,
        			"product":186,
        			"communications":241,
        			"resources":288,
        			"crossIndustry":338
        		};
        		$scope.adjuHeight();
        		break;*/
        	}
        	$("." + idds.slice(-1).pop()).addClass('active').children().find('.span').show();
            $("." + idds.slice(-1).pop()).siblings('div').removeClass('active').children().find('.span').hide();
        }else{
        		$(".scroll-menus div").removeClass('active').children().find('.span').hide();

        }
    };

    $scope.adjuHeight = function () {
    	$(".finance").css("top", objs.finance+"px");
    	$(".health").css("top", objs.health+"px");
    	$(".products").css("top", objs.product+"px");
    	$(".communications").css("top", objs.communications+"px");
    	$(".resources").css("top", objs.resources+"px");
    	$(".crossIndustry").css("top", objs.crossIndustry+"px");
    };

    $(".scroll-menus>div").each(function () {
		$(this).removeClass('active').children().find('.span').hide();
	});

    $('html, body').animate({
        scrollTop: 0
    }, 50);

    $('.home-menu, .ops-menu').hide();
});

app.controller('catalogCtrl', function($scope, $location, $state, $stateParams, $http) {
	console.log($stateParams.catalog);
	$scope.catalogTitle = $stateParams.catalog;

	$(".scroll-menus").hide();

	$('.home-menu, .ops-menu').show();

	$scope.callBack = function (json) {
		console.log(json);
		$http.get(json).
	    success(function(data, status, headers, config) {
	    console.log(data);
	      $scope.catelogContents = data;
	    }).
	    error(function(data, status, headers, config) {
	      // log error
	    });

		};

	switch ($scope.catalogTitle) {
    case "Financial Services":
    	$scope.subTitles = "Financial Services";
    	$scope.callBack('data/financial.json');
        break;
    case "Health ":
    	$scope.subTitles = "Health & Public Service";
    	$scope.callBack('data/health.json');
        break;
    case "Products":
    	$scope.subTitles = "Products";
    	$scope.callBack('data/products.json');
        break;
    case "Communications Media ":
    	$scope.subTitles = "Communications Media & Technology";
    	$scope.callBack('data/communications.json');
        break;
    case "Resources":
    	$scope.subTitles = "Resources";
    	$scope.callBack('data/resources.json');
        break;
    case "Cross Industry":
    	$scope.subTitles = "Cross Industry";
    	$scope.callBack('data/crossindustry.json');
        break;
	}


	$scope.startC = function () {
	$('.carousel').carousel({interval: 4000});
	};
});

$(function () {
    $("#ops-menu").on("click", function (event) {
    	event.stopPropagation();
    	$(".sub-drops").show();
    });
    $(".sub-drops li a").on("click", function (e) {
    	$(".sub-drops").hide();
    });

    $('html').click(function() {
    	$(".sub-drops").hide();
    });
});
