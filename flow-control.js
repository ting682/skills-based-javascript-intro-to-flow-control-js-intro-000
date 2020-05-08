function basicTeenager(age) {
if(age>=13 && age<=19){
  return "You are a teenager!"
}

}

function teenager(age) {

if(age>=13 && age<=19){
  return 'You are a teenager!'
}
  else {
    return 'You are not a teenager'
  }
}

function ageChecker(age) {
  if (age>=13 && age<=19){
    return 'You are a teenager!'
  }
  else if (age<=12){
    return "You are a kid"
  }
  else {
      return "You are a grownup"
  }
}

function ternaryTeenager(age) {

var isAge =  (age>=13 && age<=19) ?   "You are a teenager" :  "You are not a teenager"
console.log(isAge)
}

function switchAge(age) {

}
