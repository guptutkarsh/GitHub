// JavaScript Document
var a=0,b;
function take(){
	b=document.getElementById("name").value;
	if(document.getElementById("name").value=='')
	{a=1;
	window.alert("enter d name");
	}if(document.getElementById("pwd").value=='')
	{a=1;window.alert("enter d password");
	}
	if(a==0)
	{alert("welcome  "+document.getElementById("name").value+"\n"+"Please wait while u are being redirected");
	var win1=window.open("hostel.html");
	win1.focus();
		}}
	
	function showing()
{var name=document.getElementById("name").value;
 var pwd=document.getElementById("pwd").value;
 var queryString = "?name=" + name + "&pwd=" + pwd;
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
    document.getElementById("txit").innerHTML=xmlhttp.responseText;
	var check=document.getElementById("txit").textContent;
	if(check.length==6)
	take();
 }								
  }
xmlhttp.open("GET","users.php" + queryString,true);
xmlhttp.send();
}