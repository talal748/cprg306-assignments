import Link from "next/link";

export default function StudentInfo() {
    let studentName = 'Talal Habib';
    let githubLink = 'https://github.com/talal748/cprg306-assignments';

    return(
        <div>
            <h3>Student Info</h3>
            <p>{studentName}</p>
            <Link href="https://github.com/talal748/cprg306-assignments" className="underline text-cyan-600 hover:text-cyan-300">My Github Link</Link>
        </div>
    );
}