import React,{useState, useEffect} from 'react';
import "./nav.css"

function Nav() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100){
                setShow(true);
            }else{
                setShow(false)
            }
        });
        return () => {
            window.removeEventListener("scroll");
        }
    }, [])
    
    return (
        <div className={`nav ${show && "fixed__nav__color"}`}>
            <img className="nav__logo" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix Logo" />
            <img className="nav__avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Netflix Avatar" />
             
        </div>
    )
}

export default Nav
