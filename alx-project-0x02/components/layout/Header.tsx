import Link from "next/link";

const Header = () => {
    return (
        <div>
            <h1>header</h1>
            <p>should be a list</p>
            <ul>
                <li>
                    <Link href="/home">home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/posts">posts</Link>
                </li>
            </ul>
        </div>
    );
};

export default Header;