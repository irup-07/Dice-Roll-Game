function tossDice()
{

var randomDice1 = Math.floor(Math.random() * 6)+1;



var newDice = "dice" + randomDice1 + ".png";

var sourceDice1 = "images/" + newDice;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src" , sourceDice1 );


var randomDice2 = Math.floor(Math.random()*6)+1;
var sourceDice2= "images/" + "dice" + randomDice2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", sourceDice2)

if (randomDice1>randomDice2)
  {
playerOneWins();

  }

  else if(randomDice2>randomDice1)
  {

playerTwoWins()
  }

  else {

draw();
  }

}



function playerOneWins()
{
  document.querySelector("h1").innerHTML="🚩Player 1 Wins!";
}

function playerTwoWins()
{
document.querySelector("h1").innerHTML="Player 2 Wins!🚩";

}

function draw()
{
  document.querySelector("h1").innerHTML="Draw";
}


//***********************************************8function for dark Mode

function enableDarkMode()
{
if(document.querySelectorAll("button")[0].innerHTML === "Disable Dark Mode")
  { document.querySelectorAll("button")[1].style.backgroundColor="Black";
  document.querySelectorAll("button")[1].style.color="White";

     document.body.style.backgroundColor = "#ffffe6";
     document.querySelector("h1").style.color="Black";
     document.querySelector("h3").style.color = "Black";
     document.querySelectorAll("button")[0].style.borderRadius="18px";
     document.querySelectorAll("button")[1].style.borderRadius="18px";

     document.querySelectorAll("button")[0].innerHTML = "Enable Dark Mode";
    document.querySelectorAll("button")[0].style.backgroundColor="Black";
    document.querySelectorAll("button")[0].style.color="White";
  }


else if(document.querySelectorAll("button")[0].innerHTML="Enable Dark Mode")
  {document.querySelectorAll("button")[1].style.backgroundColor="#ffffe6";
  document.querySelectorAll("button")[1].style.color="Black";



  document.body.style.backgroundColor= "#000000";
  document.querySelector("h1").style.color="#66BFBF";
  document.querySelector("h3").style.color = "#66BFBF";
  document.querySelectorAll("button")[0].innerHTML="Disable Dark Mode";
  document.querySelectorAll("button")[0].style.backgroundColor="#ffffe6";
  document.querySelectorAll("button")[0].style.borderRadius="18px";
  document.querySelectorAll("button")[0].style.color="Black";
  document.querySelectorAll("button")[1].style.borderRadius="18px";

  }

}

//****************************************************Dark MODE BUTTON SETTIN****************************************//

//var buttonDark = <button class="btn btn-default float-left"> Enable Dark Mode</button>
