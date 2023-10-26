import Image from 'next/image'
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container bg-white pt-4 pb-4 table-responsive">
        <div className="d-flex justify-content-between mb-4">
          <h2>Student Reports</h2>
          <Link href="/create" className="btn btn-primary">Add New</Link> 
        </div>
        <hr/>
        <table className="table table-striped"> 
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Student Name</th>
              <th>Gender</th>
              <th>Father's Name</th>
              <th>Mother's Name</th>
              <th>DOB</th>
              <th>Mobile</th>
              <th>Email</th>
              <th>Course</th>
              <th>Address</th>
              <th>Created At</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Doe</td>
              <td>male</td>
              <td>abc</td>
              <td>bdn</td>
              <td>15 july</td>
              <td>9223</td>
              <td>john@example.com</td>
              <td>b.tech</td>
              <td>rajasthan india</td>
              <td>20-23-231</td>
              <td><Link href="#" className="btn btn-primary me-1 mb-1 btn-sm">Edit</Link><Link href="#" className="btn btn-danger btn-sm">Delete</Link></td>
            </tr>
            <tr>
              <td>2</td>
              <td>Doe</td>
              <td>male</td>
              <td>abc</td>
              <td>bdn</td>
              <td>15 july</td>
              <td>9223</td>
              <td>john@example.com</td>
              <td>b.tech</td>
              <td>rajasthan india</td>
              <td>20-23-231</td>
              <td><Link href="#" className="btn btn-primary me-1 mb-1 btn-sm">Edit</Link><Link href="#" className="btn btn-danger btn-sm">Delete</Link></td>
            </tr>
            <tr>
              <td>3</td>
              <td>Doe</td>
              <td>male</td>
              <td>abc</td>
              <td>bdn</td>
              <td>15 july</td>
              <td>9223</td>
              <td>john@example.com</td>
              <td>b.tech</td>
              <td>rajasthan india</td>
              <td>20-23-231</td>
              <td><Link href="#" className="btn btn-primary me-1 mb-1 btn-sm">Edit</Link><Link href="#" className="btn btn-danger btn-sm">Delete</Link></td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  )
}
