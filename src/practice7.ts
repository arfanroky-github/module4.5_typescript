const numbers: number[] = [1, 2, 3, 4, 5];

const min_max_value: { min: number; max: number } = {
  min: 0,
  max: 0,
};

function findMinAndMaxValue(...numbers: number[]): void {
    const minValue = Math.min(...numbers);
    const maxValue = Math.max(...numbers)
    min_max_value.min = minValue;
    min_max_value.max =maxValue;
}


findMinAndMaxValue(...numbers)
console.log(min_max_value)

