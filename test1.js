/* Returns template literal with random rgb values */
function randomColor() {
	return `rgb( ${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255} )`;
}

/*
 * Creates an amount of span elements with random background colour styles
 * qty - The amount of span elements we want
 * ./test1.css styles span elements as circles
*/
function makeCircles(qty) {
	let main = document.querySelector("main");
	for (let i=0; i<parseInt(qty); i++) {
		let span = document.createElement("span");
		span.style.background = randomColor();
		main.appendChild(span);
	}
}
makeCircles(50);
