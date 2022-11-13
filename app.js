const rand = (a, b) => Math.floor(Math.random() * (b + 1 - a)) + a;

const testRand = () => {
	for (let i = 0; i < 10; ++i) {
		const value01 = rand(0, 1);
		const value13 = rand(1, 3);
		console.log({i, value01, value13});
	}
};

const isGoldCard = card => card[0] === 1 && card[1] === 1;

const testNCards = (gold, mix, silver) => {
	const cards = [];
	for (let i = 0; i < gold; ++i) {
		cards.push([1, 1]);
	}

	for (let i = 0; i < mix; ++i) {
		if (rand(0, 1)) {
			cards.push([0, 1]);
		} else {
			cards.push([1, 0]);
		}
	}

	for (let i = 0; i < silver; ++i) {
		cards.push([0, 0]);
	}

	console.log(cards);
	const result = {victories: 0, defeats: 0};

	for (let i = 0; i < 1_000_000; ++i) {
		const rand1 = rand(0, cards.length - 1);
		if (rand1 < gold + mix) {
			const rand2 = rand(0, 1);
			if (cards[rand1][rand2] === 1) {
				if (isGoldCard(cards[rand1])) {
					++result.victories;
				} else {
					++result.defeats;
				}
			}
		}
	}

	console.log({result, prob: result.victories / (result.victories + result.defeats)});
};

const main = () => {
	testRand();
	testNCards(1, 1, 0);
};

main();
