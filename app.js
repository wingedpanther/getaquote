
window.onload=pageloads();//getquote();
document.getElementById('btnget').addEventListener('click',getquote);
function getquote(){
    // 
    fetch('https://cors.now.sh/https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en',{mode: 'cors'})
       .then((res) => res.json())
    .then((data) => {
       document.getElementById('name').innerHTML = '"' + data.quoteText + '"';
      document.getElementById('description').innerHTML = 'By '+ data.quoteAuthor;
       document.getElementById('sharea').href="whatsapp://send?text=*"+data.quoteText.trim()+"*"+" - _By, "+ data.quoteAuthor+"_"; 
                });
    //.catch((err) => console.log(err));
    //quote bg header color 
    var element = document.getElementById('blue_bg');
    element.style.background = getRandomColor();
    
   }
  //Generates random color
  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  function setRandomColor() {
    $("#blue_bg").css("background-color", getRandomColor());
  }
   function isSmartPhone(){
    var isMobile = ('ontouchstart' in document.documentElement);
   
    if (isMobile) {
      /* your code here */
      document.getElementById('share').style.visibility='visible';
    }
   
   }
  function pageloads(){
    getquote();
    isSmartPhone();
   }