const generator = require('generate-password');

const  password = generator.generate({
	length: 12,
	numbers: true
});


console.log(password);