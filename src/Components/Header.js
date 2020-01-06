import React from 'react';
import "./Header.css";


export default class Header extends React.Component {
    constructor (){
        super();
        this.state={
            menuStatus: 'drop-down-menu'
        }
    }
    
    handleClick = () => {
        if(this.state.menuStatus === 'drop-down-menu-open'){
            this.setState({
                menuStatus: 'drop-down-menu-closed'
            })
        } else {
            this.setState ({menuStatus: 'drop-down-menu-open'})
        }
    }



    render(){
    return (
        <header>
            <h2 id="start-bootstrap"> Start Bootstrap </h2>
            <ul id='site-nav'>
                <li className='menu-text'>SERVICES</li>
                <li className='menu-text'>PORTFOLIO</li>
                <li className='menu-text'>ABOUT</li>
                <li className='menu-text'>TEAM</li>
                <li className='menu-text'>CONTACT</li>
                <li>
                    <div>MENU
                    <img
                    onClick={this.handleClick}
                    src='https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-512.png' alt='menu icon'/>
                    </div>
                </li>
                <ul className={this.state.menuStatus}>
                <li>Services</li>
                <li>Portfolio</li>
                <li>About</li>
                <li>Team</li>
                <li>Contact</li>

                </ul>
            </ul>
        </header> 
    )
    }
}