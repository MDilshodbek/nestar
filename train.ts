console.log('Task - ZK');

function printNumbers(): void {
	let count = 1;

	const intervalId = setInterval(() => {
		console.log(count);
		if (count === 5) {
			clearInterval(intervalId);
		}
		count++;
	}, 1000);
}

printNumbers();
