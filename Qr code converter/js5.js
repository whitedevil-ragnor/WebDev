let inputBox=document.getElementById("input-box");
let imgBox=document.getElementById("imagBox");
let qrImage=document.getElementById("qr-image");
function generate(){
    if(inputBox.value.length>0){
        let inputBox=document.getElementById("input-box");
        qrImage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+inputBox.value;
        imgBox.classList.add("show-img");
    }
    else{
        inputBox.classList.add("error");
        setTimeout(()=>{
            inputBox.classList.add("error");
        },1000) ;
    }
}