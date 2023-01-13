
let text1="<br><br>";
for(let i=0; i<=4; i++)
{
    if(i==0)
    text1="<table class="+"offer"+">";
    if(i%5==0)
    {
        text1=text1+"<tr>";
    }
    for(let j=0; j<4; j++)
    {


        text1=text1+"<td><div class=\"img-container\"><img src=\"herbata.jpg\" id=\"img2\"><div class=\"overlay\">Image 2 Title</div></div></td>"

        
        
        //text1=text1+"<td><img src="+"herbata.jpg"+">"+"</td>";
    }

        text1=text1+"</tr>";

    
    
}
text1=text1+"</table>";
document.getElementById("demo").innerHTML =
 text1;
