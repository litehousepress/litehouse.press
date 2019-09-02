import Link from 'next/link';
function Hero(props) {
    return (
        <header className="header">
            <div className="logo">
                lite<span>house</span>
            </div>
            <nav>
                <ul>
                    <Link href="#about">
                        <li>About</li>
                    </Link>
                    <Link href="#products">
                        <li>Products</li>
                    </Link>
                    <Link href="#team">
                        <li>Team</li>
                    </Link>
                    <Link href="#contact">
                        <li>Contact</li>
                    </Link>
                </ul>
            </nav>
        </header>
    );
}

export default Hero;
