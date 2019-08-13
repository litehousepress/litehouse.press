import './Header.scss';

function Header(props) {
    return (
        <header className="header">
            <div className="header__logo">
                <svg viewBox="0 0 273 350">
                    <path d="m0 0h116.375v350h-116.375z" fill="#ffd25a" />
                    <path
                        d="m0 233.625h272.125v116.375h-272.125z"
                        fill="#ffbc34"
                        opacity=".66569"
                    />
                </svg>
            </div>
            <nav className="header__nav">
                <ul>
                    <li>
                        <a href="#about-us">About us</a>
                    </li>
                    <li>
                        <a href="#products">Products</a>
                    </li>
                    <li>
                        <a href="#team">Team</a>
                    </li>
                    <li>
                        <a href="#contact-us">Contact us</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
