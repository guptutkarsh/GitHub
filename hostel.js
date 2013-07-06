var y=new Array();
  var c=0;
var inputs=new Array();
var a=0;
var b=new Array();
var n=new Array();
function avail(){ n=document.getElementById("txt").textContent;
	 b=n.split(" ");
	  for(d=1;d<b.length-1;d++)
	 {y[c]=b[d];
	 c++;}
	
 inputs = document.getElementsByTagName("input");
for (var i = 0; i < inputs .length; i++) 
{if(inputs[i].id==y[2])
alert("hjjbj");
}}

function clicked(){var y=window.opener.document.getElementById('name').value;
document.getElementById("para").innerHTML+=y;
document.getElementById("para1").innerHTML+=y;
}
function change(x){
	
	if(a==1)
window.alert("already blocked 1 room");
else
{a++;
window.alert("you have blocked "+x);
document.getElementById("para1").innerHTML+=" has blocked "+x;
}}



	
	