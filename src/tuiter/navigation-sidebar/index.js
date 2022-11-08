import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar =  () => {
    const {pathname} = useLocation();
    const paths = pathname.split("/");
    const active = paths[2];

    return (
        <div>
            <div className="list-group">
                <Link to="/tuiter" className="list-group-item">
                    <i className="fa-solid fa-t"/>
                </Link>

                <Link to="/tuiter/home" className={`list-group-item
                    ${active === 'home'?'active':''}`}>
                    <i className="fas fa-home"/>
                    <span className="d-none d-xl-inline-flex ps-2">Home</span>
                </Link>

                <Link to="/tuiter/explore" className={`list-group-item
                    ${active === 'explore'?'active':''}`}>
                    <i className="fas fa-hashtag"/>
                    <span className="d-none d-xl-inline-flex ps-2">Explore</span>
                </Link>

                <Link className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
                    <i className="fas fa-bell"/>
                    <span className="d-none d-xl-inline-flex ps-2">Notifications</span>
                </Link>

                <Link className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
                    <i className="fas fa-envelope"/>
                    <span className="d-none d-xl-inline-flex ps-2">Messages</span>
                </Link>

                <Link className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
                    <i className="fas fa-bookmark"/>
                    <span className="d-none d-xl-inline-flex ps-2">Bookmarks</span>
                </Link>

                <Link className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
                    <i className="fas fa-list"/>
                    <span className="d-none d-xl-inline-flex ps-2">Lists</span>
                </Link>

                <Link to="/tuiter/profile" className={`list-group-item
                    ${active === 'profile'?'active':''}`}>
                    <i className="fas fa-user"/>
                    <span className="d-none d-xl-inline-flex ps-2">Profile</span>
                </Link>

                <Link className={`list-group-item
                    ${active === 'more'?'active':''}`}>
                    <i className="fas fa-ellipsis-h fa-xs"/>
                    <span className="d-none d-xl-inline-flex ps-2">More</span>
                </Link>
            </div>
            <div className="d-grid mt-2">
                <a className="btn btn-primary btn-block rounded-pill">
                    Tuit</a>
            </div>
        </div>
    );
};
export default NavigationSidebar;