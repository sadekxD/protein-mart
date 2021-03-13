const a = [
	{ q: 2, name: "sadek", price: 50 },
	{ q: 4, name: "irfan", price: 100 },
];

let sum = 0;

for (var i = 0; i < a.length; i++) {
	sum = sum + a[i].q * a[i].price;
}

console.log(sum);
