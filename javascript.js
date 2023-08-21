let afterShoppinPrice=0.00;
let aftercoupon=0.00;
let finalPrice=0.00;
let gotDiscount=0.00;


function onclickdiv(target){
    const selectedItemContainer=document.getElementById("selected-Items")
    const itemName=target.childNodes[3].childNodes[3].innerText;
    const li=document.createElement("li");
    li.innerText=itemName;
    selectedItemContainer.appendChild(li);
    
    // price counting
    const itemPrice=target.childNodes[3].childNodes[5].innerText.split(" ")[0];
    console.log(itemPrice);
    const ammountPrice=parseFloat(itemPrice);
    //console.log(ammountPrice.toFixed(2));
    afterShoppinPrice=parseFloat(afterShoppinPrice)+ammountPrice;
    document.getElementById("total-price").innerText=afterShoppinPrice.toFixed(2);
    document.getElementById("final-total").innerText=afterShoppinPrice.toFixed(2);

    document.getElementById("couponButton").addEventListener("click",function(){
        const couponCode=document.getElementById("totalCostInput").value;
        const discount=document.getElementById("discount");
        
        if(couponCode==="SELL20"){
            gotDiscount=0.20;
            aftercoupon=afterShoppinPrice*gotDiscount;
        document.getElementById("discount").innerText=aftercoupon.toFixed(2);
        
        finalPrice=afterShoppinPrice-aftercoupon;
        document.getElementById("final-total").innerText=finalPrice.toFixed(2);
        }

    })
    document.getElementById("resetButton").addEventListener("click", function() {
    // Reset selected items
    const selectedItemContainer = document.getElementById("selected-Items");
    selectedItemContainer.innerHTML = "";

    // Reset displayed values to default text
    document.getElementById("total-price").innerText = "0.00";
    document.getElementById("discount").innerText = "0.00";
    document.getElementById("final-total").innerText = "0.00";
})  

}

