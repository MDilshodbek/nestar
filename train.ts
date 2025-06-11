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

console.log('Task - ZL');

const stringToKebab = (input: string): string => {
	return input.trim().toLowerCase().replace(/\s+/g, '-');
};

console.log(stringToKebab('I Love Kebab'));
