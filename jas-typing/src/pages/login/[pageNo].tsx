import { useRouter } from "next/router"

const Page = () => {
    const router = useRouter();
    const pageNumber = router.query.pageNo;
    return <div>
        <h1>Page No : {pageNumber}</h1>
    </div>
}

export default Page;