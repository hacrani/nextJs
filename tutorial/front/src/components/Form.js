import { useState } from 'react';

function MyForm() {
    const [formData, setFormData] = useState({
        firstname: '',
        motherName: '',
        fatherName: '',
        // Add more fields as needed
      });
    
      const [errors, setErrors] = useState({
        firstname: '',
        motherName: '',
        fatherName: '',
        
      });
    
      const handleInputChange = (e) => {
        const { name, defaultValue } = e.target;
        setFormData({ ...formData, [name]: defaultValue });
        setErrors({ ...errors, [name]: '' });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formData);
      };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-6 mb-4">
            <div className="form-outline">
            <label className="form-label">First name</label>
            <input 
                type="text" 
                id="form3Example1m" 
                className="form-control form-control-md"  
                defaultValue={formData.firstname}
                onChange={handleInputChange}
            />
            {errors.firstname && <p className='text-danger'>{errors.firstname}</p>}
            </div>
        </div>
        <div className="col-md-6 mb-4">
            <div className="form-outline">
            <label className="form-label" htmlFor="form3Example1n">Last name</label>
            <input 
                type="text" 
                id="form3Example1n" 
                className="form-control form-control-md" 
                defaultValue={formData.lastname}
                onChange={handleInputChange}
                />
                
            </div>
        </div>
        </div>

        <div className="row">
        <div className="col-md-6 mb-4">
            <div className="form-outline">
            <label className="form-label">Mother's name</label>
            <input 
                type="text" 
                className="form-control form-control-md" 
                defaultValue={formData.motherName}
                onChange={handleInputChange}
            />
            {errors.motherName && <p className='text-danger'>{errors.motherName}</p>}
            </div>
        </div>
        <div className="col-md-6 mb-4">
            <div className="form-outline">
            <label className="form-label">Father's name</label>
            <input 
                type="text" 
                className="form-control form-control-md" 
                defaultValue={formData.fatherName}
                onChange={handleInputChange}
            />
            {errors.fatherName && <p className='text-danger'>{errors.fatherName}</p>}
            </div>
        </div>
        </div>

        <div className="form-outline mb-4">
        <label className="form-label" htmlFor="form3Example8">Address</label>
        <input type="text" id="form3Example8" className="form-control form-control-md" />
        </div>

        <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">
        <h6 className="mb-0 me-4">Gender: </h6>

        <div className="form-check form-check-inline mb-0 me-4">
            <label className="form-check-label" htmlFor="femaleGender">Female</label>
            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender" defaultValue="option1" />
        </div>

        <div className="form-check form-check-inline mb-0 me-4">
            <label className="form-check-label" htmlFor="maleGender">Male</label>
            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender" defaultValue="option2" />
        </div>

        <div className="form-check form-check-inline mb-0">
            <label className="form-check-label" htmlFor="otherGender">Other</label>
            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender" defaultValue="option3" />
        </div>
        </div>

        <div className="row">
        <div className="col-md-6 mb-4">
            <select className="form-select">
            <option defaultValue="1">State</option>
            <option defaultValue="2">Option 1</option>
            <option defaultValue="3">Option 2</option>
            <option defaultValue="4">Option 3</option>
            </select>
        </div>
        <div className="col-md-6 mb-4">
            <select className="form-select">
            <option defaultValue="1">City</option>
            <option defaultValue="2">Option 1</option>
            <option defaultValue="3">Option 2</option>
            <option defaultValue="4">Option 3</option>
            </select>
        </div>
        </div>

        <div className="form-outline mb-4">
        <label className="form-label" htmlFor="form3Example9">DOB</label>
        <input 
            type="text" 
            className="form-control form-control-md"
            defaultValue={formData.dob}
            onChange={handleInputChange}
        />
        {errors.dob && <p className='text-danger'>{errors.dob}</p>}
        </div>

        <div className="form-outline mb-4">
        <label className="form-label" htmlFor="form3Example90">Pincode</label>
        <input 
            type="text" 
            className="form-control form-control-md"
            defaultValue={formData.pincode}
            onChange={handleInputChange}
        />
        {errors.pincode && <p className='text-danger'>{errors.pincode}</p>}
        </div>

        <div className="form-outline mb-4">
        <label className="form-label">Email ID</label>
        <input 
            type="email" 
            className="form-control form-control-md"
            defaultValue={formData.email}
            onChange={handleInputChange}
        />
        {errors.email && <p className='text-danger'>{errors.email}</p>}
        </div>
        <div className="form-outline mb-4">
        <label className="form-label">Mobile No. </label>
        <input 
            type="text" 
            className="form-control form-control-md"
            defaultValue={formData.mobile}
            onChange={handleInputChange}
        />
        {errors.mobile && <p className='text-danger'>{errors.mobile}</p>}
        </div>

        <div className="form-outline mb-4">
        <label className="form-label" htmlFor="form3Example99">Course</label>
        <input 
            type="text" 
            className="form-control form-control-md"
            defaultValue={formData.course}
            onChange={handleInputChange}
        />
        {errors.course && <p className='text-danger'>{errors.course}</p>}
        </div>

        <div className="d-flex justify-content-end pt-3">
        <button type="button" className="btn btn-light btn-md" >Reset all</button>
        <button type="submit" className="btn btn-warning btn-md ms-2">Submit</button>
        </div>
    </form>
  );
}

export default MyForm;
