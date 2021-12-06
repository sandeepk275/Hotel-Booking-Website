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





let citytyping=(event)=>{

 let cityvalue=document.getElementById('search-input').value;
if(cityvalue.length>=3){
const data = null;
const xhr = new XMLHttpRequest();
// xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
if (this.readyState === this.DONE) {
 let resobj=JSON.parse(this.responseText);
 let res=resobj.data[0].result_object.name;
document.getElementById("auto-items").value=res;
document.getElementById("auto-items").style.visibility="visible";
console.log(document.getElementById("search-input").value);
}
});

xhr.open("GET", `https://travel-advisor.p.rapidapi.com/locations/auto-complete?query=${cityvalue}&lang=en_US&units=km`);
xhr.setRequestHeader("x-rapidapi-host", "travel-advisor.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "240f54d273msh2e9e32197364201p14448cjsn36de92445f72");

xhr.send(data);
}else{
document.getElementById("auto-items").style.visibility="hidden";
}


}
let setvalue=(event)=>{
    document.getElementById("search-input").value=document.getElementById("auto-items").value;
    console.log(document.getElementById("search-input").value);
    document.getElementById("auto-items").style.visibility="hidden";
    searchbyCity(event);
}





//searchinng of hotel by city name
let searchbyCity=(event)=>{
    let searchElement=document.getElementById("search-input");
    let city=searchElement.value;
    // console.log(city);
    window.location=`list.html?city=${city}`;

}
