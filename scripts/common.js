
// for loader only
document.onreadystatechange = function() {
  if (document.readyState !== "complete") {
      document.querySelector("body").style.visibility = "hidden";
      // document.getElementById("loaderdiv").setAttribute('class', loader);
      document.querySelector(".loader").style.visibility = "visible";
  } else {
      document.querySelector(".loader").style.display = "none";
      document.querySelector("body").style.visibility = "visible";
  }
}




let headerTemplates=`<a href="index.html"><img src="assests/images/logo.png" alt="logo" height="200px" width="250" id="logo"></a>
         
        
<!-- Button trigger modal -->
 <button id="login" onclick="logoutCase()" type="button" class="btn btn-light btn-sm" data-toggle="modal" data-backdrop="false" data-target="#login-modal">LOGIN</button>

  <!-- Modal -->
      <div class="modal fade" id="login-modal"  role="dialog" tabindex="-1" aria-labelledby="login-modal-label" aria-hidden="true">
        <div class="modal-dialog" role="document">
           <div class="modal-content">
             <div class="modal-header">
                <h5 class="modal-title" id="login-modal-label">Please login</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              </div>
              <div class="modal-body">
                <form id="login-form">
                    <div class="login-field">
                        <label for="username">Username: </label>
                        <input type="text" id="username" name="username" placeholder="Enter Username" required />
                    </div>
                    <div class="login-field">
                        <label for="password">Password: </label>
                        <input type="password" id="password" name="password" placeholder="Enter Password" required />
                    </div>
                </form>
              </div>
              <div class="modal-footer">
                <button id="button" type="button" class="btn btn-primary" data-dismiss="modal" onclick="loginCredential(event)">Login</button>
              </div>
           </div>
        </div>
    </div>`;
document.getElementById("header").innerHTML=headerTemplates;


 let footerTemplates=` <!-- Button trigger modal -->
 <button id="contact" type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-backdrop="false" data-target="#contact-modal">Contact us</button>

 <!-- Modal -->
     <div class="modal fade" id="contact-modal"  role="dialog" tabindex="-1" aria-labelledby="login-modal-label" aria-hidden="true">
       <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
               <h5 class="modal-title" id="login-modal-label">Get in touch</h5>
               <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
             </div>
             <div class="modal-body">
               <form >
                     <p>Thank you for reaching out!!!
                         <br>
                      enter you email and we will get back to you.</p>
                   
                   
                       <label for="email">Email: </label>
                       <input type="email" id="email" name="email" placeholder="Enter your email id" required />
                   
               </form>
             </div>
             <div class="modal-footer">
               <button id="button" type="button" class="btn btn-primary" data-dismiss="modal">Login</button>
             </div>
          </div>
       </div>
   </div>
 <section id="para">
     &copy; 2021 ROOM SEARCH PVT LTD
 </section>

 <section id="footer-logo">
     <a class="social-logo" href="https://www.facebook.com" target="_blank"><img src="assests/images/facebook.png" alt="logo 1" height="20px" width="22px"></a>
     <a class="social-logo" href="https://www.instagram.com" target="_blank"><img src="assests/images/instagram.png" alt="logo 2" height="20px" width="22px"></a>
     <a class="social-logo" href="https://twitter.com" target="_blank"><img src="assests/images/twitter.png" alt="logo 3" height="20px" width="22px"></a>
 </section>`;

 document.getElementById("footer").innerHTML=footerTemplates;


        //  localStorage.setItem("isUserLoggedIn", "false");

//  localStorage.clear();
 let loginCredential=(event)=>{
    localStorage.setItem("username", "admin");
    localStorage.setItem("password", "admin");
    localStorage.setItem("isUserLoggedIn", "false");

    event.preventDefault();

    let defaultusername=localStorage.getItem("username");
    let defaultpassword=localStorage.getItem("password");
   

    let userElement=document.getElementById("username");
    let passwordElement=document.getElementById("password");

    if(userElement.value===defaultusername && passwordElement.value===defaultpassword){
        alert("succesfully loggedin!!");
        document.getElementById("login").innerHTML="LOGOUT";
        localStorage.setItem("isUserLoggedIn", "true");
        userElement.value="";
        passwordElement.value="";
        //  location.reload();
        // toActivatePayNowBtn();

        
    }else{
        alert("wrong credential!!");
        userElement.value="";
        passwordElement.value="";
        localStorage.clear();
        localStorage.setItem("isUserLoggedIn", "false");
    }

 }
 let logoutCase=()=>{
     let logoutcondtion=document.getElementById("login");
     if(logoutcondtion.innerHTML==="LOGOUT"){
         logoutcondtion.innerHTML="LOGIN";
         
         logoutcondtion.dataset.target="";
        
       
         localStorage.clear();

         localStorage.setItem("isUserLoggedIn", "false");
        //  toActivatePayNowBtn();
          //  location.reload();
         
     }else{
        logoutcondtion.dataset.target="#login-modal";
        localStorage.clear();
     }
 }

 let chechfunc=()=>{
  let logoutcondtion=document.getElementById("login");
 let isUserIn= localStorage.getItem('isUserLoggedIn');

  if(isUserIn){
    logoutcondtion.innerHTML="LOGOUT";
    
  }
  else{
    logoutcondtion.innerHTML="LOGIN";
    
  }
 }
 chechfunc();
 