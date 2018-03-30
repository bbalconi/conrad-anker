function exploreScrollClicks() {
  $('#about-outline').on('click', function () {
    $('html, body').animate({
      scrollTop: $("#row1").offset().top - 49
    }, 500);
  });
  $('#achievements-outline').on('click', function () {
    $('html, body').animate({
      scrollTop: $("#row2").offset().top - 49
    }, 500);
  });
  $('#expeditions-outline').on('click', function () {
    $('html, body').animate({
      scrollTop: $("#row3").offset().top - 49
    }, 500);
  });
  $('#history-outline').on('click', function () {
    $('html, body').animate({
      scrollTop: $("#row4").offset().top - 49
    }, 500);
  });
  $('#tools-outline').on('click', function () {
    $('html, body').animate({
      scrollTop: $("#row5").offset().top - 49
    }, 500);
  });
  $('#press-outline').on('click', function () {
    $('html, body').animate({
      scrollTop: $("#row6").offset().top - 49
    }, 500);
  });
}

function contactOptions() {
  $('.contact-option').on('click', function () {
    $(this).attr('type', 'circle');
    if ($(this).index() === 0) {
      $('#co1').removeAttr('type')
      $('#co2').removeAttr('type')
    } if ($(this).index() === 1) {
      $('#co0').removeAttr('type')
      $('#co2').removeAttr('type')
    } if ($(this).index() === 2) {
      $('#co0').removeAttr('type')
      $('#co1').removeAttr('type')
    }
  });
};

function engageScrollClicks() {
  $('#about2-outline').on('click', function () {
    $('html, body').animate({
      scrollTop: $("#row1a").offset().top - 49
    }, 500);
  });
  $('#advocacy-outline').on('click', function () {
    $('html, body').animate({
      scrollTop: $("#row2a").offset().top - 49
    }, 500);
  });
  $('#speaking-outline').on('click', function () {
    $('html, body').animate({
      scrollTop: $("#row3a").offset().top - 49
    }, 500);
  });
  $('#filler-outline').on('click', function () {
    $('html, body').animate({
      scrollTop: $("#row4a").offset().top - 49
    }, 500);
  });
  $('#testimonials-outline').on('click', function () {
    $('html, body').animate({
      scrollTop: $("#row5a").offset().top - 49
    }, 500);
  });
  $('#coordinates-outline').on('click', function () {
    $('html, body').animate({
      scrollTop: $("#row6a").offset().top - 49
    }, 500);
  });
  $('#team-outline').on('click', function () {
    $('html, body').animate({
      scrollTop: $("#row7a").offset().top - 49
    }, 500);
  });
}

function initializeContactPanel() {
  $("#contact-link").click(function () {
    var currWidth = $(".contact-slide").width();

    $(".contact-slide").css({ "right": (0 - currWidth - 30) + "px" });
    $(".contact-slide").animate({ right: "0px" }, 500);
  });

  $(".contact-x").click(function () {
    $(".contact-slide").animate({ right: "-1000px" }, 1000);
  });
}

function hoverFix() {
  $('#explore').hover(function () {
    $('#explore').css('background-image', 'url(/img/left-background.jpg)');
  }, function () {
    $('#explore').css('background-image', 'url(/img/left-background-grayscale.jpg)');
  });
  $('.explore-row').hover(function () {
    $('#explore').css('background-image', 'url(/img/left-background.jpg)');
  }, function () {
    $('#explore').css('background-image', 'url(/img/left-background-grayscale.jpg)');
  });
  $('#engage').hover(function () {
    $('#engage').css('background-image', 'url(/img/right-background.jpg)');
  }, function () {
    $('#engage').css('background-image', 'url(/img/right-background-grayscale.jpg)');
  });
  $('.engage-row').hover(function () {
    $('#engage').css('background-image', 'url(/img/right-background.jpg)');
  }, function () {
    $('#engage').css('background-image', 'url(/img/right-background-grayscale.jpg)');
  });
};


