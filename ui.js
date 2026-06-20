function toast(msg){
    let t=document.getElementById("toast");
    if(!t) return;

    t.innerText=msg;
    t.style.display="block";

    setTimeout(()=>{
        t.style.display="none";
    },2000);
}