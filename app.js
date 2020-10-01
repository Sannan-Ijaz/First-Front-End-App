
// x =document.querySelector('audio')
var Menu = document.querySelector('button.Menu')
Menu.addEventListener('click',handleClickMenu)

var Restart = document.querySelector('button.Restart')
Restart.addEventListener('click',handleClickRestart)
var pointer = document.querySelector('.grid-boxes');
pointer.addEventListener('click',handleClick)


var turn = 1
WinArrayp1 =[]
WinArrayp2 =[]
move=0

function Result() {
   if 
   (document.querySelector('div.cell1').classList.contains('p1') && document.querySelector('div.cell2').classList.contains('p1') && document.querySelector('div.cell3').classList.contains('p1') 
   || 
   (document.querySelector('div.cell1').classList.contains('p1') && document.querySelector('div.cell4').classList.contains('p1') && document.querySelector('div.cell7').classList.contains('p1')) 
   ||
   (document.querySelector('div.cell1').classList.contains('p1') && document.querySelector('div.cell5').classList.contains('p1') && document.querySelector('div.cell9').classList.contains('p1')) 
   ||
   (document.querySelector('div.cell2').classList.contains('p1') && document.querySelector('div.cell5').classList.contains('p1') && document.querySelector('div.cell8').classList.contains('p1')) 
   ||
   (document.querySelector('div.cell3').classList.contains('p1') && document.querySelector('div.cell5').classList.contains('p1') && document.querySelector('div.cell7').classList.contains('p1')) 
   ||
   (document.querySelector('div.cell3').classList.contains('p1') && document.querySelector('div.cell6').classList.contains('p1') && document.querySelector('div.cell9').classList.contains('p1')) 
   ||
   (document.querySelector('div.cell4').classList.contains('p1') && document.querySelector('div.cell5').classList.contains('p1') && document.querySelector('div.cell6').classList.contains('p1')) 
   ||
   (document.querySelector('div.cell7').classList.contains('p1') && document.querySelector('div.cell8').classList.contains('p1') && document.querySelector('div.cell9').classList.contains('p1'))) {
           console.log("Player 1 Wins!!")
        document.querySelector(".p-Win").innerHTML+= (1 + " !!!!")
        document.querySelector(".p-Win").style.visibility = "visible"
   } else if 
    (document.querySelector('div.cell1').classList.contains('p2') && document.querySelector('div.cell2').classList.contains('p2') && document.querySelector('div.cell3').classList.contains('p2') 
    || 
    (document.querySelector('div.cell1').classList.contains('p2') && document.querySelector('div.cell4').classList.contains('p2') && document.querySelector('div.cell7').classList.contains('p2')) 
    ||
    (document.querySelector('div.cell1').classList.contains('p2') && document.querySelector('div.cell5').classList.contains('p2') && document.querySelector('div.cell9').classList.contains('p2')) 
    ||
    (document.querySelector('div.cell2').classList.contains('p2') && document.querySelector('div.cell5').classList.contains('p2') && document.querySelector('div.cell8').classList.contains('p2')) 
    ||
    (document.querySelector('div.cell3').classList.contains('p2') && document.querySelector('div.cell5').classList.contains('p2') && document.querySelector('div.cell7').classList.contains('p2')) 
    ||
    (document.querySelector('div.cell3').classList.contains('p2') && document.querySelector('div.cell6').classList.contains('p2') && document.querySelector('div.cell9').classList.contains('p2')) 
    ||
    (document.querySelector('div.cell4').classList.contains('p2') && document.querySelector('div.cell5').classList.contains('p2') && document.querySelector('div.cell6').classList.contains('p2')) 
    ||
    (document.querySelector('div.cell7').classList.contains('p2') && document.querySelector('div.cell8').classList.contains('p2') && document.querySelector('div.cell9').classList.contains('p2'))) {
            console.log("Player 2 Wins!!")
         document.querySelector(".p-Win").innerHTML+= (2 + " !!!!")
         document.querySelector(".p-Win").style.visibility = "visible"
    } else if (move==9) {
        console.log("Draw")
        document.querySelector(".Draw").style.visibility = "visible"
    }
   

}



function handleClick(event) 
{
            // x.play()
            move++
            if (turn==1) {
            document.querySelector('div.cell' + event.target.dataset.cellIndex).classList.add('p1')
            console.log(event.target.dataset.cellIndex)   
            WinArrayp1.push(event.target.dataset.cellIndex)
            Result()
            turn=2

            } else if (turn==2) {
            document.querySelector('div.cell' + event.target.dataset.cellIndex).classList.add('p2')
            console.log(event.target.dataset.cellIndex)  
            WinArrayp2.push(event.target.dataset.cellIndex)
            Result()
            turn=1
            }
}


function handleClickRestart(event) 
{
       if (turn == 1) {
        location.href = "indexDay.html"
       } else if (turn == 2) {
        location.href = "indexNight.html"
       }
}    

function handleClickMenu(event) 
{
    location.href = "Menu.html"
}    




