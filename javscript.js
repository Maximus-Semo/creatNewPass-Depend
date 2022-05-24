const allEyes = document.querySelectorAll(".icon-eye-slash");
const btnGoLogin = document.getElementById("btnGoLogin")
allEyes.forEach(item => {
    item.addEventListener("click", (eo)=> {
        const input = item.parentElement.getElementsByTagName("input")[0];
        const spanShowPass = item;
        
        if(input.type === "password"){
            input.removeAttribute("type","password");
            input.setAttribute("type","text");
            spanShowPass.removeAttribute("class","icon-eye-slash");
            spanShowPass.setAttribute("class","icon-eye");    
     } else {
        input.removeAttribute("type","text");
        input.setAttribute("type","password");
        spanShowPass.removeAttribute("class","icon-eye");
        spanShowPass.setAttribute("class","icon-eye-slash") 
     }
    })
});
// for not refresh form or page  
btnGoLogin.addEventListener("click",(eo)=>{
    eo.preventDefault();
})
