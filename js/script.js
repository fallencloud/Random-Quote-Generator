/*
Author: Sharina V. Jones
Project Source: Treehouse Techdegree
Project Scope: 
	In this project, you'll create an app that displays random famous quotes each time a button is clicked. You can display a quote from a famous athlete, politician, or historical figure.
	Each quote object in the quotes array should have the following properties:
		A quote property which contains a string: the text of the quote that will be displayed on the page.

		A source property which contains a string identifying the creator of the quote. For example: "Mark Twain" or "Traditional Irish proverb.”

		An optional citation property which contains a string identifying where the quote comes from, like a speech or publication. For example, "Famous Anonymous Jokes." If there is no known publication, do not include this property on the object.
		
		An optional year property which contains a number identifying the date of the quote. For example, 1997. If there is no known date, then do not include this property on the object.
*/
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
function printQuote() {
	//declarations
	var body = document.getElementById('body');
	var quoteBox = document.getElementById('quote-box');

	//return a random color
	var randomColor = getRandomColor();
	//update the body and button
	body.style.backgroundColor = randomColor;
	this.style.backgroundColor = randomColor;

	//get the random quote
	var quotes = getRandomQuote();

	//create the message
	var msg = '<p class="quote">' + quotes.saying + '</p>';
	msg += '<p class="source">' + quotes.source;
	if (quotes.cite) //if the citatione exists
		msg += '<span class="citation">' + quotes.cite + '</span>';
	if (quotes.year) //if the year exists
		msg += '<span class="year">' + quotes.year + '</span>';
	msg += '</p>';
	quoteBox.innerHTML = msg;

}//end function printQuote

function getRandomColor ()
{
	var red = Math.floor(Math.random() * 255) + 1;
	var green = Math.floor(Math.random() * 255) + 1;
	var blue = Math.floor(Math.random() * 255) + 1;
	var bgColor = "rgb(" + red + "," + green + "," + blue + ")";

	return bgColor;
}//end function getRandomColor

function getRandomQuote() {
	var quote = [
		{
			saying: "Moral indignation is jealousy with a halo.",
			source: "H. G. Wells",
			cite: "The Wife of Sir Isaac Herman",
			year: "1914"
		},

		{
			saying: "Angry people are not always wise.",
			source: "Jane Austen",
			cite: "Pride and Prejudice"
		},

		{
			saying: "Be yourself; everyone else is already taken.",
			source: "Oscar Wilde"
		},
		{
			saying: "Nothing in life is to be feared, it is only to be understood.",
			source: "Marie Curie",
			cite: "Société medicale des hôpitaux universitaires de Québec",
			year: "1951"
		},
		{
			saying: "Code... y u no work (-_-)",
			source: "Sharina Jones", 
			cite: "Her dining room",
			year: "2017"
		}
	];

	//get a number between 0 and the length of the quotes array
	var quoteIndex = Math.floor(Math.random() * quote.length);

	return quote[quoteIndex];
}//end function getRandomQuote