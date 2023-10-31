let log = document.getElementById("log");
let regist = document.getElementById("reg");
let first = document.getElementById("first");
let seconed = document.getElementById("second");
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



function activechoice(id){
    if(id ==="log"){
        log.style.boxShadow=" 0px 5px 1px rgb(103, 33, 233)";
        regist.style.boxShadow="none";
        first.style.display="block";
        seconed.style.display="none";
        

    }else{
        regist.style.boxShadow=" 0px 5px 1px rgb(103, 33, 233)";
        log.style.boxShadow="none";
        first.style.display="none";
        seconed.style.display = "block";
    }
}

