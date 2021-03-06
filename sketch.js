// LINK DO VÍDEO: https://youtu.be/97ir0ar8NPQ
var x = 80;
var y = 100;

var opcao = 1;
var tela = 0;

// VARIÁVEIS DE CONTROLE DO PERSONAGEM
var imgx = 270;
var imgy = 334;
var ladox;
var ladoy;
var direcao = 0;

// VARÁVEIS MOVIMENTO INIMIGO
var j = 100;
var k = 50;
var movx = 270;
var movy = 334;
var contador = 0;
var contador2 = -10;
var carro = [];
contador3 = 10;
carro2 = [];
xCarro1 = 0;
xCarro2 = 0;
var tempo = 0;

// VARIÁVEIS VIDAS, TIME E PONTUAÇÃO
var level = 1;
var vida = 3;
var aux_vida;

// VARIÁVEIS PARA DETECTAR A COLISÃO
var coragem = [];
var posicaox_coragem = 0;
var cont_colisao = 0; // a ideia Ã© contar quantas vezes houve a colisÃ£o e armazenar nessa variÃ¡vel para decrementar a vida
// ESTIPULAR UM TEMPO LIMITE PARA ATRAVESSAR!
var xObstaculo1;
var xObstaculo2;
var yObstaculo1 = 420;
var yObstaculo2 = 445;
var rObstaculo1;
var rObstaculo2;
var rPersonagem = 40;

function preload() {
  inicio = loadImage('img menu.jpeg');
  ground = loadImage('background creditos.jpeg');
  programadora = loadImage('programadora.jpg');
  orientadora = loadImage('orientadora.jpg');
  ground_2 = loadImage('img level.jpg');
  ceu = loadImage('ceu.jpg');
  pista = loadImage('pista.png');
  carro[0] = loadImage('PixelCar.png');
  coragem = loadImage('Coragem.jpg');
  carro[1] = loadImage('PixelCar(1).png');
  carro[2] = loadImage('PixelCar(2).png');
  carro[3] = loadImage('PixelCar(3).png');
  carro[4] = loadImage('PixelCar(4).png');
  carro[5] = loadImage('PixelCar(5).png');
  carro2[0] = loadImage('1.png');
  carro2[1] = loadImage('1.png');
  carro2[2] = loadImage('1.png');
  carro2[3] = loadImage('1.png');
  carro2[4] = loadImage('1.png');
  carro2[5] = loadImage('1.png');
  
}

function setup() {
  createCanvas(600, 900);
}

// FUNÇÃO QUE TEM POR OBJETIVO EXECUTAR AS DEMAIS FUNÇÕES
function draw() {
  background(400);
   
  if (tela == 0) {
    menu();
  }
  if (tela == 1) {
    nivel1();
  }
  if (tela == 2) {
    instrucoes();
  }
  if (tela == 3) {
    creditos();
  }

}

function menu() {
  image(inicio, 18, 10);
  stroke(100);
  rect(x, y, 170, 45, 15);

  fill(54, 54, 54);
  textSize(40);
  text(" TRAVESSIA", 100, 50);
  fill(255, 0, 0); // cor preta na palavra jogar
  textSize(32);
  text("Jogar", 90, 130);
  fill(255, 255, 0); // cor vermelha na palavra intruÃ§oes
  text("Instruções", 90, 230);
  fill(34, 139, 34); //cor azul na palavra creditos
  text("Créditos", 90, 330);
  fill(255, 255, 255); // mudando a cor de fundo do retangulo de escolha
 
}

