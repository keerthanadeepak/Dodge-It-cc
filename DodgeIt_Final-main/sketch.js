var path,bubble,bubbleImg,bubbles,bubblesImg;
var pathImg,bgImg,bgImg1,levelImg;
var treasureCollection = 0;
var go,goImg,store,storeImg;
var welcomeimage,welcomeanim;
var playbutton,playbuttonimg;
var shell;
var one,two,shellImg;
var oneImg,twoImg,hand,handImg;
var levelsboard,levelsboardImg,level1,level1Img,level2,level2Img;
var level3,level3Img,level4,level4Img,level5,level5Img,level6,level6Img;
var croos, crossImg,home,homeImg;
var fish,fishImg1,fishImg2,background1,background1Img;
var obstacle,obstacleGroup;
var objImg1,objImg2,objImg3,objImg4,objImg5,objImg6;
var gameover,gameoverImg,home1,home1Img,replay,replayImg;
var coin,coinImg,coinGroup,ruby1,ruby1Img,ruby1Group;
var diamond1,diamond1Img,diamond1Group,perl,perlImg,perlGroup;
var diamond2,diamond2Img,diamond2Group;
var coins=false,diamonds1=false,diamonds2=false,perls=false,rubys=false,coins1=false;
var claim1,claim2,claim3,claim4,claim5,claim6,claimbuttonImg;
var wow,wowImg;
var assetboard,assetboardImg,winboard,winboardImg,claim,claimImg1,claimImg2,claimImg3,claimImg4,claimImg5,claimImg6;
//Game States
var LEVEL1 = 3;
var SERVE = 2;
var PLAY=1;
var END=0;
var WIN = 4;
var gameState=2;
var d1count=0,d2count=0,rcount=0,pcount=0,ccount=0,ccount1=0;
var l1="locked",l2="locked",l3="locked",l4="locked",l5="locked",l6="locked",l51="open";
var claim1fish,claim2fish,claim3fish,claim4fish,claim5fish,claim6fish;
var sound1,sound2,soundon,soundoff,soundonImg,soundoffImg,soundstatus="on";

function preload(){
  pathImg = loadImage("bg2.gif");
  bgImg = loadImage("playbg.gif");
  fishImg1 = loadAnimation("fish1-unscreen.gif");
  fishImg2 = loadAnimation("mainfish.gif");
  bubbleImg = loadImage("help me meet my friends.png");
  bubbleImg1 = loadImage("winbubble.png");
  bubblesImg = loadImage("bubbles1.gif");
  storeImg = loadImage("store.png");
  goImg =loadImage("gobutton.png");
  welcomeanim = loadImage("ezgif.com-gif-maker (1).gif");
  playbuttonimg = loadImage("playbutton.png");
  oneImg = loadImage("grass1.gif");
  twoImg = loadImage("grass2.gif");
  shellImg = loadImage("boat.png");
  handImg = loadImage("hand.gif");
  levelsboardImg = loadImage("levelsboard.png");
  level1Img = loadImage("fish1.png");
  level2Img = loadImage("fish2.png");
  level3Img = loadImage("fish6.png");
  level4Img = loadImage("fish5.png");
  level5Img = loadImage("fish3.png");
  level6Img = loadImage("fish4.png");
  crossImg = loadImage("cross.png");
  homeImg = loadImage("home.png");
  background1Img = loadImage("movingbg.gif");
  objImg1 = loadImage("obstacle1.gif");
  objImg2 = loadImage("obstacle3.gif");
  objImg3 = loadImage("obstacle2.gif");
  objImg4 = loadImage("obstacle4.gif");
  objImg5 = loadImage("obstacle5.gif");
  objImg6 = loadImage("obstacle1.gif");
  gameoverImg = loadImage("gameover.png");
  home1Img = loadImage("endhome.png");
  replayImg = loadImage("endreplay.png");
  coinImg = loadImage("coin.png");
  assetboardImg = loadImage("assetboard.png");
  perlImg = loadImage("perl.png");
  ruby1Img = loadImage("ruby1.png");
  diamond1Img = loadImage("diamond1.png");
  diamond2Img = loadImage("ruby2.png");
  winboardImg = loadImage("completed.png");
  claimImg1 = loadAnimation("level1fish.gif");
  claimImg2 = loadAnimation("level2fish.gif");
  claimImg3 = loadAnimation("level3fish.gif");
  claimImg4 = loadAnimation("level4fish.gif");
  claimImg5 = loadAnimation("level5fish.gif");
  claimImg6 = loadAnimation("level6fish.gif");
  claimbuttonImg = loadImage("claimbutton.png");
  wowImg = loadImage("wow.png");
  sound1 = loadSound("sound1.wav");
  sound2 = loadSound("sound2.wav");
  soundonImg = loadImage("soundon.png");
  soundoffImg = loadImage("soundoff.png");

}

