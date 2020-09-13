var url_str = {
    url: "https://radiant-sierra-73200.herokuapp.com/"
};

function Finalmake() {
    selected_ing.forEach(element => {
        url_str.url += "i" + element + "%20";
    });
    selected_m1.forEach(element => {
        url_str.url += "m" + element + "%20";
    });
    selected_m2.forEach(element => {
        url_str.url += "m" + element + "%20";
    });
    
}
const $divElem5 = document.getElementById('link')

let html5 =`<a href=${url_str.url}>Go to Recipe</a>`

$divElem5.innerHTML += html5
