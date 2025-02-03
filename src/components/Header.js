import LOGO_URL from "../utils/constants";
const Header=()=>{
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

                </ul>
            </div>
        </div>
    )
}

export default Header;