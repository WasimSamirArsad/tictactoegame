let boxes=document.querySelectorAll(".box")
let resetbutton=document.querySelector("#reset")
// let gamee=document.querySelector(".game")
let newbtn=document.querySelector(".new-btn")
let msgcontainer=document.querySelector(".msg-container")
let msg=document.querySelector("#msg")

turnO=true;//playerO
const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("button was clicked");
        if(turnO){
            box.innerText="O"  //player o turn
            box.classList.add("colorgreen")
            box.classList.add("bold")
            turnO=false
        }
        else{
            box.innerText="X" //player X turn
            box.classList.add("bold")
            turnO=true
        }
        box.disabled=true
        checkwinner()
    })
})

const resetbtn=()=>{
    turnO=true
    enablebtn()
    msgcontainer.classList.add("hide")
}



//disble btn
const disabledbtn =()=>{
    for(box of boxes){
        box.disabled=true
    }
}
//enable btn
const enablebtn=()=>{
    for(box of boxes){
        box.disabled=false
        box.innerText=""
    }
}

const showwinner=(winner)=>{
      msg.innerText=`Congratulation Winner is ${winner}`;
      msgcontainer.classList.remove("hide")
      disabledbtn()
};

const checkwinner=()=>{
    for(let patttern of winpatterns){
        // console.log(patttern[0],patttern[1],patttern[2])
        // console.log(
        //     boxes[patttern[0]].innerText,
        //     boxes[patttern[1]].innerText,
        //     boxes[patttern[2]].innerText
        //     );
     let pos1val=boxes[patttern[0]].innerText
     let pos2val=boxes[patttern[1]].innerText
     let pos3val=boxes[patttern[2]].innerText

     if(pos1val !="" && pos2val !="" && pos3val !=""){
        if(pos1val===pos2val && pos2val===pos3val){
            console.log("winner",(pos1val))
            // gamee.innerText="Winner"
            
            showwinner(pos1val)
        }
     }
    }
}

resetbutton.addEventListener("click",resetbtn)
newbtn.addEventListener("click",resetbtn)