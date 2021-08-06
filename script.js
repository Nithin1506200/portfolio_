const cursor= document.querySelector('.cursor');
document.addEventListener('mousemove',e=>{
    cursor.setAttribute("style","top: "+e.pageY+"px; left: "+e.pageX+"px;")
    // consol.log(e)
});
document.addEventListener('click',() => {
    cursor.classList.add("expand");
    setTimeout(() => {
        cursor.classList.remove("expand")
    },500);
});
const card = document.querySelector(".card");
const container = document.querySelector('.container');
const pic=document.querySelector(".mypic");
const info=document.querySelector(".info");
const discription=document.querySelector(".discription");
const about=document.querySelector(".about");
const title=document.querySelector(".info h1");
container.addEventListener('mousemove', e => {
    // console.log(e.pageX,e.pageY);
    let x= -1*(window.innerWidth / 2 - e.pageX)/9;
    let y = (window.innerHeight/2 - e.pageY)/5;
    // console.log(x,y);
    card.style.transform = "rotateY("+x+"deg)"+"rotateX("+y+"deg)"; 

});
container.addEventListener('mouseenter', e => {
    card.style.transition = "none ";
    pic.style.transform= 'translateZ(60px) rotate(10deg)';

    // pic.style.-webkit-transform = 'translateZ(60px)';
    info.style.transform= 'translateZ(80px)';
    discription.style.transform= 'translateZ(50px)';
    about.style.transform= 'translateZ(40px)';

    // pic.style.transform= 'scale(1.1)';
    // info.style.transform= 'scale(1.1)';
    // discription.style.transform= 'scale(1.1)';
    // about.style.transform= 'scale(1.1)';

});
container.addEventListener('mouseleave', e => {
    card.style.transform="rotateX(0deg) rotateY(0deg)";
    card.style.transition = "all 0.5s ease";
    pic.style.transform= 'translateZ(0) rotate(0deg)';
    info.style.transform= 'translateZ(0)';
    discription.style.transform= 'translateZ(0)';
    about.style.transform= 'translateZ(0)';
    title.style.transform='scale(1)';
    // info.style.transform= 'scale(1)';
    // discription.style.transform= 'scale(1)';
    // about.style.transform= 'scale(1)';
    // pic.style.transform= 'scale(1)';
    
});
window.onscroll = function() {scrollFun()};

function scrollFun() {
let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
let height = document.documentElement.scrollHeight- document.documentElement.clientHeight ;
let scrolled = (winScroll / height) * 100;
document.getElementById("Mybar").style.width = scrolled + "%";
}

// maps maps


    var map;
    const svm=document.getElementById("SVM");
    const cjc=document.getElementById("CJC");
    const dsu=document.getElementById("DSU");
    const cjcmp={lat:12.93436789033449,lng:77.60576895464258};
    const dsump={lat :12.887491168426974, lng:77.6419485350957};
    const svmmp={lat:12.712548470719927,lng:77.69668461141178};

    function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: dsump,
        zoom: 17,
    });
    let dsuMarker = new google.maps.Marker({
        position: dsump,
        map:map
    });

 
}

const sclbtn=document.getElementById("school");
const clgbtn=document.getElementById("college");
const engbtn=document.getElementById("engineering");
sclbtn.addEventListener('click',()=>{
    sclbtn.style.backgroundColor='white';
    clgbtn.style.backgroundColor='rgb(2,2,2,.1)';
    engbtn.style.backgroundColor='rgb(2,2,2,.1)';
    map = new google.maps.Map(document.getElementById("map"), {
        center: svmmp,
        zoom: 17,
    });
    let svmMarker= new google.maps.Marker({
        position: svmmp,
        map:map
    });
});
clgbtn.addEventListener('click',()=>{
    clgbtn.style.backgroundColor='white';
    sclbtn.style.backgroundColor='rgb(2,2,2,.1)';
    engbtn.style.backgroundColor='rgb(2,2,2,.1)';
    map = new google.maps.Map(document.getElementById("map"), {
        center: cjcmp,
        zoom: 17,
    });
    
    let cjcMarker= new google.maps.Marker({
        position: cjcmp,
        map:map
    });
});
engbtn.addEventListener('click',()=>{
    engbtn.style.backgroundColor='white';
    clgbtn.style.backgroundColor='rgb(2,2,2,.1)';
    sclbtn.style.backgroundColor='rgb(2,2,2,.1)';
    map = new google.maps.Map(document.getElementById("map"), {
        center: dsump,
        zoom: 17,
    });
    let dsuMarker = new google.maps.Marker({
        position: dsump,
        map:map
    });
});