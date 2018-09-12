window.onload = function () {

    var game = document.getElementById('game');
    for (var i = 0; i < 9; i++) {
        game.innerHTML += '<div class="block"></div>';
    }

    var hod = 0;

    game.onclick = function (event) {
        console.log(event);
        if (event.target.className == 'block') {
            if (hod % 2 == 0) {
                event.target.innerHTML = "X";
            }
            else {
                event.target.innerHTML = "0";
            }
            hod++;
            checkWinner();
        }
    }
    function checkWinner() {
        var allblock = document.getElementsByClassName('block');

        // Check if win X
        if (allblock[0].innerHTML == "X" && allblock[1].innerHTML == "X" && allblock[2].innerHTML == "X")  alert("Win X");
        if (allblock[3].innerHTML == "X" && allblock[4].innerHTML == "X" && allblock[5].innerHTML == "X")  alert("Win X");
        if (allblock[6].innerHTML == "X" && allblock[7].innerHTML == "X" && allblock[8].innerHTML == "X")  alert("Win X");
        if (allblock[0].innerHTML == "X" && allblock[3].innerHTML == "X" && allblock[6].innerHTML == "X")  alert("Win X");
        if (allblock[1].innerHTML == "X" && allblock[4].innerHTML == "X" && allblock[7].innerHTML == "X")  alert("Win X");
        if (allblock[2].innerHTML == "X" && allblock[5].innerHTML == "X" && allblock[8].innerHTML == "X")  alert("Win X");
        if (allblock[0].innerHTML == "X" && allblock[4].innerHTML == "X" && allblock[8].innerHTML == "X")  alert("Win X");
        if (allblock[2].innerHTML == "X" && allblock[4].innerHTML == "X" && allblock[6].innerHTML == "X")  alert("Win X");

        // Check if win 0
        if (allblock[0].innerHTML == "0" && allblock[1].innerHTML == "0" && allblock[2].innerHTML == "0")  alert("Win 0");
        if (allblock[3].innerHTML == "0" && allblock[4].innerHTML == "0" && allblock[5].innerHTML == "0")  alert("Win 0");
        if (allblock[6].innerHTML == "0" && allblock[7].innerHTML == "0" && allblock[8].innerHTML == "0")  alert("Win 0");
        if (allblock[0].innerHTML == "0" && allblock[3].innerHTML == "0" && allblock[6].innerHTML == "0")  alert("Win 0");
        if (allblock[1].innerHTML == "0" && allblock[4].innerHTML == "0" && allblock[7].innerHTML == "0")  alert("Win 0");
        if (allblock[2].innerHTML == "0" && allblock[5].innerHTML == "0" && allblock[8].innerHTML == "0")  alert("Win 0");
        if (allblock[0].innerHTML == "0" && allblock[4].innerHTML == "0" && allblock[8].innerHTML == "0")  alert("Win 0");
        if (allblock[2].innerHTML == "0" && allblock[4].innerHTML == "0" && allblock[6].innerHTML == "0")  alert("Win 0");
    }
    
}