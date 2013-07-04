// JavaScript Document
var a=0;
function clicked(){var y=window.opener.document.getElementById('name').value;
document.getElementById("para").innerHTML+=y;
document.getElementById("para1").innerHTML+=y;
}
function change(x){if(a==1)
window.alert("already blocked 1 room");
else
{a++;
window.alert("you have blocked "+x);
document.getElementById("para1").innerHTML+=" has blocked "+x;
}}