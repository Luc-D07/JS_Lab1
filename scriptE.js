let hours = prompt("How many hours did you work?");
let wage= prompt("How much is your hourly pay?");
let pay = hours * wage;
let overTime = hours - 40;
// let overTimePay = overTime * (wage * 1.5);
// let totalPay = pay + overTimePay;
let overTimePay = overTime * ((1.5*wage)-wage)

console.log(pay);
//if statement for overtime pay
// if(hours<= 40){
//  let pay = hours * wage
// } else if (hours > 40){
//     totalPay = pay + overTimePay
//     console.log(totalPay)
// };

if (hours >40 ){
    totalPay = pay + overTimePay
    console.log(totalPay)
} else {
    console.log(pay)
}

// let oneMillion = 1000000/totalPay;

// console.log(`It will take ${Math.round(oneMillion)} to make $1,000,000`)
let week = 0;
// for (totalPay = 1; totalPay <=1000000; totalPay++){
//     if(totalPay < 1000000) {
//         week++
//         totalPay+=
//         console.log(totalPay);
//     } else {
//         console.log(`You've made $1,000,000 in ${week} weeks`);
//         break;
//     }
// }

// if(totalPay < 1000000){
//     week++;
//     totalPay+= totalPay;
//     console.log(totalPay);
// }
// // if (totalPay >=1000000)
// else {
//     (week++)
//     console.log(`You've made $1,000,000 in ${week} weeks!`);
    
// }

while (totalPay < 1000000){
    week++;
    totalPay+= pay
    if (totalPay >= 1000000){
        week++
        console.log(`You've made $1,000,000 in ${week} weeks!`);
        break;
    }
}