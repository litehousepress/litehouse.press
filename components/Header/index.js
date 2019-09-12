import Link from 'next/link';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

function Header(props) {
    return (
        <header className="header">
            <div className="logo">
                <span style={{display: 'inline-block', fontWeight: '400'}}>
                    <Fade>lite</Fade>
                </span>
                <span style={{display: 'inline-block', fontWeight: '500'}}>
                    <Fade delay={50}>house</Fade>
                </span>
            </div>

            <nav>
                <ul>
                    <Link href="#about">
                        <li>
                            <Fade delay={100}>About</Fade>
                        </li>
                    </Link>
                    <Link href="#products">
                        <li>
                            <Fade delay={150}>Products</Fade>
                        </li>
                    </Link>
                    <Link href="#team">
                        <li>
                            <Fade delay={200}>Team</Fade>
                        </li>
                    </Link>
                    <Link href="#contact">
                        <li>
                            <Fade delay={250}>Contact</Fade>
                        </li>
                    </Link>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
