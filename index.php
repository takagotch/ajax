<form method="POST" action="index.php">
  <label for="name">Search:</label>
  <input type="text" search="search" value-"ENTER" />
</form>
<?php
  if ($_REQUEST['submit'] !== null){
    sleep(3);
    print('...'. htmlspecialchars($_POST['search'], ENT_QUOTES | ENT_HTML5, 'UTF-8').'...');
  }
?>