function initializePanelClicks() {
  $(".engage-click").click(function () {
    $("#explore").animate({ width: "0%" }, 500);
    $(".resize-bottom-explore").css({ position: 'absolute' });
    $(".resize-bottom-explore").animate({ width: "0" }, 500);
    $(".explore-text .redl-active").css({ width: '0.5em !important' }, 500);
    $(".explore-row").fadeOut();
    $("#engage").animate({ width: "100%" }, 500, function () {
      $("#explore").css({ height: "0" });
      $("#explore").hide();
      $(".exploreSection").hide();
      $(".engageSection").show();
      $("body").css({ position: "static" });
      $("body").css({ top: "0px" });
      $("body").css({ height: "0px" });
      $("body").css("overflow-y", "scroll");
    });
    $("#engage-rot-text").fadeIn();
    $(".engage-row .redl").addClass("redl-active");
    $("#engage").css({ "background-image": "url('/img/right-background.jpg')" });
  });

  $(".explore-click").click(function () {
    $("#engage").animate({ width: "0%" }, 500);
    $(".resize-bottom-engage").animate({ width: "0%" }, 500);
    $(".engage-row").fadeOut();
    $("#explore").animate({ width: "100%" }, 500, function () {
      $("#engage").css({ height: "0" });
      $("#engage").hide();
      $(".engageSection").hide();
      $(".exploreSection").show();
      $("body").css({ position: "static" });
      $("body").css({ top: "0px" });
      $("body").css({ height: "0px" });
      $("body").css("overflow-y", "scroll");
    });
    $(".rot-text-container").fadeIn();
    $(".explore-row .redl").addClass("redl-active");
    $("#explore").css({ "background-image": "url('/img/left-background.jpg')" });
  });

  $("#engage-mobile-click").click(function () {
    $("#engage-rot-text-mobile").fadeIn();
    $("#explore-mobile-click .redl").addClass("redl-active");
    $("#explore-mobile-row").animate({ height: "0%" }, 500);
    $("#explore-mobile .redl").fadeOut();
    $("#explore-mobile .explore-text").fadeOut();
    $("#engage-mobile-row").animate({ height: "101%" }, 500, function () {
      $(".exploreSection").hide();
      $(".engageSection").show();
      $("body").css({ position: "static" });
      $("body").css("overflow-y", "scroll");
      $("body").css("-webkit-overflow-scrolling", "touch")
    });
    $("#engage-mobile").css({ "background-image": "url('/img/right-background.jpg')" });
  });

  $("#explore-mobile-click").click(function () {
    $("#explore-rot-text-mobile").fadeIn();
    $("#engage-mobile-click .redl").addClass("redl-active");
    $("#engage-mobile-row").animate({ height: "0%" }, 500);
    $("#engage-mobile .redl").fadeOut();
    $("#engage-mobile .explore-text").fadeOut();
    $("#explore-mobile-row").animate({ height: "101%" }, 500, function () {
      $(".engageSection").hide();
      $(".exploreSection").show();
      $("body").css({ position: "static" });
      $("body").css("overflow-y", "scroll");
      $("body").css("-webkit-overflow-scrolling", "touch")
    });
    $("#explore-mobile").css({ "background-image": "url('/img/left-background.jpg')" });
  });
}

