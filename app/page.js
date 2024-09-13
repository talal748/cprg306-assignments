import Link from "next/link";
import StudentInfo from "./week-2/student-info";

export default function Home() {
  return (
    <main>
      <h1 className="text-2xl">CPRG 306: Web Development 2 - Assignments</h1>
      <Link href="./week-2" className="underline text-red-800 hover:text-red-600" >Week 2 Assignment Link</Link>
    </main>
  );
}