function setup(){
  
  createCanvas(windowWidth,windowHeight);

background1 = createSprite(width/2,height/2,width,height);
background1.addImage(background1Img);
background1.scale=9; 
background1.visible =false;  

 
welcomeimage = createSprite(width/2,height/5,200,200);
welcomeimage.addImage(welcomeanim);
welcomeimage.scale=2; 
welcomeimage.visible =false;
  
shell = createSprite(width/2,height-100,200,200);
shell.addImage(shellImg);
shell.scale=0.8; 
shell.visible =false; 

playbutton = createSprite(width/2,height-110,200,200);
playbutton.addImage(playbuttonimg);
playbutton.scale=0.5; 
playbutton.visible =false;  
  
one = createSprite(155,height-170,195,200);
one.addImage(oneImg);
one.scale=1; 
one.visible =false;  
  
two = createSprite(width-100,height-190,200,200);
two.addImage(twoImg);
two.scale=1; 
two.visible =false;  

fish = createSprite(width/2,height/2,200,200);
fish.addImage(fishImg1);
fish.scale=1; 
fish.visible =false; 

bubble = createSprite(width/2.5,height/4,200,200);
bubble.addAnimation("start",bubbleImg);
bubble.addAnimation("end",bubbleImg1);
bubble.scale=0.22; 
bubble.visible =false; 
  
bubbles = createSprite(width/3,height/2,200,200);
bubbles.addImage(bubblesImg);
bubbles.scale=0.35; 
bubbles.visible =false; 

claim1fish = createSprite(width/1.52,height/1.35,200,200);
claim1fish.addAnimation("level1fish",claimImg1);
claim1fish.scale=0.6; 
claim1fish.visible =false;

claim2fish = createSprite(width/1.52,150,200,200);
claim2fish.addAnimation("level2fish",claimImg2);
claim2fish.scale=0.6; 
claim2fish.visible =false;

claim3fish = createSprite(100,height/2+50,200,200);
claim3fish.addAnimation("level3fish",claimImg3);
claim3fish.scale=0.6; 
claim3fish.visible =false;

claim4fish = createSprite(250,height/2-100,200,200);
claim4fish.addAnimation("level4fish",claimImg4);
claim4fish.scale=0.6; 
claim4fish.visible =false;
  
claim5fish = createSprite(width-100,150,200,200);
claim5fish.addAnimation("level5fish",claimImg5);
claim5fish.scale=0.6; 
claim5fish.visible =false;

claim6fish = createSprite(width-250,height/2,200,200);
claim6fish.addAnimation("level6fish",claimImg6);
claim6fish.scale=0.6; 
claim6fish.visible =false;

go = createSprite(width-100,height-100,200,200);
go.addImage(goImg);
go.scale=0.55; 
go.visible =false; 

store = createSprite(100,height-100,200,200);
store.addImage(storeImg);
store.scale=0.6; 
store.visible =false; 

hand = createSprite(100,height-180,200,200);
hand.addImage(handImg);
hand.scale=0.5; 
hand.visible =false; 

levelsboard = createSprite(width/2,height/2,200,200);
levelsboard.addImage(levelsboardImg);
levelsboard.scale=0.5; 
levelsboard.visible =false;  
  
level1 = createSprite(width/3.05,height/3.5,200,200);
level1.addImage(level1Img);
level1.scale=0.5; 
level1.visible =false;  

level2 = createSprite(width/2,height/3.5,200,200);
level2.addImage(level2Img);
level2.scale=0.5; 
level2.visible =false;   

level3 = createSprite(width/2+241,height/3.5,200,200);
level3.addImage(level3Img);
level3.scale=0.5; 
level3.visible =false;
  
level4 = createSprite(width/3.05,height/1.55,200,200);
level4.addImage(level4Img);
level4.scale=0.5; 
level4.visible =false;  

level5 = createSprite(width/2,height/1.55,200,200);
level5.addImage(level5Img);
level5.scale=0.5; 
level5.visible =false; 
  
level6 = createSprite(width/2+240,height/1.55,200,200);
level6.addImage(level6Img);
level6.scale=0.5; 
level6.visible =false;  
  
cross = createSprite(width/1.34,60,200,200);
cross.addImage(crossImg);
cross.scale=0.55; 
cross.visible =false;  

home = createSprite(width/2,height/1.12,200,200);
home.addImage(homeImg);
home.scale=0.5; 
home.visible =false;   

gameover = createSprite(width/2,height/2,200,200);
gameover.addImage(gameoverImg);
gameover.scale=0.5; 
gameover.visible =false;   

home1 = createSprite(100,height-100,200,200);
home1.addImage(home1Img);
home1.scale=0.5; 
home1.visible =false;  

replay = createSprite(width/1.4,height/1.5,200,200);
replay.addImage(replayImg);
replay.scale=0.7; 
replay.visible =false; 
 
assetboard = createSprite(150,170,200,200);
assetboard.addImage(assetboardImg);
assetboard.scale=0.2; 
assetboard.visible =false; 

winboard = createSprite(width/2,height/2,200,200);
winboard.addImage(winboardImg);
winboard.scale=0.3; 
winboard.visible =false;   

claim = createSprite(width/1.35,height/1.6,200,200);
claim.addAnimation("fish1",claimImg1);
claim.addAnimation("fish2",claimImg2);
claim.addAnimation("fish3",claimImg3);
claim.addAnimation("fish4",claimImg4);
claim.addAnimation("fish5",claimImg5);
claim.addAnimation("fish6",claimImg6);
claim.scale=0.2; 
claim.visible =false;   

claim1 = createSprite(width/3.1,height/2.6,200,200);
claim1.addImage(claimbuttonImg);
claim1.scale=0.14; 
claim1.visible =false;   
    
claim2 = createSprite(width/2,height/2.6,200,200);
claim2.addImage(claimbuttonImg);
claim2.scale=0.14; 
claim2.visible =false; 

claim3 = createSprite(width/1.49,height/2.6,200,200);
claim3.addImage(claimbuttonImg);
claim3.scale=0.14; 
claim3.visible =false; 

claim4 = createSprite(width/3.1,height/1.35,200,200);
claim4.addImage(claimbuttonImg);
claim4.scale=0.14; 
claim4.visible =false;   
    
claim5 = createSprite(width/2,height/1.35,200,200);
claim5.addImage(claimbuttonImg);
claim5.scale=0.14; 
claim5.visible =false; 

claim6 = createSprite(width/1.49,height/1.35,200,200);
claim6.addImage(claimbuttonImg);
claim6.scale=0.14; 
claim6.visible =false;

wow = createSprite(280,height/2,200,200);
wow.addImage(wowImg);
wow.scale=0.24; 
wow.visible =false;

soundon = createSprite(width-100,50,200,200);
soundon.addImage(soundonImg);
soundon.scale=1.5; 

soundoff = createSprite(width-100,150,200,200);
soundoff.addImage(soundoffImg);
soundoff.scale=1.5; 
soundoff.visible = false;

obstacleGroup = new Group(); 
coinGroup = new Group();
ruby1Group = new Group();  
diamond1Group = new Group();  
diamond2Group = new Group();  
perlGroup = new Group();



}

