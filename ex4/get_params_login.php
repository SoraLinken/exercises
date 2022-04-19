<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Result</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css">
        <link rel="stylesheet" href="./css/style2.css">
    </head>
    <body>
        <div class="login-dark">

                <h2 class="sr-only">Zodiac Checker</h2>

            <form class="text-center" >
                <?php
                    $name = $_GET["name"];
                    $zodiac = $_GET["zodiac"];
                    $pZodiac = $_GET["pZodiac"];

                    if (($zodiac == 1 && ($pZodiac ==3 || $pZodiac ==7 || $pZodiac== 9)) || ($zodiac == 2 && ($pZodiac ==4 || $pZodiac ==11 || $pZodiac== 5)))
                        echo "<h2>Congratulations<br>" . $name . "</h2><br><h4>You and your partner</h4><br><h4>are compatible Zodiacly</h4>";
                    elseif (($zodiac == 3 && ($pZodiac ==10 || $pZodiac ==7 || $pZodiac== 2)) || ($zodiac == 4 && ($pZodiac ==12 || $pZodiac ==6 || $pZodiac== 7)))
                        echo "<h2>Congratulations<br>" . $name . "</h2><br><h4>You and your partner</h4><br><h4>are compatible Zodiacly</h4>";
                    else
                        echo "<h2>Too bad<br>" . $name . "</h2><br><h4>You and your partner</h4><br><h4>are not compatible Zodiacly</h4>"
                ?>
            </form>
        </div>

    </body>
</html>