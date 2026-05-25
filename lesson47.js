// // tari

var d = new Date();
demo.innerHTML = d.getFullYear();

// // amis
var d = new Date();
demo.innerHTML = d.getMonth()+1;

// // amis
var d = new Date();
var getMonths = ['January', 'February', 'March', 'April', 'May', 'June', 
                 'July', 'August', 'September', 'October', 'November',
                  'December'];
demo.innerHTML = getMonths[d.getMonth()];

// // or
var d = new Date();
demo.innerHTML = d.getDate();


//  shabatva or
var d = new Date();
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',
     'Friday', 'Saturday'];
demo.innerHTML = days[d.getDay()];

// // jam
var d = new Date();
demo.innerHTML = d.getHours();

// rope
var d = new Date();
if (d.getMinutes() < 10) {
    demo.innerHTML = d.getHours() + ':' + '0' + d.getMinutes();
} else {
    demo.innerHTML = d.getHours() + ':' + d.getMinutes();
}
// varkyan
var d = new Date();
demo.innerHTML = d.getSeconds();

// // milivarkyan
var d = new Date();
demo.innerHTML = d.getMilliSeconds();


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



// for (var i = 1; i < 5; i++) {
//     for (var j = 1; j < 10; j++) {
//         console.log(i + '' + j);
//     }
// }




let marzer = {
    Kotayk: ['Abovyan','Hrazdan', 'Hajn'],
    Shirak: ['Gyumri','Talin', 'Artik'],
    Syuniq: ['Goris','Mexri', 'Kapan'],
}
function myf(value){
    let qaxaqner = '';
    for (qaxaq in marzer[value]){
        qaxaqner += '<option>' + marzer[value][qaxaq] + '</option>';
    }
    document.getElementById('citySelect').innerHTML = qaxaqner;
}






// for (let i = 1; i < 100; i++) {
//     if (i % 4 == 0 && i % 8 != 0) {
//       demo.innerHTML += i + '<br>';
//     }
//   }