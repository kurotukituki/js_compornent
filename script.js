/*///////
  ハンバーガーメニュ
/////////*/
function hamburger() {
  document.getElementById('line1').classList.toggle('linea');
  document.getElementById('line2').classList.toggle('lineb');
  document.getElementById('line3').classList.toggle('linec');
  document.getElementById('nav_f').classList.toggle('fadein');
}

document.getElementById('target').addEventListener('click', function () {
  hamburger();
});

let list = document.getElementsByClassName('list');
let jump = document.getElementsByClassName('jump');
for (let i = 0; i < list.length; i++) {
  list[i].addEventListener('click', function (e) {
    hamburger();
    let top_idou = jump[i].offsetTop;
    //スクロールする
    window.scrollTo({
      top: top_idou,
      behavior: "smooth"
    });
  });
}

/*///////
  モーダルウィンドウ
/////////*/
var popup = document.getElementById('js-popup');
var blackBg = document.getElementById('js-black-bg');
var closeBtn = document.getElementById('js-close-btn');
var showBtn = document.getElementById('js-show-popup');

closePopUp(blackBg);
closePopUp(closeBtn);
closePopUp(showBtn);

function closePopUp(elem) {
  if (!elem) return;
  elem.addEventListener('click', function () {
    popup.classList.toggle('is-show');
    blackBg.classList.toggle('is-show');
  });
}
/*///////
  アコーディオンパネル
/////////*/
let fish = document.getElementById('fish');
let animel = document.getElementById('animal');
let list_box = document.getElementsByClassName('list_box');
fish.addEventListener('click', () => {
  list_box[0].classList.toggle('list-open');
});

animel.addEventListener('click', () => {
  list_box[1].classList.toggle('list-open');
});

/*///////
  電卓
/////////*/
let input = document.getElementsByClassName('input');
let result = document.getElementById('result');
let output_ok = false;
for (let i = 0; i < input.length; i++) {
  input[i].addEventListener('click', (e) => {
    let in_ward = e.target.value;//入力された文字を取得
    let last_ward = result.value.slice(-1);//最後の文字を取得
    //入力が0かどうか？
    if (in_ward != 0 && in_ward != '*' && in_ward != '/') {
      //数字はいくらでも入力可能だよ
      if (in_ward != '+' && in_ward != '-' && in_ward != '*' && in_ward != '/') {
        result.value += e.target.value;
      }
      //++みたいに演算子が重複しないように制御するよ
      else if (last_ward != '+' && last_ward != '-' && last_ward != '*' && last_ward != '/') {
        result.value += e.target.value;
      }
    }
    //何もない状態で「0」「*」「/」は入力できないよ
    else{
      if(result.value != "" && last_ward != '+' && last_ward != '-' && last_ward != '*' && last_ward != '/'){
        result.value += e.target.value;
      }
    }
  });
}

//出力
let output = document.getElementById('output');
output.addEventListener('click', () => {
  //最後の文字が数字なら出力する
  result.value = new Function("return " + result.value)();
});

//クリア
let clear = document.getElementById('clear');
clear.addEventListener('click', () => {
  result.value = '';
});

/*///////
  ゆっくりふわっと
/////////*/
let fade = document.getElementsByClassName('fade_in');
window.addEventListener('scroll', () => {
  for (let i = 0; i < fade.length; i++) {
    var rect = fade[i].getBoundingClientRect().top;//要素のTopまでの距離
    var scroll = window.pageYOffset;//スクロール量
    var offset = rect + scroll;//要素のTop位置
    const windowHeight = window.innerHeight;//ディスプレイの高さ
    if (scroll > offset - windowHeight + 150) {//150を操作で出現場所変更
      fade[i].classList.add('scroll_in');
    }
  }
});

/*///////
  Topへ戻る
/////////*/
let top_btn = document.getElementById('top_button');
top_btn.addEventListener('click', () => {
  // const me = arguments.callee;
  let nowY = window.pageYOffset;
  console.log(nowY);
  window.scroll({
    top: 0,
    behavior: 'smooth'
  });
});

class Chara{
  constructor(name,type){
    this.name = name;
    this.type = type;
  }
  Intro(){
    console.log(`私の名は${this.name}`);
    settimeout(() => console.log("ok"), 1000)
  }
}

class MyChara extends Chara{
  constructor(name, type ,power){
    super(name,type);
    this.power = power;
  }
}
