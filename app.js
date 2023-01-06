const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => res.type('html').send(html));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));


const html = `
 <!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Agriculture</title>
        <link rel="stylesheet" href="styles/style.css">
        
    </head>
    <body>
        <header>
             
             <h1>Aba Appi</h1>
             
             
           
        </header>
        <main>
<!--------------------------------Start Area--------------------------------------->

 <div class="container">
         <div class="ringring"><img class="welc" src="images/corossol.jpeg" alt="icon">
         </div>
      </div>
      </div>

<div class="container3">
        <div class="ringring"><img class="welc2" src="images/ignam.jpeg" alt="icon">
        </div>
     </div>
     </div>


<div class="container4">
        <div class="ringring"><img class="welc2" src="images/avocat.jpeg" alt="icon">
        </div>
     </div>
     </div>

     <div class="container5">
        <div class="ringring"><img class="welc2" src="images/cocoa2.jpeg" alt="icon">
        </div>
     </div>
     </div>

<br><br><br><br><br>

<div class="container7">
    <div class="ringring"><img class="welc2" src="images/raisinpic1.webp" alt="icon">
    </div>
 </div>
 </div>

<div class="container6">
    <div class="ringring"><img class="welc2" src="images/banana.webp" alt="icon">
    </div>
 </div>
 </div>



<div class="container">
    <div class="ringring"><img class="welc" src="images/mira.webp" alt="icon">
    </div>
 </div>
 </div>

 <div class="container11">
    <div class="ringring"><img class="welc2" src="images/mangopic1.webp" alt="icon">
    </div>
 </div>
</div>


<div class="container10">
    <div class="ringring"><img class="welc2" src="images/pawpaw.webp" alt="icon">
    </div>
 </div>
</div>

  

 <div class="container8">
    <div class="ringring"><img class="welc2" src="images/goya.webp" alt="icon">
    </div>
 </div>
</div>

<div class="container9">
    <div class="ringring"><img class="welc2" src="images/anacade.webp" alt="icon">
    </div>
 </div>
</div>

 <div class="container">
    <div class="ringring"><img class="welc2" src="images/pineapple1.jpg" alt="icon">
    </div>
 </div>
 </div>

 <br><br><br>
 <br><br><br><br><br><br>

 <div>
            
   

    <img class="welc" src="images/christmas.png" alt="icon">

 
    <img class="welc" src="images/christmas.png" alt="icon">


    <img class="welc" src="images/christmas.png" alt="icon">


    <img class="welc" src="images/christmas.png" alt="icon">

</div>


<!--------------------------------End Area--------------------------------------->


        </main>
        <footer>
            &copy;2022 Bernitos| Brigham yong University  
        </footer>

        <script src="scripts/index.js"></script>
    </body>
</html>
'
