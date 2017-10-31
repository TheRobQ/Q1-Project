$(document).ready(function() {
  var initValue = [];
  var actor = [];
  var totals = [];

  $('#addCharacter').click(function(event) {
    $('#buttonRow').before('<tr class="inputRow"><td><label>Player/Foe </label></td>' +
      '<td><input type="text" value="" class="characterName" size="16" required>' + '<label class="modLabel">Modifier</label></td>' +
      '<td><input type="text" class="modifier" maxlength="3" size="3" required pattern="[1-9]"></td></tr>')
  })

  $('#axCharacter').click(function(event) {
    $('.inputRow:last').remove();
  })

  $('#form1').submit(function(event) {
    event.preventDefault();
    $(".modifier").each(function() {
      initValue.push(parseInt($(this).val()) +
        Math.floor((Math.random() * 20) + 1))
    })
    $(".characterName").each(function(event) {
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
    console.log(totals);
    for (let j = 0; j < totals.length; j++) {
      $('.list').append("<p class='ordered'>" + totals[j]["name"] + " " + totals[j]["inVal"] + "<button class='remove'>x</button>" + "</p>")
      $(".remove").click(function(event) {
        console.log("clicked");
        $(this).closest("p").remove(".ordered")
      })
      $(".ordered").click(function(event) {
        console.log('clicked');
        $("p").removeClass("highlight");
        $(event.target).closest("p").addClass("highlight");
      })
    }
    $('#clearAll').click(function(event) {
      $('.ordered').remove();
      initValue = [];
      actor = [];
      totals = [];
      console.log(totals);
    })
  })

  var slideIndex = 0;
  function showSlides() {
    $('.mySlides').each(function() {
      $('.mySlides').addClass('hide');
      console.log($('.mySlides').length);
    })
    slideIndex++;
    if (slideIndex > $('.mySlides').length-1) {
      slideIndex = 0;
    }
  $('.mySlides').eq(slideIndex).removeClass('hide');
  console.log(slideIndex);
  }
  setInterval(showSlides, 10000);
})