function bottomPanelClicks() {
  $('.explore-row-bottom-left').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 600);
    setTimeout(function(){
      $('#engage').animate({width: "50%"}, 500);
      $(".resize-bottom-engage").animate({ width: "50%" }, 500);
      $(".engage-row").fadeIn();
      $("#explore").animate({ width: "50%" }, 500, function () {
        $('.rot-text-container').hide();
        $('#engage').css( {height: "100%" })
        $("#engage").show();
        $(".exploreSection").hide();
        $("body").css({ position: "static" });
        $("body").css({ top: "0px" });
        $("body").css({ height: "0px" });
        $("body").css("overflow-y", "scroll");
      });  
    }, 601)
  });

  $('.engage-row-bottom-left').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 600);
    setTimeout(function(){
      $('#engage').animate({width: "100%"}, 500);
      $(".resize-bottom-engage").animate({ width: "50%" }, 500);
      $(".engage-row").fadeIn();
      $('.explore-row').hide();
      $("#explore").animate({ width: "0%" }, 500, function () {
        $('.rot-text-container').hide();
        $('#engage').css( {height: "100%" })
        $("#engage").show();
        $(".exploreSection").hide();
        $('.engageSection').show();
        $("body").css({ position: "static" });
        $("body").css({ top: "0px" });
        $("body").css({ height: "0px" });
        $("body").css("overflow-y", "scroll");
      });  
    }, 601)  
  });

  $('.explore-row-bottom-right').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 600);
    setTimeout(function(){
      $('#explore').animate({width: "100%"}, 500);
      $(".resize-bottom-explore").animate({ width: "50%" }, 500);
      $(".explore-row").fadeIn();
      $('.engage-row').hide();
      $("#engage").animate({ width: "0%" }, 500, function () {
        $('.rot-text-container').hide();
        $('#explore').css( {height: "100%" })
        $("#explore").show();
        $(".engageSection").hide();
        $('.exploreSection').show();
        $("body").css({ position: "static" });
        $("body").css({ top: "0px" });
        $("body").css({ height: "0px" });
        $("body").css("overflow-y", "scroll");
      });  
    }, 601)  
  });

  $('.engage-row-bottom-right').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 600);
    setTimeout(function(){
      $('#explore').animate({width: "50%"}, 500);
      $(".resize-bottom-explore").animate({ width: "50%" }, 500);
      $(".explore-row").fadeIn();
      $("#engage").animate({ width: "50%" }, 500, function () {
        $('.rot-text-container').hide();
        $('#explore').css( {height: "100%" })
        $("#explore").show();
        $(".engageSection").hide();
        $("body").css({ position: "static" });
        $("body").css({ top: "0px" });
        $("body").css({ height: "0px" });
        $("body").css("overflow-y", "scroll");
      });  
    }, 601)
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
  $(window).on("scroll", function () {
    if (window.pageYOffset >= topOffset) {
      $(".outline-contain").addClass("sticky-outline");
    } else {
      $(".outline-contain").removeClass("sticky-outline");
    }
    if ($("#row2").offset().top > 0) {
      exploreHighlights();
    } else {
      engageHighlights();
    }
  });
}

function exploreHighlights() {
  if (window.pageYOffset < $("#row2").offset().top - 50) {
    clearActive();
    $("#about-outline .circle-item").addClass("circle-active");
    $("#about-outline .outline-item-text").addClass("oi-active");
    $("#about-outline .outline-item-text").addClass("oi-active-light");
  } else if (window.pageYOffset >= $("#row7").offset().top - 50) {
    clearActive();
  } else if (window.pageYOffset >= $("#row6").offset().top - 50) {
    clearActive();
    $("#press-outline .circle-item").addClass("circle-active");
    $("#press-outline .outline-item-text").addClass("oi-active");
    $("#press-outline .outline-item-text").addClass("oi-active-light");
  } else if (window.pageYOffset >= $("#row5").offset().top - 50) {
    clearActive();
    $("#tools-outline .circle-item").addClass("circle-active");
    $("#tools-outline .outline-item-text").addClass("oi-active");
    $("#tools-outline .outline-item-text").addClass("oi-active-dark");
  } else if (window.pageYOffset >= $("#row4").offset().top - 50) {
    clearActive();
    $("#history-outline .circle-item").addClass("circle-active");
    $("#history-outline .outline-item-text").addClass("oi-active");
    $("#history-outline .outline-item-text").addClass("oi-active-light");
  } else if (window.pageYOffset >= $("#row3").offset().top - 50) {
    clearActive();
    $("#expeditions-outline .circle-item").addClass("circle-active");
    $("#expeditions-outline .outline-item-text").addClass("oi-active");
    $("#expeditions-outline .outline-item-text").addClass("oi-active-light");
  } else if (window.pageYOffset >= $("#row2").offset().top - 50) {
    clearActive();
    $("#achievements-outline .circle-item").addClass("circle-active");
    $("#achievements-outline .outline-item-text").addClass("oi-active");
    $("#achievements-outline .outline-item-text").addClass("oi-active-dark");
  }
}

