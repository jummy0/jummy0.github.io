var request = new XMLHttpRequest();
var data = [];
var fileContent = '';
request.onload = function() {
	fileContent = this.responseText;
	var fileContentRows = fileContent.split('\n').map(Function.prototype.call, String.prototype.trim);
	for (i = 0; i < fileContentRows.length; i++) {
		data[i] = fileContentRows[i].split('/').map(Function.prototype.call, String.prototype.trim);
	}
	var placementTableContent = '';
	for (i = 0; i < data.length; i++) {
		placementTableContent += '<tr>';
		for (j = 0; j < data[i].length; j++) {
			if (j == 1) {
				placementTableContent += '<td><img src="logo/' + data[i][j] + '"></td>';
			} else if (j == 2) {
				placementTableContent += '<td>Team ' + data[i][j] + '</td>';
			} else if (j == 3 && i == 0) {
				placementTableContent += '<td><div style="overflow:scroll;width:100%">' + data[i][j] + '</div></td>';
			} else {
				placementTableContent += '<td>' + data[i][j] + '</td>';
			}
		}
		placementTableContent += '</tr>';
	}
	document.getElementById('placement-data').innerHTML = placementTableContent;
};
request.open( 'GET', 'database.dat', true );
request.send();
