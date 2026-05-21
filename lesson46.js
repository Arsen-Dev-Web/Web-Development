// Բազմաչափ զանգված (Multidimensional Array)
// Բազմաչափ զանգվածը այն զանգվածն է, 
// որի ներսում կան այլ զանգվածներ։

// երկչափ զանգված (2D array)

let arr = [
  [1, 2, 3],      // 0-րդ տող
  [4, 5, 6],      // 1-ին տող
  [7, 8, 9]       // 2-րդ տող
];

console.log(arr[0][1]); 
console.log(arr[2][0]); 


// Եռաչափ զանգված (3D array)

//Վարժություն 1 Տպի 40 ,50 

let arr = [
  [
    [10, 20],
    [30, 40]
  ],
  [
    [50, 60],
    [70, 80]
  ]
];

console.log(arr[0][1][1]); 

console.log(arr[1][0][0]);      


// Վարժություն 2 — Գումարել բոլոր թվերը

let nums = [
  [1, 2, 3],
  [4, 5],
  [6, 7, 8]
];

let sum = 0;

for (let i = 0; i < nums.length; i++) {
  for (let j = 0; j < nums[i].length; j++) {
    sum += nums[i][j];
  }
}
console.log(sum); 
// Ձև 2

let nums = [
  [1, 2, 3],
  [4, 5],
  [6, 7, 8]
];

let sum = nums.flat().reduce((a, b) => a + b);

console.log(sum); 



// Վարժություն 3. Տպի hello

let arr =[ 15,5, 'barev', 'true',['hello',0],[[[55]]]]


document.writeln(arr[4][0]);


// Վարժություն 4 Տպի 55

let arr =[ 15,5, 'barev', 'true',['hello',0],
[
  [[55]]]
];



console.log(arr[5][0][0][0]);




// Վարժություն 5 Գտիր բոլոր կենտ թվերը

let arr = [
  [12, 5, 78],
  [8, 3],
  [10, 9, 11]
];

let x = arr.flat().filter(n => n % 2 !== 0);
console.log(x);



// Վարժություն 6
 
// (արտածել միայն "JavaScript")

let arr = ['barev', [10, true, ['mi ban', 'chgitem',[[[20, 30, ['JavaScript']]]]]]];




    document.writeln(arr[1][2][2][0][0][2][0]);





