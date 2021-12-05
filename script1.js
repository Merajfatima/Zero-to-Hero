/*let js = 'bushra';
console.log(10 * 90);
console.log('Meraj')
console.log(1983)
console.log(js)
console.log(js)
console.log(js)
let countryName = 'INDIA';
let continentName = 'ASIA';
let populationCount = '10 crore';
console.log(countryName);
console.log(continentName);
console.log(populationCount);
isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof countryName);
console.log(typeof continentName);
console.log(typeof populationCount);
let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);
javascriptIsFun = 'YES we can do it';
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);
let year;
console.log(year);
console.log(typeof year);
year = 1983;
console.log(year);
console.log(typeof year);
console.log(typeof null);
// basic operators
const now = 2021;
const ageSamia = now - 2008;
const ageUzair = now - 2010;
const ageAmmara = now - 2015;
console.log(ageSamia, ageUzair, ageAmmara);
console.log(ageSamia * 2, ageUzair / 10, ageAmmara - 1, 2 ** 5);
// 2**5 mean 2 power mean 2*2*2*2*2=32
const firstName = 'meraj';
const lastName = 'fatiama';
console.log(firstName + ' ' + lastName);
console.log(typeof firstName);
// assignment operators
let x = 15 + 15;
x += 10;// += mean x=x+10=40
x *= 4;//  *= mean here x=x*4
x /= 4;//  /= mean here x=x/4
x++;//  ++ mean here x=x+1
x--;//  ++ mean her
// comparison operator
const now = 2021;
const ageSamia = now - 2008;
const ageUzair = now - 2010;
const ageAmmara = now - 2015;
console.log(ageAmmara > ageUzair);
console.log(ageSamia >= 18);
const isFullAge = ageSamia >= 18;// <,>.<=,>=
console.log(isFullAge)
console.log(now - 2008 < now - 2015);


let x, y;
x = y = 25 - 10 - 5;//x=y=10 it will do minus before compare
console.log(x, y);
const now = 2021;
const ageSamia = now - 2008;
const ageUzair = now - 2010;
const ageAmmara = now - 2015;
const averageAge = (ageAmmara + ageSamia + ageUzair) / 3
console.log(ageSamia, ageAmmara, ageUzair);
console.log('the average is:', averageAge)
//Coding challenge 1
//Test1
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;
const BMImark = massMark / heightMark ** 2;
const BMIjohn = massJohn / (heightJohn * heightJohn);
console.log(BMImark, BMIjohn);
const markHigherBMI = BMImark > BMIjohn;
console.log(markHigherBMI);
//test2
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;
const BMImark = massMark / heightMark ** 2;
const BMIjohn = massJohn / (heightJohn * heightJohn);
console.log(BMImark, BMIjohn);
const markHigherBMI = BMImark > BMIjohn;
console.log(markHigherBMI);
//string concatination
const firstName = 'Meraj';
const job = "Teacher";
const birthYear = 1983;
const now = 2021;
const getString = "I'am " + firstName + ', a ' + (now - birthYear) + ' yearold ' + job + '!';
console.log(getString);
//Template literals
const newString = ` I'am ${firstName},a ${now - birthYear} year old ${job} !`;
console.log(newString)
console.log(`I am a regular string...`);
console.log('I am\n\
mutilple\n\
lines string');
console.log(`I am '
multiple
lines
string`);
//If and else statement to take a decisiom
//const age = 15;
//const isOldEnough = age >= 18;
//if (isOldEnough) {
//  console.log('Uzair can start driving')
//const age = 19;
//if and else
const age = 11;
if (age >= 18) {
    console.log('Uzair can start driving')
} else {
    const yearleft = 18 - age;
    console.log(`uzair is too young.wait another ${yearleft} years`);
}
const birthYear = 1983;
let century
if (birthYear <= 2000) {
    century = 20;
}
else {

    century = 21
}

console.log(`your born in ${century} century`);
//coding challenge 2;
const massMark = 65;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;
const BMImark = massMark / heightMark ** 2;
const BMIjohn = massJohn / (heightJohn * heightJohn);
if (BMImark > BMIjohn) {
    console.log("Mark's BMI is higher then the John's BMI")
} else {
    console.log("Mark's BMI is less then the John's BMI")
}
if (BMImark > BMIjohn) {
    console.log(`Mark's BMI  ${BMImark} which is greater than the John's BMI ${BMIjohn}`)
} else {
    console.log(`Mark's BMI  ${BMImark} which is less than the John's BMI ${BMIjohn}`)
    console.log('Good luck!')
    console.log(BMIjohn)
    console.log(BMImark)
    console.log('Good luck!')
    console.log("i am a good boy")
    console.log(massMark)

}
//this code is by harrycode
console.time('your code took')
console.table({ meraj: 'this', marks: 35 })
console.warn('this is a warning')
//console.clear()
console.timeEnd('your code took')
console.assert(556 < 189, 'age> 189 is not possible')

//type conversion
const inputYear = '1983';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);
//type coercion
console.log('I am' + 23 + 'years old');
console.log('25' - '10' - 5);
console.log('25' + '10' + 5);
let n = '1' + 2;
n = n - 1;
console.log(n);//n=10
// equality operators1
const age = 18;
if (age === 18) console.log('you just became an adult(strick euqality)');

if (age == 18) console.log('you just became an adult(loose equaltiy)');
// equality operators2
const favoruite = prompt("what's your favourite number?");
console.log(favoruite);
console.log(typeof favoruite);
if (favoruite == 23)//'23'=23 loose euqality
{
    console.log('cool! 23 is an amazing number');
}
const favoruite = Number(prompt("what's your favourite number?"));
console.log(favoruite);
console.log(typeof favoruite);
if (favoruite === 23)//23=23 strick euqality
{
    console.log('cool! 23 is an amazing number');
} else if (favoruite === 7) {
    console.log('7 is also a cool number');
} else if (favoruite === 9) {
    console.log('9 is also a cool number')
}
else {
    console.log('you did not entered 23 or 7 or 9')
}
if (favoruite !== 23)//diference operator
 console.log('why not 23?')
//logical operator
const hasDriversLicense = true;//A
const hasGoodVision = true;//B
const isTired = false;//C
//console.log(hasDriversLicense && hasGoodVision);
//console.log(hasDriversLicense || hasGoodVision);
//console.log(!hasDriversLicense && hasGoodVision);
if (hasDriversLicense && hasGoodVision && isTired) {
    console.log('uzair can drive');
}
else {
    console.log('someone else should drive');
}*/
//