function nivel1() {
  background(1000);
  image(ground_2, 10, 200);
  image(ceu,10,31);
  image(pista,11,500);
  noStroke();
  image(coragem,imgx,imgy);
  
  // RETÂNGULO AONDE VAI OCORRER A COLISÃO ( NO PERSONAGEM)
  noFill();
  var posicao_personagem = (imgx,imgy, imgx+22, imgy+44);
  //stroke(0);
  rect(imgx, imgy+44, 2*rPersonagem, 5);

  
  noStroke();
  
  // MOVIMENTO DO INIMIGO 
   xCarro1 = xCarro1 + 3;
   xCarro2 = xCarro2 + 5;
    contador = contador + 3;
    image(carro[contador%5], xCarro1, 400);
    var movx_car1 = carro[contador%5];
  
  // RETÂNGULO AONDE VAI OCORRER A COLISÃO (NO CARRO VERMELHO)
    noFill();
    stroke(0);
    var posicao_car1 = (movx_car1,xCarro1);
    //rObstaculo1 = (xCarro1) //- 160;
    //rect(xCarro1, 450, 450,15);
    
    
  
    // RETÂNGULO AONDE VAI HAVER A COLISÃO (NO CARRO AMARELO)
    fill(0,0,0);
    stroke(0);
    var posicao_car2 = (movx_car2,xCarro2);
    //rObstaculo2 = (xCarro2) //- 135;
    //rect(xCarro2+30, 445, 135, 20);
  
  
    // MOVIMENTO DOS CARRO 2
    contador2 = contador2 + 1;
    image(carro2[contador%5], xCarro2,446);
    var movx_car2 = carro2[contador%5];
    if(xCarro1 > 640 && xCarro2 > 640) {
        xCarro1 = -70;
        xCarro2 = -100;
    }
    
      //VIDAS
      textSize(20);
      fill(0,0,0);
      text("Nível: "+level,600,30);
      text('Vidas: '+vida,500,30)
      fill(255,255,255);
  
    // DETECTANDO A COLISÃO
      if(vida > 0 && vida <= 3) {
        if(imgx > xCarro1 && imgx<(xCarro1 + 20) && (imgy + 150) > 450 && imgy< (xCarro1 + 20) || (imgx + 150) > xCarro2 && imgx<(xCarro2 + 30) &&(imgy + 44) > 445 && imgy< (xCarro2 + 30)){
          imgx = 255;
          imgy = 360;
          noFill();
          //rect(imgx, imgy+44, 10, 5);
          image(coragem,253,358);
          vida = vida - 1;
          
          
      }
    
  }

  // LEVEL 2
  if ((vida == 1 || vida == 2 || vida == 3) && imgy >= 400 ) {
            
      textSize(20);
      fill(0,0,0);
      text('LEVEL 2 ',150,100)
      xCarro1 = xCarro1 + 3;
      contador = contador + 3;
      image(carro[contador%5], xCarro1, 500);
      if(imgx > xCarro1 && imgx<(xCarro1 + 20) && (imgy + 150) > 450 && imgy< (xCarro1 + 20)){
              imgx = 550;
              imgy = 360;
              vida --;
                
        }
    if (imgy >= 596 && vida != 0){
        background(0,255,0);
        textSize(50);
        fill(255);
        text('VENCEU!', 160, 400);
    }
  }
     

  if ( vida == 0) {
            background(0,255,0);
            textSize(50);
            fill(255);
            text('Game Over', 160, 400);
          }

    
  // MOVIMENTO DO PERSONAGEM COM O TECLADO
  
  if (keyIsDown(UP_ARROW)) {
      imgy = imgy - 5;
      direcao = 1; 
  }
  
  if (keyIsDown(DOWN_ARROW)) {
    imgy = imgy + 5;
    direcao = 2;
  }
  
    if (keyIsDown(LEFT_ARROW)) {
      imgx = imgx - 10;
      direcao = 3;
  }
      if (keyIsDown(RIGHT_ARROW) && imgx < 600) {
    imgx = imgx + 10;
        direcao = 4;
  }
    if (imgy > 596){
      imgy= 596;
    }
    if (imgy < 350){
      imgy = 350;
    }
    if (imgx > 540){
      imgx = 540;
    }
    if (imgx <= 150){
      imgx = 150;
    }
    
  
  
  
  textSize(14);
  fill(0,0,0);
  text('<< Pressione Esc para voltar ', 30, 495);
}  



function instrucoes() {
  background(255);
  image(inicio, 18, 10);
  fill(75, 0, 130);
  textSize(28);
  let s = 'Ano : 7° ano - Ensino Fundamental. Matéria: Geografia. Habilidade desenvolvida: (EF07GE07) Analisar a influência e o papel das redes de transporte e comunicação na configuração do território brasileiro. O jogo travessia simula atravessar um ambiente com veículos em movimento. Por isso o seu principal objetivo é desenvolver a atenção dos alunos nesse aspecto. '
  text(s, 20, 20, 550, 550);
  fill(28, 28, 28);
  text('<< Pressione Esc para voltar ', 30, 450);
}


function creditos() {
  background(200);
  image(ground, 16, 20);
  image(programadora, 20, 60);
  fill(255, 0, 0);
  textSize(20);
  let r = 'Anny Beatriz Pacheco Ribeiro, graduanda em\n Ciências e Tecnologia - UFRN'
  text(r, 120, 90, 507, 300);
  text('\nProgramadora', 147, 150);
  image(orientadora, 30, 190);
  let t = 'Maria Lúcia Pacheco, graduada em Pedagogia\n - UFRN'
  text(t, 150, 245);
  text("Educadora", 160, 310);
  fill(0, 0, 0);
  text('<< Pressione Esc para voltar ', 30, 450);
}


// INTERAÇÕES COM O TECLADO (SELEÇÃO DE OPÇÕES)

function keyPressed() {
  if (key == "ArrowUp" && y > 130) {
    y = y - 100;
    opcao = opcao - 1;
  }
  if (key == "ArrowDown" && y < 300) {
    y = y + 100;
    opcao = opcao + 1;
  }
  if (key == "Enter") {
    tela = opcao;
  }
  if (key == "Escape") {
    tela = 0;
  }

}