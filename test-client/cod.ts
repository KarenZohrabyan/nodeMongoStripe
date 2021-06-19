const age: number = 9;
console.log(age);

let temp: number | string;

if(age === 10) {
    temp = age;
} else {
    temp = 'AAA';
}

console.log(temp);

let A = age === 10 ? 1 : 2

if(A !== 1) {
    console.log('11111111111111');
} else {
    console.log('22222222222222');
}

type MyType = number | string | boolean;
let B: MyType;
B = 20;
B = "Karen";
B = true;

// let OO: "A" = "A";
// OO = "B";

let num: number | null | undefined = 999;

if (num != null) {
    console.log(num);
}


