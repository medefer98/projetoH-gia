function scrollHeader(){
    const nav = document.getElementById('header');
    
    if(this.scrollY >= 50) nav.classList.add('active-header'); else nav.classList.remove('active-header');

}

window.addEventListener('scroll',scrollHeader);

// DROPDOWN MENU 1
const dropDownMenu1 = document.getElementById('dropdown-item-1');


//  MENU 1
const menuItem1 = document.getElementById('menu-item-1');


function showDropDown1(event){
    event.preventDefault();
    dropDownMenu1.classList.toggle('active-dropdown-menu');
}

function removeDropdown(){
    dropDownMenu1.classList.remove('active-dropdown-menu');
}
menuItem1.addEventListener('click',showDropDown1);

dropDownMenu1.addEventListener('mouseleave',removeDropdown)

// MENU MOBILE


const showMenu = (toggleId, navId)=>{
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if(toggle && nav){
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('active-menu-mobile')
            toggle.classList.toggle('active-bx');
        })
    }
}

showMenu('bx','menu-mobile');