function engageHighlights() {
  if (window.pageYOffset < $("#row2a").offset().top - 50) {
    clearActive();
    $("#about2-outline .circle-item").addClass("circle-active");
    $("#about2-outline .outline-item-text").addClass("oi-active");
    $("#about2-outline .outline-item-text").addClass("oi-active-light");
  } else if (window.pageYOffset >= $("#row8a").offset().top - 50) {
    clearActive();
  } else if (window.pageYOffset >= $("#row7a").offset().top - 50) {
    clearActive();
    $("#team-outline .circle-item").addClass("circle-active");
    $("#team-outline .outline-item-text").addClass("oi-active");
    $("#team-outline .outline-item-text").addClass("oi-active-light");
  } else if (window.pageYOffset >= $("#row6a").offset().top - 50) {
    clearActive();
    $("#coordinates-outline .circle-item").addClass("circle-active");
    $("#coordinates-outline .outline-item-text").addClass("oi-active");
    $("#coordinates-outline .outline-item-text").addClass("oi-active-dark");
  } else if (window.pageYOffset >= $("#row5a").offset().top - 50) {
    clearActive();
    $("#testimonials-outline .circle-item").addClass("circle-active");
    $("#testimonials-outline .outline-item-text").addClass("oi-active");
    $("#testimonials-outline .outline-item-text").addClass("oi-active-light");
  } else if (window.pageYOffset >= $("#row4a").offset().top - 50) {
    clearActive();
    $("#filler-outline .circle-item").addClass("circle-active");
    $("#filler-outline .outline-item-text").addClass("oi-active");
    $("#filler-outline .outline-item-text").addClass("oi-active-dark");
  } else if (window.pageYOffset >= $("#row3a").offset().top - 50) {
    clearActive();
    $("#speaking-outline .circle-item").addClass("circle-active");
    $("#speaking-outline .outline-item-text").addClass("oi-active");
    $("#speaking-outline .outline-item-text").addClass("oi-active-light");
  } else if (window.pageYOffset >= $("#row2a").offset().top - 50) {
    clearActive();
    $("#advocacy-outline .circle-item").addClass("circle-active");
    $("#advocacy-outline .outline-item-text").addClass("oi-active");
    $("#advocacy-outline .outline-item-text").addClass("oi-active-dark");
  }
}

