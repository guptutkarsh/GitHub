var w=0;
var a=60;
var f=0;
var y=new Array();
  var c=0;
var inputs=new Array();
var b=new Array();
var n=new Array();
function avail(){ n=document.getElementById("txt").textContent;
	 b=n.split(" ");
	  for(d=1;d<b.length-1;d++)
	 {y[c]=b[d];
	 c++;}
 inputs = document.getElementsByTagName("input");
for (var i = 0; i < inputs .length; i++) 
for(var j=0;j<=y.length;j++)
{if(inputs[i].id==y[j])
{document.getElementById(y[j]).className="do";
document.getElementById(y[j]).value="blocked";
}}}

function change(x)
{
for(i=0;i<y.length;i++)
{if(x==y[i])
{alert("already blocked");
f=2;
owner(x);}}
if(a==1&&f!=2)
window.alert("already blocked 1 room");
if(a==60&&f!=2)
{a=1;
window.alert("you have blocked "+x);
store(x);
document.getElementById("para1").innerHTML+=" has blocked "+x;
}f=0;
}
function store(x)
{var name=document.getElementById("para1").innerHTML;
var room=x;

var pwd=document.getElementById("para2").textContent;
var queryString = "?name=" + name + "&pwd=" + pwd +"&room=" + room;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    alert("u have been registered");
    }
  }
xmlhttp.open("GET","storage.php" + queryString,true);
xmlhttp.send();
}function logout(){
	var win =window.open("out.html");
	}
	
function owner(x)
{if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {document.getElementById(x).innerHTML=xmlhttp.responseText;
     document.getElementById(x).value="this room is blocked by "+ document.getElementById(x).textContent.trim();
	 }
  }
xmlhttp.open("GET","blocked.php?s="+x,true);
xmlhttp.send();
}	

	

