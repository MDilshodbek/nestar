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

// console.log('Task - ZO');

// const areParenthesesBalanced = (input: string): boolean => {
//   let balance = 0;

//   for (const char of input) {
//     if (char === '(') {
//       balance++;
//     } else if (char === ')') {
//       balance--;
//       if (balance < 0) {
//         return false;
//       }
//     }
//   }

//   return balance === 0;
// }

// console.log(areParenthesesBalanced("string()ichida(qavslar)soni()balansda"));
// console.log(areParenthesesBalanced("no(balans(qavs)"));
// console.log(areParenthesesBalanced("extra)open()"));

// console.log('Task - ZP');

// function areArraysEqual(a: number[], b: number[]): boolean {
// 	const count = (arr: number[]) =>
// 		arr.reduce((acc, val) => {
// 			acc.set(val, (acc.get(val) || 0) + 1);
// 			return acc;
// 		}, new Map<number, number>());

// 	const mapA = count(a);
// 	const mapB = count(b);

// 	if (mapA.size !== mapB.size) return false;

// 	for (const [key, val] of mapA) {
// 		if (mapB.get(key) !== val) return false;
// 	}

// 	return true;
// }

// console.log(areArraysEqual([1, 2, 3], [3, 1, 2]));
// console.log(areArraysEqual([1, 2, 3], [3, 1, 2, 1]));
// console.log(areArraysEqual([1, 2, 3], [4, 1, 2]));
// console.log(areArraysEqual([1, 2, 2], [2, 1, 2]));

// console.log('Task - ZQ');

// const findDuplicates = (arr: number[]): number[] => {
// 	const countMap = new Map<number, number>();
// 	const result: number[] = [];

// 	for (const num of arr) {
// 		countMap.set(num, (countMap.get(num) || 0) + 1);
// 	}

// 	for (const [num, count] of countMap.entries()) {
// 		if (count >= 2) {
// 			result.push(num);
// 		}
// 	}

// 	return result;
// };

// console.log(findDuplicates([1, 2, 3, 4, 5, 4, 3, 4]));

// console.log('Task - ZR');

// const countNumberAndLetters = (input: string): { number: number; letter: number } => {
// 	let number = 0;
// 	let letter = 0;

// 	for (const char of input) {
// 		if (/[0-9]/.test(char)) {
// 			number++;
// 		} else if (/[a-zA-Z]/.test(char)) {
// 			letter++;
// 		}
// 	}

// 	return { number, letter };
// };

// console.log(countNumberAndLetters('string152%\\¥'));

// console.log('Task - ZS');

// const singleNumber = (arr: number[]): number | null => {
// 	const map = new Map<number, number>();

// 	for (const num of arr) {
// 		map.set(num, (map.get(num) ?? 0) + 1);
// 	}

// 	for (const [key, value] of map.entries()) {
// 		if (value === 1) return key;
// 	}

// 	return null;
// };

// console.log(singleNumber([4, 2, 1, 2, 1]));

console.log('Task - ZT');

function firstUniqueCharIndex(str: string): number {
	const map = new Map<string, number>();

	// 1-bosqich: harflarni va indekslarini eslab qolish
	for (let i = 0; i < str.length; i++) {
		if (map.has(str[i])) {
			map.set(str[i], -1); // Takrorlangan belgilar uchun -1 saqlaymiz
		} else {
			map.set(str[i], i);
		}
	}

	// 2-bosqich: birinchi takrorlanmagan belgining indeksini topamiz
	for (const [char, index] of map.entries()) {
		if (index !== -1) {
			return index;
		}
	}

	return -1;
}

console.log(firstUniqueCharIndex('success')); 
console.log(firstUniqueCharIndex('stamp'));
console.log(firstUniqueCharIndex('level')); 
