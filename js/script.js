document.getElementById("enquiriesForm).addEventlistener("submit",function(e){
    e.preventDefault();
    let product = document.getElementById("product").value;
   document.getElemetById("result").innerHTML =
       product+ " is available. estimate price: R399.";
})
function showMassage(){
    alert("get 20% selected redbat product!");
}
 document.getElementById("serchbar").addEventListener("keyup", function(){
    let filter = this.value.tolwerCase()
    let items = document.querySelectorAll("#productlist li");
    items.forEach(item => {
        if(item.textContent.tolwerCase().includes(filter)){
            item.style.desplay = "";
    }else{
        item.style.displayn = "none"

    }
 })
})
