javascript: (function () { 
	var elems = document.getElementsByClassName('location-name');
	for (var i = 0; i < elems.length; i++) {
		if(elems[i].innerHTML.indexOf('Bezorgt in') == 0) {
			var outerElem = elems[i].parentNode.parentNode.parentNode.parentNode;
			outerElem.style.display = 'none'
		}
	};
 })();