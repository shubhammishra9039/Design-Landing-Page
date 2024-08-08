var abc = document.querySelector("button");
var flag=0;

abc.addEventListener("click",function(){
    if(flag==0)
    {
        document.querySelector("h1").innerHTML ="Friend"
        document.querySelector("h1").style.color="green"
        document.querySelector("button").innerHTML = "Remove Friend"
        flag=1;

    }
    else
    {
        document.querySelector("h1").innerHTML ="Add Friend"
        document.querySelector("h1").style.color="red"
        document.querySelector("button").innerHTML = "Friend"
        flag=0;


    }

    


})