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