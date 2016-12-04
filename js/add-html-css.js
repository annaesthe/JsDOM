'use strict'

 //określamy co zmieniamy - myheader i potem dodajemy w innerhtml tresc nagłówka 

var mainHeader = document.getElementById('myheader');
mainHeader.innerHTML = "Treść nagłówka";

var link = document.getElementsByClassName("link")[0];

 //zmiana klasy 

link.className = "nowa-klasa";

link.href = "http://akademia108.pl";

mainHeader.style.color = "#56ff36";

// EVENTY to zdarzenia które są reakcję na akcję użytkownika
// CLICK po kliknięciu
// DBLCLICK
// MOUSEOVER
// MOUSEOUT