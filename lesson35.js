// // JS-բաժինները՝

// //   1. JS Core-լոգիկան է,որով կառուցվում է ֆունկցիանները,
// // ցիկլերը,զանգվածները,օպերատորները և այն...
// //   2.DOM(Document object models)- HTML –ի հետ աշխատելու մեխանիզմը...
// //   3.OOP(Object Oriented Programming)-Օբյեկտների և
// //  տվյալների բազանների ստեղծում,

// /* ՏՎՅԱԼՆԵՐԻ ՏԻՊԵՐԸ */


// // 1. string -տեքստային արժեք +"2" + 2
// // 2. number -թվեր
// // 3. boolean -true or false
// // 4. Null -դատարկություն
// // 5. Undefined -չգտնված,չհաստատված
// // 6. Function -ֆունցիա
// // 7. Object -օբեկտներ
// // 8. Array -զանգված 

// // Արտածում,արտածման ֆունկցիաները

// //  document.write()-տպում է,այն արժեքը,որը մեզ պետք է,առանց բացատի
// // document.writeln(a+ " " + b)- տպում է,այն արժեքը,որը մեզ պետք,բացատներ-ով
// // console.log()-ավելացնում է inspect-ի console բաժնում
// // alert()-տպում է,այն արժեքը,որը մեզ պետք,
// // փոփոխականներ

// // const - հաստատուն,իրենով ստեղծված արժեք,որը չենք կարող փոխել,
// // let - փոփոխվող,իրենով ստեղծված արժեքը կարող ենք փոխել,
// // var - անսիխրոն կոդի ժամանակ աշխատում է եւ տալիս չհաստատված արժեք,

// // let a = "sirun"
// // let b = " axjik"
// // document.write(a + b)
// // // document.writeln(a+ " " + b)
// // console.log(a+b)


// Համեմատության օպերատորներ

// > -մեծ
// < -փոքր
// >= -մեծ հավասար
// <= -փոքր հավասար
// = -վերագրում
// ==  - հավասար
// === - խիստ հավասար
// !== - հավասար չի
// !=== -  խիստ հավասար չի


// Թվաբանական օպերատորներ


// + -գումարում
// - -հանում
// * -բազմապատկում
// / -բաժանում
// % - majio,վերադարձնում է մնացորդ


// Լոգիկայի օպերատորներ

// && - և
// || - կամ 
// ! - չ

// խնդիր 1

// console -ում a-ն տպի 25 օգտագործելով մեր c-արժեքը
// let a = 15;
// let b = 25;
// let c = 10;   
// console.log(a + c)

// let d = "15";
// let f = "25";  
// console.log(d + f)


// խնդիր 2
// console -ում  տպի 35 օգտագործելով մեր h-ի-արժեքը


// let j = 15;
// let g = 25;
// let h = +"10";

// document.writeln(g + h);
 



//  խնդիր 2

// console -ում e-ն տպի 45 d-ն 23 առանց այլ արժեքի
//  let e = 35
//  let d = 45

//  let e = 23
//  let d = 45
//  console.log(e + +"22");
// console.log(d - +"22");
// document.writeln()

// խնդիր 3

// let a ="sovorum";
// let b = "es";
// let c = "Academium";
// let d = "Barev";
// let e = "em";
// let f = "anun";
// let g = "dzez,";
// let h = "em";
// let i = "Abov";

// console.log(d + " " + g + " " + b + " " + f + " " + e + ", " + a + " " + h + " " + i + " " + c);



//  let name = prompt( "what is your name");
//    alert("Nice to meet you " + name);
//   let lastname = prompt( "what is your lastname");
//     alert("Nice to meet you " + name + " " + lastname );




// let a = 2;
// let b = 3;
// let c = 4;
// let d = a + b *(c +(2 / a) - 5 + 158);
// // alert(d);
// console.log(d)




// let a = 4;
// let b = ((+"4") + 4) + +"55" + (2 + a) + (+"1" + a) - (a + +"30") + (a - 5);
//  alert (b + 1);






// let a = Number(prompt("How old are you?"));
// if (a >= 18) {
//   alert(" Բարի գալուստ :))");

// } else {
//   alert("հաջողություն ❌ :( ");
// } 