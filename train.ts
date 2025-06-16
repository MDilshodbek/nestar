// console.log('Task - ZK');

// function printNumbers(): void {
// 	let count = 1;

// 	const intervalId = setInterval(() => {
// 		console.log(count);
// 		if (count === 5) {
// 			clearInterval(intervalId);
// 		}
// 		count++;
// 	}, 1000);
// }

// printNumbers();

// console.log('Task - ZM');

// function reverseInteger(num: number): number {
// 	const reversedStr = num.toString().split('').reverse().join('');
// 	return parseInt(reversedStr, 10);
// }

// console.log(reverseInteger(123456789));

// console.log('Task - ZL');

// const stringToKebab = (input: string): string => {
// 	return input.trim().toLowerCase().replace(/\s+/g, '-');
// };

// console.log(stringToKebab('I Love Kebab'));

// console.log('TASK - ZN');

// function rotateArray(arr: number[], index: number): number[] {
// 	if (index < 0 || index >= arr.length) {
// 		throw new Error('Index is out of array bounds');
// 	}

// 	const before = arr.slice(0, index + 1);
// 	const after = arr.slice(index + 1);

// 	return [...after, ...before];
// }

// console.log(rotateArray([1, 2, 3, 4, 5, 6], 3));

console.log('Task - ZO');

const areParenthesesBalanced = (input: string): boolean => {
  let balance = 0;

  for (const char of input) {
    if (char === '(') {
      balance++;
    } else if (char === ')') {
      balance--;
      if (balance < 0) {
        return false;
      }
    }
  }

  return balance === 0;
}

console.log(areParenthesesBalanced("string()ichida(qavslar)soni()balansda"));
console.log(areParenthesesBalanced("no(balans(qavs)"));
console.log(areParenthesesBalanced("extra)open()")); 

