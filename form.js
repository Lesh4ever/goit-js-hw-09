import"./assets/styles-Cp9vlp72.js";const t=document.querySelector(".feedback-form"),m="feedback-form-state";let e={email:"",message:""};const o=localStorage.getItem(m);o&&(e=JSON.parse(o),t.elements.email.value=e.email,t.elements.message.value=e.message);t.addEventListener("input",a=>{const{name:s,value:l}=a.target;e[s]=l.trim(),localStorage.setItem(m,JSON.stringify(e))});t.addEventListener("submit",a=>{a.preventDefault();const{email:s,message:l}=e;if(!s||!l){alert("Fill please all fields");return}console.log(e),localStorage.removeItem(m),t.reset(),e={email:"",message:""}});
//# sourceMappingURL=form.js.map
