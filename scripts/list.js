let path=location.href;
let lastpartUrl=path.split('=');
let city=lastpartUrl[1];

const data = null;

const xhr = new XMLHttpRequest();
// xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
        let res=JSON.parse(this.responseText);
        let hotelList=document.getElementById("listview");

        console.log(res);

        res.data.forEach(element => {
            let image=element.result_object.photo.images.medium.url;
            let rating=element.result_object.rating;
            let nameOfHotel=element.result_object.name;
            let address= element.result_object.address;
            let hotelId=element.result_object.location_id;

    let hoteldecripTemplate=`<a href="detail.html?locationId=${hotelId}" target="_self">
        <div class="hotel-description">
        <img class="hotel-img" src="${image}" alt="img">
            <div class="about">
                <h4>${nameOfHotel}</h4>
                <span >${rating}</span><span class="fa fa-star checked"></span>
                <p>${address}</p> 
            </div>
        </div>
        </a>`;
           let div= document.createElement('div');
            div.innerHTML=hoteldecripTemplate;
            hotelList.appendChild(div);

        });
	}
});

xhr.open("GET", `https://travel-advisor.p.rapidapi.com/locations/search?query=${city}&limit=30&offset=1&units=km&location_id=1&currency=USD&sort=relevance&lang=en_US`);
xhr.setRequestHeader("x-rapidapi-host", "travel-advisor.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "2c96c96e62msh40a3f1253220c66p108c29jsn7ec605ac3abb");

xhr.send(data);
