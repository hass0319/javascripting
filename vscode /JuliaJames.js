var x = 1;

while (x<=20){
    // condition1 ? (condition2 ? (if cond1&2 are true):(if cond1 True)):
    //(condition3 ? (if cond1&3 are true):(if False));
    x % 3 ===0 ? (x % 5===0 ? (console.log("JuliaJames")) : (console.log("Julia--"+ x)))
    :(x % 5 ===0 ? (console.log("James")):(console.log(x+" not by 5 or 3")));
    x++;
}
// SECOND OPTION---------------------------------------
//while (x<=20) {
//  if (x % 3 === 0 && x % 5 === 0){
//    console.log("JuliaJames");
//    }else if (x % 3 === 0){
//        console.log("Julia");
//    }else if (x % 5 === 0){
//      console.log("James");
//   } else{
//        console.log(x);
//  } 
//    x++
//}