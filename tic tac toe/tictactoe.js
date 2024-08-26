console.log("Welcome to Tic Tac Toe");
let music=new Audio("music.mp3");
let turnSound= new  Audio("ting.mp3");
let Gameover= new Audio("gameover.mp3");
let turn="X";
let isGameOver=false

//Function for the turn
const ChangeTurn=()=>{
    return turn==="X"?"O":"X";
}

//Function to checkwin
const Checkwin=()=>{
    let BoxTexts=document.getElementsByClassName('boxText');
    let wins=[
        [0,1,2,5,5,0],
        [3,4,5,5,15,0],
        [6,7,8,5,25,0],
        [0,3,6,5,5,90],
        [1,4,7,5,15,90],
        [2,5,8,5,25,90],
        [0,4,8,5,15,45],
        [2,4,6,5,10,135]
    ]
    wins.forEach(e=>{
        if((BoxTexts[e[0]].innerText===BoxTexts[e[1]].innerText) && (BoxTexts[e[1]].innerText===BoxTexts[e[2]].innerText) && BoxTexts[e[0]].innerText!==''){
            document.getElementsByClassName('Info')[0].innerText=BoxTexts[e[0]].innerText + " Won";
            isGameOver=true
            document.querySelector('.ImageBox').getElementsByTagName('img')[0].style.width="200px"
            document.getElementsByClassName('line')[0].style.width="20vw"
            document.getElementsByClassName('line')[0].style.transform=`translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
        }
    })

}

//Game Logic(when to change turn where to put sounds etc)
let box=document.getElementsByClassName('box')
Array.from(box).forEach(element =>{
    let boxText=element.querySelector('.boxText');
    element.addEventListener('click',()=>{
        if(boxText.innerText===''){
            boxText.innerText=turn;
            turn =ChangeTurn();
            turnSound.play();
            Checkwin();
            if(!isGameOver){
                document.getElementsByClassName('Info')[0].innerText="Turn for "+turn;
            }
            }
            
    })
})

document.getElementById('reset').addEventListener('click',()=>{
    let boxText=document.querySelectorAll('.boxText');
    Array.from(boxText).forEach(element =>{
        element.innerText="";
    })
    turn="X"
    isGameOver=false;
    document.getElementsByClassName('line')[0].style.width="0vw"
    document.getElementsByClassName('Info')[0].innerText="Turn for "+turn;
    document.querySelector('.ImageBox').getElementsByTagName('img')[0].style.width="0px"
})
//music.play();
document.getElementById('musicOn').addEventListener('click',function(){
    music.pause();
    this.classList.remove('fa-music')
    this.classList.add('fa-volume-xmark')
}
);
