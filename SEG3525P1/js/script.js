document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        var maxH = this.document.body.scrollHeight;
        console.log(maxH);
        var thresH = maxH >= 3144 &&  maxH<=3410 ? 720 : 920;
        if (window.scrollY > thresH) {
          document.getElementById('page_navbar').classList.add('fixed-top');
          // add padding top to show content behind navbar
          navbar_height = document.querySelector('.navbar').offsetHeight;
          document.body.style.paddingTop = navbar_height + 'px';
        } else {
          document.getElementById('page_navbar').classList.remove('fixed-top');
           // remove padding top from body
          document.body.style.paddingTop = '0';
        } 
    });
  });

function clickFcn(){
  window.alert("Booking confirmed. See you then !");
}
  