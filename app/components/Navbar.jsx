import Link from "next/link";
import Logo from "./logo.png";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav>
      <Image src={Logo} alt="Poju Helpdesk Logo" width={70} quality={100} placeholder="blur"/>
      <h1>Poju helpdesk</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
    </nav>
  );
}
