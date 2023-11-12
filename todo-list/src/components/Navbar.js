import Image from "next/image";
import Link from 'next/link'

const Navbar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light shadow p-2 mb-3 bg-white rounded">
            <Link className="navbar-brand" href="/">
            <Image
                src="/images/logo.png"
                width={60}
                height={60}
                alt="Picture of the author"
            />
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse d-flex bd-highlight" id="navbarNav">
                <div class="p-2 bd-highlight">
                    <ul className="navbar-nav fw-bold">
                        <li className="nav-item active">
                            <Link className="nav-link" href="/">Home</Link>
                        </li>
                        <li class="nav-item dropdown">
                            <Link class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              About Us
                            </Link>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                              <Link class="dropdown-item" href="#">Who We Are</Link>
                              <Link class="dropdown-item" href="#">Contact Us</Link>
                            </div>
                          </li>
                           <li className="nav-item">
                            <Link className="nav-link" href="#">Career</Link>
                        </li>
                         <li className="nav-item">
                            <Link className="nav-link" href="#">News</Link>
                        </li>
                    </ul>
                </div>
                <div class="ms-auto p-2 bd-highlight px-5">
                    <div class="collapse navbar-collapse" id="navbarNav">
                      <ul class="navbar-nav ml-auto fw-bold">
                        <li class="nav-item dropdown">
                          <Link class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fa fa-user-circle-o mx-2" aria-hidden="true"></i>
                            My Profile
                          </Link>
                          <div class="dropdown-menu ms-auto" aria-labelledby="navbarDropdown">
                            <span class="dropdown-item-text">Hello, [User Name]</span>
                            <div class="dropdown-divider"></div>
                            <Link class="dropdown-item" href="#">
                                <i class="fa fa-user mx-2" aria-hidden="true"></i>
                                View Profile
                            </Link>
                            <div class="dropdown-divider"></div>
                                <Link class="dropdown-item" href="#">
                                   <i class="fa fa-sign-out mx-2" aria-hidden="true"></i>
                                   Logout
                                </Link>
                          </div>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/login">
                                <i class="fa fa-sign-in mx-2" aria-hidden="true"></i>
                                Login
                            </Link>
                        </li>
                      </ul>
                    </div>
                </div>
            </div>
            </nav>
        </>
    );
}

export default Navbar;