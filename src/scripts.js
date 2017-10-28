$(document).ready(function() {
  var initValue = [];
  var actor = [];
  var totals = [];
//ary.push({[name]: val});
  // function PrintOut(name, inits) {
  //   this.name = name;
  //   this.inits = inits;
  // };

  $('.btn').click(function(event) {
    $(".modifier").each(function() {
      initValue.push(parseInt($(this).val()) +
        Math.floor(Math.random() * 20));
    })
    $(".characterName").each(function(event) {
      actor.push($(this).val())
    })
    //console.log(initValue);
    for (let i = 0; i < actor.length; i++) {
      totals.push({["name"]: actor[i], ["inVal"]: initValue[i]})
    }
    totals.sort(function(a, b) {
      return a.inVal - b.inVal;
    }).reverse();
    console.log(totals);
    for(let j =0; j < totals.length; j++){
    $('.list').append("<p>" + totals[j]["name"] + " " + totals[j]["inVal"] + "</p>")}
  })






})
