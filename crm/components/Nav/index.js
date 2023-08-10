import Link from "next/link"



export default function Nav() {
    return (
        <nav className=" min-h-screen text-white bg-gray-800 text-center flex flex-col justify-start">
            <div className="px-3 py-3  flex flex-col">
                <Link href="/dashboard">
                <img className="w-12 rounded border border-black" src="/assets/crm-logo.png" alt="logo" />
                </Link>
            </div>
            <div>
            <div>
                    <Link href="/dashboard">
                        D
                    </Link>
                </div>       
                <div>
                    <Link href="/export">
                        E
                    </Link>
                </div>       
            </div>
        </nav>
    )
}