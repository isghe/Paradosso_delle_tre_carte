const randInclusive = (a, b) => Math.floor(Math.random() * (b + 1 - a)) + a;

const testRand = () => {
	for (let i = 0; i < 10; ++i) {
		const value01 = randInclusive(0, 1);
		const value13 = randInclusive(1, 3);
		console.log({i, value01, value13});
	}
};

const isGoldCard = card => card[0] === 1 && card[1] === 1;

const testNCards = (configuration) => {
	const cards = [];
	for (let i = 0; i < configuration.gold; ++i) {
		cards.push([1, 1]);
	}

	for (let i = 0; i < configuration.mix; ++i) {
		if (randInclusive(0, 1)) {
			cards.push([0, 1]);
		} else {
			cards.push([1, 0]);
		}
	}

	for (let i = 0; i < configuration.silver; ++i) {
		cards.push([0, 0]);
	}

	console.log(cards);
	const result = {victories: 0, defeats: 0};

	for (let i = 0; i < 1_000_000; ++i) {
		const rand1 = randInclusive(0, cards.length - 1);
		if (rand1 < configuration.gold + configuration.mix) {
			const rand2 = randInclusive(0, 1);
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
	testNCards({gold: 1, mix: 1, silver: 0});
};

main();
