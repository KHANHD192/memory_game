let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);
let log = console.log.bind(document);

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
     }
 ],
  render : function (){

  },
  start : function(){
       app.render();
  }

}