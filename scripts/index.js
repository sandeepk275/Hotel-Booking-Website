document.getElementById("viewMore-city-card-container").style.display="none";
function onclickView(){
    let textbtn=document.getElementById("view-more-btn");
    if(textbtn.innerText==="View more"){
        document.getElementById("view-more-btn").innerText="View less"
        document.getElementById("viewMore-city-card-container").style.display="flex";
    }else{
        document.getElementById("view-more-btn").innerText="View more"
        document.getElementById("viewMore-city-card-container").style.display="none";
    }
   
}

//searchinng of hotel by city name
let searchbyCity=(value)=>{
    let searchElement=document.getElementById("search-input");
    let city=searchElement.value;
    // console.log(city);
    window.location=`list.html?city=${city}`;

}
