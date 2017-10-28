$(document).ready(function() {
  var initValue = [];
  var actor = [];
  var totals = [];
  function PrintOut(name, value){
    this.name = name;
    this.value = value;
  };

  $('.btn').click(function(event) {
    $(".modifier").each(function() {
      initValue.push(parseInt($(this).val())
      + Math.floor(Math.random() * 20));
    })
    $(".characterName").each(function(event){
      actor.push($(this).val())
    })
    console.log(initValue);
    for(let i = 0; i< actor.length; i++){
      totals.push(new PrintOut(actor[i], initValue[i]))
    }
    totals.sort(function(a, b){
      return a.value - b.value;
    }).reverse();
    //console.log(totals);

    })






})
