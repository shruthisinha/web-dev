let words=
[
    {
        jumbled:"papel",
        correct:"apple"
    },
    {
        jumbled:"geg",
        correct:"egg"
    },
    {
        jumbled:"cenpil",
        correct:"pencil"
    },
    {
        jumbled:"seerar",
        correct:"eraser"
    },
    {
        jumbled:"ublejm",
        correct:"jumble"
    },
    {
        jumbled:"recrtco",
        correct:"correct"
    },
    {
        jumbled:"letobt",
        correct:"bottle"
    },
  
]
let currentWord=0;
let score=0;


function displayword()

{
    document.querySelector("#j-word").innerText=words[currentWord].jumbled;

    document.querySelector("#score").innerText=score;

}

    displayword();

    function checkAnswer()
    {
        let answer=document.querySelector("#inp").value;
if(answer.toLowerCase()===words[currentWord].correct.toLowerCase())
{
    score++;

}
if(currentWord==words.length-1)
{
    let msg="";
    if(score===5){
        msg="Amazing Game"+score;
    }
    else if(score===4){
        msg="Good Game"+score;
    }
    
        else if (score<4){
            msg="Good Try"+score;
        }
        alert(msg);
        location.reload();
    
}
else{currentWord++;
displayword();

document.querySelector("#inp").value="";

}
    }
