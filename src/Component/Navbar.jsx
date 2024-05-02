import { NavLink } from "react-router-dom";
import "./Component.css";
<link rel="preconnect" href="https://fonts.googleapis.com"/>;
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>;
<link href="https://fonts.googleapis.com/css2?family=Jersey+15+Charted&display=swap" rel="stylesheet"/>;
export const Navbar = () =>{
return(
    <>
    {/* <div className="container-fluid">
    <div className="row">
 
        <div className="col-md-8 nav-item">
            <li>R D</li>
        </div>
        <div className="col-md-2 nav-item">
            <li>About</li>
        </div> 
        <div className="col-md-2 nav-item">
            <li>Project</li>
        </div>
    
</div>
</div> */}
<nav class="navbar navbar-expand-lg  navbar-scroll shadow-0" >
  <div class="container">
    <NavLink to='/'>
    <a class="navbar-brand" href="#">MY PORTFOLIO</a></NavLink>
    <button class="navbar-toggler ps-0" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarExample01"
      aria-controls="navbarExample01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="d-flex justify-content-start align-items-center">
        <i class="fas fa-bars"></i>
      </span>
    </button>
    <div class="collapse navbar-collapse" id="navbarExample01">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item active">
            <NavLink to='/about'>
          <a class="nav-link px-3" href="#!">ABOUT</a>
          </NavLink>
        </li>
        {/* <li class="nav-item">
          <a class="nav-link px-3" href="#!"></a>
        </li> */}
        <li class="nav-item">
            <NavLink to='/project'>
          <a class="nav-link px-3" href="#!">PROJECT</a>
          </NavLink>
        </li>
        {/* <li class="nav-item active">
          <a class="nav-link px-3" href="#!"></a>
        </li> */}
        <li class="nav-item">
            <NavLink to='/contact'>
          <a class="nav-link px-3" href="Project">CONTACT</a></NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
)
}