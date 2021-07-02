module.exports = (name) =>
	name
		.split("-")
		.map((n) => `${n.charAt(0).toUpperCase()}${n.slice(1)}`)
		.join("");
