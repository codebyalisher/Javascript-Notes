document.addEventListener('DOMContentLoaded', () => {
const model=document.querySelector(".model")
const openmodelbutton=document.querySelector(".openModelButton")
const closeModelbutton=document.querySelector(".close_model")
const openModel=()=>{
    model.classList.remove(".close")
}
const closemodel=()=>{
model.classList.add(".close")
}
openmodelbutton.addEventListener("click",()=>{
openModel();
})
closeModelbutton.addEventListener("click",()=>{
    closemodel();
})
});