
let navLinks =document.getElementById("navLinks");
function showMenu(){
    navLinks.style.left ="0";
}

    function hideMenu(){
    navLinks.style.left ="-200px";
}



let info = document.getElementById('quote');
let people=document.getElementById('people');
let reviews =[
{ id: 1,
test: 'Luxury in a bottle, that is. Be not deterred by the term "oil cleanser," for when you spend just a few seconds massaging',
name:'Benjamim'},

{id:2,
 test: 'Good oil very soft and mild on the skin the quality is remarkable. it worth the money for their high-quality products.',
name:'Adaobi'},
   
{ id: 3,
test: 'The quality is execllent. i recieved free shipping because it was my first buy,highly recommended',
name:'Aisha'}
];
let prevBtn =document.querySelector('.prev-btn');
let nextBtn =document.querySelector('.next-btn');

let currentItem= 0;

window.addEventListener('DOMContentLoaded', function(){
testimonial(currentItem);
})

function showTest(testimonial){
    let items = reviews[currentItem];
    info.textContent=items.test;
    people.textContent=items.name;
}

nextBtn.addEventListener('click', function(){
    currentItem++;
    if(currentItem > reviews.length -1){
        currentItem=0;
    }
    showTest(currentItem);
});
prevBtn.addEventListener('click', function(){
    currentItem--;
    if(currentItem < 0){
        currentItem= reviews.length-1;
    }
    showTest(currentItem);
});
// store
let image = document.getElementById('product-image');
let text = document.getElementById('store-txt');
let prices = document.getElementById('store-price');
let review =[
 { id:1,
 img:'images/pexels-eva-bronzini-6915311-removebg-preview.png',
quality:'10% natural oil',
price:"\u20a6" + '4000'},
 {
 id:2,
 img:'images/pexels-ksenia-chernaya-8054408-removebg-preview.png',
quality:'30% natural oil',
price:"\u20a6" +'3000'},
 {id:3,
 img:'images/pexels-monstera-6621472-removebg-preview.png',
quality:'10% natural oil',
price: "\u20a6" + '2000'},
 {
 id:4,
 img:'images/M010T048_Cream_Tube_1-removebg-preview.png',
quality:'5% natural oil',
price: "\u20a6" +'1000'}
];

let prevButton =document.querySelector('.prev-btn1');
let nextButton =document.querySelector('.next-btn1');


let startItem = 0;

window.addEventListener('DOMContentLoaded', function(){
 showPerson(startItem)   

});
function showPerson(person){
const items = review [person];
    image.src = items.img;
    text.textContent = items.quality;
    prices.textContent =items.price;
}

nextButton.addEventListener('click', function(){
startItem++;
if (startItem > review.length -1){
    startItem=0;
}
showPerson(startItem);
});


prevButton.addEventListener('click', function(){
    startItem--;
    if (startItem < 0){
        startItem = review.length-1;
    }
    showPerson(startItem);
});