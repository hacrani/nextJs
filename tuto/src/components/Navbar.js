const Navbar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light shadow p-3 mb-3 bg-white rounded">
            <a className="navbar-brand" href="#">Student D</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="/login">Login</a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="/register">Register</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">About</a>   
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Contact Us</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
                </li>
                </ul>
            </div>
            </nav>
        </>
    );
}

export default Navbar;