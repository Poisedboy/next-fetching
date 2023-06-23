import Link from "next/link";

export default function Layout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <h1>About Us</h1>
            <ul>
                <li>
                    <Link href='/about/contacts'>Contacts</Link>
                </li>
                <li>
                    <Link href='/about/team'>Team</Link>
                </li>
                {children}
            </ul>
        </>
    );
};