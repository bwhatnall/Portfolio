const horizontal = document.getElementById('button_horizontal');
const vertical = document.getElementById('button_vertical');
const image = document.getElementById('image');
const button = document.getElementById("color");

function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
  
    document.body.style.background = bgColor;
    }

horizontal.addEventListener('click', function(){
    image.classList.toggle("flip_horizontal");
})

vertical.addEventListener('click', function(){
    image.classList.toggle("flip_vertical");
})

button.addEventListener('click', function(){
    random_bg_color();
})