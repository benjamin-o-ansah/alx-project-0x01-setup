import Link from "next/link";

const Header = () => (
  <header className="bg-gray-900 text-white p-4">
    <nav className="flex gap-6">
      <Link href="/">Home</Link>
      <Link href="/posts">Posts</Link>
      <Link href="/users">Users</Link>
    </nav>
  </header>
);

export default Header;
