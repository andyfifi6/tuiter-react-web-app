import React from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const ProfileComponent = () => {
    const profile = useSelector(state => state.profile);
    return(
        <div className="border border-thin">
            <div className="row px-3">
                <Link to="/tuiter" className="col-1 p-3 ms-3">
                    <i className="fas fa-arrow-left text-dark"/>
                </Link>
                <div className="col-7 mt-1">
                    <div className="fw-bold">
                        {profile.fullName}
                    </div>
                    <div className="text-secondary">
                        {"811 Tuits"}
                    </div>
                </div>
            </div>
            <div className="row">
                <img src={require(`../images/${profile.bannerPicture}`)} className="wd-profile-banner-pic" />
                <div className="ms-3 float-start">
                    <img src={require(`../images/${profile.profilePicture}`)} className="border border-3 wd-profile-user-pic"/>
                    <Link to="/tuiter/edit-profile" className="float-end m-3">
                        <button className="me-3 btn border rounded-pill fw-bold">
                            Edit profile
                        </button>
                    </Link>
                    <div className="fw-bold">
                        {profile.firstName}{profile.lastName}
                    </div>
                    <div className="text-secondary">
                        {profile.handle}
                    </div>
                    <div className="mt-3 mb-3">
                        {profile.bio}
                    </div>
                    <div className="mb-3 text-secondary">
                        <i className="me-1 fas fa-map-marker-alt"/>
                        {profile.location}
                        <i className="ms-4 me-1 fas fa-birthday-cake"/>
                        {"Born "+profile.dateOfBirth}
                        <i className="ms-4 me-1 fas fa-calendar-alt"/>
                        {"Joined "+profile.dateJoined}
                    </div>
                    <div className="mb-3 text-secondary">
                        <span className="me-1 text-dark fw-bold">{profile.followingCount}</span>
                        {"Following"}
                        <span className="ms-3 me-1 text-dark fw-bold">{profile.followersCount}</span>
                        {"Followers"}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileComponent;