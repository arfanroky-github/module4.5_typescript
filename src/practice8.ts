type Direction = "red" | "green" | "blue";

function valueMoving(string: Direction, isTrue: boolean): string {
  if (isTrue) {
    return string.toUpperCase();
  }
  return string.toLowerCase();
}

const uppercaseValue = valueMoving("blue", true);
const lowerCaseValue = valueMoving("red", false);


console.log(uppercaseValue, lowerCaseValue)
