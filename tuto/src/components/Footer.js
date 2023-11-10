import Link from 'next/link';

export default function Footer() {
	return (
		<footer className="bg-light text-center text-white fixed-bottom">
		  {/* // <!-- Grid container --> */}
		  <div className="container p-4 pb-0 d-flex justify-content-between">
			<section className="mb-4 align-self-center">
				<p className='text-danger m-1'>© Copyright <b>2023</b>. All Rights Reserved </p>
			</section>
		    {/* // <!-- Section: Social media --> */}
		    <section className="mb-4">
		      <Link
		        className="btn text-white btn-floating m-1"
		        style={{'backgroundColor': '#3b5998'}}
		        href="#!"
		        role="button"
		        ><i className="fa fa-facebook-f"></i
		      ></Link>

		      <Link
		        className="btn text-white btn-floating m-1"
		        style={{'backgroundColor': '#55acee'}}
		        href="#!"
		        role="button"
		        ><i className="fa fa-twitter"></i
		      ></Link>

		      <Link
		        className="btn text-white btn-floating m-1"
		        style={{'backgroundColor': '#dd4b39'}}
		        href="#!"
		        role="button"
		        ><i className="fa fa-google"></i
		      ></Link>
		      <Link
		        className="btn text-white btn-floating m-1"
		        style={{ 'backgroundColor': '#ac2bac'}}
		        href="#!"
		        role="button"
		        ><i className="fa fa-instagram"></i
		      ></Link>
			  <Link
		        className="btn text-white btn-floating m-1"
		        style={{ 'backgroundColor': '#0082ca'}}
		        href="#!"
		        role="button"
		        ><i className="fa fa-linkedin"></i
		      ></Link>
		      <Link
		        className="btn text-white btn-floating m-1"
		        style={{'backgroundColor': '#333333'}}
		        href="#!"
		        role="button"
		        ><i className="fa fa-github"></i
		      ></Link>
		    </section>
		  </div>
		</footer>
	);
}