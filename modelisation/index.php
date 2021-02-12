
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Let's simulate</title>
         <script type="module" src="./index.js" ></script>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js" integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s" crossorigin="anonymous"></script>
        <link rel="stylesheet" type="text/css" href="./style.css">
    </head>
    <body>
            <div class="container-pages bg-light">
            <!-- ========== Left Sidebar Start ========== -->
               <div class="column" id="column">
                                <div class="card column">
                                    <div class="card-body">
                                        <h3 class="card-title">Outils</h3>
                                        <div clas="row">
                                            <div class="dropdown" style=" padding-top: 5px;">
                                                <button class="btn btn-light dropdown-toggle col-xl-12 col-lg-12 col-sm-12" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Outils 1
                                                </button>
                                                <div class="dropdown-menu col-xl-12 col-lg-12 col-sm-12" aria-labelledby="dropdownMenuButton">
                                                    <a class="dropdown-item" href="#">Sélection</a>
                                                    <a class="dropdown-item" href="#">Supprimer</a>
                                                    <a class="dropdown-item" href="#">Couleur</a>
                                                </div>
                                            </div>
                                            <div class="dropdown" style=" padding-top: 5px;">
                                                <button class="btn btn-light dropdown-toggle col-xl-12 col-lg-12 col-sm-12" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Outils 2
                                                </button>
                                                <div class="dropdown-menu col-xl-12 col-lg-12 col-sm-12" aria-labelledby="dropdownMenuButton">
                                                    <a class="dropdown-item" href="#">Quelquechose</a>
                                                    <a class="dropdown-item" href="#">untruc</a>
                                                    <a class="dropdown-item" href="#">bidule</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                        <div class="column2" id="column2" style=" padding:0px;">
                                <div class="card column">
                                    <div class="card-body">
                                        <h3 class="card-title">Composant</h3>
                                        <div clas="row">
                                            <div class="dropdown" style="padding-top: 5px;">
                                                <button class="btn btn-light dropdown-toggle col-xl-12 col-lg-12 col-sm-12" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Composant 1
                                                </button>
                                                <div class="dropdown-menu col-xl-12 col-lg-12 col-sm-12" aria-labelledby="dropdownMenuButton">
                                                    <a class="dropdown-item" id="object">Prise</a>
                                                    <a class="dropdown-item" id="cable">Cable</a>
                                                    <a class="dropdown-item" href="#">bidule</a>
                                                </div>
                                            </div>
                                            <div class="dropdown" style=" padding-top: 5px;">
                                                <button class="btn btn-light dropdown-toggle col-xl-12 col-lg-12 col-sm-12" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Composant 2
                                                </button>
                                                <div class="dropdown-menu col-xl-12 col-lg-12 col-sm-12" aria-labelledby="dropdownMenuButton">
                                                    <a class="dropdown-item" href="#">Quelquechose</a>
                                                    <a class="dropdown-item" href="#">untruc</a>
                                                    <a class="dropdown-item" href="#">bidule</a>
                                                </div>
                                            </div>
                                            <div class="dropdown " style=" padding-top: 5px;">
                                                <button class="btn btn-light dropdown-toggle col-xl-12 col-lg-12 col-sm-12" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Composant 3
                                                </button>
                                                <div class="dropdown-menu col-xl-12 col-lg-12 col-sm-12" aria-labelledby="dropdownMenuButton">
                                                    <a class="dropdown-item" href="#">Quelquechose</a>
                                                    <a class="dropdown-item" href="#">untruc</a>
                                                    <a class="dropdown-item" href="#">bidule</a>
                                                </div>
                                            </div>
                                            <div class="dropdown" style=" padding-top: 5px;">
                                                <button class="btn btn-light dropdown-toggle col-xl-12 col-lg-12 col-sm-12" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Composant 4
                                                </button>
                                                <div class="dropdown-menu col-xl-12 col-lg-12 col-sm-12" aria-labelledby="dropdownMenuButton">
                                                    <a class="dropdown-item" href="#">Quelquechose</a>
                                                    <a class="dropdown-item" href="#">untruc</a>
                                                    <a class="dropdown-item" href="#">bidule</a>
                                                </div>
                                            </div>
                                            <div class="dropdown" style=" padding-top: 5px;">
                                                <button class="btn btn-light dropdown-toggle col-xl-12 col-lg-12 col-sm-12" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Composant 5
                                                </button>
                                                <div class="dropdown-menu col-xl-12 col-lg-12 col-sm-12" aria-labelledby="dropdownMenuButton">
                                                    <a class="dropdown-item" href="#">Quelquechose</a>
                                                    <a class="dropdown-item" href="#">untruc</a>
                                                    <a class="dropdown-item" href="#">bidule</a>
                                                </div>
                                            </div>
                                            <div class="dropdown " style=" padding-top: 5px;">
                                                <button class="btn btn-light dropdown-toggle col-xl-12 col-lg-12 col-sm-12" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Composant 6
                                                </button>
                                                <div class="dropdown-menu col-xl-12 col-lg-12 col-sm-12" aria-labelledby="dropdownMenuButton">
                                                    <a class="dropdown-item" href="#">Quelquechose</a>
                                                    <a class="dropdown-item" href="#">untruc</a>
                                                    <a class="dropdown-item" href="#">bidule</a>
                                                </div>
                                            </div>
                                            <div class="dropdown " style=" padding-top: 5px;">
                                                <button class="btn btn-light dropdown-toggle col-xl-12 col-lg-12 col-sm-12" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Composant 7
                                                </button>
                                                <div class="dropdown-menu col-xl-12 col-lg-12 col-sm-12" aria-labelledby="dropdownMenuButton">
                                                    <a class="dropdown-item" href="#">Quelquechose</a>
                                                    <a class="dropdown-item" href="#">untruc</a>
                                                    <a class="dropdown-item" href="#">bidule</a>
                                                </div>
                                            </div>
                                            <div class="dropdown " style=" padding-top: 5px;">
                                                <button class="btn btn-light dropdown-toggle col-xl-12 col-lg-12 col-sm-12" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Composant 8
                                                </button>
                                                <div class="dropdown-menu col-xl-12 col-lg-12 col-sm-12" aria-labelledby="dropdownMenuButton">
                                                    <a class="dropdown-item" href="#">Quelquechose</a>
                                                    <a class="dropdown-item" href="#">untruc</a>
                                                    <a class="dropdown-item" href="#">bidule</a>
                                                </div>
                                            </div>
                                            <div class="dropdown" style=" padding-top: 5px;">
                                                <button class="btn btn-light dropdown-toggle col-xl-12 col-lg-12 col-sm-12" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Composant 9
                                                </button>
                                                <div class="dropdown-menu " aria-labelledby="dropdownMenuButton">
                                                    <a class="dropdown-item" href="#">Quelquechose</a>
                                                    <a class="dropdown-item" href="#">untruc</a>
                                                    <a class="dropdown-item" href="#">bidule</a>
                                                </div>
                                            </div>
                                            <div class="dropdown" style=" padding-top: 5px;">
                                                <button class="btn btn-light dropdown-toggle col-xl-12 col-lg-12 col-sm-12" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Composant 10
                                                </button>
                                                <div class="dropdown-menu col-xl-12 col-lg-12 col-sm-12" aria-labelledby="dropdownMenuButton">
                                                    <a class="dropdown-item" href="#">Quelquechose</a>
                                                    <a class="dropdown-item" href="#">untruc</a>
                                                    <a class="dropdown-item" href="#">bidule</a>
                                                </div>
                                            </div>
                                            <a href="#" class= "btn btn-light col-xl-12 col-lg-12 col-sm-12" style="margin-top: 20px;">Help ?</a>
                                            <a href="#" class= "btn btn-light col-xl-12 col-lg-12 col-sm-12" style="margin-top: 10px;">Buy</a>
                                        </div>
                                    </div>
                                </div>
                                
                        </div>
                        <div class="content" id="contain">
                            <div class="row" style="padding:0px;">
                                <div class="workbenchu"style="padding:0px;" >
                                    <div id="workbench" >
                                            <div id="grid-snap0" class="grid-snapclass">
                                            Je suis l'object Principal.
                                        </div>
                                    </div>
                                </div>
                            </div>  
                        </div>
            </div>
            <!-- <div class="chat" id="Form">
            <form action="/action.php" class="form-container" method="GET">
                <h1> Informations </h1>
                <label for="msg"><b>Message</b></label>
                <span id="bot" class="btnbot">Attention</span>
                <div id="client">
                    <span class="btn">Ok</span>
                    <span class="btn">Ok</span>
                </div>
                <button type="button" class="btncancel" onclick="closeForm()">Fermer</button>
            </form>
        </div> -->
    </body>
</html>