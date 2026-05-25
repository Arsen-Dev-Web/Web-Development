// UI(UserInterface)-դաշտ,համակարգ որով կարողանում ենք
//  տեսնել մեր ցանկալի արդյունքը:
//  alert()
//  prompt()
//  confirm()

//  let name = prompt( "what is your name");
//  alert("Nice to meet you " + name);


//Պայմանի օպերատոր

// if(){}- եթե
// else{}-հակառակ դեպքում
//  else if(){}-հակառակ դեպքում, եթե

// let a = 15;
// let b = 25;

// if (a<b){
//     alert('բարև')
// }else if(a==b){
//     alert('ճիշտ է ')
// }else {
//     alert('չգիտեմ')
// }

// խնդիր 1
// Ունենում ենք prompt() դաշտ,եթե գրում ենք դրական թիվ,մեզ
//  վերադարձնում է դրական թիվ,
// եւ հակառակը
 
// const num = prompt('նշել թիվը')
// num > 0
// ? alert('դրական')
// : alert('բացասական')


// let x = prompt("Գրիր թիվը");
// if (x > 0) {
//   alert("Դրական թիվ");
// } else if (x < 0) {
//   alert("Բացասական թիվ");
// } else {
//   alert("Զրո է");
// } 


// խնդիր 2
// Ունենում ենք prompt() դաշտ,հարցնում է անուն,ասի ուրախ եմ Ձեզ 
// տեսնել,
// հետո ուրախ եմ Ձեզ տեսնել անուն ազգանուն,


// let name = prompt( "what is your name");
//   alert("Nice to meet you " + name);
//  let lastname = prompt( "what is your lastname");
//    alert("Nice to meet you " + name + " " + lastname );

// խնդիր 3 Ունենում ենք prompt() դաշտ,եթե 18-ից մեծ է
//  բարի գալուստ
// հակառակ դեպքում հաջողություն
   

// let a = Number(prompt("How old are you?"));
// if (a >= 18) {
//   alert(" Բարի գալուստ :))");

// } else {
//   alert("հաջողություն ❌ :( ");
// }  


 // խնդիր 4  անել այնպես,որ confirm դաշտը մեզ ուղղարկի 
 // 'Ցանկանու՞մ եք սպասել։'հարցումը, օկ սեղմենք ասի 
 // 'Շնորհակալություն սպասելու համար' cancel "Հաջողություն ձեզ!"

//   let answer = confirm("Ցանկանու՞մ եք սպասել։");

// if (answer === true) {
//   document.writeln("<h2>Շնորհակալություն սպասելու համար </h2>");
// } else {
//   document.writeln("<h2>Հաջողություն ձեզ!</h2>");
// }
  
// խնդիր 4

//  Ունենում ենք prompt() դաշտ,սարքում ենք հաշվիչ



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

//  let points = 0;
//  let resp0= prompt("what is a capital of Armenia")

//  if(resp0 === 'Yerevan'){
//    points = points + 1
//  }
//  let resp1 = prompt("what is a capital of Russia")

//  if(resp1 === 'Moscow'){
//    points = points + 1
//  }
//   let resp2 = prompt("what is a capital of France")

//  if(resp2 === 'Paris'){
//    points = points + 1
//  }

//  let resp3= prompt("what is a capital of Germany")

//  if(resp3 === 'Berlin'){
//    points = points + 1
//  }
//  let resp4 = prompt("what is a capital of Italy")

//  if(resp4 === 'Rome'){
//    points = points + 1
//  }
//   let resp5 = prompt("what is a capital of Spain")

//  if(resp5 === 'Madrid'){
//    points = points + 1
//  }

//  let resp6= prompt("what is a capital of Canada")

//  if(resp6 === 'Ottawa'){
//    points = points + 1
//  }
//  let resp7 = prompt("what is a capital of Japan")

//  if(resp7 === 'Tokyo'){
//    points = points + 1
//  }
//   let resp8 = prompt("what is a capital of China")

//  if(resp8 === 'Beijing'){
//    points = points + 1
//  }

//  let resp9 = prompt("what is a capital of Australia")

//  if(resp9 === 'Canberra'){
//    points = points + 1
//  }

//  let resp10 = prompt("what is a capital of Egypt")

//  if(resp10 === 'Cairo'){
//    points = points + 1
//  }

//  alert("You received "+ points +"  out of 10")


//  if( true){

//  }
//  let x = prompt("How are you")
//  if(x === "good ,,," || x === "ok" || x === "fine" || x === "not bad") {
//     alert("inch lava )))");
//  }else{
//     alert("lav chi (((");
// }