function myFunction() {
    alert('Scroll');
  }
  
  function cart() {
    alert('added to cart')
  }

  var varguImazheve = [
    'img/foto1.jpg',
    'img/foto2.jpg',
    'img/foto3.jpg',
    'img/foto4.jpg',
    'img/foto5.jpg',
    'img/foto6.jpg',
 ];

var index = 0;
const koha = 1500;

function krijoSlider() {
    document.getElementById('imazhi').src = varguImazheve[index];
    index++;

    if(index == varguImazheve.length){
        index = 0;
    }

    setTimeout("krijoSlider()", koha);
}

krijoSlider(); 