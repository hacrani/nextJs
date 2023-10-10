'use client'
import Link from 'next/link'
import Image from 'next/image'
import style from  './page.module.css'
 
export default function NotFound() {
  return (
    <div style={{'textAlign':'center', 'margin': '5rem'}}>
      <h2 className={style.heading}>Page Not Found</h2>
      <Image
        src="/images/funny-404-error-page-design.gif"
        width={500}
        height={500}
        alt="Picture of the author" 
      />
      <style jsx>{`
          h2 {
            background-color : red
            ;
          }
      `}
      </style>

      <p style={{'marginBottom' : '20px'}}>Could not find requested resource</p>
      <Link href="/" style={{'backgroundColor':'green', 'color':'white', 'textDecoration':'none', 'padding':'6px', 'borderRadius' : '5px'}}>Return Home</Link>
    </div>
  )
}