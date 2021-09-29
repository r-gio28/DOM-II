
// Your code goes here

//mouseover

const navBar = document.querySelector('nav');

navBar.addEventListener('mouseover', function(event){
    event.target.style.color = 'red';
    setTimeout (function(){
        event.target.style.color = '';
    }, 500);
}, false);

//keydown

window.addEventListener('keydown', function(){
    alert('PUSH DAT BUTTON');
})


//mouseover

const footer = document.querySelector('footer');
footer.addEventListener('mouseover', function(e){
    console.log(`howdy partner`);
    e.stopPropagation();
});

//3wheel

const foot = document.querySelector('footer');
    foot.addEventListener('wheel', function(e){
    console.log(`did ya scroll past me ,bud? ${e}`);
    e.stopPropagation();

});

//aux click

const anchors = document.querySelector('.nav a');
anchors.forEach(function(e){
    e.addEventListener('auxclick', function(){
        e.style.color = 'blue';
        console.log('turning the links blue')
    });
})

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  



