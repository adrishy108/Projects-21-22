

 

 const header = document.querySelector('header');
        
        const content = document.querySelector('.page-content');
        content.addEventListener('click',() => {
            const visibility = header.getAttribute('data-visible')
            if( visibility === 'false'){
                          header.setAttribute('data-visible', true)
            }
            else{
                header.setAttribute('data-visible', false)
            }
        })
        
        
        
const read_More_Button = document.querySelector('.read-more-btn')
        
      read_More_Button.addEventListener('click',() =>{
          const read_more_p = document.querySelector('.read-more-p')
          
          if(read_more_p.style.display === "none"){
              read_more_p.style.display = " block"
              read_More_Button.innerText = "Close"
          }
          else{
              read_more_p.style.display = "none";
              read_More_Button.innerText = "Read More"
          }
      }) 
      
      
     
         
        
 


const read_More_Button2 = document.querySelector('.read-more-btn2')
        
      read_More_Button2.addEventListener('click',() =>{
          const read_more_p2 = document.querySelector('.read-more-p2')
          
          if(read_more_p2.style.display === "none"){
              read_more_p2.style.display = " block"
              read_More_Button2.innerText = "Close"
          }
          else{
              read_more_p2.style.display = "none";
              read_More_Button2.innerText = "Read More"
          }
      }) 
      
      
      
      
