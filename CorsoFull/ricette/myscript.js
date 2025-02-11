let requestURL = "https://newsapi.org/v2/everything?q=italy&language=it&apiKey=9e265d8dd94046ac8b325e9b5d7f3478";
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
