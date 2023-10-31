var openAndClose = document.getElementById("0");
var headerUL = document.getElementById("myNavBar");

function openclose(){
    if(openAndClose.id==="1"){
        headerUL.style.display = "none";
        openAndClose.id="0";
                
         }else {
            openAndClose.id="1";
         headerUL.style.display = "block";
         
         }   
         
  }

