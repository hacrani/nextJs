const Login = () => {
    return(
        <div className="container  h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div className="card shadow-2-strong" style={{'borderRadius': '1rem'}}>
                    <div className="card-body p-5 text-center">

                        <h3 className="mb-5">Sign in</h3>

                        <div className="form-outline mb-4">
                        <input type="email" id="typeEmailX-2" placeholder="Enter your email" className="form-control" />
                        </div>

                        <div className="form-outline mb-4">
                        <input type="password" id="typePasswordX-2" placeholder="Enter your account password" className="form-control" />
                        </div>

                        {/* <!-- Checkbox --> */}
                        <div className="form-check d-flex justify-content-start mb-4">
                        <input className="form-check-input me-2" type="checkbox" value="" id="form1Example3" />
                        <label className="form-check-label" htmlFor="form1Example3"> Remember password </label>
                        </div>
                    
                        <div className="d-flex justify-content-end pt-3">
                            <button type="button" className="btn btn-light btn-md" >Reset all</button>
                            <button type="submit" className="btn btn-warning btn-md ms-2">login</button>
                        </div>
                        <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="/register"
                className="link-danger">Register</a></p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;