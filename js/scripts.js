  // Bussiness Logic
  function roll() {
    return Math.floor(6 * Math.random()) + 1;
  };

  var playerRoll = 0;
  var playerRoll1 = 0;
  var player;
  var total = 0;
  var myTurn1 = 0;
  var myTurn2 = 0;
  var player1Total = 0;
  var player2Total = 0;

  function rollNunber() {
    playerRoll = roll();
    if (playerRoll === 1) {
      playerRoll = 0;
      alert("Rolled 1 your score is 0, " + player + " turn.");
    }
  };

  // User Interface
  $(document).ready(function() {
    $("#newGame").click(function() {
      playerRoll = 0;
      total = 0;
      player1Total = 0;
      player2Total = 0;
      myTurn1 = 0;
      myTurn2 = 0;
      $("#top").val("");
      $("#bottom").val("");
      $("#topRight").val("");
      $("#bottomRight").val("");
    })

    $("#player1").click(function player1() {
      player = "Player 2";
      myTurn2 = 0;
      playerRoll = 0;
      $("#bottomRight").val("");
      rollNunber();
      total += myTurn1;
      myTurn1 = playerRoll;
      $("#bottom").val(myTurn1);
      $("#top").val(total);
    });

    $("#player2").click(function player2() {
      player = "Player 1";
      myTurn1 = 0;
      playerRoll = 0;
      $("#bottom").val("");
      rollNunber();
      player2Total += myTurn2;
      myTurn2 = playerRoll;
      $("#bottomRight").val(myTurn2);
      $("#topRight").val(player2Total);
    });

    $("#hold").click(function() {
      var player1result = total += myTurn1;
      $("#top").val(player1result);
      $("#bottom").val("");
      var player2result = player2Total += myTurn2;
      $("#topRight").val(player2result);
      $("#bottomRight").val("");
    });
  });
