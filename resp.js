burger =document.querySelector('.burger')
navbar =document.querySelector('.navbar')
navList =document.querySelector('.nav-list')
rightNav =document.querySelector('.rightNav')

burger.addEventListener('click', ()=>{
    rightNav.classList.toggle('v-class-res');
    navList.classList.toggle('v-class-res');
    navbar.classList.toggle('h-nav-res');
})


function togglehide(){
    let btn = document.getElementById('btn');
    let para = document.getElementById('para');
    if(para.style.display !='none'){
        para.style.display='none'

    }
    else{
        para.style.display='block';

    }
    
    
}

