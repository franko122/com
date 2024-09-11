function slider() {
    let slide1 = document.getElementById('slide1');
    let sec2 = document.getElementById('sec2'); 
    let downdrop = document.getElementById('downdrop');  
    let unisa = document.getElementById('unisa');
    let unisas= document.getElementById('unisas') 
    let lode =document.getElementById('lode')
    let lodert = document.getElementById('loset')  
    let mento= document.getElementById('mento'); 
    let maner = document.getElementById('maner');
    let novert = document.getElementById('novert') 
    let loio = document.getElementById("loio")
    let buio= document.getElementById("buio")
    let nolo= document.getElementById("nolo")
    let leok= document.getElementById("leok")
    let loader = document.getElementById("loader")
    let loji =document.getElementById('loji');
    let himself = document.getElementById('himself');
    let loyu = document.getElementById('loyu');
    let lokij = document.getElementById('lokij');
    let lookrt = document.getElementById("lookrt");

    lookrt.style.backgroundColor="red"
    lookrt.addEventListener("click",()=>{  
        if (lookrt.style.backgroundColor == "red") {
            alert("You dont have access to Upload click on access to upload to subscribe")
        }
        else{
            alert("You have Access to Upload Goods")
        }
    })
       loyu.addEventListener('click' ,()=>{
        lokij.style.display="none"
       })
      
     loji.addEventListener('click',()=>{
        himself.style.width="0%";
        himself.style.transition="1s" 
        })

 setTimeout(() => {
    himself.style.display="flex";
}, 5000);

    setTimeout(() => {
        loader.style.display="none"
    }, 2000);
    nolo.addEventListener("click",()=>{
       lodert.style.display="block"
    });

    leok.addEventListener("click" , ()=>{
       buio.style.display="none"
    })
    loio.addEventListener("click",()=>{
        buio.style.display="flex"
    })
    novert.addEventListener('click',()=>{
        lodert.style.display='flex' 
    })
maner.addEventListener('click',()=>{
    lodert.style.display='none'
})   
      setTimeout(() => {
        lodert.style.display='none'
      }, 3000);
     

     unisa.addEventListener('click',()=>{
        downdrop.style.height='100px'
        unisa.style.display='none'
        downdrop.style.transition='1s' 
        unisas.style.display='block' 
     })

     unisas.addEventListener('click',()=>{  
        downdrop.style.height='0px'
        unisas.style.display='none'
        unisa.style.display='block' 
     })


    setTimeout(() => {
        sec2.style.display='block' 
    }, 3000);

    setTimeout(() => {  
        slide1.style.display='none'
    }, 3000);
    
    setTimeout(() => {
        sec2.style.display='none'
        slide1.style.display='block'
    }, 7000);

    setTimeout(() => {
        sec2.style.display='block'
        slide1.style.display='none'
    }, 12000);

    setTimeout(() => {
        sec2.style.display='none'
        slide1.style.display='block'
    }, 16000);
    
    setTimeout(() => {
        sec2.style.display='block'
        slide1.style.display='none'
    }, 20000);

    setTimeout(() => {
        sec2.style.display='none'
        slide1.style.display='block'
    }, 24000);
    
    setTimeout(() => {
        sec2.style.display='block'
        slide1.style.display='none'
    }, 28000);

    setTimeout(() => {
        sec2.style.display='none'
        slide1.style.display='block'
    }, 32000);
    
    setTimeout(() => {
        sec2.style.display='block'
        slide1.style.display='none'
    },36000);

    setTimeout(() => {
        sec2.style.display='none'
        slide1.style.display='block'
    },40000);

   setTimeout(() => {
    sec2.style.display='block'
    slide1.style.display='none'
     },44000);

    setTimeout(() => {
    sec2.style.display='none'
    slide1.style.display='block'
    },48000) 
 
 }
 slider()
 