function initHistorySection() {
  $(".history-menu-item").click(function () {
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

function initHistorySectionMobile() {
  if ($(window).width() <= 1096) {
    $('#mobile-history-show-1').show();
  }
  $('.mobile-history-select').change(function () {
    $('.history-content-mobile').hide();
    $('#' + $(this).val()).show();
  })
}

function pressChange(itemIdx) {
  var currentActive = $(".active-press");
  currentActive.removeClass("active-press");
  currentActive.addClass("inactive-press");

  var newItem = $(`.press-content:eq("${itemIdx}")`);
  newItem.addClass("active-press");
  newItem.removeClass("inactive-press");
}


function initPressScroller() {
  $(".press-item-container").click(function () {
    var currentActive = $(".press-item-active");
    currentActive.removeClass("press-item-active");
    var currentIndex = $(".press-item").index(currentActive);

    var newIndex = $(".press-item-container").index(this);
    $(this).find(".press-item").addClass("press-item-active");
    pressChange(newIndex);
  });

  $(".left-angle").click(function () {
    var currentActive = $(".press-item-active");
    currentActive.removeClass("press-item-active");

    var amountItems = $(".press-item-container").length;
    var currentIndex = $(".press-item").index(currentActive);

    var newIndex = amountItems - 1; //Start by assuming you are at the end.
    if (currentIndex > 0) {
      newIndex = currentIndex - 1;
    }

    var newPressItemContainer = $(".press-item-container:eq(" + newIndex + ")");
    newPressItemContainer.find(".press-item").addClass("press-item-active");
    pressChange(newIndex);
  });

  $(".right-angle").click(function () {
    var currentActive = $(".press-item-active");
    currentActive.removeClass("press-item-active");

    var amountItems = $(".press-item-container").length;
    var currentIndex = $(".press-item").index(currentActive);

    var newIndex = 0; //Start by assuming you are at the start.
    if (currentIndex < (amountItems - 1)) {
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
  $(".modal-close").click(function () {
    $(".modalCA").fadeOut();
    $(".modalMask").fadeOut();
  });
}

function mobileMenuToggle() {
  $('.menu-toggle').on('click', function () {
    $(".menu-toggle").css("pointer-events", "none");
    $("span.s1").hide();
    $("span.s2").hide();
    $("span.s3").hide();
    $('.side-nav').width('100vw');
  })
  $("#mobilex-a").on('click', function () {
    $('.side-nav').width('0');
    $("span.s1").show();
    $("span.s2").show();
    $("span.s3").show();
    $(".menu-toggle").css("pointer-events", "auto");
  })
}

function slideupContact() {
  $('.drawer-contact-button').on('click', function () {
    $("#mobilex-a").css("pointer-events", "none");
    $('.slideup-contact').height('100vh');
    $('.drawer-send-button').height('9vh')
  });
  $("#mobilex-b").on('click', function () {
    $("#mobilex-a").css("pointer-events", "auto");
    $(".slideup-contact").css("height", "0");
    $('.drawer-send-button').height('0')
  });
}

function instagramAjaxCall() {
  var instagramApiUrl = "https://api.instagram.com/v1/users/self/media/recent?access_token=5562156653.6593813.7563f42e72704bfc9f90c306f4b15c0e"
  $.get(instagramApiUrl, (data, status) => {
    if (status === "success") {
      instagramWebFormat(data);
      instagramMobileFormat(data);
    }
  })
}

function instagramWebFormat(data) {
  var firstRow = "";
  var secondRow = "";
  var thirdRow = "";
  for (i = 0; i < 3; i++) {
    let createdTimeOfPost = parseInt(data.data[i].created_time);
    let dateCreated = new Date(createdTimeOfPost * 1000);
    let day = dateCreated.getDate();
    let month = dateCreated.getMonth() + 1;
    let year = dateCreated.getFullYear().toString().substr(-2);
    if (day < 10) {
      day = "0" + day
    }
    let formattedDate = `${month}.${day}.${year}`
  
    let caption = data.data[i].caption.text
    let imgUrl = data.data[i].images.standard_resolution.url;
    var toAdd =
      `<div class="col-sm-4 instagram-pic" style="background-image: url(${imgUrl});width:33vw;height:58vh;">
      <div class="instagram-mask">
    <div class="tweet-content">
      <span class="tw-date">${formattedDate}</span>
      <span class="tw-handle">@conrad_anker</span>
      <p class="tw-text">${caption}</p> 
      <a target="_blank" href="https://www.instagram.com/conrad_anker/?hl=en" class="red-arrow-link">SEE MORE &rarr;</a>
    </div> 
    </div>
    </div>`;
    firstRow += toAdd
  } for (i = 3; i < 6; i++) {
    let createdTimeOfPost = parseInt(data.data[i].created_time);
    let dateCreated = new Date(createdTimeOfPost * 1000);
    let day = dateCreated.getDate();
    let month = dateCreated.getMonth() + 1;
    let year = dateCreated.getFullYear().toString().substr(-2);
    if (day < 10) {
      day = "0" + day
    }
    let formattedDate = `${month}.${day}.${year}`
    let caption = data.data[i].caption.text
    let imgUrl = data.data[i].images.standard_resolution.url;
    var toAdd =
      `<div class="col-sm-4 instagram-pic" style="background-image: url(${imgUrl});width:33vw;height:58vh;">
      <div class="instagram-mask">
    <div class="tweet-content">
      <span class="tw-date">${formattedDate}</span>
      <span class="tw-handle">@conrad_anker</span>
      <p class="tw-text">${caption}</p> 
      <a target="_blank" href="https://www.instagram.com/conrad_anker/?hl=en" class="red-arrow-link">SEE MORE &rarr;</a>
    </div> 
    </div>
    </div>`;
    secondRow += toAdd
  }
  document.getElementById("engage-instagram").innerHTML = firstRow;
  document.getElementById("engage-instagram-second-row").innerHTML = secondRow;
  document.getElementById("explore-instagram").innerHTML = firstRow;
  document.getElementById("explore-instagram-second-row").innerHTML = secondRow;
}

function instagramMobileFormat(data) {
  let content = "";
  for (i = 0; i < 4; i++) {
    let imgUrl = data.data[i].images.standard_resolution.url;
    let toAdd = `<div class="col-sm-4 instagram-pic" style="background-image:url(${imgUrl});"></div>`;
    content += toAdd
  }
  document.getElementById("explore-instagram-mobile").innerHTML = content;
  document.getElementById("engage-instagram-mobile").innerHTML = content;
}

$(document).ready(() => {
  exploreScrollClicks();
  engageScrollClicks();
  instagramAjaxCall();
  initializePanelClicks();
  bottomPanelClicks();
  initializeContactPanel();
  stickyOutline();
  initHistorySection();
  initHistorySectionMobile();
  initPressScroller();
  modalPopover();
  hoverFix();
  mobileMenuToggle();
  slideupContact();
  contactOptions();
  $(window).on('beforeunload', function () {
    $(window).scrollTop(0);
  });
});