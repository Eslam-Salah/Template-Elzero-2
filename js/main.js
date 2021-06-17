var header = document.querySelector('header'),
    togglerIcon = document.querySelector('header nav .toggler-icon')
    openMenu = document.querySelector('header nav .open-menu'),
    closeMenu = document.querySelector('header nav .close-menu'),
    myUl = document.querySelector('header nav ul');

document.onscroll = function(){
    header.classList.toggle('sticky', window.scrollY > 0);
}

togglerIcon.onclick = function(){
    togglerIcon.classList.toggle('toggle');
}
openMenu.addEventListener('click', function(){
    myUl.style.display = 'block';
})

closeMenu.onclick = function(){
    myUl.style.display = 'none';
}
