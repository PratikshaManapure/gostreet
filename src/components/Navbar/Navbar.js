// import "./Navbar.css";
import {Link} from "react-router-dom";

export default function Navbar(){
    return(
       <div>
       <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="rentrip.avif" alt="Logo" width="30" 
      height="24" class="d-inline-block align-text-top"/>
      
    </a>
  </div>
    {/* <a class="navbar-brand" href="#">RenTrip</a> */}
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link " href="Home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="About">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="Services">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="Review">Review</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="Blog">Blog</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="Adminlogin">Adminlogin</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="Userlogin">Userlogin</a>
        </li>

      </ul>

      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-secondary" type="submit">Search</button>
      </form>
    </div>
  </div>
  </nav>
</div>
    )
}