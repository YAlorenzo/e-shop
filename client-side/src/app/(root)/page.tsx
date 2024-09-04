import type { Metadata } from "next";
import Home from "./Home";


export const metadata: Metadata = {
	title: 'your purchases your pleasure!'
}

export default function HomePage() {
    return <Home />
}