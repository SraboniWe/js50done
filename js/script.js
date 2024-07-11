//Click the button to change the text
function textChange(){
    document.getElementById('t_c').innerHTML="Hello Sraboni";
}

//To show the date and time
function showDate(){
    document.getElementById('t_d').innerHTML= Date();
        }

        //bulb on off
        function bulbOn(){
            document.getElementById('b_img').src="img/lightOn.jpg";
        }
        function bulbOff(){
            document.getElementById('b_img').src="img/lightOff.jpg"
        }

  //To color Change
  function colorChange(){
    document.getElementById('t_color').style.color="red";
  } 
  
  //show hide text
  function sText(){
    document.getElementById('sh_text').style.display="block";
  } 

  function hText(){
    document.getElementById('sh_text').style.display="none";
  } 
  
  // document write
  function dWrite(){
    document.write("Hello Javascript World")
  }

  // document Alert
  function sAlert(){
    window.alert("Welcome Javascript World,It's a Alert")
  }
  
  //Show output on Console log

  function cLog(){
    console.log("Welcome Javascript World,It's console output")
  }

  //Show output of Addition
var number1= 4;
  var number2= 5;

  result = number1 + number2;
  function rAddition(){
    document.getElementById('r_a').innerHTML= result;
  }

  //show output of Substraction
  let num1, num2, result2;
num1= 5;
  num2= 2;
  result2 = num1 - num2;
  function rSubstraction(){
    document.getElementById('r_s').innerHTML=result2;
  }

//show output of multiplication
var no1= 5;
var no2= 6;
result3 = no1 * no2;
function rMultiplication(){
    document.getElementById('r_m').innerHTML=result3;
}

//show output of division
let nam1, nam2, result4;
nam1= 12;
nam2= 6;
result4 = nam1 / nam2;
function rDivision(){
  document.getElementById('r_d').innerHTML= result4;
}

//Addition assignment operator
let nombor1, nombor2;
nombor1= 12;
nombor2= 24;
nombor2 += nombor1;
function rAssign(){
  document.getElementById('r_ass').innerHTML= nombor2;
}

//For printing the Function
 function ePrint(){
  window.print('e_p');
 }

 //The arithmatic addition
 function demoArith(){
  let x = 5 + 2 + 3;
document.getElementById("d_a").innerHTML = x;
 }

 //Concated adding
 function concat(){
  let x = "Sraboni" + " " + "Barua";
  document.getElementById('c_c').innerHTML=x;
 }

 //string with number
 function sNum(){
  let x = 2 + 3 + "5";
document.getElementById("s_n").innerHTML = x;
 }

 //concatenation with order of operation
 function cString(){
  let x = "6" + 1 + 9;
  document.getElementById('c_s').innerHTML = x;
 }

 //Dollar sign
 function sDollar(){
  let $$$ = 2;
let $myMoney = 5; 
  document.getElementById('s_dollar').innerHTML = $$$ + $myMoney;
 }

 //Underscore sign
 function underScore(){
  let _x = 9;
let _100 = 5;

document.getElementById("u_S").innerHTML = _x + _100;
 }

 //Redeclaring a Variable Using var
        function redeClaring(){
          var  x = 10;
// Here x is 10
{  
var x = 2;
// Here x is 2
}
// Here x is 2
document.getElementById("r_C").innerHTML = x;
}

//Redeclaring a Variable Using Let
function redeClaringL(){
  let  x = 10;
// Here x is 10
{  
let x = 2;
// Here x is 2
}
// Here x is 10
document.getElementById("r_L").innerHTML = x;
}

//Hoisting variable before it is declared
function usVar(){
  flowerName = "Rose";
document.getElementById('u_V').innerHTML = flowerName;
var flowerName; 
}

//Constant variable having blockscope
function blockScope(){
  const  x = 52;
// Here x is 52
{  
const x = 2;
// Here x is 2
}
// Here x is 52
document.getElementById('b_S').innerHTML = "x is " + x;
}

//A typical arithmetic operation takes two numbers (or expressions) and produces a new number.
function javaArith(){
  let a = 3;
let x = (100 + 50) * a;
document.getElementById('j_A').innerHTML = x;
}

