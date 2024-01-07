
let ctn = document.querySelectorAll('.container');
ctn.forEach((item, index, arra) => {
   
    let btn = item.querySelector('button'); //item becomes container. btn becomes button
   
    btn.addEventListener('click',()=>{

        item.classList.toggle('open'); // for adding and removing 'open' class
        let para = item.querySelector('p');
       // console.log(para);
        let accordion = item.querySelector('.accordion-body')
        let angleDown = item.querySelector('#angle-down');

        if(item.classList.contains('open')){
            accordion.style.height = para.scrollHeight + 'px';
            angleDown.style.transform = 'rotate(-180deg)'
        }else{
            accordion.style.height = '0px';
            angleDown.style.transform = 'rotate(0deg)'
        }
        removeOpen(index);
    })
});

function removeOpen(index1){
  
    ctn.forEach((item2, index2)=>{
        let para = item2.querySelector('p');
        if(index1 != index2){  
            let accordion = item2.querySelector('.accordion-body');
            item2.classList.remove('open');
            accordion.style.height = '0px';
        }else{
            console.log("nothing to close");
        }
    })
}