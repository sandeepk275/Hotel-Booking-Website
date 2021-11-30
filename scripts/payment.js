
let toActivatePayNowBtn=()=>{
    console.log(localStorage.getItem("isUserLoggedIn"));
if(localStorage.getItem("isUserLoggedIn")){
    // console.log(localStorage.getItem("isUserLoggedIn"));

        document.getElementById("paynowbtn").disabled=false;
    
    }else{
        document.getElementById("paynowbtn").disabled=true;
}


}
// toActivatePayNowBtn();



// //get data for hotel detatils from "hotels/get-details" rapidapi
// const data = null;
// const xhr = new XMLHttpRequest();
// // xhr.withCredentials = true;
// xhr.addEventListener("readystatechange", function () {
// 	if (this.readyState === this.DONE) {
//         let res=JSON.parse(this.responseText);
// 		console.log(res);

//         let hotelimgUrl=res.data[0].photo.images.medium;
//         console.log(hotelimgUrl);
       
// 	}
// });

// xhr.open("GET", `https://travel-advisor.p.rapidapi.com/hotels/get-details?location_id=${locationId}&checkin=2021-12-15&adults=1&lang=en_US&child_rm_ages=7%2C10&currency=USD&nights=2`);
// xhr.setRequestHeader("x-rapidapi-host", "travel-advisor.p.rapidapi.com");
// xhr.setRequestHeader("x-rapidapi-key", "2c96c96e62msh40a3f1253220c66p108c29jsn7ec605ac3abb");

// xhr.send(data);

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
 let numberOfDays=(checkoutObj-checkinObj)/(1000*60*60*24);
 
 document.getElementById("pricebreakdown").innerHTML=`Rs 1000 x${datastoreFomUrl[0]} Adult x${numberOfDays} Nights`;
 let amount=1000*datastoreFomUrl[0]*numberOfDays;
 document.getElementById("total").innerText=amount;
