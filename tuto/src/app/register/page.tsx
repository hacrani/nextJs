const Register = () => {
    return(
        <div className="container  h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div className="card shadow-2-strong" style={{'borderRadius': '1rem'}}>
                    <div className="card-body p-5 text-center">

                        <h3 className="mb-5">Sign up</h3>

                        <div className="row">
                            <div className="col-md-6 mb-4">
                                <div className="form-outline">
                                <input 
                                    type="text" 
                                    id="form3Example1m" 
                                    className="form-control form-control-md"  
                                    placeholder="Enter Your firstname"
                                />
                                </div>
                            </div>
                            <div className="col-md-6 mb-4">
                                <div className="form-outline">
                                <input 
                                    type="text" 
                                    id="form3Example1n" 
                                    className="form-control form-control-md" 
                                    placeholder="Enter Your Lastname"
                                    />
                                    
                                </div>
                            </div>
                        </div>
                        <div className="form-outline mb-4">
                        <input type="text" id="typeEmailX-2" placeholder="Enter mobile number" className="form-control" />
                        </div>

                        <div className="form-outline mb-4">
                        <input type="email" id="typeEmailX-2" placeholder="Enter your email" className="form-control" />
                        </div>

                        <div className="form-outline mb-4">
                        <input type="password" id="typePasswordX-2" placeholder="Create a password for your account" className="form-control" />
                        </div>

                        {/* <!-- Checkbox --> */}
                        <div className="form-check d-flex justify-content-start mb-4">
                        <input className="form-check-input me-2" type="checkbox" value="" id="form1Example3" />
                        <label className="form-check-label" htmlFor="form1Example3"> Remember password </label>
                        </div>
                    
                        <div className="d-flex justify-content-end pt-3">
                            <button type="button" className="btn btn-light btn-md" >Reset all</button>
                            <button type="submit" className="btn btn-warning btn-md ms-2">Register</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;