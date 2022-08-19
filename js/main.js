const body = document.querySelector('body'),
    dark = document.querySelector('#dark'),
    light = document.querySelector('#light');

function darkMode(){
    if($("#dark").is(":checked")){
        alert("dark is activated");
        body.style.backgroundColor="#22242D"
        body.style.color="#ffffff"
        
    }
    else{
        body.style.backgroundColor="#ffffff"
        body.style.color="#000000"
    }
    
}
dark.addEventListener('change',darkMode);
light.addEventListener('change',darkMode)