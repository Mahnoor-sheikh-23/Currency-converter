#! /usr/bin/env node 

import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.rgb(26,267,228).italic("\n\t\t----WELLCOME TO CURRENCY CONVERTER---- \t\n"));

let currency :any = {
    USD : 1, // base currency  // united State Dollar
    EUR : 0.92, // Euro
    PKR : 277, // Pakistani rupee
    INR : 83, // Indian rupee
    Dhs : 3.67, // United state Arab
    CHF : 0.90, // Swiss france 
    GBP : 0.79 // Great Britian Pound
}
let user_answer = await inquirer.prompt(
    [{
    name : "from",
    type : "list",
    message : chalk.magenta.italic("Enter your  currency name which you want to change  : "),
    choices : ["USD","EUR","PKR","INR","Dhs","CHF","GBP"]
},{
    name : "to",
    type : "list",
    message : chalk.magenta.italic("Enter your  currency name which you want to get  : "),
    choices : ["USD","EUR","PKR","INR","Dhs","CHF","GBP"]
},{
    name : "amount",
    type : "number",
    message :chalk.magenta.italic( "Enter your amount  : "),
   
}
])

let fromAmount = currency[user_answer.from]
let toamount = currency[user_answer.to]
let userAmount = user_answer.amount 
let base = userAmount / fromAmount
let convertedAmount = base * toamount
let check = Math.floor(convertedAmount)

if(!user_answer.amount){
    console.log(chalk.redBright.italic("\n\t\t-----> SORRY!! we can't convert , Amount is NULL <-----\n "));
    
}else{
    console.log(chalk.italic.rgb(426,163,28)(` Here is your amount : ${check}`));
    console.log(chalk.rgb(26,267,228).italic("\n\t\t----THANK YOU FOR USING THIS CONVERTER !!----\n\t\t"));
}



