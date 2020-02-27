const express = require('express');
var bodyParser = require('body-parser');


const app = express();
const PORT = process.env.PORT || 3000;

// Pour supporter JSON-encoded 
// Pour supporter URL-encoded 
app.use( bodyParser.json() );       
app.use(bodyParser.urlencoded({     
  extended: true
})); 
///////////////////////////////

//  modifier le header du http Pour Annuler le mécanisme qui permet à des ressources restreintes d'une page web, 
//  d'être récupérées par un autre domaine extérieur au domaine à partir duquel la première ressource a été servie
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
  });    
////////////////////////////////////////////////////////////////////////////////////////////////////


  app.post('/calcule', (req, res) => {
  
   var primaryPrice = req.body.price * req.body.area;
   var finalPrice = primaryPrice;
   
//    console.log(`prix : ${req.body.price}, surface : ${req.body.area}, ndp : ${req.body.numberOfRooms}, 
//    type : ${req.body.type}, etat : ${req.body.status}, `);
//    console.log(`prix de depart est ${primaryPrice}`);



//  la verification de la valeur nombre de pieces, et le calcule si la valeur existe
   if (req.body.numberOfRooms != null){
      
          var nor = req.body.numberOfRooms;
       
          if(nor <= 2) finalPrice = finalPrice + (primaryPrice*0.05);
               
          else if (nor == 3 || nor ==4) finalPrice = finalPrice + (primaryPrice*0.02);
             
          else if (nor>=5) finalPrice = finalPrice - (primaryPrice*0.01);
               
   }
//   console.log(`prix apres le calcule en focntion de nombre de pieces ${finalPrice}`);
//////////////////////////////////////////////////////////////////////////////////////////


//  la verification de la valeur type, et le calcule si la valeur existe
   if (req.body.type != null){

    var type = req.body.type;

    switch(type){
        case ('1'):
            finalPrice = finalPrice + (primaryPrice*0.03);
            break;
        case ('2'):
            finalPrice = finalPrice + (primaryPrice*0.05);
            break;
        default:{}
       }
   }
//   console.log(`prix apres le calcule en focntion de type de bien ${finalPrice}`);
/////////////////////////////////////////////////////////////////////////////////////


//  la verification de la valeur etat du bien, et le calcule si la valeur existe
   if (req.body.status != null){

    var status = req.body.status;
    
    switch(status){
        case ("1"):
            finalPrice = finalPrice - (primaryPrice*0.1);
            break;
        case ("2"):
            finalPrice = finalPrice + (primaryPrice*0.12);
            break;
        default:{}
       }
   }
 //  console.log(`prix apres le calcule en fonction de nombre de pieces ${finalPrice}`);
 ////////////////////////////////////////////////////////////////////////////////////////



  // L'envoie de notre prix calcule 
   res.setHeader('Content-Type', 'application/json');
   res.send({ data: finalPrice })
   ///////////////////////////////////////////////////
   
})


app.listen( PORT, () => { console.log(`Running on port ${ PORT }`) });