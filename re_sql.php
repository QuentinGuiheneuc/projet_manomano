   <?php 
    include_once('config/pdo.php');
    try {
      if (isset($_GET["searchth"]) && $_GET["searchth"] != "" && $_GET["searchth"] != "all"){
    $query = $pdo->prepare("SELECT * FROM theme WHERE nom_theme LIKE '%".htmlspecialchars($_GET["searchth"])."%'");
      $query->execute();
      $results = $query->fetchAll(PDO::FETCH_ASSOC);
      $json1 = json_encode($results,JSON_PRETTY_PRINT);
      echo $json1;
   }
   if (isset($_GET["searchth"]) && $_GET["searchth"] == "all"){
    $query = $pdo->prepare("SELECT * FROM theme");
      $query->execute();
      $results = $query->fetchAll(PDO::FETCH_ASSOC);
      $json4 = json_encode($results,JSON_PRETTY_PRINT);
      echo $json4;
   }
   if (isset($_GET["idtheme"]) && $_GET["idtheme"] != "" && isset($_GET["searchthsous"]) && $_GET["searchthsous"] != "all"){
       $query = $pdo->prepare("SELECT * FROM soustheme WHERE nom_soustheme LIKE '%".htmlspecialchars($_GET["searchthsous"])."%' and id_theme =" .intval(htmlspecialchars($_GET["idtheme"]))."");
         $query->execute();
         $results = $query->fetchAll(PDO::FETCH_ASSOC);
         $json2 = json_encode($results,JSON_PRETTY_PRINT);
         echo $json2;
      }
      if (isset($_GET["idtheme"]) && $_GET["idtheme"] != "" && isset($_GET["searchthsous"]) && $_GET["searchthsous"] == "all"){
       $query = $pdo->prepare("SELECT * FROM soustheme WHERE id_theme = " .intval(htmlspecialchars($_GET["idtheme"]))."");
         $query->execute();
         $results = $query->fetchAll(PDO::FETCH_ASSOC);
         $json3 = json_encode($results,JSON_PRETTY_PRINT);
         //var_dump($results,$json3 );
         echo $json3;
      }
    } catch (\Throwable $th) {
       var_dump($th);
    }
   
   //INSERT INTO `soustheme`(`id_theme`, `nom_soustheme`, `image`, `description`) VALUES (1,'Les Prises','https://schema-electrique.net/images/branchement_prise_electrique_gf_cbpc.jpg','Une prise électrique est un connecteur permettant de connecter des appareils électriques, domestiques ou industriels, au réseau électrique, par enfichage sur des socles électriques.')
   ?>