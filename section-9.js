'use strict'
/* INDEX OF SECTION 9 MODERN OPERATOR , DATA STRUCTURE AND STRING METHODS
SPREAD OPERATOR
REST OPERATOR
SHORT CIRCUTITING (&& AND ||)
Nullish coalescing operator(??)
Logical Assignment operator(||=)
 */









/*
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
SPREAD OPERATOR
EXAMPLE
SYNTAX (...)
USED TO EXPAND THE ARRAYS OR UNPACKING THE ARRAYS AT ONCES
USED TO BUILD THE NEW ARRAY OR TO PASS THE MULTIPLE VAUES INTO THE FUCNTION 

const restarant={
   name:'Classico Italiono',
   location:'Via Anglelo Travanti 23, Firenze,Italy',
   categories:['italian','Pizzeria','Vegetarian','Oragnic'],
   satermenu:['Focaccia','Bruschetta','Garlic','Bread','Caprese Salad'],
   mainmenuu:['Pizza','Pasta','Risotto'],
openinghours:{
   thu:{
      open:12,
      close:22
   },
   fri:{
      open:11,
      close:23,

   },
   sat:{
      open:0,
      close:24
   }
},orderpasta: function(ing1,ing2,ing3)
{
   console.log(`Here is your delicious pasta ${ing1},${ing2},${ing3}`);

}
}

console.log(restarant)
// USED TO EXPAND THE ARRAYS OR UNPACKING THE ARRAYS AT ONCES
const array=[1,2,3,4];
const newarray=[1,2, array[0],array[1],array[2],array[3]]
console.log(newarray);
//    IN ES6 USING SPREAD OPERATOR
const as=[1,2,array]
console.log(as)
const newarr=[1,2,...array];
console.log(newarr)
console.log(...newarr) // out of array

//ADDING NEW ELEMENTS WITH THE EXISTING ARRAY
console.log(restarant.mainmenuu)
const main=[...restarant.mainmenuu,'sapathe']
console.log(main)

//COPY THE ARRAY
const mainmenuucopy=[...restarant.mainmenuu]


//JOIN 2 ARRAYS
const  menu=[...restarant.mainmenuu,...restarant.satermenu]
console.log(menu)

// ITERABLES ==>ARRAYS,STRING,MAPS,SETS BUT NOT IN OBJECTS
const stringarray='Yokeshwaran';
let spreada=[...stringarray,'J','','E'];
console.log(spreada)
0
// FUCNTION CALLING WITH SINGLE ARGUMENT
const ingredients= [
   prompt("enter the first ingreiendent"),
   prompt("Enter the second ingredient "),
   prompt("enter the third ingredent")
]
console.log(ingredients);
// restarant.orderpasta(ingredients[0],ingredients[1],ingredients[2]);
restarant.orderpasta(...ingredients)
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* 
REST PATTERN AND PARAMETERS
OPPOSITE OF THE SPREAD OPERATOR,
PACK THE ELEMENTS INTO THE ARRAY
SPREAD RECAP
const restarant={
    name:'Classico Italiono',
    location:'Via Anglelo Travanti 23, Firenze,Italy',
    categories:['italian','Pizzeria','Vegetarian','Oragnic'],
    satermenu:['Focaccia','Bruschetta','Garlic','Bread','Caprese Salad'],
    mainmenuu:['Pizza','Pasta','Risotto'],
 openinghours:{
    thu:{
       open:12,
       close:22
    },
    fri:{
       open:11,
       close:23,
 
    },
    sat:{
       open:0,
       close:24
    }
 },orderpasta: function(ing1,ing2,ing3)
 {
    console.log(`Here is your delicious pasta ${ing1},${ing2},${ing3}`);
 
 },
 orderpizza:function(ffirst,...reamaining)
 {
    console.log(`${ffirst}`)
    console.log(`${reamaining}`)
 }
 }
 
 
 ///REST OPERATOR
 const yokesh=['shar',1,true]
 const arr=[1,2,...[3,4],...yokesh]
 console.log(arr)
 const [a,b,...c]=[1,2,3,5,'shar','yokesh']
 console.log(a,b,c)
 console.log(c)
 console.log(...c)
 console.log(a,b,...c)
 let vv=[1]
 let vvv=[1];
 console.log(...vv,...vvv)
 
 
 let arrayq=[...restarant.mainmenuu,...restarant.satermenu]
 console.log(arrayq)
 const [first,, third, ...fourth]=[...restarant.mainmenuu,...restarant.satermenu]
 console.log(first,third,fourth)
 
 const{sata,...weekdays}={...restarant.openinghours}
 console.log(sata);
 console.log(weekdays);
 //fucntion
 const add=function(...numbers)
 {
    sum=0;
    for(let i=0;i<numbers.length;i++)
    {
       sum=sum+numbers[i];
    }
    console.log(sum)
    
 }
 add(2,3)
 add(2,3,4,5)
 add(2,3,4,6,7)
 const x=[1,2,347,5]
 add(...x)
 restarant.orderpizza('mushroom','onion','olives','spinach');
 restarant.orderpizza('mushroom')
 */







