document.getElementById("enquiryForm").addEventListener("submit", function(event){
    let name = document.getElementById("name").value;
    if(nam===""){
        alert("please enter your name");
    }
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