function draw() {
  fish.debug=true;
  if(mousePressedOver(soundon))
  {
    soundstatus = "off";
    soundoff.visible = true;
    soundon.visible = false;
    sound1.stop();
    sound2.stop();
  }
 
  if(mousePressedOver(soundoff))
  {
    soundstatus = "on";
    soundoff.visible = false;
    soundon.visible = true;
  
  }

 
  if(gameState === SERVE)
    {
  background(pathImg);
  welcomeimage.visible =true;
  playbutton.visible =true;
  one.visible =true;
  two.visible =true;
  shell.visible =true; 
  if(soundstatus==="on")
  {
    sound1.play();

  }
 
     

      if(mousePressedOver(playbutton)&&gameState === SERVE)
        {
          gameState = PLAY;
          sound1.stop();
          if(soundstatus==="on")
          {
            sound2.play();

          }

        }
    }
   
 else if(gameState===PLAY){
  background(bgImg);
  hidelevel1();
  sound2.stop();
  if(soundstatus==="on")
  {
    sound1.play();

  }
    fish.visible =true; 
bubble.visible =true; 
bubbles.visible =true; 
store.visible = true;
hand.visible =true; 
fish.x = width/2;
fish.y = height/2;
fish.addImage(fishImg1);


if(l1==="unlocked")
{
  claim1fish.visible =true;
}
if(l2==="unlocked")
{
  claim2fish.visible =true;
}
if(l3==="unlocked")
{
  claim3fish.visible =true;
}
if(l4==="unlocked")
{
  claim4fish.visible =true;
}
if(l5==="unlocked")
{
  claim5fish.visible =true;
}
if(l6==="unlocked")
{
  claim6fish.visible =true;
}

if(l1==="locked"||l2==="locked"||l3==="locked"||l4==="locked"||l5==="locked"||l6==="locked")
{
  bubble.changeAnimation("start",bubbleImg);

}
else if(l1==="unlocked"&&l2==="unlocked"&&l3==="unlocked"&&l4==="unlocked"&&l5==="unlocked"&&l6==="unlocked")
{
  bubble.changeAnimation("end",bubbleImg1);

}

    if(mousePressedOver(store))
        {
              store.visible = false;
          hand.visible =false; 
          go.visible =false; 
          l51 = "closed";

levelsboard.visible =true;   
level1.visible =true;  
level2.visible =true;  
level3.visible =true;  
level4.visible =true;  
level5.visible =true;  
level6.visible =true;  
cross.visible =true;  
home.visible =true;
if(l1==="unlocked")
{
  claim1.visible = true;
  claim1fish.visible =true;
  coins = false;

}
if(l2==="unlocked")
{
  claim2.visible = true;
  claim2fish.visible =true;
  rubys = false;

}
if(l3==="unlocked")
{
  claim3.visible = true;
  claim3fish.visible =true;
  perls = false;

}   
if(l4==="unlocked")
{
  claim4.visible = true;
  claim4fish.visible =true;
  diamonds2 = false;

}
if(l5==="unlocked")
{
  claim5.visible = true;
  claim5fish.visible =true;
  coins1 = false;

}  
if(l6==="unlocked")
{
  claim6.visible = true;
  claim6fish.visible =true;
  diamonds1 = false;

} 
        } 
    if(mousePressedOver(home)&& gameState === PLAY)
         {
           gameState = SERVE;
          hidelevelsboard();
          store.visible = false;
          hand.visible =false; 
          go.visible =false; 
          fish.visible = false;
          bubble.visible =false; 
          bubbles.visible =false;
          claim1fish.visible =false;
          claim2fish.visible =false;
          l1 = "locked";
          l2 = "locked";
          l3 = "locked";
          l4 = "locked"; 
          l5 = "locked";
          l6 = "locked";
          claim1fish.visible =false;
          claim2fish.visible =false;
          claim3fish.visible =false;
          claim4fish.visible =false;
          claim5fish.visible =false;
          claim6fish.visible =false;

                  }
          if(mousePressedOver(cross))
            {
              hidelevelsboard();

            }
    
   if(mousePressedOver(level1)&&l1==="locked"&&(l51==="closed"))
            {
          hidelevelsboard();
              go.visible =true; 
              coins = true;

            }
   else if(mousePressedOver(level2)&&l2==="locked"&&(l51==="closed"))
            {
          hidelevelsboard();
              go.visible =true; 
              rubys = true;

            }
    else if(mousePressedOver(level3)&&l3==="locked"&&(l51==="closed"))
            {
          hidelevelsboard();
              go.visible =true; 
              perls = true;

            }
   else if(mousePressedOver(level4)&&l4==="locked"&&(l51==="closed"))
            {
          hidelevelsboard();
              go.visible =true; 
              diamonds2 = true;

            }
     else if((mousePressedOver(level5))&&(l5==="locked")&&(l51==="closed"))
            {
          hidelevelsboard();
              go.visible =true; 
              coins1 = true;

            }
   else if(mousePressedOver(level6)&&l6==="locked"&&(l51==="closed"))
            {
          hidelevelsboard();
              go.visible =true; 
              diamonds1 = true;

            }
     if(mousePressedOver(go))
            {
              gameState = LEVEL1;
          hidelevelsboard();
              store.visible = false;
              hand.visible = false;
              go.visible = false;
              bubble.visible =false; 
              bubbles.visible =false; 
             claim1fish.visible =false;
             claim2fish.visible =false;
             claim3fish.visible =false;
             claim4fish.visible =false;
             claim5fish.visible =false;
             claim6fish.visible =false;
             d1count=0;
             d2count=0;
             rcount=0;
             pcount=0;
             ccount=0;
             ccount1=0;
            }

        }
    if(gameState===LEVEL1){
      //  background(bgImg1);
      background1.visible =true;  
       home1.visible =true; 
       l51 = "open"
       sound1.stop();
       if(soundstatus==="on")
       {
         sound2.play();
     
       }      fish.visible = true;
      fish.addImage(fishImg2);
      fish.scale=0.5;
      fish.x=15;
      fish.y = World.mouseY;
      background1.velocityX = -5;
      assetboard.visible =true; 
      if(background1.x <0)
        {
          background1.x = background1.width/2;
        }
    createObstacles();
     createassets();


     if(mousePressedOver(home1))
     {
       gameState = SERVE;
       background1.visible =false;  
       home1.visible =false; 
       assetboard.visible =false; 
      fish.visible = false;
      background1.velocityX = 0;
      fish.velocityX = 0;

     }
      
      if(fish.isTouching(coinGroup))
        {
          ccount=ccount+800;
          coinGroup.destroyEach();
        }
      
       if(fish.isTouching(perlGroup))
        {
         pcount=pcount+200;
          perlGroup.destroyEach();
        } 
      
      if(fish.isTouching(ruby1Group))
        {
          rcount=rcount+50;
          ruby1Group.destroyEach();
        }
      
       if(fish.isTouching(diamond1Group))
        {
          d1count=d1count+100;
          diamond1Group.destroyEach();
        }
      
       if(fish.isTouching(diamond2Group))
        {
         d2count=d2count+40;
          diamond2Group.destroyEach();
        }
      
      if(fish.isTouching(obstacleGroup))
        {
         gameState = END;
        }
      
      if((coins === true && ccount >= 800)||(perls === true && pcount >= 200)||(rubys === true && rcount >= 50)||(diamonds1 === true && d1count >= 100)||(diamonds2 === true && d2count >= 40)||(coins1 === true && ccount >= 100))
        {
          gameState = WIN;
        }

    }
  
  else if(gameState === END)
    {
      background(background1Img);
      obstacleGroup.destroyEach();
      coinGroup.destroyEach();
      perlGroup.destroyEach();
      ruby1Group.destroyEach();
      diamond1Group.destroyEach();
      diamond2Group.destroyEach();
      sound2.stop();
      if(soundstatus==="on")
      {
        sound1.play();
    
      }      background1.velocityX = 0;
      fish.velocityX = 0;
      gameover.visible =true; 
      replay.visible =true; 
      home1.x = width/3.5;
      home1.y = height/1.5;
      home1.scale = 0.7;

      if(mousePressedOver(replay))
      {
        gameState = LEVEL1;
        background1.visible =true;  
        home1.visible =true; 
        assetboard.visible =true; 
       fish.visible = false;
       background1.velocityX = 0;
       fish.velocityX = 0;
       gameover.visible =false; 
       replay.visible =false; 
       home1.x = 100;
      home1.y = height-100;
      home1.scale = 0.5;
      }

      if(mousePressedOver(home1))
      {
        gameState = SERVE;
        background1.visible =false;  
        home1.visible =false; 
        assetboard.visible =false; 
       fish.visible = false;
       background1.velocityX = 0;
       fish.velocityX = 0;
       gameover.visible =false; 
       replay.visible =false; 
       home1.x = 100;
      home1.y = height-100;
      home1.scale = 0.5;
      }


    }
  
  else if(gameState === WIN)
    {
      background(background1Img);
      obstacleGroup.destroyEach();
      coinGroup.destroyEach();
      perlGroup.destroyEach();
      ruby1Group.destroyEach();
      diamond1Group.destroyEach();
      diamond2Group.destroyEach();
      background1.velocityX = 0;
      fish.velocityX = 0;
      winboard.visible =true;   
      assetboard.visible =false; 
      claim.visible =true;   
      wow.visible =true;
      sound1.stop();
      if(soundstatus==="on")
      {
        sound2.play();
    
      }      if(ccount>=800&&coins === true)
      {
        claim.changeAnimation("fish1",claimImg1);
        if(mousePressedOver(claim))
        {
          gameState = PLAY;
          background(bgImg);
          background1.visible = false;
          winboard.visible = false;
          wow.visible = false;
          claim.visible = false;
          home1.visible = false;
          l1 = "unlocked";
          ccount = ccount - 800;
          coins = false;

        }

      }

      else if(rcount>=50&&rubys=== true)
      {
        claim.changeAnimation("fish2",claimImg2);
        if(mousePressedOver(claim))
        {
          gameState = PLAY;
          background(bgImg);
          background1.visible = false;
          winboard.visible = false;
          wow.visible = false;
          claim.visible = false;
          home1.visible = false;
          l2 = "unlocked";
          rubys = false;
          rcount = rcount - 50;

        }

      }

      else if(pcount>=200&&perls=== true)
      {
        claim.changeAnimation("fish3",claimImg3);
        if(mousePressedOver(claim))
        {
          gameState = PLAY;
          background(bgImg);
          background1.visible = false;
          winboard.visible = false;
          wow.visible = false;
          claim.visible = false;
          home1.visible = false;
          l3 = "unlocked";
          perls = false;
          pcount = pcount - 200;
        }

      }

      else if(d2count>=40&&diamonds2=== true)
      {
        claim.changeAnimation("fish4",claimImg4);
        if(mousePressedOver(claim))
        {
          gameState = PLAY;
          background(bgImg);
          background1.visible = false;
          winboard.visible = false;
          wow.visible = false;
          claim.visible = false;
          home1.visible = false;
          l4 = "unlocked";
          diamonds2 = false;
          d2count = d2count - 40;

        }

      }

      else if(ccount>=100&&ccount<=800&&coins1=== true)
      {
        claim.changeAnimation("fish5",claimImg5);
        if(mousePressedOver(claim))
        {
          gameState = PLAY;
          background(bgImg);
          background1.visible = false;
          winboard.visible = false;
          wow.visible = false;
          claim.visible = false;
          home1.visible = false;
          l5 = "unlocked";
          coins1 = false;
          ccount = ccount - 100;

        }

      }

      else if(d1count>=100&&diamonds1=== true)
      {
        claim.changeAnimation("fish6",claimImg6);
        if(mousePressedOver(claim))
        {
          gameState = PLAY;
          background(bgImg);
          background1.visible = false;
          winboard.visible = false;
          wow.visible = false;
          claim.visible = false;
          home1.visible = false;
          l6 = "unlocked";
          diamonds1= false;
          d1count = d1count- 100;


        }

      }

      
    }

  
  edges= createEdgeSprites();
  

   
  
    drawSprites();
    text(soundstatus,200,200)

   
  if(gameState === LEVEL1||gameState === END)
     {
       textSize(28);
       fill("yellow");
       textStyle(BOLDITALIC);
        textFont('Helvetica');
        text(d1count,100,120);
        text(d2count,135,165);
        text(pcount,120,210);
        text(rcount,150,250);
        text(ccount,120,295);

     }
if(gameState === WIN)
     {
       textSize(40);
       fill("yellow");
       textStyle(BOLDITALIC);
        textFont('Helvetica');
        text(d1count,width/2,height/2-75);
        text(d2count,width/2,height/2-10);
        text(pcount,width/2,height/2+52);
        text(rcount,width/2,height/2+120);
        text(ccount,width/2,height/2+187);

     }
     

}
function hidelevel1()
{
  welcomeimage.visible =false;
  playbutton.visible =false;
 // boat.visible =true;  
  one.visible =false;
  two.visible =false;
  shell.visible =false; 
}

