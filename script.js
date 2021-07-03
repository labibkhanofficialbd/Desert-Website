function showP(image) { 
    document.getElementById('sp').style.backgroundImage = 'linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url(' + image +') ';
};
function changeT(text){
    document.getElementById('name').innerHTML = text
}