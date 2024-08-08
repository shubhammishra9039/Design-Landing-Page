var arr = [
    {dp:"https://images.pexels.com/photos/3418814/pexels-photo-3418814.jpeg", img:"https://images.pexels.com/photos/3608547/pexels-photo-3608547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {dp:"https://images.pexels.com/photos/3348749/pexels-photo-3348749.jpeg?auto=compress&cs=tinysrgb&w=600", img:"https://images.pexels.com/photos/3768163/pexels-photo-3768163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {dp:"https://images.pexels.com/photos/2836486/pexels-photo-2836486.jpeg", img:"https://images.pexels.com/photos/2878373/pexels-photo-2878373.jpeg"},
    {dp:"https://images.pexels.com/photos/3768163/pexels-photo-3768163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", img:"https://images.pexels.com/photos/3418814/pexels-photo-3418814.jpeg"}
]

var cluter =""
 arr.forEach(function (elem,idx){
    cluter = cluter+ `<div class="stori">
    <img
    id="${idx}"
      src="${elem.dp}"
      alt=""
    />
  </div>`
 })
 document.querySelector("#storiya").innerHTML=cluter

 document.querySelector("#storiya").addEventListener("click" ,function(dets){
    // console.log(arr[dets.target.id].img)
    document.querySelector("#full").style.display="block"
    document.querySelector("#full").style.backgroundImage = `url(${arr[dets.target.id].img})`

 })