'use strict;'

const avregeCalculater = (first, sec, third) => (first+sec+third)/3;


// test 1.

// const not re using..so using let
// const dolphinsAvrg = avregeCalculater(44,23,71);
// const kolasAvrg = avregeCalculater(65,54,49);

let  kolasAvrg = avregeCalculater(65,54,49);
let  dolphinsAvrg = avregeCalculater(44,23,71);

console.log(dolphinsAvrg,kolasAvrg);

function checkWinner (dolphinsAvrg,kolasAvrg){
    if(dolphinsAvrg>=2*kolasAvrg){
        console.log(`Dolphins win (${dolphinsAvrg}) vs (${kolasAvrg}) 🏆.`);
    }else if(kolasAvrg >= 2*dolphinsAvrg){
        console.log(`Dolphins win (${kolasAvrg}) vs (${dolphinsAvrg}).🏆`);
    }else{
        console.log(`No team win...😥😭`);
    }
}
checkWinner(dolphinsAvrg,kolasAvrg);

// test 2..

dolphinsAvrg = avregeCalculater(85,54,41);
kolasAvrg = avregeCalculater (23,34,27);

console.log(dolphinsAvrg,kolasAvrg);

checkWinner(dolphinsAvrg,kolasAvrg);