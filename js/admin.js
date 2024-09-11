function allTaskme( ) {
    let good = document.getElementById('good');
    let anod = document.getElementById('onad');
    let desc= document.getElementById("desc");
    let userf= document.getElementById('userf');
    let yert = document.getElementById("yert");
    let vert=document.getElementById("vert");
    let lopki=document.getElementById("lopki");
    let hiop = document.getElementById("hiop");
    let lokiol= document.getElementById("lokiol");
    let lokik = document.getElementById("lokik");
    let hold=document.getElementById("hold"); 
    lokik.addEventListener("click",()=>{
        lokiol.style.display="none";
        lokik.style.display="none" ;
        hiop.style.display="block";
    })
    hiop.addEventListener("click",()=>{
         lokiol.style.display="block";
         hiop.style.display="none";
         lokik.style.display="block";
    })
    hold.addEventListener("click",()=>{
        prompt("i come first")
        console.log("am clicked now");
    })
      setTimeout(() => {
        lopki.style.display="none"
      }, 2000);
    var loadFile = function(event) {
        var image = document.getElementById('output');
        image.src = URL.createObjectURL(event.target.files[0]);
    };
    vert.addEventListener("click",()=>{
        yert.style.display="block"
        anod.style.display="none"
    })  
    good.addEventListener('click',()=>{
        anod.style.display='none';
        desc.style.display="block"
         lokiol.style.display="none";
         hiop.style.display="block";
         lokik.style.display="none"
    })
    userf.addEventListener('click',()=>{
        anod.style.display='block';
        desc.style.display="none";
        lokiol.style.display="none"; 
    })
}
allTaskme( );


 