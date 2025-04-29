import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function NotFound() {
    return(
    <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="flex flex-col gap-4 items-center">
            <h1 className="text-2xl font-bold">Page not found</h1>
            <p className="text-gray-700">Oops the page your looking for dosnt exist.</p>
            <Button>
                <Link href="/">
                    Continue Shopping
                </Link>
            </Button>
        </div>
    </div>
    )
}