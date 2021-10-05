const fs = require('fs');
const pdf = require('pdf-parse');
// const ab = document.getElementById("our-text");node node.js
const express = require("express");
const path = require("path");
const app = express();

const port = 5500;


let dataBuffer = fs.readFileSync('./pdf/A.pdf');

pdf(dataBuffer).then(function(data) {

	// number of pages
	console.log(data.numpages);
	// number of rendered pages
	console.log(data.numrender);
	// PDF info
	console.log(data.info);
	// PDF metadata
	console.log(data.metadata); 
	// PDF.js version
	// check https://mozilla.github.io/pdf.js/getting_started/
	console.log(data.version);
	// PDF text
    console.log(data.text);
    // ab.innerText(data.text); 
        
});
app.set("view engine", "hbs");

app.get("", (req, res) =>{
	res.render(index);
});

app.listen(port, () =>
{
	console.log(`listening to port ${port}`);
});
