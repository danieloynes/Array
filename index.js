//Oppgave 1
/*
const list = ['a', 'b', 'c', 'd', 'e', 'f'];
list.length = 1;
console.log(list);
*/

//Oppgave 2
/*
const list = ['a', 'b', 'c', 'd', 'e', 'f'];
list.splice(0, 5);
console.log(list);
*/

//Oppgave 3
/*
var arr = [5,15,25]
var sum = 0;
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    sum += arr[i]
}
console.log(`Summen er ${sum}`);

var arr2 = [5,15,25]
var sum2 = 1;
for (let i = 0; i < arr2.length; i++) {
    console.log(arr2[i]);
    sum2 *= arr2[i]
}
console.log(`Summen er ${sum2}`);
*/

//Oppgave 4

var arr1 = [5,15,25,35,45]
var arr2 = [10,20,30,40,50]
var sum = 0;
for (let i = 0; i < arr1.length; i++) {
    console.log(`Summen av ${arr1[i]} og ${arr2[i]} er ${arr1[i] + arr2[i]}`);
    sum += arr1[i] + arr2[i]
}
console.log(`Summen er ${sum}`);