const Footer = () => {
    return (
        <footer className="text-center text-white fixed-bottom" style={{ 'backgroundColor' : '#caced1'}} >
            {/* <!-- Grid container --> */}
            <div className="container p-4">
                {/* <!-- Section: Images --> */}
                <section className="">
                <div className="row">
                    <div className="col-lg-2 col-md-12 mb-4 mb-md-0">   
                    <div
                        className="bg-image hover-overlay ripple shadow-1-strong rounded"
                        data-ripple-color="light"
                    >
                        <img
                        src="https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp"
                        className="w-100"
                        />
                        <a href="#!">
                        <div
                            className="mask"
                            style={{"background-color": "rgba(251, 251, 251, 0.2)" }}
                        >Link 1</div>
                        </a>
                    </div>
                    </div>
                    <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                    <div
                        className="bg-image hover-overlay ripple shadow-1-strong rounded"
                        data-ripple-color="light"
                    >
                        <img
                        src="https://mdbcdn.b-cdn.net/img/new/fluid/city/111.webp"
                        className="w-100"
                        />
                        <a href="#!">
                        <div
                            className="mask"
                            style={{"background-color": "rgba(251, 251, 251, 0.2)" }}
                        >Link 2</div>
                        </a>
                    </div>
                    </div>
                    <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                    <div
                        className="bg-image hover-overlay ripple shadow-1-strong rounded"
                        data-ripple-color="light"
                    >   
                        <img
                        src="https://mdbcdn.b-cdn.net/img/new/fluid/city/112.webp"
                        className="w-100"
                        />
                        <a href="#!">
                        <div
                            className="mask"
                            style={{"background-color": "rgba(251, 251, 251, 0.2)" }}
                        >Link 3</div>
                        </a>
                    </div>
                    </div>
                    <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                    <div
                        className="bg-image hover-overlay ripple shadow-1-strong rounded"
                        data-ripple-color="light"
                    >
                        <img
                        src="https://mdbcdn.b-cdn.net/img/new/fluid/city/114.webp"
                        className="w-100"
                        />
                        <a href="#!">
                        <div
                            className="mask"
                            style={{"background-color": "rgba(251, 251, 251, 0.2)" }}
                        >Link 4</div>
                        </a>
                    </div>
                    </div>
                    <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                    <div
                        className="bg-image hover-overlay ripple shadow-1-strong rounded"
                        data-ripple-color="light"
                    >
                        <img
                        src="https://mdbcdn.b-cdn.net/img/new/fluid/city/115.webp"
                        className="w-100"
                        />
                        <a href="#!">
                        <div
                            className="mask"
                            style={{"background-color": "rgba(251, 251, 251, 0.2)" }}
                        >Link 5</div>
                        </a>
                    </div>
                    </div>
                    <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                    <div
                        className="bg-image hover-overlay ripple shadow-1-strong rounded"
                        data-ripple-color="light"
                    >
                        <img
                        src="https://mdbcdn.b-cdn.net/img/new/fluid/city/116.webp"
                        className="w-100"
                        />
                        <a href="#!">
                        <div
                            className="mask"
                            style={{"background-color": "rgba(251, 251, 251, 0.2)" }}
                        >Link 6</div>
                        </a>
                    </div>
                    </div>
                </div>
                </section>
                {/* <!-- Section: Images --> */}
            </div>
            {/* <!-- Grid container --> */}

            {/* <!-- Copyright --> */}
            <div className="text-center p-3" style={{"background-color": "rgba(0, 0, 0, 0.2)" }}>
                © 2020 Copyright:
                <a className="text-white" href="https://mdbootstrap.com/">Perky Solutions.</a>
            </div>
            {/* <!-- Copyright --> */}
            </footer>
    );
}

export default Footer;