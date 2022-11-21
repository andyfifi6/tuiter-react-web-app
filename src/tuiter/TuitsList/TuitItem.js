import React from "react";
import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../../services/tuits-thunks";
import TuitStats from "./tuit-stats";

const TuitItem = ({
    tuit = {
        _id: 234,
        topic: "Space",
        userName: "SpaceX",
        title: "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
        time: "2h",
        image: "da.jpeg",
        liked: false,
        replies: 123,
        retuits: 432,
        likes: 2345,
        handle: "@spacex",
        tuit: "Space Exploration Technologies Corp."
    }
}) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }
    return(
        <li className="list-group-item row mx-1 border rounded pt-2">
            <div className="col-1 p-0 float-start">
                <img src={`/image/${tuit.image}`} height={48} width={48} className="rounded-circle mx-auto position-relative"/>
            </div>

            <div className="ps-3 pb-1 float-start col-11">
                <i className="bi bi-x-lg float-end"
                   onClick={() => deleteTuitHandler(tuit._id)}></i>

                <span className="fw-bold">
                    {tuit.userName}
                </span>
                <span className="text-secondary">
                    {tuit.handle} - {tuit.time}
                </span>
                <div className="wd-home-post-content pb-2">
                    {tuit.tuit}
                </div>
                <TuitStats tuit={tuit}/>
            </div>
        </li>
    );
}
export default TuitItem;