//pay now button condtion
let toActivatePayNowBtn=()=>{
if(localStorage.getItem("isUserLoggedIn")){
   
        document.getElementById("paynowbtn").disabled=false;
    
    }else{
        document.getElementById("paynowbtn").disabled=true;
}

}
// toActivatePayNowBtn();
// toActivatePayNowBtn();
 let pay=()=>{
     alert("Hii your booking is successful !!");
 }

//get data for hotel detatils from "hotels/get-details" rapidapi using location id fetch from session storage
 let getlocationId=sessionStorage.getItem('locationIdData');

const data = null;
const xhr = new XMLHttpRequest();
// xhr.withCredentials = true;
xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
        let res=JSON.parse(this.responseText);

        let hotelimgUrl=res.data[0].photo.images.medium.url;
        document.getElementById("hotel-img").setAttribute('src', hotelimgUrl);

        let hotelnamefetch=res.data[0].name;
        document.getElementById("hotelNAME").innerText=hotelnamefetch;

        let hoteladdressfetch=res.data[0].address;
        document.getElementById("addressHotel").innerText=hoteladdressfetch;
       
	}
});

xhr.open("GET", `https://travel-advisor.p.rapidapi.com/hotels/get-details?location_id=${getlocationId}&checkin=2021-12-15&adults=1&lang=en_US&child_rm_ages=7%2C10&currency=USD&nights=2`);
xhr.setRequestHeader("x-rapidapi-host", "travel-advisor.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "240f54d273msh2e9e32197364201p14448cjsn36de92445f72");

xhr.send(data);

//fetching data from url
let path=location.href;
let dataAftersplit=path.split('?')[1].split('&');
let datastoreFomUrl=[];
for(let i=0;i<4;i++){
let value=dataAftersplit[i].split('=')[1];
datastoreFomUrl.push(value);
}

//filling the data in booking deatail
 document.getElementById("name").innerText=datastoreFomUrl[1];
 document.getElementById("numadult").innerText=datastoreFomUrl[0];
 document.getElementById("checkInDate").innerText=datastoreFomUrl[2];
 document.getElementById("checkOutDate").innerText=datastoreFomUrl[3];


 let checkinObj=new Date(datastoreFomUrl[2]);
 let checkoutObj=new Date(datastoreFomUrl[3]);
 let numberOfDays=Math.floor((checkoutObj-checkinObj)/(1000*60*60*24));
 
 document.getElementById("pricebreakdown").innerHTML=`Rs 1000 x${datastoreFomUrl[0]} Adult x${numberOfDays} Nights`;
 let amt=1000*datastoreFomUrl[0]*numberOfDays;
 document.getElementById("total").innerText=amt;



 