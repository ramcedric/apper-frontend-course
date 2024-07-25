function transform(nums) {
  //Multiply number to its own value and sort it from lowest to highest
  return nums.map(num => num * num).sort((a, b) => a - b);
}

const nums = [4, 9, 5, 3, 8];
const sortedSquaredNums = transform(nums);
console.log(sortedSquaredNums); //[9, 16, 25, 64, 81]