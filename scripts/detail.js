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
    
    console.log(currentCalenderset);
    console.log(currentCalendersetOBJ);
    console.log(checkinDateobj);

if( checkinDateobj>=currentCalendersetOBJ && checkoutDateobj>checkinDateobj){
    let numberOfDays=(checkoutDateobj-checkinDateobj)/(1000*60*60*24);
    let amount=1000*numberOfAdults.value*numberOfDays;
    document.getElementById("totalAmount").value=`Rs. ${amount}`;
}

}
let current=new Date();
let date=current.getDate();
let month=current.getMonth()+1;
let year=current.getFullYear();

let format=`${year}-${month}-${date}`;
document.getElementById("from-date").setAttribute("min", format);
let date2=date+1;
formattwo=`${year}-${month}-${date2}`;
document.getElementById("to-date").setAttribute("min", formattwo);