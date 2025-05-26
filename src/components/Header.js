import LOGO_URL from "../utils/constants";
import { useState } from "react";
const Header=()=>{

    const [Loginbtn,setLoginbtn]=useState('login')
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}></img>
            </div>
            <div className="navitems">
                <ul>
                    <li>home</li>
                    <li>about</li>
                    <li>contact</li>
                    <li>cart</li>
                    <button className="loginbutton"
                    onClick={()=>{
                        Loginbtn=='login'
                        ? setLoginbtn('logout')
                        : setLoginbtn('login')
                    }}
                    >
                    {Loginbtn}
                    </button>
                </ul>
            </div>
        </div>
    )
}

export default Header;