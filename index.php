<?php
//include_once('models/user_model.php');
include_once('config/pdo.php');
session_start();
?>

<!DOCTYPE html>
<html lang="fr">

    <head>
        <meta charset="utf-8" />
        <title>Manomano</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta content="" name="description" />
        <meta content="Coderthemes" name="author" />
        <!-- App favicon -->
        <link rel="shortcut icon" href="images/favicon.ico">
    <!-- App css -->
   <script type="module" src="js/index.js" ></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js" integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="style/style.css">
    </head>
    <body>
        <!-- Begin page -->
        <div class="wrapper bg-light">
            <!-- ========== Left Sidebar Start ========== -->
            <div class="content-page">
                <div class="content">
                    <?php //include('html/navbar-custom.php'); ?>
                    <!-- Start Content-->
                    <div class="container-fluid bg-light" id="tre">
                        <div class="row nav col-xl-6 col-lg-6 col-sm-12 " id="A1">
                            <div class="col-xl-12 col-lg-12 col-sm-12 row navform">
                                <img src="img/logo_mm.svg" class="mx-auto" style="width:300px !important;">
                                <nav class="navbar navbar-expand-lg navbar-light bg-light col-xl-12 col-lg-12 col-sm-12 nav1 ">
                                    <div class="col-xl-12 col-lg-12 col-sm-12" id="navbarSupportedContent">
                                        <div class="form-inline col-xl-12 col-lg-12 col-sm-10">
                                            <input class="form-control col-xl-10 col-lg-10 col-sm-10" type="search" placeholder="Recherche de Theme ou SousTheme" aria-label="Search" id="Search">
                                            <a class="btn-manomano btn my-2 col-xl-2 col-lg-2 col-sm-2" id ="btnSearch" >Search</a>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                        <div class="row"id="A2">
                            <p id="log"></p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </body>
</html>