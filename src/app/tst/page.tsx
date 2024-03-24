import { Card, DatePicker } from "@tremor/react";
import Link from "next/link";

export default function TestPage() {
    return (
        <div className="h-full">
            <header className="flex justify-between mt-4 bg-blue-800">
                <Link className="max-w-sm" href="/">
                    <h3 className="text-lg ml-5 font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                        &lt;- Kembali
                    </h3>
                </Link>
            </header>
            <div className=" flex border h-96 space-x-4 h-full">
                <div className="bg-red-400 border size-3/6 h-96 rounded-lg h-1/2">Test</div>
                <div className="flex flex-col">
                <div className="flex bg-blue-400 border space-x-2 size-3/6 h-40 w-56 rounded-lg h-1/2">
                    <Card className="bg-slate-600 text-white w-40 h-40">Ceki Ceki</Card>
                    <div className="border bg-orange-500 max-h-40">Chart</div>
                </div>
                </div>    
            </div>

        </div>
    )
}