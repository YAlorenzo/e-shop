import type { PropsWithChildren } from "react";
import { Sidebar } from "./sidebar/Sidebar";
import { Header } from "./header/Header";

export default function StoreLayout({ children }: PropsWithChildren<unknown>) {
    // console.log(children,  'это чилдрен');
    return (
        <div className="flex flex-col w-full">
            <div>
                <div className="hidden lg:flex h-full w-64 flex-col fixed inset-y-0 z-[50]">
                    <Sidebar />
                </div>
                <div className="h-[70px] lg:pl-64 fixed inset-y-0 w-full z-[49]">
                    <Header />
                </div>

                <main className="lg:pl-64 py-[70px] bg-white">{children}</main>
            </div>
        </div>
    )
}
