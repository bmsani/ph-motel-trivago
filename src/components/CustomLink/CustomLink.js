import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
// import type { LinkProps } from "react-router-dom";

const CustomLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
        <div>
            <Link
    style={{ borderBottom: match ? "1px solid red" : "none" }}
                to={to}
                {...props}
            >
                {children}
            </Link>
            
        </div>
    );
};

export default CustomLink;