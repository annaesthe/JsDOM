// EVENTY W JS

//addEventListener

var secondLink =  document.getElementsByTagName("a")[1];
secondLink.onclick = alarm;

var thirdLink = document.getElementsByTagName("a")[2];
thirdLink.addEventListener('click', alarm);

function alarm(e) {
    e.preventDefault(); //zablokowaliśmy domyślne zdarzenie
//    alert('klinięto w link');
}


// po kliknięciu w nagłówek zmienia się kolor 
// musimy zdefiniować zmienną i przypisać ją do dokumentu
// następnie tej zmiennej dajemy AKCJĘ
// w funkcji wykorzystujemy AKCJĘ i opisujemy ją: tutaj dajemy zmienna --> co zmienia --> wartość

//var header = document.getElementById("myheader");
//header.onmouseover = resize;
//
//function resize() {
//    header.style.fontSize = "70px";
//}

var header = document.getElementById("myheader");
header.onmouseover = resize;
header.onmouseout = resize;

function resize(e) {
    
    if (e.type == 'mouseover') {
        header.style.color = "red";
    } else {
        header.style.color = "inherit";
    }
}

// JAK SPRAWDZIĆ JAKI DOKUMENT MA TYYYP??

 //--> !!!   console.log(typeof e.type);  !!! <-----


// onmouseover -- > ON wowołuje zdarzenie
// mouseover --> SAMA NAZWA ZDARZENIA


document.getElementsByTagName('header')[0].onclick = klikHeader;
function klikHeader() {
    alert("kliknąłeś w header");
}