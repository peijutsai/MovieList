import React from 'react'

import './SideDrawer.css'

import NavItems from '../navitems/NavItems'


class SideDrawer extends React.Component {

    render() {
        let attactedClasses = 'SideDrawer'
        
        if (this.props.shouldOpenDrawer) {
            attactedClasses = ['SideDrawer', 'Open'].join(' ')
        } else {
            attactedClasses = ['SideDrawer', 'Close'].join(' ')
        }

        return ( 
            <div className={attactedClasses}>
                <button onClick={this.props.closeEventHandler}>Close</button>
                <NavItems clicked={this.props.closeEventHandler}/>
            </div>
        )
    }
}

export default SideDrawer