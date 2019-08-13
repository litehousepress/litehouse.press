import './Footer.scss';

function Footer(props) {
    const date = <span>{new Date().getFullYear()}</span>;
    return (
        <footer className="footer">
            <nav className="footer__nav">
                <ul>
                    <li className="logo">
                        <svg viewBox="0 0 273 350">
                            <path d="m0 0h116.375v350h-116.375z" fill="#ffd25a" />
                            <path
                                d="m0 233.625h272.125v116.375h-272.125z"
                                fill="#ffbc34"
                                opacity=".66569"
                            />
                        </svg>
                    </li>
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
            <div className="footer__copyright">
                <p>
                    &copy; 2018 - {date} Litehouse.press <span style={{opacity: '0.3'}}>–</span> All
                    Rights Reserved
                </p>
            </div>
        </footer>
    );
}

export default Footer;
