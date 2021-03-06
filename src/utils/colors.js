const colors = [
	[
		"#f7acbc",
		"#ef5b9c",
		"#feeeed",
		"#f05b72",
		"#f15b6c",
		"#f8aba6",
		"#f69c9f",
		"#f58f98",
		"#ca8687",
		"#f391a9",
		"#bd6758",
		"#d71345",
		"#d64f44",
		"#d93a49",
		"#b3424a",
		"#c76968",
		"#bb505d",
		"#987165",
		"#ac6767",
		"#973c3f",
		"#b22c46",
		"#a7324a",
		"#aa363d",
		"#ed1941",
		"#f26522",
		"#d2553d",
		"#b4534b",
		"#ef4136",
		"#c63c26",
		"#f3715c",
		"#a7573b",
		"#aa2116",
		"#b64533",
		"#b54334",
		"#853f04",
		"#840228",
		"#7a1723",
		"#a03939",
		"#8a2e3b",
		"#8e453f",
		"#8f4b4a",
		"#892f1b",
		"#6b2c25",
		"#733a31",
		"#54211d",
		"#78331e",
		"#53261f",
		"#f15a22",
		"#b4533c",
		"#84331f",
		"#f47a55",
		"#f15a22",
		"#f3704b",
		"#da765b",
		"#c85d44",
		"#ae5039",
		"#6a3427",
		"#8f4b38",
		"#8e3e1f",
		"#f36c21",
		"#b4532a",
		"#b7704f",
		"#de773f",
		"#c99979"
	],
	[
		"#deab8a",
		"#fedcbd",
		"#f47920",
		"#905a3d",
		"#8f4b2e",
		"#87481f",
		"#5f3c23",
		"#6b473c",
		"#faa755",
		"#fab27b",
		"#f58220",
		"#843900",
		"#905d1d",
		"#8a5d19",
		"#8c531b",
		"#826858",
		"#64492b",
		"#ae6642",
		"#56452d",
		"#96582a",
		"#705628",
		"#4a3113",
		"#412f1f",
		"#845538",
		"#8e7437",
		"#69541b",
		"#d5c59f",
		"#cd9a5b",
		"#cd9a5b",
		"#b36d41",
		"#df9464",
		"#b76f40",
		"#ad8b3d",
		"#dea32c",
		"#d1923f",
		"#c88400",
		"#c37e00",
		"#c37e00",
		"#e0861a",
		"#ffce7b",
		"#fcaf17",
		"#ba8448",
		"#896a45",
		"#76624c",
		"#6d5826",
		"#ffc20e",
		"#fdb933",
		"#d3c6a6",
		"#c7a252",
		"#dec674",
		"#b69968",
		"#c1a173",
		"#dbce8f",
		"#ffd400",
		"#ffd400",
		"#ffe600",
		"#f0dc70",
		"#fcf16e",
		"#decb00",
		"#cbc547",
		"#6e6b41",
		"#596032",
		"#525f42",
		"#5f5d46"
	],
	[
		"#817936",
		"#7f7522",
		"#80752c",
		"#87843b",
		"#726930",
		"#454926",
		"#2e3a1f",
		"#4d4f36",
		"#b7ba6b",
		"#b2d235",
		"#5c7a29",
		"#bed742",
		"#7fb80e",
		"#a3cf62",
		"#769149",
		"#6d8346",
		"#78a355",
		"#abc88b",
		"#74905d",
		"#cde6c7",
		"#1d953f",
		"#77ac98",
		"#007d65",
		"#84bf96",
		"#45b97c",
		"#225a1f",
		"#367459",
		"#007947",
		"#40835e",
		"#2b6447",
		"#005831",
		"#006c54",
		"#375830",
		"#274d3d",
		"#375830",
		"#27342b",
		"#65c294",
		"#73b9a2",
		"#72baa7",
		"#005344",
		"#122e29",
		"#293047",
		"#00ae9d",
		"#508a88",
		"#70a19f",
		"#50b7c1",
		"#00a6ac",
		"#78cdd1",
		"#008792",
		"#94d6da",
		"#afdfe4",
		"#5e7c85",
		"#76becc",
		"#90d7ec",
		"#009ad6",
		"#145b7d",
		"#11264f",
		"#7bbfea",
		"#33a3dc",
		"#228fbd",
		"#2468a2",
		"#2570a1",
		"#2585a6",
		"#1b315e"
	],
	[
		"#444693",
		"#2b4490",
		"#2a5caa",
		"#224b8f",
		"#003a6c",
		"#102b6a",
		"#426ab3",
		"#46485f",
		"#4e72b8",
		"#181d4b",
		"#1a2933",
		"#121a2a",
		"#0c212b",
		"#6a6da9",
		"#585eaa",
		"#494e8f",
		"#afb4db",
		"#9b95c9",
		"#6950a1",
		"#6f60aa",
		"#867892",
		"#918597",
		"#6f6d85",
		"#594c6d",
		"#694d9f",
		"#6f599c",
		"#8552a1",
		"#543044",
		"#63434f",
		"#7d5886",
		"#401c44",
		"#472d56",
		"#45224a",
		"#411445",
		"#4b2f3d",
		"#402e4c",
		"#c77eb5",
		"#ea66a6",
		"#f173ac",
		"#fffffb",
		"#fffef9",
		"#f6f5ec",
		"#d9d6c3",
		"#d1c7b7",
		"#f2eada",
		"#d3d7d4",
		"#999d9c",
		"#a1a3a6",
		"#9d9087",
		"#8a8c8e",
		"#74787c",
		"#7c8577",
		"#72777b",
		"#77787b",
		"#4f5555",
		"#6c4c49",
		"#563624",
		"#3e4145",
		"#3c3645",
		"#464547",
		"#130c0e",
		"#281f1d",
		"#2f271d",
		"#1d1626"
	]
]

/**
 *
 * @param count
 * @param [style]
 */
export default function (count, style= 'pink') {
	switch (style){
		case 'pink':
			if(count > 5) console.warn("Only 5 pink color provided")
			return randomColors(0, count, 0, 5)
		case 'blue':
			if(count > 23) console.warn("Only 5 pink color provided")
			return randomColors(2, count, 40, 63)
	}
}

function randomColors(row, count, start= 0, end= 63) {
	let values = colors[row].slice(start, end),len = values.length,
		result = []
	while(count --) result.push(...values.splice(random(0, len--)>>>0, 1))
	return result
}

function random(start, end) {
	return Math.random() * (end - start) + start
}