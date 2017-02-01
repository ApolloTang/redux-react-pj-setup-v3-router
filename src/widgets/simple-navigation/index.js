import React from 'react';
import { Link } from 'react-router';

const activeStyle = {textDecoration: 'none', color: 'red'};
const SimpleNavigation = ({navigations}) => {
    return (
        <div>
            {
                navigations.map((n, i)=>{
                    return (
                        <Link
                            key={i}
                            to={n.to}
                            activeStyle={activeStyle}>
                            {n.displayText}
                        </Link>
                    );
                })
            }
        </div>
    );
}
export default SimpleNavigation;


