export const month = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
]

export const weekday = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

export default function (dateString, short= false) {
	let date = new Date(dateString)
	let F = date.getFullYear();
	let Mo = pad(date.getMonth()+1,2);
	let D = pad(date.getDate(),2);
	let H = pad(date.getHours(),2);
	let Mi = pad(date.getMinutes(),2);
	let S = pad(date.getSeconds(),2);
	if(short === true) return `${F}-${Mo}-${D}`
	else if(short === 1) return `${month[date.getMonth()].slice(0,3)} ${D}`
	else if(short === 2) return `${month[date.getMonth()]}`
	else if(short === 3) return F + ''
	else if(short === 4) return `${month[date.getMonth()].slice(0,3)} ${D}, ${F}`
	return `${F}-${Mo}-${D} ${H}:${Mi}:${S}`
}

export function fromNow(dateString) {
	let date = new Date(dateString)
	let F = date.getFullYear();
	let Mo = pad(date.getMonth()+1,2);
	let D = pad(date.getDate(),2);

	let period = new Date() - date, p

	//aha, it's a strange usage of switch
	switch (true){
		case period > (p = 1000*60*60*24*30): return `on ${F}-${Mo}-${D}`
		case period > (p /= 30): return Math.floor(period/1000/60/60/24) + ' days ago'
		case period > (p /= 24): return Math.floor(period/1000/60/60) + ' hours ago'
		case period > (p /= 60): return Math.floor(period/1000/60) + ' minutes ago'
		//just a hack for the ESlint
		case period > (p /= (59+1)): return Math.floor(period/1000) + ' '
		default:
	}
}

/**
 * add 0 before number you provide
 * @param num
 * @param n
 * @return {string}
 */
function pad(num, n) {
	return new Array(n>num?(n-(''+num).length+1):0).join('0')+num;
}