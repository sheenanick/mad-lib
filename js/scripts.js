$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var adjective1Input = $("input#adjective1").val();
    var adjective2Input = $("input#adjective2").val();
    var verbing1Input = $("input#verb-ing1").val();
    var verbing2Input = $("input#verb-ing2").val();
    var adjective3Input = $("input#adjective3").val();
    var adjective4Input = $("input#adjective4").val();
    var nounInput = $("input#noun").val();

    $(".adjective1").text(adjective1Input);
    $(".adjective2").text(adjective2Input);
    $(".verb-ing1").text(verbing1Input);
    $(".verb-ing2").text(verbing2Input);
    $(".adjective3").text(adjective3Input);
    $(".adjective4").text(adjective4Input);
    $(".noun").text(nounInput);

    $("#story").show();

    event.preventDefault();
  });

  $("#reset").click(function(event) {
    $("#story").hide();
  });

});
