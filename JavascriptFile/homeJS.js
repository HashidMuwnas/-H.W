let photo = document.querySelector('.photo1');
let h1=document.querySelector('.h1');
let p = document.querySelector('.p');
let mercury = `dddd`;
let venus = `ggg`;
let section =Array.from( document.querySelectorAll('.animation'));

window.onscroll = function(){
       console.log(window.scrollY);
       if(window.scrollY>=450){
              section[0].style.display='block';
       }
       else{
              section[0].style.display='none';
       }
       if(window.scrollY>=600){
              section[1].style.display='block';
       }
       else{
              section[1].style.display='none';
       }
       if(window.scrollY>=700){
              section[2].style.display='block';
       }
       else{
              section[2].style.display='none';
       }
       if(window.scrollY>=900){
              section[3].style.display='block';
       }
       else {section[3].style.display='none';}
}


let solarSystem=`
Central Processing Unit (CPU): Controls the operation of the computer and
                        Performs its own data processing functions; It is often referred to simply as the processor.
                        • Main memory: stores data.
                        • I/O: Transfers data between the computer and its external environment.
                        • Linking system: some of the mechanisms that provide communication
                        Between the CPU, main memory and I/O. A common example of system linking
                        Via a bus system, consisting of a number of conducting
                        The wires to which all other components are connected There may be one or more of each of the aforementioned components.
                        Traditionally, there has been just a single processor. In recent years, there has been
                        increasing use of multiple processors in a single computer. Some design issues relating
                        to multiple processors crop up and are discussed as the text proceeds; Part Five
                        focuses on such computers.
                        
                        Each of these components will be examined in some detail in Part Two.
                        However, for our purposes, the most interesting and in some ways the most complex
                        component is the CPU. Its major structural components are as follows:
                        
                        • Control unit: Controls the operation of the CPU and hence the computer.
                        
                        • Arithmetic and logic unit (ALU): Performs the computer’s data processing
                        functions.
                        
                        • Registers: Provides storage internal to the CPU.
                        
                        • CPU interconnection: Some mechanism that provides for communication
                        among the control unit, ALU, and registers.
                        
                         Part Three covers these components, where we will see that complexity is added by
                        the use of parallel and pipelined organizational techniques. Finally, there are several
                        approaches to the implementation of the control unit; one common approach is
                        a microprogrammed  implementation. In essence, a microprogrammed control unit
                        operates by executing microinstructions that define the functionality of the control
                        unit. With this approach, the structure of the control unit can be depicted, as in
                        Figure 1.1. This structure is examined in Part Four..`


var sliderImg = Array.from(document.querySelectorAll('.slider a img'));//get all photos الحصل على جميع الصور

var imgCount = sliderImg.length;//= 3
var firstSlide = 1;
var slideNO = document.getElementById('slider-NO');
var pre = document.getElementById('pre');
var nex = document.getElementById('nex');
var link1= document.getElementById('1');
var link2= document.getElementById('2');
var link3= document.getElementById('3');
var openAndClose = document.getElementById("0");

var headerUL = document.getElementById("myNavBar");










function changePhoto(srcs,id){
    photo.src=srcs;
    switch(id){
        case '1':h1.innerHTML='Mercury';
               p.innerHTML = mercury;
                                  
                   
               break;
        case '2':h1.innerHTML='venus';
               p.innerHTML ='venus planet';
               break;
        case '3':h1.innerHTML='earth';
               p.innerHTML ='earth planet';
               break;
        case '4':h1.innerHTML='mars';
               p.innerHTML ='mars planet';
               break;        
        case '5':h1.innerHTML='saturn';
               p.innerHTML ='saturn planet';
               break; 
        case '6':h1.innerHTML='jupiter';
               p.innerHTML ='jupiter';
               break; 
        case '7':h1.innerHTML='neptune';
               p.innerHTML ='neptune planet';
               break; 
        case '8':h1.innerHTML='uranus';
               p.innerHTML ='uranus planet';
               break; 
        case '9':h1.innerHTML='pluto';
               p.innerHTML ='pluto planet';
               break; 
        case '10':h1.innerHTML='the sun';
               p.innerHTML ='the sun star';
               break;
               case '11':h1.innerHTML='The solar system';
               p.innerHTML =solarSystem;
               break;
    }
}
nex.onclick = nextSlide;
pre.onclick = preSlide;

changeLink();
var makeUL = document.createElement('ul');//creat ul
makeUL.setAttribute('id','newUL');//<ul id='newUL'>


for(var i = 1;i<=imgCount;i++){
       var makeLI = document.createElement('li');
       makeLI.setAttribute('data-index',i);
       makeLI.appendChild(document.createTextNode(''));
       makeUL.appendChild(makeLI);

}

document.getElementById('ind').appendChild(makeUL);


var theNewUL=document.getElementById('newUL');

var TheLIItem = Array.from(document.querySelectorAll('#newUL li'));

for(i=0;i<TheLIItem.length;i++){
       TheLIItem[i].onclick = function(){
              firstSlide = parseInt(this.getAttribute('data-index'));
              check();
              changeLink();
       }
}

check();

function nextSlide(){
       if(nex.classList.contains('disabled')){
          firstSlide=1;
          check();
       }

       else{
              firstSlide++;
              check();
       }
       changeLink();
}

function preSlide(){
       if(pre.classList.contains('disabled')){
              firstSlide=imgCount;
              check();
           }
    
           else{
                  firstSlide--;
                  check();
           }
           changeLink();
}
    
function check(){
       // يعرض حركة الخلفية الكمبيرتر
       slideNO.textContent = 'Web technology demo'; 
      
       removeActive(); 
      
       sliderImg[firstSlide-1].classList.add('active');

       theNewUL.children[firstSlide-1].classList.add('active');
       
       if(firstSlide == 1){
              pre.classList.add('disabled');
       }
       else{
              pre.classList.remove('disabled');
       }
       
       if(firstSlide == imgCount){
              nex.classList.add('disabled');
       }
       else{
              nex.classList.remove('disabled'); 
       }
       
}


function removeActive(){
      sliderImg.forEach(function(img){
       img.classList.remove('active');
      });
      TheLIItem.forEach(function(items){
       items.classList.remove('active');
      });
}

function changeLink(){
       // وظيفة تغير الربط
     if(firstSlide === 1){
       var value1 = link1.getAttribute('href');
       link3.setAttribute('href',value1);
     }else if(firstSlide === 2){
            var value1 = link2.getAttribute('href');
            link3.setAttribute('href',value1);
     }else{
       var value2 = link3.getAttribute('href');
       link3.setAttribute('href','../img/thumbnail_photos/1693314581595.jpg'); 
     }

}


function openclose(){
       if(openAndClose.id==="1"){
           headerUL.style.display = "none";
           openAndClose.id="0";
                   
            }else {
               openAndClose.id="1";
            headerUL.style.display = "block";
            
            }   
            
     }


setInterval(nextSlide,5000);



