import { PUBLIC_URL } from "@/config/url.config";
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
      <Link href={PUBLIC_URL.home()} className="flex items-center gap-x-3 hover:opacity-75 transition-opacity">
          <Image src="/images/logo.svg" alt="logo" width={35} height={35} />
          <div className="text-2xl font-bold text-blue-600 uppercase">e-shop</div>
      </Link>
  )
}
