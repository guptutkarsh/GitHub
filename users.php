<!DOCTYPE html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
</head>
<?php
$name=$_GET['name'];
$name = mysql_real_escape_string($name);
$pwd=$_GET['pwd'];
$pwd=mysql_real_escape_string($pwd);
mysql_connect("localhost","root","") or die (mysql_error());
mysql_select_db("utkarsh") or die(mysql_error());
$sql="SELECT * FROM user WHERE Name = '$name'";
$result = mysql_query($sql);
while($row = mysql_fetch_array($result))
  {if($row['room']!=" ")
  {echo "u already have ".$row['room'];
  if($row['password']!=$pwd)
  echo "wrong password"."<br>"."acess denied";}
  }?>
<body>
</body>
</html>