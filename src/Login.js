import React from "react";

function Login(){
    return(
        <div class="container w-50 mt-5 border border-black bg-white p-2 rounded shadow">
        <form action="/action_page.php">
  <div class="form-group">
    <label for="email" class="fw-bold">Email address:</label>
    <input type="email" class="form-control" id="email" required/>
  </div>
  <div class="form-group">
    <label for="pwd" class="fw-bold">Password:</label>
    <input  type="password" class="form-control"  required/>
  </div>
 <div class="text-center">
 <button type="submit" class="btn btn-primary mt-3 text-center w-25">Submit</button>
 </div>

</form>
        </div>

    );
}
export default Login;