
  var data = JSON.parse(localStorage.getItem("tomtopcart"))

  gggtttgb(data)
  function gggtttgb(data){
      document.querySelector("#cartdisplay").innerHTML = ""
  data.map(function(ele , index){
  var div= document.createElement("div");
   div.setAttribute("id","createdivincart")
  var name=document.createElement("h3")
  name.textContent=ele.brand;
  name.style.marginRight = "40px"
  name.style.paddingTop = "50px"
  
  var img= document.createElement("img")
  img.setAttribute("src",ele.image)
  img.style.width = "300px"
  img.style.height = "200px"

  var imdb=document.createElement("h4");
  imdb.textContent=`RS ${ele.cancel}`;
  imdb.setAttribute("id" , "linetrough")

  var price=document.createElement("h3");
  price.textContent=`RS ${ele.price}`;
  imdb.setAttribute("id" , "linetrough")
  price.style.paddingTop = "50px"

  var remove = document.createElement("button")
  remove.textContent = "REMOVE"
  remove.style.width = "100px"
  remove.style.height = "50px"
  remove.style.marginTop = "50px"
  remove.style.marginLeft = "50px"
  remove.style.backgroundColor = "orange"
  remove.style.marginRight = "50px"
  remove.style.border = "transparent"
  
  remove.addEventListener("click" , ()=>{
      let arr = JSON.parse(localStorage.getItem("tomtopcart"))||[]
      arr.splice(index,1)
      localStorage.setItem("tomtopcart" , JSON.stringify(arr))
      gggtttgb(arr)
      alert("remove")
  })
 



  div.append(img,name,price ,remove);
  
  document.querySelector("#cartdisplay").append(div);

  
});
}


var total ;
total = data.reduce(function(acc,cv){
   return acc+Number(cv.price)

},0)
console.log(total)
document.querySelector("#total").textContent = ` Rs:${Math.floor(total)}`
document.querySelector("#total1").textContent =  `Rs: ${Math.floor(total)}`


var user_input = document.getElementById("discount")
function getdiscount(){
   var input = user_input.value
   if(input = "masai30"){
   var x = ((total*70)/100)
    
   }
   console.log(x)
   document.querySelector("#total").textContent = ` Rs: ${Math.floor(x)}`
}

function gotoaddress(){
  window.location.href = "./address.html"
}