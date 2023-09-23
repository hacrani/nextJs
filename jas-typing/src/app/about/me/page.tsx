"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Me() {
    const router = useRouter()

    return (
        <div>
            <h1>hello</h1>
            <Link href='/login' >Login page</Link>
            <br/>
            <button onClick={() => router.push('/about')}>About Page </button>
        </div>
    );
}