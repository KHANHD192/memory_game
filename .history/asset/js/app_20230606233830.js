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
              cardItem.style.backgroundImage = `url(${element.image})`;
              cardItem.dataset.name = element.name;
        });
     



} ,
handlEvent : function (){
   grid.addEventListenner('click',handleClickItem);
   function handleClickItem(e){
    console.log(e.target);
   }
},
  start : function(){
       app.render();
  }

}
app.start();