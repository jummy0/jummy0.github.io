var request = new XMLHttpRequest();
request.onload = function() {
var fileContent = this.responseText;
var upperBound = 100;
var lowerBound = 1;
var randomNumber = Math.round( Math.random() * (upperBound-lowerBound) + lowerBound; 
document.getElementById( 'random-phrase' ).innerHTML = randomLine;
document.getElementById( 'phrase-count' ).innerHTML = fileContentLines.length;
};
request.open( 'GET', 'pages/jontron.txt', true );
request.send();
