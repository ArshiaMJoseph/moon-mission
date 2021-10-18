var ast,astImg;
var bgImg;
var flag,flagImg;
var oxy,oxyImg;
var fuel,fuelImg;
var radio,radioImg;
var confetti,confettiImg;
var star,starImg,star1,starImg1;
var starcount =0;
var gameState = 1;
var flagclick =0
var feulclick =0
var oxyclick =0
var radioclick =0
var plankImg;





function preload(){
    astImg = loadImage("astraunuat1.png");
    bgImg = loadImage("background.jpg");
    oxyImg = loadImage("oxygen.png");
    flagImg = loadImage("flag.png");
    fuelImg = loadImage("fuel.png");
    radioImg = loadImage("radio.png");
    starImg1 = loadImage("star2.png");
    plankImg= loadImage("woodenplank.jpg");
    
    
    
    

}


function setup(){
    createCanvas(displayWidth,displayHeight);

    let col = color(200,255,255);

    
 
    button = createButton("play")
    button.position(width/2,height-250)
    button.style('font-size', '40px');
    button.style('background-color', col);
    button.mousePressed(()=>gameState=2)


    star1 = createSprite(width/2,50);
    star1.addImage(starImg1)
    star1.scale = 0.08;
    star1.visible = false
    star2 = createSprite(width/2+100,50);
    star2.addImage(starImg1)
    star2.scale = 0.08;
    star2.visible = false
    star3 = createSprite(width/2+200,50);
    star3.addImage(starImg1)
    star3.scale = 0.08;
    star3.visible = false
    star4 = createSprite(width/2+300,50);
    star4.addImage(starImg1)
    star4.scale = 0.08;
    star4.visible = false


    ast = createSprite(displayWidth/2+50,displayHeight/2+100);
    ast.addImage(astImg);
    ast.scale = 0.4;

    oxy = createSprite(420,355);
    oxy.addImage(oxyImg);
    oxy.scale = 0.2;
    //oxy.debug = true//

    flag = createSprite(760,400);
    flag.addImage(flagImg);
    flag.scale = 0.1;

    fuel = createSprite(70,45);
    fuel.addImage(fuelImg);
    fuel.scale = 0.1;
   // fuel.debug=true//

    radio = createSprite(1510,550);
    radio.addImage(radioImg);
    radio.scale = 0.1;


}


function draw(){
background("black");
if(gameState===1){
  background(plankImg);
  //image(plankImg,);//

}

  if(gameState===2){
    button.hide()
    clear()
    background(bgImg);
  console.log(starcount)

    if(mousePressedOver(oxy)  && oxyclick ===0) {
      oxyclick=1
        console.log("oxyisclicked");
        oxy.scale = 1;
        oxy.x = width/2
        oxy.y = height/2+150
        
        oxy.depth =8
        starcount = starcount+1
        var starImg4 = createImg("star.gif");
        starImg4.position(width/2-200,10);
        starImg4.size(400,400)
        setTimeout(() => { oxy.destroy() ;starImg4.remove(); makestarvisible()}, 2000);
        
       
       
      
      }

      if(mousePressedOver(flag) && flagclick ===0) {
        flagclick =1
        console.log("flagisclicked");
        flag.scale = 0.2;
        flag.x = width/2
        flag.y = height/2+50
        
        flag.depth =8
        starcount = starcount+1
        var starImg3 = createImg("star.gif");
        starImg3.position(width/2-200,10);
        starImg3.size(400,400)
        setTimeout(() => { flag.destroy() ;flag = null;starImg3.remove();  makestarvisible()}, 2000);
        
        
       
      }

      if(mousePressedOver(fuel) && feulclick ===0) {
        feulclick=1
        console.log("fuelisclicked");
        fuel.scale = 1;
        fuel.x = width/2
        fuel.y = height/2+150
        
        fuel.depth =8
        starcount = starcount+1
        var starImg2 = createImg("star.gif");
        starImg2.position(width/2-200,10);
        starImg2.size(400,400)
        setTimeout(() => { fuel.destroy() ;starImg2.remove();  makestarvisible()}, 2000);
        
        
       
      }

      if(mousePressedOver(radio) &&   radioclick ===0) {
        radioclick=1
        console.log("radioisclicked");
        radio.scale = 0.5;
        radio.x = width/2
        radio.y = height/2+150
        
        radio.depth =8
        starcount = starcount+1
        var starImg1 = createImg("star.gif");
        starImg1.position(width/2-200,10);
        starImg1.size(400,400)
        setTimeout(() => { radio.destroy() ;starImg1.remove(); makestarvisible()}, 2000);
        
        
       
      }




  drawSprites();
  

  }
  
}

function makestarvisible(){
  switch(starcount){
    case 1: star1.visible = true;
    break;
    case 2: star2.visible = true;
    break;
    case 3: star3.visible = true;
    break;
    case 4: star4.visible = true;
    break;

  }
}