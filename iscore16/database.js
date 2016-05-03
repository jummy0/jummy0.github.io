var request = new XMLHttpRequest();
var data = [];
request.onload = function() {
	var fileContent = this.responseText;
	var fileContentRows = fileContent.split( '\n' ).trim;
	for (i = 0; i < fileContentRows.length; i++) {
		data[i] = fileContentRows.split('/').trim;
	}
};
request.open( 'GET', 'database.dat', true );
request.send();
var placementTableContent = '';
for (i = 0; i < data.length; i++) {
	placementTableContent += '<tr>';
	for (j = 0; j < data[i].length; j++) {
		placementTableContent += '<td>' + data[i][j] + '</td>';
	}
	placementTableContent += '</tr>';
}
document.getElementById('placement-table').innerHTML = placementTableContent;
