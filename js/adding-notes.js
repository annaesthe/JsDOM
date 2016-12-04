//zamienianie elementów z HTML w JAVA np nazwy itp

// loguje element który chcę zmienić

var istniejacyWezel = document.getElementById('parFirst').children[2];
console.log(istniejacyWezel);

//tworzę nowy paragraf

var newElement = document.createElement('p');

//dodaje do paragrafu treść
var newContent = document.createTextNode('To jest nowy paragraf');

//do nowego elementu dodajemy węzeł który doda mu treść - czyli go wyświetla bo jeśli tego nie zrobimy to usuywa się tylko LINK 2

newElement.appendChild(newContent);

//teraz zamieniam stary paragraf na NOWY

document.getElementById('parFirst').replaceChild(newElement, istniejacyWezel);

//DODAJE BR PO KAŻDYM LINKU

var allLinks = document.getElementsByTagName('a');
    
for (var i=0; i<allLinks.length; i++) {
    var br = document.createElement('br');
    allLinks[i].parentNode.insertBefore(br, allLinks[i].nextSibling); //before przed drugim linkiem (nextSibling tag) dodaje br 
    allLinks[i].removeAttribute('class'); //usuwam klasę w linkach!!
}

