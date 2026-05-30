// DOM (Document Object Models) 

// document.createElement('')- stexcum enq voreve element (div,p,
//  h2 ev ayl);
// append() - avelacnum enq elementnery hamapatasxan hatvacum, 
// karox enq avelacnel mi qani elementner;

// appendChild() - avelacnum enq elementy hamapatasxan hatvacum,
//  karox enq avelacnel miayn mek element;

// setAttribute('','') - elementin talis enq cankacac atribute css-ov;
//  document.createTextNode('') - stexcum enq texty;


let box = document.createElement('div');
document.body.appendChild(box);
box.setAttribute('style', 'width: 300px; height: 300px; background: #00f; text-align: center; border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; display: flex; justify-content: center; align-items: center');
let text = document.createTextNode('Hello World');
let p = document.createElement('p');
box.appendChild(p);
p.appendChild(text);
p.setAttribute('style','color: #fff; font-style: italic; font-family: cursive; font-size: 30px')


// ----------------------------------------------





// DOM-ում 3x3 աղյուսակ (table) ստեղծելու օրինակ





let table = document.createElement('table')
table.border='1'

 for (let i = 0; i < 3; i++) {
    let tr = document.createElement('tr'); 

    for (var j = 0; j < 3; j++) {
        let td = document.createElement('td'); 
        td.style.width = '50px';
        td.style.height = '50px';
        td.style.border = 'solid 1px';
        td.style.textAlign = "center";

        tr.appendChild(td); 
    }

    table.appendChild(tr); 
}

document.body.appendChild(table); 



let header = document.createElement('header');
document.body.appendChild(header);
header.setAttribute('style', 'width: 100%; height: 100px; background: #000; display: flex; justify-content: center; align-items: center; box-shadow: inset 0 0 10px #fff');
let nav = document.createElement('nav');
header.appendChild(nav);
nav.setAttribute('style', 'width: 70%; height: 80%');
let ul = document.createElement('ul');
nav.appendChild(ul);
ul.setAttribute('style', 'height: 100%; list-style: none; display: flex; justify-content: space-between; align-items: center');
let li1 = document.createElement('li');
let li2 = document.createElement('li');
let li3 = document.createElement('li');
let li4 = document.createElement('li');
let li5 = document.createElement('li');
ul.append(li1,li2,li3,li4,li5);

let a1 = document.createElement('a');
let a2 = document.createElement('a');
let a3 = document.createElement('a');
let a4 = document.createElement('a');
let a5 = document.createElement('a');

li1.appendChild(a1);
li2.appendChild(a2);
li3.appendChild(a3);
li4.appendChild(a4);
li5.appendChild(a5);

a1.setAttribute('href', '#');
a2.setAttribute('href', '#');
a3.setAttribute('href', '#');
a4.setAttribute('href', '#');
a5.setAttribute('href', '#');

let home = document.createTextNode('Home');
a1.appendChild(home);
a1.setAttribute('style', 'text-decoration: none; padding: 15px 25px; background: #fff; box-shadow: inset 0 0 10px #000; border-radius: 30px; color: #000');

let about = document.createTextNode('About');
a2.appendChild(about);
a2.setAttribute('style', 'text-decoration: none; padding: 15px 25px; background: #fff; box-shadow: inset 0 0 10px #000; border-radius: 30px; color: #000');

let services = document.createTextNode('Services');
a3.appendChild(services);
a3.setAttribute('style', 'text-decoration: none; padding: 15px 25px; background: #fff; box-shadow: inset 0 0 10px #000; border-radius: 30px; color: #000');

let gallery = document.createTextNode('Gallery');
a4.appendChild(gallery);
a4.setAttribute('style', 'text-decoration: none; padding: 15px 25px; background: #fff; box-shadow: inset 0 0 10px #000; border-radius: 30px; color: #000');

let contact = document.createTextNode('Contact');
a5.appendChild(contact);
a5.setAttribute('style', 'text-decoration: none; padding: 15px 25px; background: #fff; box-shadow: inset 0 0 10px #000; border-radius: 30px; color: #000');





const header = document.createElement('header');
header.style.backgroundColor = 'blue';
header.style.display = 'flex';
header.style.justifyContent = 'space-between';
header.style.alignItems = 'center';
header.style.padding = '10px 40px';

const logo = document.createElement('h1');
logo.textContent = 'Logo';
logo.style.color = 'white';
logo.style.fontFamily = 'sans-serif';
logo.style.margin = 0;

const nav = document.createElement('nav');
nav.style.display = 'flex';
nav.style.gap = '20px';

const links = ['Home', 'About Us', 'News', 'Blog', 'Contact Us'];

links.forEach(text => {
  const a = document.createElement('a');
  a.textContent = text;
  a.href = '#';
  a.style.color = 'white';
  a.style.textDecoration = 'none';
  a.style.fontSize = '18px';
  a.style.transition = '0.3s';

 
  nav.appendChild(a);
});

header.appendChild(logo);
header.appendChild(nav);
document.body.prepend(header);