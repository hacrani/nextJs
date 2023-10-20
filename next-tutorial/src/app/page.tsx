'use client'
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Link from 'next/link';


const Main = ()  => {
   const  apple = () => {
    return alert('fuit');
   }
  return (
    <div className='text-center'>
      <Navbar />
        <main>
            <Link  className = "btn btn-info" href="/login">About Us</Link>
            <button onClick={apple} className='btn btn-success mt-5'>Click me </button>
        </main>
      <Footer />
    </div>
  );
}

export default Main;