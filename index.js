let turn = "X";
let isgameover=false;
let gameover = new Audio("gameover.mp3");
//function to chnage the turn
const changeTurn = () =>{
   return turn === "X"?"O":"X"
}
//function to check win
const checkwin=(e)=>{
    let boxtext=document.getElementsByClassName('boxtext');
    winarray=[[0,1,2,6,20,0],
      [3,4,5,6,75,0],
      [6,7,8,6,130,0],
      [0,4,8,2,80,45],
      [2,4,6,2,80,135],
      [0,3,6,-50,78,90],
      [2,5,8,55,78,90],
      [1,4,7,3,78,90],
    ]
    winarray.forEach(e=>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
           document.querySelector('.info').innerText= boxtext[e[0]].innerText + " won"
           gameover.play();
           isgameover = true   
           document.querySelector('.excitedgif').style.width="160px";
           document.querySelector('.line').style.width="150px";
           document.querySelector('.line').style.transform=`translate(${e[3]}px,${e[4]}px) rotate(${e[5]}deg)`
        }
    })
}


//Game logic

const boxes= document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext= element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            checkwin();
            if (!isgameover){
               document.getElementsByClassName("info")[0].innerText =  "turn for "+ turn;
            }
        }
    })
})


//reset the button
reset.addEventListener('click',()=>{
    let boxtext= document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element=>{
         element.innerText="";
    }) ; 
    turn ="X"
    isgameover=false;
    document.getElementsByClassName("info")[0].innerText =  "turn for "+ turn;
    document.querySelector('.excitedgif').style.width="0px";
    document.querySelector('.line').style.width="0px"

})