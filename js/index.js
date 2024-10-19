var imgList=Array.from(document.querySelectorAll("img"))
var slider=document.querySelector(".slider");
var sliderItem=document.querySelector(".slider-item");
var closeBtn=document.querySelector("#close");
var prevBtn=document.querySelector("#prevBtn");
var nextBtn=document.querySelector("#nextBtn")


var curentIndex =0;
for (let i = 0; i < imgList.length; i++) {
    
    console.log(sliderItem);
    

imgList[i].addEventListener("click",function(e){

curentIndex =imgList.indexOf(e.target);
console.log(curentIndex);
var currentSrc=e.target.getAttribute("src");

sliderItem.style.backgroundImage = `url(${currentSrc})`;
slider.classList.replace("d-none","d-flex");
});}




closeBtn.addEventListener("click",function(){
    closeslider();
});


function closeslider(){
    slider.classList.replace("d-flex","d-none");
}


nextBtn.addEventListener("click",function(e){
    nextslider()
})


function nextslider() {
    if (curentIndex==imgList.length){
        curentIndex=0
    }else{
    curentIndex ++
    curentsrc=imgList[curentIndex].getAttribute("src")
    sliderItem.style.backgroundImge = `url(${curentsrc})`}
    
}


prevBtn.addEventListener("click",function(){
    prevslider()
})


function prevslider() {
    if(curentIndex==imgList.length){
        curentIndex=0
    }else{
       prevsrc= imgList[curentIndex].getAttribute("src")
       sliderItem.style.backgroundImg =`url(${prevsrc})`
    }
    
}

document.addEventListener("keyup",function(e){
if(e.key="ArrowRight"){
  nextslider()
  console.log(e.key)
}if(e.key="ArrowLeft"){
    prevslider()
}if(e.key="Backspace"){
   closeslider()
}
    
    
})


slider.addEventListener("click",function (e) {
    if(e.target==slider){
        closeslider()
    }
    
})


