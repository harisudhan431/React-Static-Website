import React from "react";

function Footer() {
  return (
    // <div class="fixed-bottom">
    //     <p class="text-dark">&copy;Copyright own by Hari Sudhan </p>
    // </div>
    <>
    
      <footer class="text-center text-primary bg-dark fixed-bottom">
        <div class="container">
          <section class="mt-1">
            <div class="row text-center d-flex justify-content-center pt-2">
              
              <div class="col-md-2">
                <p class="text-uppercase font-weight-bold">
                  <a href="#!" class="text-white">
                    Home
                  </a>
                </p>
              </div>
              <div class="col-md-2">
                <p class="text-uppercase font-weight-bold">
                  <a href="#!" class="text-white">
                    About
                  </a>
                </p>
              </div>
              <div class="col-md-2">
                <p class="text-uppercase font-weight-bold">
                  <a href="#!" class="text-white">
                    Service
                  </a>
                </p>
              </div>
              <div class="col-md-2">
                <p class="text-uppercase font-weight-bold">
                  <a href="#!" class="text-white">
                    Contact US
                  </a>
                </p>
              </div>
            </div>
          </section>
          <hr class="my-1" />
          
          
        </div>

        <div
          class="text-center p-1"
           style={{
           }}
        >
          © 2024 Copyright: &nbsp; &nbsp; &nbsp;
          <a class="text-white" href="">
            Hari Sudhan
          </a>
        </div>
      </footer>
    
    </>
  );
}
export default Footer;
