import Image from 'next/image'
import Link from 'next/link';

export default function Home() {
  return (
    <main className="mt-5 flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container bg-white pt-4 pb-4 table-responsive">
        <div className="d-flex justify-content-between mb-4">
          <h2>Task List</h2>
          <Link href="/create" className="btn btn-primary">Add New</Link> 
        </div>
        <hr/>
        <table className="table table-striped"> 
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Task Name</th>
              <th>Task CreatedAt</th>
              <th>Due Date</th>
              <th>Schedule  a reminder</th>
              <th>Give  tasks  a priority  level</th>
              <th>Complete the task</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Doe</td>
              <td>male</td>
              <td>9223</td>
              <td>john@example.com</td>
              <td>b.tech</td>
              <td>rajasthan india</td>
              <td><Link href="#" className="btn btn-primary me-1 mb-1 btn-sm">Edit</Link><Link href="#" className="btn btn-danger btn-sm">Delete</Link></td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  )
}
