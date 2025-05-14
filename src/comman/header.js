
import { Link } from "react-router-dom"

export default function Header(){
    return(
        <>
         <header id="site-header" class="fixed-top">
        <div class="container">
            <nav class="navbar navbar-expand-lg navbar-dark stroke">
                <h1><Link class="navbar-brand"  >
                    Web service
                    </Link></h1>
                 
      {/* <a class="navbar-brand" href="#index.html">
          <img src="image-path" alt="Your logo" title="Your logo" style={{height:"35px"}} />
      </a>  */}
                <button class="navbar-toggler  collapsed bg-gradient" type="button" data-toggle="collapse"
                    data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon fa icon-expand fa-bars"></span>
                    <span class="navbar-toggler-icon fa icon-close fa-times"></span>
                    
                </button>
      
                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul class="navbar-nav ml-auto mr-5">
                        <li class="nav-item active">
                            <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
                        </li>
                        <li class="nav-item @@about__active">
                            <Link class="nav-link" to='/about'>About</Link>
                        </li>
                        <li class="nav-item @@services__active">
                            <Link class="nav-link" to="/service">Services</Link>
                        </li>
                        <li class="nav-item @@contact__active">
                            <Link class="nav-link" to="/contact">Contact</Link>
                        </li>
                        <nav class="ml-lg-3">
                            <div class="search-bar">
                                <form action="#" method="GET" class="search">
                                    <input type="search" class="search__input" name="search"
                                        placeholder="Search here.." onload="equalWidth()" required />
                                    <span class="fa fa-search search__icon"></span>
                                </form>
                            </div>
                        </nav>
                    </ul>
                </div>
                
      
                <div class="mobile-position">
    <nav class="navigation">
        <div class="theme-switch-wrapper">
            <label class="theme-switch" for="checkbox">
                <input type="checkbox" id="checkbox" />
                <div class="mode-container py-1">
                    <i class="gg-sun"></i>
                    <i class="gg-moon"></i>
                </div>
            </label>
        </div>
    </nav>
</div>

             
            </nav>
        </div>
      </header>

        </>
    )
}