//The + Operator
function positiveO(){
let x = 15;
let y = 2;
let z = x + y;
document.getElementById('p_O').innerHTML = z;
}

//The - Operator
function negetiveO(){
  let p = 52;
let q = 2;
let r = p - q;
document.getElementById('n_O').innerHTML = r;
}

//The * operator
function multiO(){
  let p = 52;
let q = 2;
let r = p * q;
document.getElementById('m_O').innerHTML = r;
}

//The / operator
function diviO(){
  let p = 25;
let q = 5;
let r = p / q;
document.getElementById('d_O').innerHTML = r;
}

//The % operator
function modO(){
  let p = 7;
let q = 5;
let r = p % q;
document.getElementById('mod_O').innerHTML = r;
}

//The ++ increment operator
function increO(){
  let x = 5;
  x++;
  let z = x;
  document.getElementById('incre_O').innerHTML = z;
}

//The -- decrement operator
function decreO(){
  let x = 5;
  x--;
  let z = x;
  document.getElementById('decre_O').innerHTML = z;
}

//The ** exponentiation operator
function expoO(){
  let x = 5;
document.getElementById("expo_O").innerHTML = x ** 2;
}

//The Math*pow operator
function powO(){
  let x = 6;
document.getElementById('pow_O').innerHTML = Math.pow(x,2);
}

//The operator precedence Multiplication has precedence over addition.
function operPre(){
  document.getElementById("oper_pre").innerHTML = 100 + 50 * 3;
}

//The operator precedence When many operations has the same precedence, they are computed from left to right.
function preOne(){
  document.getElementById("pre_One").innerHTML = 100 + 50 - 3;
} 

//Multiplication has precedence over addition.But parenthesis has precedence over multiplication.
function preTwo(){
  document.getElementById("pre_two").innerHTML = (100 + 50) * 3;
}

//The operator precedence When many operations has the same precedence, they are computed from left to right.
function preThree(){
  document.getElementById("pre_three").innerHTML = 100 / 50 * 3;
} 

//simple assignment
function simplE(){
  let y = 50
let x = 10 + y;
document.getElementById("sim_ple").innerHTML = "Value of x is: " + x;
}

//Subtraction Assignment
function subT(){
  let x = 10;
x -= 5;
document.getElementById("sub_T").innerHTML = "Value of x is: " + x;
} 

//Multiplication Assignment
function mulT(){
  let x = 11;
x *= 5;
document.getElementById("mul_T").innerHTML = "Value of x is: " + x;
}

//Exponentiation Assignment
function exT(){
  let x = 14;
x **= 5;
document.getElementById("ex_T").innerHTML = "Value of x is: " + x;
}

//Division Assignment Operator
function diviasT(){
  let x = 10;
x /= 2;
document.getElementById("divias_T").innerHTML = x;
}

//Remainder Assignment Operator
function reasT(){
  let x = 10;
x %= 3;
document.getElementById("reas_T").innerHTML = "Value of x is: " + x;
}

//Left Shift Assignment Operator
function lsasT(){
  let x = -100;
x <<= 5;
document.getElementById("lsas_T").innerHTML = "Value of x is: " + x;
}

//Right Shift Assignment
function rsasT(){
  let x = -100;
x >>= 5;
document.getElementById("rsas_T").innerHTML = "Value of x is: " + x;
}

//Unsigned Right Shift Assignment
function ursasT(){
  let x = -100;
x >>>= 5;
document.getElementById("ursas_T").innerHTML = "Value of x is: " + x;
}

//Bitwise AND Assignment
function basT(){
  let x = 100;
x &= 5;
document.getElementById("bas_T").innerHTML = "Value of x is: " + x;
}

//Bitwise OR Assignment
function bosT(){
  let x = 100;
x |= 5;
document.getElementById("bos_T").innerHTML = "Value of x is: " + x;
}

//Bitwise XOR Assignment
function boxsT(){
  let x = 100;
x ^= 5;
document.getElementById("boxs_T").innerHTML = "Value of x is: " + x;
}

//Logical AND Assignment
function laasT(){
  let x = 100;
x &&= 5;
document.getElementById("lass_T").innerHTML = "Value of x is: " + x;
}