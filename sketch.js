var bgImg
var database;
var mazeCount
function preload(){
bgImg = loadImage("Map.jpg");
}

function setup() {
  createCanvas(1200,800);
 database = firebase.database();
database.ref('maze').on("value",(data)=>{
  mazeCount=data.val();
})

}

function draw() {
  background(bgImg);  

  if(mazeCount===0){
    maze();
  } 
  else if(mazeCount === 1){
   laser();
  }
  drawSprites();
}

function maze (){
  var x = document.createElement("A");
  var t = document.createTextNode("Click to start"); 
  x.setAttribute("href", "");
   x.appendChild(t); 
   document.body.appendChild(x);
} 
function laser (){
  var x = document.createElement("A");
  var t = document.createTextNode("Click to start"); 
  x.setAttribute("href", "");
   x.appendChild(t); 
   document.body.appendChild(x);
} 
