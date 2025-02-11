let requestURL = "https://newsapi.org/v2/everything?q=italy&language=it&apiKey=00b640f57f95429187d445df90da2046";
let notizie;
let i = 0;
fetch(requestURL).then(function(response) {
return response.json();
 }).then(function(json) {
notizie = json.articles;
updateImage();
 }).catch(function(err) {
    console.log(err);
 });



 
function updateImage() {
    if (notizie && notizie.length > 0) {
        document.getElementById('imga').src = notizie[i].urlToImage;
        document.getElementById('titolo').innerHTML = notizie[i].author;
    }
}

function addimg() {
    if (notizie && notizie.length > 0) {
        i = (i + 1) % notizie.length;
        updateImage();
    }
}

function subimg() {
    if (notizie && notizie.length > 0) {
        i = (i - 1 + notizie.length) % notizie.length;
        updateImage();
    }
}