function hidelevelsboard()
{
levelsboard.visible =false;   
level1.visible =false;  
level2.visible =false;  
level3.visible =false;  
level4.visible =false;  
level5.visible =false;  
level6.visible =false;  
cross.visible =false;  
home.visible =false; 
claim1.visible = false;
claim2.visible = false;
claim3.visible = false;
claim4.visible = false;
claim5.visible = false;
claim6.visible = false;
}

function createassets()
{
   if(frameCount%170===0)
        {
coin=createSprite(width/1.4,random(height/1.2,height/1.5),200,200);
coin.addImage(coinImg);
coin.scale=0.1; 
coin.velocityX = -6;
coin.lifetime = 50;         
coinGroup.add(coin);
        }
  if(frameCount%180===0)
        {
perl=createSprite(width/1.4,random(height/1.2,height/1.5),200,200);
perl.addImage(perlImg);
perl.scale=0.1; 
perl.velocityX = -6;
perl.lifetime = 50;         
perlGroup.add(perl);
        }
     if(frameCount%220===0)
        {     
ruby1=createSprite(width/1.4,random(height/3.2,height/3.5),200,200);
ruby1.addImage(ruby1Img);
ruby1.scale=0.1; 
ruby1.velocityX = -6;
ruby1.lifetime = 50;         
ruby1Group.add(ruby1);}
     if(frameCount%150===0)
        {       
diamond1=createSprite(width/1.4,random(height/2,height/2.5),200,200);
diamond1.addImage(diamond1Img);
diamond1.scale=0.1; 
diamond1.velocityX = -6;
diamond1.lifetime = 50;         
diamond1Group.add(diamond1);
        }
           if(frameCount%250===0)
        { 
diamond2=createSprite(width/1.4,random(50,100),200,200);
diamond2.addImage(diamond2Img);
diamond2.scale=0.1; 
diamond2.velocityX = -6;
diamond2.lifetime = 50;         
diamond2Group.add(diamond2);          
        }
}

