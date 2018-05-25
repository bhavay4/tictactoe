function startgame()
{
    clear();
 document.draw=0;
 document.turn="X"; 
 document.winner="a";
 messagechange(document.turn + " 'Turn.");
}
function messagechange(msg)
{
    document.getElementById("mes").innerText= msg;
}


function nextmove(square)
{

   if(document.winner == "a")
    {
    if(square.innerText== "")
{ 
   square.innerText=document.turn;
    var x = document.getElementById("myAudio");
    x.play();
    document.draw+=1;
   switcht();
}

else{
    messagechange("Select Another Square");

    }}
    

}


function switcht()
{ 
   
    if(checkresult(document.turn))
        {messagechange("Congrats " + document.turn +",Won");
         var y = document.getElementById("win");
    y.play();
        }
    else if(document.winner=="a" && document.draw==9)
        {messagechange("Draw");
          var z = document.getElementById("dra");
          z.play();
        }
    
else if(document.turn == "X")
    {document.turn="O";
     messagechange(document.turn + " 'Turn.");
    }
else
    {document.turn="X";
    messagechange(document.turn + " 'Turn.");
    }
}



function checkresult(move)
{ var result=false;
     if(checkbox(1,2,3,move)||
        checkbox(4,5,6,move)||
        checkbox(7,8,9,move)||
        checkbox(1,4,7,move)||
        checkbox(1,5,9,move)||
        checkbox(3,5,7,move)||
        checkbox(2,5,8,move)||
        checkbox(3,6,9,move)
        ){ result=true;}
 return result;
 
    
}



function checkbox(a,b,c,move)
{
    var result=false;
    if(gettext(a) == move && gettext(b) == move && gettext(c) == move){
        result =true;
        changec(a,b,c);
        document.winner="b";    
    }
     
    return result;
}


function gettext(number)
{ return document.getElementById("s"+ number).innerText;
}



function clear()
{
    for(var i=1;i<10;i++)
        {
            document.getElementById("s" +i).innerText="";
            document.getElementById("s" +i).style.backgroundColor = "antiquewhite";
        }

}


function changec(a,b,c)
{
document.getElementById("s" + a).style.backgroundColor = "orange";
    document.getElementById("s" + b).style.backgroundColor = "orange";
    document.getElementById("s" + c).style.backgroundColor = "orange";
}
