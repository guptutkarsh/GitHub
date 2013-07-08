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
	{var win1=window.open("hostel.html");
		showing();}}
	function showing()
	{var check=document.getElementById("txit").textContent;
	
	if(check=="")
	alert("welcome  "+document.getElementById("name").value+"\n"+"Please wait while u are being redirected");
	}