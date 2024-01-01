const button=document.querySelectorAll('.button');
const body=document.querySelector('body');

button.forEach(function(button){
    console.log(button);
    button.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target);
        if(e.target.id==='gray'){
            body.style.backgroundColor=e.target.id;
           
        }
        if(e.target.id==='White'){
            body.style.backgroundColor=e.target.id;
           
        }
        if(e.target.id==='Blue'){
            body.style.backgroundColor=e.target.id;
           
        }
        if(e.target.id==='Yellow'){
            body.style.backgroundColor=e.target.id;
           
        }


    });

    
});