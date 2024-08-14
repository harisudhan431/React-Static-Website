import React from 'react';
import pf from "./assests/portfolio.png"

function Header(){
  return(
   
   
  
<>
 <nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand pt-2" href="#">
      <img src={pf} alt="pflogo" width="30" height="24" class="d-inline-block align-text-top"/>
      HARI SUDHAN
    </a>
  </div>
</nav> 
   <div class="container-fluid  pt-3 pb-3 fixed-top nav text-white justify-content-end ">
  <li class="nav-item pe-5">
    <a class="nav-link active" aria-current="page" href="#">Home</a>
  </li>
  <li class="nav-item pe-5">
    <a class="nav-link" href="#">About</a>
  </li>
  <li class="nav-item pe-5">
    <a class="nav-link" href="#">Contact Us</a>
  </li>
  <li class="nav-item pe-5">
    <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">Service</a>
  </li>



</div>
</>
  );
}
export default Header;