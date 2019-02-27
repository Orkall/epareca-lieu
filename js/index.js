function showReponse(el, e) {
    e.preventDefault();
    var parent = el.parentElement;
    var reponse = el.getAttribute('data-reponse');
    var li = document.querySelectorAll('.onglet-etat ul li');
    var reponses = document.querySelectorAll('.reponses .rep');
    for (var i = 0; i < li.length; i++) {
      li[i].classList.remove('active');
    }
  
    for (var i = 0; i < reponses.length; i++) {
      reponses[i].classList.remove('active');
    }
    // console.log(reponses)
    parent.classList.add('active');
    document.querySelector('#' + reponse).classList.add('active');
    // console.log(document.querySelector('#' + reponse));
  
    document.querySelector('#' + reponse + " h3").focus();
    // console.log(document.querySelector('#' + reponse));
    document.querySelector(".blockplusplus").style.display ="none";
    document.querySelector(".blockplus").style.display ="none";
    document.querySelector(".ligne").style.display ="none";
    document.querySelector(".popin2").style.display ="none";
    document.querySelector(".popin3").style.display ="none";
    document.querySelector(".partie-invisible").style.display ="none";
    document.querySelectorAll(".popin").forEach(function(node){
      node.style.display ="none";
    }  
    );
   
}


function showMaps(el, e) {
  e.preventDefault();
  var parent = el.parentElement;
  var reponse = el.getAttribute('data-reponse');
  var li = document.querySelectorAll('.onglet-etat ul li');
  var reponses = document.querySelectorAll('.reponses .rep');
  for (var i = 0; i < li.length; i++) {
    li[i].classList.remove('active');
  }

  for (var i = 0; i < reponses.length; i++) {
    reponses[i].classList.remove('active');
  }
  console.log(reponses)
  parent.classList.add('active');
  document.querySelector('#' + reponse).classList.add('active');
  console.log(document.querySelector('#' + reponse));

  document.querySelector('#' + reponse + " h3").focus();
  // console.log(document.querySelector('#' + reponse));
  document.querySelector(".blockplusplus").style.display ="none";
  document.querySelector(".popin3").style.display ="none";
  document.querySelector(".blockplus").style.display ="block";
  document.querySelector(".popin2").style.display ="block";
  document.querySelector(".partie-invisible").style.display ="block";
  // document.querySelector(".ligne").style.display ="block";
  document.querySelectorAll(".popin").forEach(function(node){
    node.style.display ="block";
  }  
  );
}
function showSecondMaps(el, e) {
  e.preventDefault();
  var parent = el.parentElement;
  var reponse = el.getAttribute('data-reponse');
  var li = document.querySelectorAll('.onglet-etat ul li');
  var reponses = document.querySelectorAll('.reponses .rep');
  for (var i = 0; i < li.length; i++) {
    li[i].classList.remove('active');
  }

  for (var i = 0; i < reponses.length; i++) {
    reponses[i].classList.remove('active');
  }
  console.log(reponses)
  parent.classList.add('active');
  document.querySelector('#' + reponse).classList.add('active');
  console.log(document.querySelector('#' + reponse));

  document.querySelector('#' + reponse + " h3").focus();
  // console.log(document.querySelector('#' + reponse));
  document.querySelector(".blockplusplus").style.display ="block";
  document.querySelector(".popin3").style.display ="block";
  document.querySelector(".blockplus").style.display ="none";
  document.querySelector(".popin2").style.display ="none";
  document.querySelector(".ligne").style.display ="none";
  document.querySelector(".partie-invisible").style.display ="none";
  document.querySelectorAll(".popin").forEach(function(node){
    node.style.display ="none";
  }  
  );
}


// exemple urbilog
$(document).ready(function() {
  checkScroll();

  $(document).keyup(function(ev) {
    if (ev.keyCode == 27) {
      hidePopIn();
    }
  });

  // Affichage / masquage des panel
  $("li[role='tab']").click(function() {
    $("li[role='tab']").attr("aria-selected", "false");
    $(this).attr("aria-selected", "true");
    var tabpanid = $(this).attr("aria-controls");
    var tabpan = $("#" + tabpanid);
    $("div[role='tabpanel']").attr("aria-hidden", "true");
    // $("div[role='tabpanel']").addClass("shown");
    tabpan.attr("aria-hidden", "false");
    // tabpan.addClass("hidden");
  });

  // activation avec entrée (au cas ou)
  $("li[role='tab']").keydown(function(ev) {
    if (ev.which == 13) {
      $(this).click()
    }
  });

  // gestion des flèches gauche / droite
  $("li[role='tab']").keydown(function(ev) {
    if ((ev.which == 39) || (ev.which == 37)) {
      var selected = $(this).attr("aria-selected");
      if (selected == "true") {
        $("li[aria-selected='false']").attr("aria-selected", "true").focus();
        $(this).attr("aria-selected", "false");
        var tabpanid = $("li[aria-selected='true']").attr("aria-controls");
        var tabpan = $("#" + tabpanid);
        $("div[role='tabpanel']").attr("aria-hidden", "true");
        tabpan.attr("aria-hidden", "false");
      }
      checkTab();
    }
  });

  $(window).scroll(function(event) {
    checkScroll();
  });

  function checkScroll() {
    var scroll = $(window).scrollTop();
    var diff = 46 - scroll;
    if (diff > 0) {
      $(".second-nav").css("top", diff);
    } else {
      $(".second-nav").css("top", "0");
    }
  }

});

function handleSubItem(e) {
  // var tmp = e;
  // tmp += "> span";
  if ($(e).siblings().hasClass("hidden")) {
    $(e).siblings().removeClass("hidden");
    $(e).siblings().addClass("shown");
    $(e).parent().addClass("selected");
    $(e).attr("aria-expanded", "true");
    $(e).children().removeClass("fa-arrow-right");
    $(e).children().addClass("fa-arrow-down");
  } else {
    $(e).siblings().removeClass("shown");
    $(e).siblings().addClass("hidden");
    $(e).attr("aria-expanded", "false");
    $(e).parent().removeClass("selected");
    $(e).children().removeClass("fa-arrow-down");
    $(e).children().addClass("fa-arrow-right");
  }
}





function checkTab() {
  var tabNotFocused = $("li[aria-selected='false']");
  tabNotFocused.attr("tabindex", "-1");
  var tabFocused = $("li[aria-selected='true']");
  tabFocused.attr("tabindex", "0");
  var tabFocusedPanId = tabFocused.attr("aria-controls");
  var tabFocusedPan = $("#" + tabFocusedPanId);
  var tabNotFocusedPanId = tabNotFocused.attr("aria-controls");
  var tabNotFocusedPan = $("#" + tabNotFocusedPanId);
  tabFocusedPan.attr("aria-hidden", "false");
  tabNotFocusedPan.attr("aria-hidden", "true");
};