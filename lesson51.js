// Object.create()-ստեղծում է նոր օբյեկտ, 
// որը ժառանգում է հատկություններ մեկ այլ օբյեկտից։


let obj = {
    name: 'Anahit',
    surname: 'Kujoyan',
    age: 23
} 


console.log(obj);



let people = [
    {name:'Anahit', surname:'Kujoyan', age:23, budje:250000},
    {name:'Anna', surname:'Afyan', age:16, budje:150000},
    {name:'Garik', surname:'Karapetyan', age:21, budje:250000},
    {name:'Robert', surname:'Kuyoyan', age:29, budje:350000},
    {name:'Arev', surname:'Aleqsanyan', age:17, budje:150000}
];

console.log(people);

// // Առաջադրանք 1.տպի 3-րդ մարդու անունը


console.log(people[2].name); 

// //Arajadranq 2. tpi 2-rd mardu azganuny



console.log(people[1].surname);


  // Առաջադրանք 3 տպի անուն-ազգանուն

for (let i = 0; i < people.length; i++)
 {
console.log(people[i].name + ' ' + people[i].surname );
}
 

// Խնդիր 1. Տպել բոլորին,բացի անչափահասներից




let people = [
    {name:'Anahit', surname:'Petrosyan', age:23, budje:250000},
    {name:'Anna', surname:'Afyan', age:16, budje:230000},
    {name:'Garik', surname:'Karapetyan', age:21, budje:280000},
    {name:'Robert', surname:'Kuyoyan', age:29, budje:270000},
    {name:'Arev', surname:'Aleqsanyam', age:17, budje:250000}
];



let x = people.filter(person => person.age > 17);

console.log(x);



// Խնդիր 2. Տպել բոլորի աշխատավարձերի ընդհանուր գումարը

// let people = [
//     {name:'Anahit', surname:'Kuyoyan', age:23, budje:250000},
//     {name:'Anna', surname:'Afyan', age:16, budje:290000},
//     {name:'Garik', surname:'Karapetyan', age:21, budje:250000},
//     {name:'Robert', surname:'Kuyoyan', age:29, budje:290000},
//     {name:'Arev', surname:'Aleqsanyam', age:17, budje:250000}
// ];

let x= people.reduce((sum, person) => sum + person.budje, 0);

console.log(x);


// խնդիր 3.Տպել միայն անչապահասների աշխատավարձերի գումարը



let people = [
    {name:'Anahit', surname:'Kuyoyan', age:23, budje:25000},
    {name:'Anna', surname:'Afyan', age:16, budje:25000},
    {name:'Garik', surname:'Karapetyan', age:21, budje:25000},
    {name:'Robert', surname:'Kuyoyan', age:29, budje:25000},
    {name:'Arev', surname:'Aleqsanyam', age:17, budje:25000}
];


let a = people.filter(person => person.age < 18);

let b = a.reduce((sum, person) => sum + person.budje, 0);

console.log(b);



// xndir 4.tpel chapahasneri ashxatavarderi gumary


// let people = [
//     {name:'Anahit', surname:'Kuyoyan', age:23, budje:25000},
//     {name:'Ana', surname:'Afyan', age:16, budje:25000},
//     {name:'Garik', surname:'Karapetyan', age:21, budje:25000},
//     {name:'Robert', surname:'Kuyoyan', age:29, budje:25000},
//     {name:'Arev', surname:'aleqsanyam', age:17, budje:25000}
// ];


let a = people.filter(person => person.age > 18);

let b = a.reduce((sum, person) => sum + person.budje, 0);

console.log(b);



// Xndir 3 - onclick-i ognutyamb stexcel bacvox pakvox patuhan;



 function myf() {
    div1.style.background = 'red';
    btn2.style.display = 'block';
    btn1.style.display = 'none';
 }
 function myf1() {
    div1.style.background = 'blue';
    btn1.style.display = 'block';
    btn2.style.display = 'none';
 }









         

// let p = prompt();
// switch(p) {
//     case 'barev': alert('hello'); break
//     case 'hello': alert('barev'); break
//     default: alert('mi ban');
// }
