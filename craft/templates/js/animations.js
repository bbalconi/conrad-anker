
			function initializeContactPanel() {
				$("#contact-link").click(function() {
					var currWidth = $(".contact-slide").width();

					$(".contact-slide").css({"right": (0 - currWidth - 30) + "px"});
					$(".contact-slide").animate({right: "0px"}, 500);
				});

				$(".contact-x").click(function() {
					$(".contact-slide").animate({right: "-1000px"}, 1000);
				});
			}	

			function initializePanelClicks() {
				$(".engage-row").click(function() {
					$("#explore").animate({width: "0%"}, 500);
					$(".resize-bottom-explore").css({position: 'absolute'});
					$(".resize-bottom-explore").animate({width: "0"}, 500);
					$(".explore-text .redl-active").css({width: '0.5em !important'}, 500);
					$(".explore-row").fadeOut();
					$("#engage").animate({width: "100%"}, 500, function() {
						$("#explore").css({height: "0"});
						$("#explore").hide();
						$(".exploreSection").hide();
						$(".engageSection").show();
						$("body").css({position: "static"});
						$("body").css({top: "0px"});
						$("body").css({height: "0px"});
						$("body").css("overflow-y", "scroll");
					});

					$("#engage-rot-text").fadeIn();
					$(".engage-row .redl").addClass("redl-active");
					$("#engage").css({"background-image": "url('/img/right-background.jpg')"});
				});

				$("#explore-mobile-click").click(function() {
					
					$("#explore-rot-text-mobile").fadeIn();
					$("#engage-mobile-click .redl").addClass("redl-active");
					$("#engage-mobile-row").animate({height: "0%"}, 500);
					$("#engage-mobile .redl").fadeOut();
					$("#engage-mobile .explore-text").fadeOut(); 
					$("#explore-mobile-row").animate({height: "100%"}, 500, function() {
						$(".engageSection").hide();
						$(".exploreSection").show();
						
						$("body").css({position: "static"});
						$("body").css("overflow-y", "scroll");
					});
					$("#explore-mobile").css({"background-image": "url('/img/left-background.jpg')"});

				});

				$(".explore-row").click(function() {
					$("#engage").animate({width: "0%"}, 500);
					$(".resize-bottom-engage").animate({width: "0%"}, 500);
					$(".engage-row").fadeOut();
					$("#explore").animate({width: "100%"}, 500, function() {
						$("#engage").css({height: "0"});
						$("#engage").hide();
						$(".engageSection").hide();
            $(".exploreSection").show();
						$("body").css({position: "static"});
						$("body").css("overflow-y", "scroll");
					});

					$("#explore-rot-text").fadeIn();
					$(".explore-row .redl").addClass("redl-active");
					$("#explore").css({"background-image": "url('/img/left-background.jpg')"});
				});
			}

			function clearActive() {
				var currActive = $(".oi-active");
				currActive.removeClass("oi-active");
				currActive.removeClass("oi-active-light");
				currActive.removeClass("oi-active-dark");

				var currCircle = $(".circle-active");
				currCircle.removeClass("circle-active");
      }
      
			function stickyOutline() {
				var topOffset = $(".outline-contain").offset().top;
				$(window).on("scroll", function() {
					if(window.pageYOffset >= topOffset) {
						$(".outline-contain").addClass("sticky-outline");
					} else {
						$(".outline-contain").removeClass("sticky-outline");
					}

					if(window.pageYOffset < $("#row2").offset().top - 50) {
						clearActive();
						$("#about-outline .circle-item").addClass("circle-active");
						$("#about-outline .outline-item-text").addClass("oi-active");
						$("#about-outline .outline-item-text").addClass("oi-active-light");
					} else if(window.pageYOffset >= $("#row6").offset().top - 50) {
						clearActive();
						$("#press-outline .circle-item").addClass("circle-active");
						$("#press-outline .outline-item-text").addClass("oi-active");
						$("#press-outline .outline-item-text").addClass("oi-active-light");
					} else if(window.pageYOffset >= $("#row5").offset().top - 50) {
						clearActive();
						$("#tools-outline .circle-item").addClass("circle-active");
						$("#tools-outline .outline-item-text").addClass("oi-active");
						$("#tools-outline .outline-item-text").addClass("oi-active-dark");
					} else if(window.pageYOffset >= $("#row4").offset().top - 50) {
						clearActive();
						$("#history-outline .circle-item").addClass("circle-active");
						$("#history-outline .outline-item-text").addClass("oi-active");
						$("#history-outline .outline-item-text").addClass("oi-active-light");
					} else if(window.pageYOffset >= $("#row3").offset().top - 50) {
						clearActive();
						$("#expeditions-outline .circle-item").addClass("circle-active");
						$("#expeditions-outline .outline-item-text").addClass("oi-active");
						$("#expeditions-outline .outline-item-text").addClass("oi-active-light");
					} else if(window.pageYOffset >= $("#row2").offset().top - 50) {
						clearActive();
						$("#achievements-outline .circle-item").addClass("circle-active");
						$("#achievements-outline .outline-item-text").addClass("oi-active");
						$("#achievements-outline .outline-item-text").addClass("oi-active-dark");
					}
				});
      }


			function initHistorySection() {
				$(".history-menu-item").click(function() {
					var currentActive = $(".hm-active");
					var currentDescription = $(".history-active");
					currentActive.removeClass("hm-active");
					currentDescription.removeClass("history-active");

					$(this).addClass("hm-active");
					var selectedIndex = $(".history-menu-item").index($(this));		
					var newEventDescription = $(".history-content:eq(" + selectedIndex + ")");
					newEventDescription.addClass("history-active");

				});
				
			}

			function pressChange(itemIdx) {
				var currentActive = $(".active-press");
				currentActive.removeClass("active-press");
				currentActive.addClass("inactive-press");

				var newItem = $(".press-content:eq(" + itemIdx + ")");
				newItem.addClass("active-press");
				newItem.removeClass("inactive-press");
			}


			function initPressScroller() {
				$(".press-item-container").click(function() {
					var currentActive = $(".press-item-active");
					currentActive.removeClass("press-item-active");
					var currentIndex = $(".press-item").index(currentActive);

					var newIndex = $(".press-item-container").index(this);
					$(this).find(".press-item").addClass("press-item-active");
					pressChange(newIndex);
				});

				$(".left-angle").click(function() {
					var currentActive = $(".press-item-active");
					currentActive.removeClass("press-item-active");

					var amountItems = $(".press-item-container").length;
					var currentIndex = $(".press-item").index(currentActive);

					var newIndex = amountItems - 1; //Start by assuming you are at the end.
					if(currentIndex > 0) {
						newIndex = currentIndex - 1;
					}

					var newPressItemContainer = $(".press-item-container:eq(" + newIndex + ")");
					newPressItemContainer.find(".press-item").addClass("press-item-active");
					pressChange(newIndex);
				});

				$(".right-angle").click(function() {
					var currentActive = $(".press-item-active");
					currentActive.removeClass("press-item-active");

					var amountItems = $(".press-item-container").length;
					var currentIndex = $(".press-item").index(currentActive);

					var newIndex = 0; //Start by assuming you are at the start.
					if(currentIndex < (amountItems - 1)) {
						newIndex = currentIndex + 1;
					}

					var newPressItemContainer = $(".press-item-container:eq(" + newIndex + ")");
					newPressItemContainer.find(".press-item").addClass("press-item-active");
					pressChange(newIndex);
				});
			}

			function initModal(videoId, h1, paragraph) {
				var modalWidth = $(".modalCA").width();
				var adjustedW = modalWidth * 0.8;
				var adjustedH = adjustedW / 1.9;

				var iframe = document.createElement('iframe');
				iframe.src = videoId;
				iframe.width = adjustedW;
				iframe.height = adjustedH;

				$(".modal-video-contain").html(iframe);

				$(".modal-h1").html(h1);
				$(".modal-p").html(paragraph);
				$(".modalCA").fadeIn();
				$(".modalMask").fadeIn();
			}

			function modalPopover() {
				$(".modal-close").click(function() {
					$(".modalCA").fadeOut();
					$(".modalMask").fadeOut();
				});
			}

			$(document).ready(function() {
				initializePanelClicks();
				initializeContactPanel();
				stickyOutline();
				initHistorySection();
				initPressScroller();
				modalPopover();

				$(window).on('beforeunload', function(){
				    $(window).scrollTop(0);
				});
			});