# Marktplaats advertenties bookmarklet
Dit is een supersimpele bookmarklet die de advertenties die adBlocker laat staan op Marktplaats weghaald.

## Gebruik
Je kunt deze [link](javascript:!function(\){for(var e=document.getElementsByClassName("location-name"\),n=0;n<e.length;n++\)if(0==e[n].innerHTML.indexOf("Bezorgt in"\)\){var t=e[n].parentNode.parentNode.parentNode.parentNode;t.style.display="none"}}(\);) gebruiken om de bookmarklet toe te voegen.