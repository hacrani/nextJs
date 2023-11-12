import Image from 'next/image'
import { cookies } from 'next/headers'

export default function Home() {
  const cookieStore = cookies();
  console.log("hello");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>main page</p>
    </main>
  )
}
