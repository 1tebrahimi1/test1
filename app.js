const searchicon1 = document.querySelector('#searchicon1');
const srchchicon1 = document.querySelector('#srchicon');
const search1 =document.querySelector('#searchinput1');

searchicon1.addEventListener('click',function(){
    search1.style.display = 'flex';
    searchicon1.style.display ='none';
})

const searchicon2 = document.querySelector('#searchicon2');
const srchchicon2 = document.querySelector('#srchicon2');
const search2 =document.querySelector('#searchinput2');

searchicon1.addEventListener('click',function(){
    search2.style.display = 'flex';
    searchicon2.style.display ='none';
})

const bar = document.querySelector('fa-bars');
const cross = document.querySelector('#hdcross');
const headbar = document.querySelector('.headerbar');

bar.addEventListener('click',function(){
    setTimeout(()=>{
        cross.style.display ='block';
    },200);
    headbar.style.right = '0%';
})