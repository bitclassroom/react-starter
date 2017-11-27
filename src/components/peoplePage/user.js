import React from "react";
import PropTypes from "prop-types";
// import { IMAGE_PLACE_HOLDER } from "../../constants";
import { Link } from "react-router-dom";


const User = (props) => {
    // const imagePlaceHolder = IMAGE_PLACE_HOLDER;
    // props.avatarUrl = imagePlaceHolder;
    return (
        <div className="col-12 user">
            <div className="row">
                <div className="col-2 offset-1">
                    <img src={props.user.avatarUrl} />
                </div>
                <div className="col-6">
                    <h4> {props.user.name}</h4>
                    <div><span>About</span>{props.user.about}</div>
                    <p className="btn btn-light"><Link to={`/people/${props.user.id}`}>Find out more</Link></p>
                </div>
                <div className='col-3 '>
                    Last post at: {new Date(props.user.lastPostDate).toLocaleTimeString()}
                </div>
            </div>
        </div>

    );


};


User.propTypes = {
    user: PropTypes.object,


};
export default User;