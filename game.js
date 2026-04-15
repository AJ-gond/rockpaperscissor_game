let choice=document.querySelectorAll(".choice");
let myScore=document.querySelector("#my-Score");
let comtScore=document.querySelector("#comt-Score");
let massege=document.querySelector("#massege");
let your_choice=document.querySelector("#your_choice");
let com_choice=document.querySelector("#com_choice")
let userCount=0;
let comCount=0;

const ranChoice=()=>{
    const option=["rock", "paper", "scissor"];
    const random=Math.floor(Math.random()*3);
    return option[random];
}
let playGame=(userChoice)=>{
      let userData=(userChoice);
      your_choice.innerText= `Your Choice =  ${userData}`;

      let comramChoice=ranChoice();
      let compData=(comramChoice);
      com_choice.innerText =`Computer Choice = ${compData}`;

      if(comramChoice===userChoice){
          massege.innerText="Your Are Drow";
      } 
      else{ 
      let userwin =true;
       if(userChoice ==="rock"){
           userwin= comramChoice==="paper" ? false :true;
            if(userwin===false)
            {
                massege.innerText="Har Gaila Babu";
                a= ++comCount
                comtScore.innerText=`${a}`
            }
            else{
                massege.innerText="Jeet Gyila Babu";
                a= ++userCount
                myScore.innerText=`${a}`
            }
       }
       else if(userChoice ==="paper"){
           userwin= comramChoice==="scissor"  ? false :true;
            if(userwin===false)
            {
                massege.innerText="Har Gaila Babu";
                a= ++comCount
                comtScore.innerText=`${a}`
            }
            else{
                massege.innerText="Jeet Gyila Babu";
                a= ++userCount
                myScore.innerText=`${a}`
            }
       }
      else {
           userwin= comramChoice==="rock" ? false :true;
           if(userwin===false)
            {
                massege.innerText="Har Gaila Babu";
                a= ++comCount
                comtScore.innerText=`${a}`
            }
            else{
                massege.innerText="Jeet Gyila Babu";
                a= ++userCount
                myScore.innerText=`${a}`
            }
       }
    }

       
}
choice.forEach((choice) =>{
    choice.addEventListener("click",() =>{
       let  userChoice=choice.getAttribute("id")
       playGame(userChoice)
    })
})
