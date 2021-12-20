const btn=document.querySelector('#open');
const modalContainer=document.querySelector('.modal_container')
const close=document.querySelector('#close')
btn.addEventListener('click',function(){
    modalContainer.classList.add('active');
})
close.addEventListener('click',function(){
    modalContainer.classList.remove('active');
})