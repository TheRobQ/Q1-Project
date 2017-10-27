$(document).ready(function() {
  var initMods = [];
  var actor = {};


  $('.btn').click(function(event) {
    $(".modifier").each(function() {
      initMods.push(parseInt($(this).val()))
    })
    console.log(initMods);
    var initValue = initMods.map(function(x){
      return x + Math.floor(Math.random() * 20)});
    console.log(initValue);
    })






})
