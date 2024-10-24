import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 className="text-2xl text-center">CPRG 306: Web Development 2 - Assignments</h1>
      <Link href="./week-2" className="underline text-red-800 hover:text-red-600">Week 2 Assignment</Link>
      <br></br>
      <Link href="./week-3" className="underline text-red-800 hover:text-red-600">Week 3 Assignment</Link>
      <br></br>
      <Link href="./week-4" className="underline text-red-800 hover:text-red-600">Week 4 Assignment</Link>
      <br></br>
      <Link href="./week-5" className="underline text-red-800 hover:text-red-600">Week 5 Assignment</Link>
      <br></br>
      <Link href="./week-6" className="underline text-red-800 hover:text-red-600">Week 6 Assignment</Link>
    </main>
  );
}
