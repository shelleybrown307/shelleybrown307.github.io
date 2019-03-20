
/*
 $('.dropdown').ready(function () {
 $('.dropdown-toggle').on('click', (function () {
 $('.dropdown-toggle').dropdown('active');
 $(this).parent().show();
 }))
})
*/
var dropdown1 = false;
var dropdown2 = false;
var dropdown3 = false;
var btn_height = "35px";


function toggleDP1(){
  var dpc1 = document.getElementById("dropdown-container-1");
  if(dropdown1){
    dropdown1 = false;
    dpc1.style.maxHeight=btn_height;
  }else{
    dropdown1 = true;
    dpc1.style.maxHeight="125px";
  }
}

function toggleDP2(){
  var dpc2 = document.getElementById("dropdown-container-2");
  if(dropdown2){
    dropdown2 = false;
    dpc2.style.maxHeight=btn_height;
  }else{
    dropdown2 = true;
    dpc2.style.maxHeight="150px";
  }
}



// dpc2.style.opacity = 0";
// dpc2.style.opacity = 1"; 

function toggleDP3(){
  var dpc3 = document.getElementById("dropdown-container-3");
  if(dropdown3){
    dropdown3 = false;
    dpc3.style.maxHeight=btn_height;
  }else{
    dropdown3 = true;
    dpc3.style.maxHeight="150px";
  }
}


var img2visble = false;

function toggleImg2(){
  var dpc2 = document.getElementById("img2hidden");
  if(img2visble){
    img2visble = false;
    dpc2.style.opacity=0;
  }else{
    img2visble = true;
    dpc2.style.opacity=1;
  }
}


function load(){
  var dpbtn1 = document.getElementById("dropdownMenu1");
  dpbtn1.addEventListener('click',toggleDP1); 
  
  
  var dpbtn2 = document.getElementById("dropdownMenu2");
  dpbtn2.addEventListener('click',toggleDP2); 


  var dpbtn3 = document.getElementById("dropdownMenu3");
  dpbtn3.addEventListener('click',toggleDP3); 


  var radiobtn1 = document.getElementById("option_1");
  radiobtn1.addEventListener('click',toggleImg2); 

}



