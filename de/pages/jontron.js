var request = new XMLHttpRequest();
request.onload = function() {
var fileContent = this.responseText;
var fileContentLines = fileContent.split( '\n' );
var randomLineIndex = Math.floor( Math.random() * fileContentLines.length );
var randomLine = fileContentLines[ randomLineIndex ];
document.getElementById( 'random-phrase' ).innerHTML = randomLine;
document.getElementById( 'phrase-count' ).innerHTML = fileContentLines.length;
};
request.open( 'GET', 'pages/jontron.txt', true );
request.send();
