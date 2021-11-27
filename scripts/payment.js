
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
