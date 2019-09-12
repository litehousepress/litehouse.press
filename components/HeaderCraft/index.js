import Link from 'next/link';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

function HeaderCraft(props) {
    return (
        <header className="header header--inverted">
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
                    <li>
                        <Fade delay={100}>Litehouse Craft Pricing</Fade>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default HeaderCraft;
