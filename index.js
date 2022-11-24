// Code your solution in this file!
const blocksFromHq = 42;
let num1;
let num2;
let amountPayable;

// Distance in blocks
function distanceFromHqInBlocks(valueInBlocks) {
  num1 = Math.abs(valueInBlocks - blocksFromHq);
  return num1;
}
distanceFromHqInBlocks(45);

// calculating distance in feet
function distanceFromHqInFeet(valueInBlocks) {
  distanceFromHqInBlocks(valueInBlocks);
  num2 = num1 * 264;
  return num2;
}
distanceFromHqInFeet(45);
// calculating Distance travelled
function distanceTravelledInFeet(start, destination) {
  let num3 = Math.abs(destination - start) * 264;
  return num3;
}

distanceTravelledInFeet(42, 45);

// Calculating Fare price

function calculatesFarePrice(start, destination)
 {let num4= Math.abs(((destination - start)*264));



  if (num4 <= 400) {
    return 0;
  } else 
        if (num4 > 400 && num4 < 2000) {
     amountPayable = ((num4 - 400) * 0.02);
    return amountPayable;
  } 
  else 
        if(num4>=2000 && num4<2500){
    return 25;
  }
  else 
        if (num4 > 2500) {
    return 'cannot travel that far';
  }
}
calculatesFarePrice();


