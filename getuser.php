<!DOCTYPE html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
</head>
<?php
mysql_connect("localhost","root","") or die (mysql_error());
mysql_select_db("utkarsh") or die(mysql_error());

$sql="SELECT * FROM user WHERE id = 'yes'";
$result = mysql_query($sql);
while($row = mysql_fetch_array($result))
  {
  echo $row['room']." ";
  echo "<br />";
  }

  
?>
<body>
</body>
</html>