// for calculating amount from form data
let forTotal=(event)=>{
    let numberOfAdults=document.getElementById("adults");
    let checkinDate=document.getElementById("from-date");
    let checkoutDate=document.getElementById("to-date");
  
    let checkinDateobj=new Date(checkinDate.value);
    let checkoutDateobj=new Date(checkoutDate.value);
    let currentdate=new Date();

    let date=currentdate.getDate();
    let month=currentdate.getMonth()+1;
    let year=currentdate.getFullYear();

    let currentCalenderset=`${year}-${month}-${date}`;
    
    let currentCalendersetOBJ=new Date(currentCalenderset);

if( checkinDateobj>=currentCalendersetOBJ && checkoutDateobj>checkinDateobj){
    let numberOfDays=Math.floor((checkoutDateobj-checkinDateobj)/(1000*60*60*24));
    let amount=1000*numberOfAdults.value*numberOfDays;
    document.getElementById("totalAmount").value=`Rs. ${amount}`;
}
}

// for blocking back date
let current=new Date();
let date=current.getDate();
if(date<10){
    date='0'+date;
}
let month=current.getMonth()+1;
let year=current.getFullYear();

let format=`${year}-${month}-${date}`;
document.getElementById("from-date").setAttribute("min", format);
let date2=1+date;
formattwo=`${year}-${month}-${date2}`;
document.getElementById("to-date").setAttribute("min", format);


// for getting location id from url
let path=location.href;
let lastpartUrl=path.split("=");
let locationId=lastpartUrl[1];


// for hotel img from "photos/list" rapidapi
let hotelImagefunc=()=>{

    const datas = null;
    const xhtr = new XMLHttpRequest();
    // xhr.withCredentials = true;
    xhtr.addEventListener("readystatechange", function () {
	if (xhtr.readyState === xhtr.DONE) {
        let res=JSON.parse(xhtr.responseText);
		
        let crausalinnerDoc=document.getElementById('hotelimgdoc');
        let n=1;
    for(let i=0;i<10;i++){
        let hotelimgUrl=res.data[i].images.large.url;
        let hotelImgTemp=`<img class="hotel-img" src="${hotelimgUrl}" class="d-block w-100" alt="slider-${n}">`;

        
        let DIV=document.createElement('div');
        if(i==0){
        DIV.setAttribute('class', 'carousel-item active');
        DIV.setAttribute('data-interval', '10000');
    }else{
        DIV.setAttribute('class', 'carousel-item');
        DIV.setAttribute('data-interval', '3000');
    }
        DIV.innerHTML=hotelImgTemp;
        let x=crausalinnerDoc.appendChild(DIV);
        n++;
      }
     
	}
});

xhtr.open("GET", `https://travel-advisor.p.rapidapi.com/photos/list?location_id=${locationId}&currency=USD&limit=50&lang=en_US`);
xhtr.setRequestHeader("x-rapidapi-host", "travel-advisor.p.rapidapi.com");
xhtr.setRequestHeader("x-rapidapi-key", "240f54d273msh2e9e32197364201p14448cjsn36de92445f72");

xhtr.send(datas);


}
hotelImagefunc();




//get data for hotel detatils from "hotels/get-details" rapidapi
const data = null;
const xhr = new XMLHttpRequest();
// xhr.withCredentials = true;
xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
        let res=JSON.parse(this.responseText);
	
        let hotelName=res.data[0].name;
        document.getElementById("hotelname").innerText=hotelName;

        let dataamenities=res.data[0];
        let amenitiesDocument= document.getElementById("listOfAmenities")
        for(let i=0;i<7;i++){
            let aminities=dataamenities.amenities[i].name;
        let listElement=document.createElement("li");
        listElement.innerText=aminities;
        amenitiesDocument.appendChild(listElement);
        }

        let hoteldescription=res.data[0].description;
        document.getElementById("descriptionHotel").innerText=hoteldescription;
        
	}
});

xhr.open("GET", `https://travel-advisor.p.rapidapi.com/hotels/get-details?location_id=${locationId}&checkin=2021-12-15&adults=1&lang=en_US&child_rm_ages=7%2C10&currency=USD&nights=2`);
xhr.setRequestHeader("x-rapidapi-host", "travel-advisor.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "240f54d273msh2e9e32197364201p14448cjsn36de92445f72");

xhr.send(data);


sessionStorage.setItem('locationIdData',`${locationId}`)
