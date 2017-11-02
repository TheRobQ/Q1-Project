var actor = [];
var random = function() {
  return Math.floor((Math.random() * 20) + 1)
}

$(document).ready(function() {
  var initValue = [];
  var player = [];
  var modifier = [];
  var totals = [];

  $('#addCharacter').click(function(event) {
    event.preventDefault();
    if($(window).width() < 700){
      $('#buttonRow').before('<tr class="inputRow"><td><label>Player/Foe </label></td>' +
        '<td><input type="text" value="" name="charName" class="characterName" size="18" required></td>' + '<td><input type="text" class="modifier" maxlength="3" size="3" required pattern="[1-9]" name="initModifier" oninvalid="this.setCustomValidity("test")" oninput="setCustomValidity("")"></td></tr>')
    }else{
    $('#buttonRow').before('<tr class="inputRow"><td><label>Player/Foe </label></td>' +
      '<td><input type="text" value="" name="charName" class="characterName" size="18" required></td>' + '<td><labelclass="modLabel">&nbsp;&nbsp;Modifier</label> <input type="text" class="modifier" maxlength="3" size="3" required pattern="[1-9]" name="initModifier" oninvalid="this.setCustomValidity("test")" oninput="setCustomValidity("")"></td></tr>')}
  })

  $('#axCharacter').click(function(event) {
    event.preventDefault();
    $('.inputRow:last').remove();
  })

  $('#form1').submit(function(event) {
    event.preventDefault();
    $(".modifier").each(function() {
      initValue.push(parseInt($(this).val()) + random())
    })
    $(".modifier1").each(function() {
      initValue.push(parseInt($(this).val()) +
        Math.floor((Math.random() * 20) + 1))
    })
    $(".characterName").each(function(event) {
      actor.push($(this).val())
    })
    $(".characterName1").each(function(event) {
      actor.push($(this).val())
    })
    for (let i = 0; i < actor.length; i++) {
      totals.push({
        ["name"]: actor[i],
        ["inVal"]: initValue[i]
      })
    }
    totals.sort(function(a, b) {
      return a.inVal - b.inVal;
    }).reverse();
    for (let j = 0; j < totals.length; j++) {
      $('.quoteName').append("<p class='ordered'>" + totals[j]["name"] + " " + totals[j]["inVal"] + " " + "&nbsp; <button class='remove'><center>x</center></button>" + "</p>")
      $(".remove").click(function(event) {
        $(this).closest("p").remove(".ordered")
      })

      $(".ordered").click(function(event) {
        $("p").removeClass("highlight");
        $(event.target).closest("p").addClass("highlight");
      })
    }

    $('#clearAll').click(function(event) {
      $('.ordered').remove();
      initValue = [];
      actor = [];
      totals = [];
      //console.log(totals);
    })
  })

  $('#save').click(function(event) {
    $(".modifier").each(function() {
      modifier.push($(this).val())
    })
    //console.log(modifier);
    $(".characterName").each(function(event) {
      player.push($(this).val())
    })
    //console.log(player);
    for (let i = 0; i < player.length; i++) {
      localStorage.setItem("player" + [i], player[i]);
    }
    for (let j = 0; j < modifier.length; j++) {
      localStorage.setItem("modifier" + [j], modifier[j]);
    }
  })

  $('#load').click(function(event) {
    var myDudes = [];
    var myMods = [];
    for (var i = 0; i < localStorage.length / 2; i++) {
      myDudes.push(localStorage.getItem("player" + [i]));
      myMods.push(localStorage.getItem("modifier" + [i]));
    }
    for (let j = 0; j < myDudes.length; j++) {
      $('.holder').after('<tr class="inputRow"><td><label>Player/Foe </label></td>' +
        '<td><input type="text" value="" name="charName" class="characterName1" size="18" required> </td>' + '<td><label class="modLabel">Modifier</label> <input type="text" class="modifier1" value="" maxlength="3" size="3" required pattern="[0-9]" name="initModifier" oninvalid="this.setCustomValidity("test")" oninput="setCustomValidity("")"></td></tr>')
    }
    $('.characterName1').each(function(i) {
      $(this).val(myDudes[i])
    })
    $('.modifier1').each(function(i) {
      $(this).val(myMods[i])
    })
    // $(".list").after("<p> Your Party includes " + localStorage.getItem("player"+[i]) + "</p>")

    console.log(myDudes);
    console.log(myMods);
  })

  $('#clear').click(function(event) {
    player =[];
    modifier = [];
    localStorage.clear();
  })

  $('#axAll').click(function(){
    event.preventDefault();
    $('.inputRow').remove();
  })

  var slideIndex = 0;

  function showSlides() {
    $('.mySlides').each(function() {
      $('.mySlides').addClass('hide');
      //console.log($('.mySlides').length);
    })
    slideIndex++;
    if (slideIndex > $('.mySlides').length - 1) {
      slideIndex = 0;
    }
    $('.mySlides').eq(slideIndex).removeClass('hide');
    //console.log(slideIndex);
  }
  setInterval(showSlides, 10000);
})
