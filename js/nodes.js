var paragraphParent = document.getElementsByTagName('p')[0].parentNode;

console.log(paragraphParent);


var linkOne = document.getElementById('parFirst').children[1];
console.log(linkOne);

var sibling = document.getElementById('parFirst').children[0].nextSibling.lastChild;
console.log(sibling);