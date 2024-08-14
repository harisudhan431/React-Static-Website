import React from "react";

function Dashboard(){
    return(
        <>
        <div class="container w-50 mt-5 border border-dark">
            <div class="row ms-5 pt-2">
            <div className="col-6">
            <label for="FullName" class="form-label fw-bold">Full Name:</label>
            </div>
            <div className="col-6 ">
            <label for="Branch" class="form-label fw-bold">Branch:</label>
            </div>
            </div>
            <div className="row ms-5">

            <div className="col-6">
            <label for="FullName" class="form-label ">HARI SUDHAN S</label>
            </div>
            <div className="col-6">
            <label for="Branch" class="form-label ">COMPUTER SCIENCE</label>
            </div>
            </div>
            <div class="row ms-5">
            <div className="col-6">
            <label for="Register" class="form-label fw-bold">Register Number:</label>
            </div>
            <div className="col-6">
            <label for="year" class="form-label fw-bold">Year of Passing:</label>
            </div>
            </div>
            <div className="row ms-5">

            <div className="col-6">
            <label for="Register" class="form-label ">720721104088</label>
            </div>
            <div className="col-6">
            <label for="year" class="form-label ">2025</label>
            </div>
            </div>

           
       
            
        </div>
        </>
    );
}
export default Dashboard;