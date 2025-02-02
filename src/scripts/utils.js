let button = document.querySelector('#btn2');
let yesButton = document.querySelector('#btn1');
let differentText = ['Are you sure?', 'Really sure?', 'Are you positive?', 'pookie please', 'Just think about it!', 'If you say no, I will be really sad...', "I'll be very sad..."];
let differentFontSizes = ['1.5rem', '2.5rem', '3.5rem', '5rem', "10rem", "20rem", "30em"]
let differentPaddingSizes = ['', '0.20em', '0.30em', '0.46em', "0.52em", "0.66em", "0.8em"]
let iteration = 1;

button.addEventListener('click', applyChanges);
yesButton.addEventListener('click', function (){  });

function applyChanges(){
 if(differentText.length == iteration+1){
  button.remove();
 }

 yesButton.style.fontSize = differentFontSizes[iteration];
 yesButton.style.padding = differentPaddingSizes[iteration] + ' 1rem';

 button.innerHTML = differentText[iteration];
 iteration++;
}