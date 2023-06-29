import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const Header = (props) => {
    return (
        <header>
            <h2 className="logo">{props.brand}</h2>
            <div
                onClick={() => {
                    props.setActiveClass(!props.activeClass);
                }}
                className={props.activeClass ? "toggle active" : "toggle"}
            ></div>
        </header>
    );
};

function Contents (props) {
    return (
        <div class="text">
            <h2> {props.title} </h2>
            <h3> {props.subtitle} </h3>
            <p> {props.content} </p>
        </div>
    );
};

function Overlay (props) {
    return (<div className={props.obj}> </div>)
};

function Footer (props) {
    return (
        <div className="footer">
            {" "}
            <p>{props.content} </p>{" "}
        </div>
    );
};

function App() {
    const [activeClass, setActiveClass] = React.useState(false);
    const [isClicked, setClicked] = React.useState(true);
    const click = () => {
        setClicked(!isClicked);
    }
    return (
        <div className={isClicked ? "overlayRed" : "overlayWhite"}>
            <section className={activeClass ? "active container" : "container"}>
                <Header
                    setActiveClass={setActiveClass}
                    activeClass={activeClass}
                    brand="φ(●ﾟ益ﾟ)っ"
                />
                {/*<Overlay obj={isClicked ? "overlayRed" : "overlayBlue"} />*/}
                <Contents
                    title="Landing Page"
                    subtitle="Put some text here"
                    content="im running out of idea"
                />
                <button className="button" onClick={click}>{isClicked ? "Pink" : "White"}</button>
                <Footer content="@vikesaki" />
            </section>
        </div>
    );
};

root.render(<App />)
