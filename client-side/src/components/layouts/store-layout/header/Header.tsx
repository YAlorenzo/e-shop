'use client'
import { useProfile } from "@/hooks/useProfile"
import { MobileSidebar } from "../sidebar/MobileSidebar"
import Link from "next/link"
import { DASHBOARD_URL } from "@/config/url.config"
import Image from "next/image"
import { Loader } from "@/components/ui/Loader"

export function Header() {
  const {user, isLoading} = useProfile()
  return (
    <div className="p-6 gap-x-4 h-full flex bg-white border-b">
      <MobileSidebar />
      <div className="flex items-center gap-x-4 ml-auto">
         {isLoading ? (
        <Loader size='sm' />
      ) : (
          user && (
            <>
              <Link href={DASHBOARD_URL.home()}>
                <Image src={user.picture} alt={user.name} width={42} height={42} className="rounded-full" />
              </Link>
            </>
          )
      )}
      </div>
    </div>
  )
}
