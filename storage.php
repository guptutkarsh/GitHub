<!DOCTYPE html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
</head>
<?php
$name=$_GET['name'];
$name = mysql_real_escape_string($name);
$pwd=$_GET['pwd'];
$pwd=mysql_real_escape_string($pwd);
$room=$_GET['room'];
$room=mysql_real_escape_string($room);
mysql_connect("localhost","root","") or die (mysql_error());
mysql_select_db("utkarsh") or die(mysql_error());
$strSQL = "INSERT INTO user(Name,id,room,password) VALUES('$name','yes','$room','$pwd')";
 mysql_query($strSQL) or die(mysql_error());?>
<body>
</body>
</html>