function createObstacles()
{
if (World.frameCount % 70 == 0) 
  {
  obstacle = createSprite(width,Math.round(random(80,height-80)),10,10);
  var obscount = Math.round(random(1,6));
    console.log(obscount);
    switch(obscount) 
    {
      case 1: obstacle.addImage(objImg1);
      var rand5 = Math.round(random(1,3));
        switch(rand5)
          {
            case 1:obstacle.scale=0.5;
              break;
            case 2:obstacle.scale=0.3;
              break;
            case 3:obstacle.scale=0.4;
              break;
      default: break;
          }
              break;
     case 2: obstacle.addImage(objImg2);
 var rand5 = Math.round(random(1,3));

        switch(rand5)
          {
             case 1:obstacle.scale=0.5;
              break;
            case 2:obstacle.scale=0.3;
              break;
            case 3:obstacle.scale=0.4;
              break;
      default: break;

          }
              break;
       case 3: obstacle.addImage(objImg3);
 var rand5 = Math.round(random(1,3));

        switch(rand5)
          {
             case 1:obstacle.scale=0.5;
              break;
            case 2:obstacle.scale=0.3;
              break;
            case 3:obstacle.scale=0.4;
              break;
      default: break;

          }
              break;
      case 4: obstacle.addImage(objImg4);
 var rand5 = Math.round(random(1,3));

        switch(rand5)
          {
             case 1:obstacle.scale=0.5;
              break;
            case 2:obstacle.scale=0.6;
              break;
            case 3:obstacle.scale=0.7;
              break;
      default: break;

          }
              break;
      case 5: obstacle.addImage(objImg5);
        var rand5 = Math.round(random(1,3));

        switch(rand5)
          {
             case 1:obstacle.scale=0.5;
              break;
            case 2:obstacle.scale=0.3;
              break;
            case 3:obstacle.scale=0.4;
              break;
      default: break;

          }

              break;
      case 6: obstacle.addImage(objImg6);
        var rand5 = Math.round(random(1,3));

        switch(rand5)
          {
            case 1:obstacle.scale=0.5;
              break;
            case 2:obstacle.scale=0.3;
              break;
            case 3:obstacle.scale=0.4;
              break;
            default: break;

          }
              break;
    default: break;
    }

  obstacle.velocityX = -4;
  obstacle.lifetime = width;
  //obstacle.depth = 1;
  obstacleGroup.add(obstacle);
  }
}
