function sign_in(){
    window.location.href = "./signin.html"
}

var data = [
" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfZaIeHVx39ZJIi5dqg-qcKxkiOnXTHSFBng&usqp=CAU" ,
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUcPxvGgF05iNXK_JYn6Qw_4DsSGUFZcMVMQ&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwXNcoIg5rwtQfbG1g-cVcQ4NPdpsGs0Amog&usqp=CAU",
 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSADb2O6InskGE3Y7rMCdHOOQSnDSjHBMTrAA&usqp=CAU",
 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtELPYy3sXxKSjX6yHGRw3hzvOQ8ggAOK-OQ&usqp=CAU" 
]

var div = document.getElementById("slideshow");

//  let images =  list1; 

let img = document.createElement("img"); 
let i = 0;


setInterval(function () {

if (i === data.length) {
i = 0;
}
img.style.width = "100%"
img.style.height= "100%"

img.src = data[i];



div.append(img);


i++;
}, 2000);

function abcd(){
window.location.href = "./newarrivals.html"
}



// ---------------------------------------------------------------------------------------------

var bata= [
    {
        image:"https://img.tttcdn.com/product/xy/220/220/p/gu1/P/1/PB0246B-1/PB0246B-1-1-f34c-Sb8F.jpg",
        brand:"Screen Smart Watch (LS05S) Sports Bracelet",
        stock:"300/450 pcs sold",
        price:3491.33,
    },
    {
        image:"https://img.tttcdn.com/product/xy/220/220/p/gu1/P/U/PAA1950GR-AU/PAA1950GR-AU-1-10a5-rfpx.jpg",
        brand:" Oil Fryer Machine",
        stock:"118/456 pcs sold",
        price:5234.56,
    },
    {
        image:"https://img.tttcdn.com/product/xy/220/220/p/gu1/R/U/RTEYU-E9-EU/RTEYU-E9-EU-1-45bf-5xx7.jpg",
        brand:" Folding Electric Scooter",
        stock:"118/456 pcs sold",
        price:8234.56,
    },
    {
        image:"https://img.tttcdn.com/product/xy/220/220/p/gu1/W/2/W17372/W17372-1-f74e-liF2.jpg",
        brand:" Liquid Eyeliner& Magnetic Lashe",
        stock:"118/406 pcs sold",
        price:234.56,
    },
    {
        image:"https://img.tttcdn.com/product/xy/220/220/p/gu1/V/0/V9630/V9630-1-654e-VFlZ.jpg",
        brand:"BT5.0 Audio Receiver ",
        stock:"18/45 pcs sold",
        price:1234.56,
    },
    {
        image:"https://img.tttcdn.com/product/xy/220/220/p/gu1/K/1/K19874-1/K19874-1-1-87e9-s51R.jpg",
        brand:" USB Car Charger BT Wireless ",
        stock:"118/400 pcs sold",
        price:1434.56,
    },
    {
        image:"https://img.tttcdn.com/product/xy/220/220/p/gu1/P/B/PAE0552B/PAE0552B-1-4faa-pVcq.jpg",
        brand:" Headset Sweatproof Sports Mini Earbuds",
        stock:"18/56 pcs sold",
        price:4234.56,
    },
    {
        image:"https://img.tttcdn.com/product/xy/220/220/p/gu1/J/1/J4621B-1/J4621B-1-1-40b9-bZBB.jpg",
        brand:"Smartwatches Sports Wristband",
        stock:"11/46 pcs sold",
        price:333.56,
    },
    {
        image:"https://img.tttcdn.com/product/xy/220/220/p/gu1/E/B/E20157B/E20157B-1-e251-Isa7.jpg",
        brand:"Resistance Capacitance Diode Testing",
        stock:"10/33 pcs sold",
        price:2224.56,
    },   
    {
        image:"https://img.tttcdn.com/product/xy/220/220/p/gu1/E/1/E20431/E20431-1-11fa-kiCs.jpg",
        brand:"Ballpoint Pen LED",
        stock:"118/456 pcs sold",
        price:1234.56,
    }, 
      {
        image:"https://img.tttcdn.com/product/xy/220/220/p/gu1/D/8/D10478/D10478-1-8989-rg1N.jpg",
        brand:"Photography Tripod Monopod Camera",
        stock:"118/456 pcs sold",
        price:1234.56,
    },  
     {
        image:"https://img.tttcdn.com/product/xy/220/220/p/gu1/I/9/I1429/I1429-1-e263-oA6Q.jpg",
        brand:"USB Keyboard and Drum Pad MIDI Controller",
        stock:"118/456 pcs sold",
        price:1234.56,
    },
    {
        image:"https://img.tttcdn.com/product/xy/220/220/p/gu1/K/K1867/K1867-2-b802.JPG",
        brand:" DRL Daylight Lamp with Turn Signal",
        stock:"118/456 pcs sold",
        price:1234.56,
    },
    {
        image:"https://img.tttcdn.com/product/xy/220/220/p/gu1/H/U/H18400EU/H18400EU-1-945e-rr39.jpg",
        brand:"Fruit and Vegetable Single Serve Juice Extractor",
        stock:"118/456 pcs sold",
        price:1434.56,
    },
    {
        image:"https://img.tttcdn.com/product/xy/220/220/p/gu1/H/S/H10242S/H10242S-1-ebea-BNHL.jpg",
        brand:"Security Tag Remover Magnetic Intensity ",
        stock:"118/456 pcs sold",
        price:2234.56,
    },
    {
        image:"https://img.tttcdn.com/product/xy/220/220/p/gu1/L/1/L4126-1/L4126-1-1-c3bc-z7eR.jpg",
        brand:"Smart LED Ceiling Light AC220V 23W",
        stock:"118/456 pcs sold",
        price:3234.56
    },
    {
        image:"https://img.tttcdn.com/product/xy/220/220/p/gu1/P/0/PAA1120/PAA1120-1-c1b4-4Jnh.jpg",
        brand:"Shaver Enchen BlackStone Electric Razor",
        stock:"118/456 pcs sold",
        price:1334.56
    },
    {
        image:"https://img.tttcdn.com/product/xy/220/220/p/gu1/P/Y/PAE1096DGY/PAE1096DGY-1-7f13-ToqC.jpg",
        brand:" Wireless BT 5.1 Mic Handheld Speaker",
        stock:"118/456 pcs sold",
        price:2234.56,
    },
    {
        image:"https://img.tttcdn.com/product/xy/220/220/p/gu1/P/2/PAA1202/PAA1202-1-69ca-iCsI.jpg",
        brand:"DUKA Laser Rangefinder",
        stock:"118/456 pcs sold",
        price:234.56,
    },
    {
        image:"https://img.tttcdn.com/product/xy/220/220/p/gu1/K/K1458/K1458-2-8a5d.JPG",
        brand:"Car Truck Motor Driven Alarm Red",
        stock:"118/456 pcs sold",
        price:499.56,
    },
    {
        image:"https://img.tttcdn.com/product/xy/220/220/p/gu1/C/1/C10044-1/C10044-1-1-ee3d-jT1K.jpg",
        brand:" Bitcoin Miner Machine in Stock",
        stock:"118/456 pcs sold",
        price:444.56,
    },
    {
        image:"https://img.tttcdn.com/product/xy/168/168/p/gu1/C/7/C10417/C10417-1-85d1-60sF.jpg",
        brand:"Technique Detachable Microphone",
        stock:"118/456 pcs sold",
        price:1034.56,
    },
    {
        image:"https://img.tttcdn.com/product/xy/220/220/p/gu1/I/0/I2960/I2960-1-274a-FHJb.jpg",
        brand:"MOOER NOISE KILLER",
        stock:"118/456 pcs sold",
        price:1204.56,
    },
    {
        image:"https://img.tttcdn.com/product/xy/220/220/p/gu1/C/2/C12092/C12092-1-7adb-CdEJ.jpg",
        brand:"Transmission Rate Multiple Systems Compatible",
        stock:"118/456 pcs sold",
        price:1230.56,
    },
]




