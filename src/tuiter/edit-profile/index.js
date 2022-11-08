import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {updateProfile} from "../reducers/profile-reducer";

const EditProfileComponent = () => {
    const profile = useSelector(state => state.profile);
    let [curProfile, setProfile] = useState(profile);
    const dispatch = useDispatch();
    const editClickHandler = (profile) => {
        dispatch(updateProfile(profile));
    }
    return (
        <div className=" border pb-3">
            <div className="row py-2">
                <div className="col-2 d-flex justify-content-center align-items-center">
                    <Link to="/tuiter/profile">
                        <i className="bi bi-x-lg"></i>
                    </Link>
                </div>
                <div className="col-10 d-flex justify-content-between align-items-center">
                    <div className="fs-5 fw-bold">Edit Profile</div>
                    <Link to="/tuiter/profile">
                        <button
                            type="button"
                            className="btn btn-dark rounded-pill mx-2"
                            onClick={() => {
                                editClickHandler(curProfile);}}>
                            Save
                        </button>
                    </Link>
                </div>
            </div>
            <div className="position-relative pb-5">
                <img
                    className="img-fluid"
                    src={require(`../images/${profile.bannerPicture}`)}/>
                <img
                    className="mx-3 border border-3 rounded-circle position-absolute bottom-0 start-0"
                    width={150}
                    src={require(`../images/${profile.profilePicture}`)}/>
            </div>
            <div className="mx-3">
                <div className="form-floating my-3">
          <textarea
              className="form-control"
              id="name"
              value={curProfile.fullName}
              onChange={(event) => setProfile({...curProfile, fullName:event.target.value})}
          ></textarea>
                    <label htmlFor="name">Name</label>
                </div>
                <div className="form-floating my-3">
          <textarea
              className="form-control"
              id="bio"
              value={curProfile.bio}
              onChange={(event) => setProfile({...curProfile, bio: event.target.value})}
              style={{ height: "100px" }}
          ></textarea>
                    <label htmlFor="bio">Bio</label>
                </div>
                <div className="form-floating my-3">
          <textarea
              className="form-control"
              id="location"
              value={curProfile.location}
              onChange={(event) => setProfile({...curProfile, location: event.target.value})}
          ></textarea>
                    <label htmlFor="location">Location</label>
                </div>
                <div className="form-floating my-3">
          <textarea
              className="form-control"
              id="website"
              value={curProfile.website}
              onChange={(event) => setProfile({...curProfile, website: event.target.value})}
          ></textarea>
                    <label htmlFor="website">Website</label>
                </div>
                <div className="text-muted">
                    <label htmlFor="birthday">Birth date:</label>
                </div>
                <div className="form-control border border-0">
                    <input
                        type="date"
                        id="start"
                        value={curProfile.dateOfBirth}
                        onChange={(event) => setProfile({...curProfile, dateOfBirth: event.target.value})}
                        min="1900-01-01"
                        max="2022-12-31"
                    />
                </div>
            </div>
        </div>
    );
};

export default EditProfileComponent;