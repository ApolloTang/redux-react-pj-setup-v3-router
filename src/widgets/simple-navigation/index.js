import React from 'react';
import { Link, IndexLink } from 'react-router';

const activeStyle = {textDecoration: 'none', color: 'red'};

import style from './style';

const SimpleNavigation = ({navigations}) => {
    return (
        <div className={`simple-navigation ${style['module-style']}`}>
            <ul>
                <li><IndexLink to="/" activeStyle={activeStyle} >Home</IndexLink></li>
                {
                    navigations.map((n, i)=>{
                        return (
                            <li key={i} >
                                <Link to={n.to} activeStyle={activeStyle}> {n.displayText} </Link>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}
export default SimpleNavigation;


