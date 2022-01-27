function whichSchool(age){
  if (age >=0 && age <13){
    return 'elementary school'
  }else if(age >=13 && age <=18){
    return 'secondary school';
  }else return 'lighthouse Labs';
}
console.log(whichSchool(14));