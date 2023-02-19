function textDisappear(id, sec) {
  elem = document.getElementById(id);
  setTimeout(elem.style.display = "none", sec * 1000);
}

function showElement(n) {
  var elem = document.getElementById(n);
  elem.style.display = "block";
}

function hideElement(n) {
  var elem = document.getElementById(n);
  elem.style.display = "none";
}

function setBackground(image) {
  document.body.style.backgroundImage = `url('assets/${image}')`;
  document.body.style.backgroundSize ="100% 100%";
}

function backgroundSeq(image1, image2, sec) {
  setBackground(image1);
  setTimeout(setBackground(image2), sec * 1000);
}

/** night one background stuff ** */
function fadeBackground() {
  document.body.style.backgroundColor = 'black';
  document.body.style.backgroundImage = '';
  
  setTimeout(function(){
    document.body.style.background = "#2B2E63";
    setBackground("diner.png")
    // document.body.style.backgroundImage = "url('assets/diner.png')";
    // document.body.style.backgroundSize ="100% 100%";
    }, 3000);
}

/**const contbutton2 = document.getElementById('contbutton2');

contbutton2.addEventListener('click', function onClick(event) {
  var old_bg = document.body.style.background;
  document.body.style.backgroundColor = 'black';
  
  setTimeout(function(){
    document.body.style.background = old_bg;
    document.body.style.backgroundImage = "url('assets/diner.png')";
    document.body.style.backgroundSize ="100% 100%";
    }, 3000);
  
}); ** */
