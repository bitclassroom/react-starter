import React from "react";
import { dataService } from "../../service/dataService";
import PropTypes from "prop-types";


class SinglePostPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            post: {}
        };
    }

    componentDidMount () {
        dataService.getSinglePost(`${this.props.match.params.type}`, `${this.props.match.params.postId}`, (singlePost) => {
            console.log(singlePost);
            this.setState({
                post: singlePost.data
            });
        });
    }



    render() {
        return (
            <p>{this.state.post.text}</p>
        );
    }


}

SinglePostPage.propTypes = {
    match: PropTypes.object,
};

export default SinglePostPage;