bataapp(bata)
function bataapp(bata){

document.querySelector("#dataappend").innerHTML = ""
bata.map(function(ele){


var div= document.createElement("div");
div.setAttribute("id" , "creatediv")


var name=document.createElement("h3")
name.textContent=ele.brand;
var date=document.createElement("h4")
date.textContent=ele.stock;
date.style.color = "red"
var img= document.createElement("img")
img.setAttribute("src",ele.image)
var imdb=document.createElement("h2");
imdb.textContent=`RS ${ele.price}`;


div.append(img,name,date,imdb);

document.querySelector("#dataappend").append(div);


});
}

function lowtohigh(){
 bata.sort(function(a,b){
     return a.price-b.price;

 });
 console.log(bata);
 bataapp(bata)
}

function hightolow(){
 bata.sort(function(a,b){
     return b.price-a.price;

 });
 console.log(bata);
 bataapp(bata)
}



let priceselect = document.getElementById("filterbutton")
priceselect.addEventListener("change",price_range) 

function price_range(){
let val = priceselect.value

function range(e){
    if(val== "low"){
    if(e.price<=500){
        return e
    }   
}
  else if(val == "mid"){
    if(e.price>500 && e.price<=1500){
        return e
    } 
}
else if (val== "high"){
    if(e.price>1500){
        return e
    } 
}
}
var new_arr = bata.filter(range)
console.log(new_arr)
bataapp(new_arr)

}