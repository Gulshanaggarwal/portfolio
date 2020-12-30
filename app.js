// Navgation
function showMenu(){
      document.querySelector('.nav-items').classList.toggle('menu-show');
      document.querySelector('#hamburger').classList.toggle('ham-active');
    }

    function form_disappear(){
      document.querySelector('form').style.display='none';
    
}
// form appear
window.addEventListener("load",function(){
	setTimeout(()=>{
    document.querySelector("form").style.display="block";
    
},3000);
});