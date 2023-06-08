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
        name : "dragon_fruit",
        image :'./asset/image/dragon_fruit.jpg'
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
  start : function(){
       app.render();
  }

}
app.start();