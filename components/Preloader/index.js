function Preloader(props) {
    return <div className={`preloader ${props.showing ? 'preloader--shown' : null}`}></div>;
}

export default Preloader;