/*
 ////////////////////////////////////////////////////////// /////////////////////////////////////////////
 //SHORT  CIRCUTIN (&& AND ||)
 //It will check for the data if it a truety value then it will print it will never check for the next one.

 //prints the truety value
 console.log("----OR--------")
 console.log('sharvanthika'||'yokesh');
 console.log(''||'yokesh')
 console.log(true||0);
 console.log(undefined||null||0)
 console.log(undefined||0||''||'hello'||23||null);
 //falsey values
 //0,"",null,undefined,nan
 let a=6
let result=(10<a)?console.log('truetrue'):console.log("falsefalse");
console.log(result)

console.log("----AND----");
//IT CHECKS FOR THE FALSY VALUE AND PRINTS IT
console.log(0&&'YOKESH')
console.log(0&&'sharvanthika');
console.log(7&&'shark')
*/




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
//NULLISH COALESCING OPERTAOR

const restarant={
   name:'Classico Italiono',
   location:'Via Anglelo Travanti 23, Firenze,Italy',
   categories:['italian','Pizzeria','Vegetarian','Oragnic'],
   satermenu:['Focaccia','Bruschetta','Garlic','Bread','Caprese Salad'],
   mainmenuu:['Pizza','Pasta','Risotto'],
openinghours:{
   thu:{
      open:12,
      close:22
   },
   fri:{
      open:11,
      close:23,

   },
   sat:{
      open:0,
      close:24
   }
},orderpasta: function(ing1,ing2,ing3)
{
   console.log(`Here is your delicious pasta ${ing1},${ing2},${ing3}`);

},
orderpizza:function(ffirst,...reamaining)
{
   console.log(`${ffirst}`)
   console.log(`${reamaining}`)
}
}

restarant.numguest= 'sharvanthika'//null //0//''//undefined//NaN
const guest2=restarant.numguest||10;
console.log(guest2)
//NULLISH VALUES ARE null and undefined
//The nullish coalescing (??) operator is a logical opetator theat returns its righ-hand side operand when its left hand side operand is NULL OR UNDEFINED and otherwise returns its left hand side operand ; its commonly used to provide default values for variables :syntax variables ?? default value

let value='sharvanthika'//null and undefined
const guest1=value ?? 10;
console.log(guest1);
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
//LOGICAL ASSIGNMENT OPERATOR
const obj1={
   name:'yokeshwaran',
   age:23
}
 const obj2={
   name:'sharvantika',
   age:23
}

The logical OR assigement(x||=) operator only assigns y to x if x is falsy.the logical AND assignment (x&&=y)operator will assign y to x if x is truty .The nullish coalescing assignment to operator will assign y to x if is undefined or nulll...
OR OPERATOR LITERAL WAY
 obj1.name=obj1.name||10;
 console.log(obj1.name);
 LOGICAL ASSIGNMENT OPERATOR
 obj1.name ||=10;
console.log(obj1.name)
obj2.job ||= "BlackRock"
console.log(obj2.job)
/*
// AND OEPRATOR
obj1.name=obj1.name&&'Default value'
console.log(obj1.name)
//LOGICAL ASSIGNEMENT OPERATOR
obj1.name &&= 10;
console.log(obj1.name)
*/





// console.log(obj1.name||10)
// console.log(obj2.job||'Default value')
// console.group(obj1);
// console.log(obj2)\




