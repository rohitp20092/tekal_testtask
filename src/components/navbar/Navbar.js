import React, {useState} from 'react'
import "./navbar.scss"
import { Search, Notifications, ArrowDropDown } from "@material-ui/icons"
import logo from '../../assets/Tekal.png'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)

    window.onscroll = () =>{
        setIsScrolled(window.pageYOffset === 0 ? false : true)
        return() => (window.onscroll = null );
    }
    return (
        <div className={isScrolled  ? "navbar scrolled bg-dark" :"navbar"}>
            <div className="container">
                <div className="left">
                    <img src={logo}
                    alt=""
                    />
                    <span>Homepage</span>
                    <span>New and Popular</span>
                    <span>My List</span>
                    
                </div>
                <div className="right">
                    <Search className="icon"/>
                    <span>USER</span>
                    <Notifications className="icon"/>
                    <img src="https://assets.imgix.net/setup/serving-swimmer.jpg"
                    alt="" />
                    <div className="profile">
                    <ArrowDropDown className="icon"/>
                    <div className="options">
                        <span>Logout</span>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
