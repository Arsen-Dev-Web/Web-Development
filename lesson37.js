// // Պայմանի օպերատոր 2 prompt() alert() և ինդեքս,և տեքստ

//  if( true){
//  }



 let x = prompt("How are you")
 if(x === "good") {
    alert("inch lava )))");
 }
  if(x !== "good") {
    alert("lav mna (((");
 }
// else{
//     alert("lav chi (((");
// }

 // xaxer
  
 let points = 0;
 let resp0 = prompt("what is a capital of Armenia")

 if(resp0 === 'Yerevan'){
   points = points + 1
 }
 let resp1 = prompt("what is a capital of Russia")

 if(resp1 === 'Moscow'){
   points = points + 1
 }
  let resp2 = prompt("what is a capital of France")

 if(resp2 === 'Paris'){
   points = points + 1
 }
 alert("You received "+ points +"  aut of 3")




   confirm -մենակ տեքստ

խնդիր   անել այնպես,որ confirm դաշտը մեզ ուղղարկի 'Ցանկանու՞մ եք սպասել։'հարցումը, օկ սեղմենք ասի 'Շնորհակալություն սպասելու համար' cancel "Հաջողություն ձեզ!"

  let answer = confirm("Ցանկանու՞մ եք սպասել։");

if (answer === true) {
  // console.log("Շնորհակալություն սպասելու համար!");
  document.write("<h2>Շնորհակալություն սպասելու համար </h2>");
} else {
  alert("Հաջողություն ձեզ!");
}

window.close -պատուհանի ապաակտիվացում, ըստ պայմանի

let d = prompt('Ձեր կոդը')
if(d === '12345'){
    alert('bari galust')
}
else{
   window.close()
}



խնդիր  Ունենում ենք prompt() դաշտ
,եթե 18-ից մեծ է բարի գալուստ,
հակառակ դեպքում հաջողություն
   
let a = Number(prompt("How old are you?"));
if (a >= 18) {
  alert("բարի գալուստ ");

} else {
  // alert("հաջողություն");
  window.close();
} 

switch() - case - պայմանի գրելու տարբերակ
switch()- փակագծերի ներսում գրում ենք այն փոփոխականը ,
որի հետ պետք է աշխատենք,որից էլ կապված է մեր արդյունքը

case " :եթե, գրում ենք պայմանը վերջակետից հետո գրում ենք 
կատարվելիք գործողությունը
,ամեն case-ից հետո գրում ենք break;
default : հակառակ դեպքում, պայման չենք տալիս

let p = prompt('գրեք Ձեր անունը');
    switch(p){

     case 'Անահիտ' : alert( 'բարև Անահիտ');break
     case 'Արմեն' : alert( 'բարև Արմեն');break
     default : alert( 'բարև ' + p)
}



Խնդիր 1 - Աշխատել switch case-ով, եթե գրենք կարմիր,
 alert() անի անգլերենով red, և այսպես ,մոտ 5 գույն;



let p = prompt('Գրել գույնը')
 switch(p){
    case'karmir' : alert('red');break
    case'kanach' : alert('green');break
    case'kapuyt' : alert('blue');break
    default: alert(p)
 }

Եռակողմ պայման 

? - եթե, դրանից հետո գրվում է այն գործողությունը,
որը պիտի կատարվի
։  - հակառակ դեպքում

let a = 6;
let b = 5;

a > b 
? alert('ճիշտ եք') 
: alert('հաջողություն');


խնդիր 2 կատարել բոլոր գործողությունները

let tiv1 = +prompt('Greq arajin tivy');
let gorc = prompt('Nsheq gorcoxutyuny');
let tiv2 = +prompt('Greq erkrord tivy');

gorc == '+' ? alert(tiv1 + tiv2) :
gorc == '-' ? alert(tiv1 - tiv2) : 
gorc == '/' ? alert(tiv1 / tiv2) : 
gorc == '*' ? alert(tiv1 * tiv2) : 
alert('')

let a = Number(prompt("Գրիր առաջի թիվը"));
let c = prompt("Արա գործողություն");
let b = Number(prompt("Գրիր երկրորդ թիվը"));

let result;

if (c === "+") {
  result = a + b;
  alert("արդյունք " + result);
} else if (c === "-") {
  result = a - b;
  alert("արդյունք " + result);
} else if (c === "*") {
  result = a * b;
  alert("արդյունք " + result);
} else if (c === "/") {
  result = a / b;
  alert("արդյունք " + result);
} 
else {
  alert("Գործողությունը սխալ է");
} 