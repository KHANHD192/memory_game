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
            //   cardItem.style.backgroundImage = `url(${element.image})`;
              cardItem.dataset.name = element.name;
        });
     



} ,
handlEvent : function (){
 function  handlAnimation (clicked){
   const cd_rotate = [
      { transform: "rotateX(0)" },
      { transform: "rotateX(-360deg)" },
    ];
    
    const Timming = {
      duration: 5,
      iterations: 1,
    };
    // creat item of cdThumb animation rotate!
    let cd ;
    cd = clicked.animate(cd_rotate,Timming);
   }
 
    let count = 0; // control  number of click
    let fristGuess = "";
    let secondGuess = "";
    const trueItem = [];
   grid.addEventListener('click',handleClickItem);
   function handleClickItem(e){
      clicked = event.target;
     if(clicked === "SECTION" || clicked.classList.contains('grid')){ 
        return;
     }else {       
         if(count < 2){
            count++;
            if(clicked.classList.contains('selected')){
                count--;
            }
            if(count == 1){
               fristGuess = clicked.dataset.name;
            }else {
               secondGuess = clicked.dataset.name;
            }
            clicked.classList.add('selected');
            //  trueItem.push(clicked);
             index = app.cardItem.findIndex((item) => {
                return item.name === clicked.dataset.name;
             })
            clicked.style.backgroundImage =`url(${app.cardItem[index].image})`;
            
         }
         if(count == 2){
            log(fristGuess +  " " + secondGuess);
            let size = trueItem.length;
           if(fristGuess === secondGuess){
            // trueItem[size - 1].classList.add('true');
            // trueItem[size - 2].classList.add('true');
            //    log(trueItem);

            log('working');
           }else {
             setTimeout(()=>{
                   trueItem.forEach((item) =>{
                     if(!item.classList.contains('true')){

                        // item.classList.remove('selected');
                        item.style.backgroundImage =`url(./asset/image/mystery-box-cartoon.avif)`;
                     }
                   })   
             },1000)
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