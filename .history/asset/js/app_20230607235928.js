let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);
let log = console.log.bind(document);
const grid = $('.grid');
app = {
 cardItem : [
     { 
        name : "banana",
        image :'./asset/image/banana.jpg'
     },
     { 
        name : "apple",
        image :'./asset/image/apple.jpg'
     },
     { 
        name : "cake",
        image :'./asset/image/cake.jpg'
     },
     { 
        name : "ice",
        image :'./asset/image/ice.jpg'
     },
     { 
        name : "dragon_fruit",
        image :'./asset/image/dragon_fruit.jpg'
     },
     { 
        name : "pineapple",
        image :'./asset/image/pineapple.jpg'
     },
     { 
        name : "strawberry",
        image :'./asset/image/strawberry.jpg'
     },
     { 
        name : "thayhuan",
        image :'./asset/image/thayhuan.jpg'
     },
     
 ],
  render : function (){
       const CardItem_multi = app.cardItem.concat(app.cardItem).sort(() => 0.5 - Math.random());
       CardItem_multi.forEach(element => {
            const cardItem = document.createElement('div');
              grid.appendChild(cardItem);
              cardItem.classList.add('card');
              cardItem.style.backgroundImage = `url(./asset/image/mystery-box-cartoon.avif)`;
              cardItem.dataset.name = element.name;
        });
     



} ,
handlEvent : function (){
    let count = 0; // control  number of click
   grid.addEventListener('click',handleClickItem);
   function handleClickItem(e){
      clicked = event.target;
     
     if(clicked === "SECTION"){
         log('haha');     
        return;
     }else {       
         if(count < 2){
            count++;
            if(clicked.classList.contains('selected')){
                count--;
            }
            clicked.classList.add('selected');
             index = app.cardItem.findIndex((item) => {
                return item.name === clicked.dataset.name;
             })
            clicked.style.backgroundImage =`url(${app.cardItem[index].image})`;
         }
         if(count == 2) {
            const itemSelect = $$('.selected');
            log(itemSelect[0].dataset.name + "" + itemSelect[1].dataset.name);
           if(itemSelect[0].dataset.name == itemSelect[1].dataset.name){
               
           }
        count=0;
     }
    }
   }
},
  start : function(){
       app.render();
       app.handlEvent();
  }

}
app.start();