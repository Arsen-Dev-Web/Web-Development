// Function — դա ֆունկցիա ստեղծող բան է։
// Function — JavaScript-ի ներդրված օբյեկտ է, որը ստեղծում է նոր ֆունկցիա։

// Declaration function - դա ֆունկցիա հայտարարելու (ստեղծելու) ձև է,
// որը սկսվում է բանալի բառով function և ունի անուն։

// function hi() {
//    document.write('barev');
// }
// hi()

// function → բանալի բառն է,

// Hi → ֆունկցիայի անունն է,

// { ... } → ֆունկցիայի մարմինն է (ինչ պետք է անի)։

// Declaration — կարող ես կանչել նախքան գրված լինելը։
// Expression — միայն հետո, երբ այն արդեն ստեղծվել է։

// Expersion function - ays tarberaki depqum function-y veragrum enq voreve popoxakani,
// ev ays functiony chenq karox kanchel heto stexcel;

// const sayHi = function() {
//   console.log("Բարև!");
// };

// sayHi();

// --------------------------------------------
// Function Declaration-i orinak 1

// function number(a,b,c) {
//    alert(a + b + c)
// }
// number(2,3,4)

// function number(a, b, c)
// — սա Function Declaration է, այսինքն՝
// ֆունկցիայի հայտարարում (ստեղծում) անունով number։
// Այն ընդունում է երեք արժեք՝ a, b, c։

// alert(a + b + c)
// — այս տողը ցույց է տալիս երեք թվերի գումարը՝
// պատուհանով (alert-ով)։

// number(2, 3, 4)
// — սա ֆունկցիայի կանչն է։

// orinak 2

// function num(a,b,c) {
//    return a + b - c
// }
// document.write(num(5,6,7));

// return - veradardznum e gorcoxutyuny, tpman voch mi gorcoxutyun chi katarum,
// renic heto grvac cankacac gorcoxutyun chi ashxatum;

// Xndirner

// Xndir 1 - Stexcum eq function() nersum tpum div,
// anum aynpes vor ayn ir width-y, height-y ev background-y stana function-y kanchelis;

// Xndir 2 - Stexcum eq function() nersum tpum div,
// anum aynpes vor ayn ir width-y, height-y stana function-y kanchelis,
// inchpes nayev backgroundy amen angam ejy tarmacnelis stana patahakanutyan skzbunqov;

// Xndir 1

// function createDiv() {
//   let div = document.createElement("div");

//   div.style.width = "200px";
//   div.style.height = "200px";
//   div.style.background = "skyblue";
//   div.style.margin = "10px";

//   document.body.appendChild(div);
// }

// createDiv();

// Xndir 2

// let color = ["red", "green", "blue", "lime", "magenta"];
// let l = Math.round(Math.random() * 4);
// let e = color[l];
// function div(a, b, c) {
//   document.write(
//     `<div style="width: ${a}px; height: ${b}px; background: ${c}"></div>`,
//   );
// }

// div(Math.round(Math.random() * 500), Math.round(Math.random() * 500), `${e}`);

//   xndir 3

// let text = prompt("Գրիր տեքստ՝ ռուսերեն, հայերեն կամ անգլերեն");

// let p = document.createElement("p");
// p.textContent = text;
// p.style.fontSize = "30px";

// if (/[а-я]/i.test(text)) {
//   p.style.color = "green";
//   p.style.fontSize = "80px";
//   p.style.textTransform = "uppercase";
//   p.style.fontStyle = "italic";
// } else if (/[ա-ֆ]/i.test(text)) {
//   p.style.color = "red";
//   p.style.fontSize = "100px";
//   p.style.textTransform = "uppercase";
//   p.style.fontStyle = "italic";
// } else if (/[a-z]/i.test(text)) {
//   p.style.color = "blue";
//   p.style.fontSize = "40px";
// }

// document.body.appendChild(p);

// 2-rd xndir

// function create() {
//   let div = document.createElement("div");

//   let r = Math.floor(Math.random() * 255);
//   let g = Math.floor(Math.random() * 255);
//   let b = Math.floor(Math.random() * 255);

//   div.style.width = "100px";
//   div.style.height = "100px";
//   div.style.border = "1px solid";
//   div.style.margin = "5px";
//   div.style.backgroundColor = "rgb(" + r + " " + g + " " + b + ")";
//   document.body.appendChild(div);
// }
// create();

// function creatediv() {
//   let div = document.createElement("div");

//   let r = Math.floor(Math.random() * 255);
//   let g = Math.floor(Math.random() * 255);
//   let b = Math.floor(Math.random() * 255);

//   let size = Math.floor(Math.random() * 100) + 50;
//   let radius = Math.floor(Math.random() * 50);

//   div.style.width = size + "px";
//   div.style.height = size + "px";
//   div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
//   div.style.borderRadius = radius + "%";
//   div.style.display = "inline-block";
//   div.style.margin = "8px";

//   document.body.appendChild(div);
// }

// creatediv();
