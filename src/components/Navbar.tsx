import Link from "next/link";

const Navbar = () => (
  <nav className="bg-blue-500 p-4 text-white">
    <ul className="flex justify-around">
      <li><Link href="/about-us">About Us</Link></li>
      <li><Link href="/careers">Careers</Link></li>
      <li><Link href="/contact-us">Contact Us</Link></li>
      <li><Link href="/email">Email</Link></li>
    </ul>
  </nav>
);

export default Navbar;
