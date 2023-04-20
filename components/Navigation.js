import Link from "next/link";

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Back home</Link>
        </li>
        <li>
          <Link href="/art-pieces">Gallery</Link>
        </li>
      </ul>
    </nav>
  );
}
