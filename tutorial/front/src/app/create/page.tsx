'use client'
import React from 'react';
import Link from 'next/link';
import Form from '@/components/Form';

const createOrEdit = () => {
  return (
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col">
          <Link href="/" className="btn btn-danger btn-md">Back Home</Link> 
          <div className="card card-registration my-4">
            <div className="row g-0">
              <div className="col-xl-12">
                <div className="card-body p-md-5 text-black">
                  <h3 className="mb-1 text-uppercase text-center">Student registration form</h3>
                  <hr className="mb-5" />
                <Form/> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default createOrEdit;
