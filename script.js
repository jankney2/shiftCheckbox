let items=document.getElementsByClassName('item')

for(let i=0; i<items.length;i++){
    items[i].addEventListener('click', (e)=>{
        items[i].classList.toggle('checked')
    
        if(e.shiftKey){
            
        }

    })

}


