import React from "react";
import PropTypes from 'prop-types';

const Quiz = (props) => {
    return(
        <React.Fragment>
            <div onClick={() => props.whenQuizClicked(props.id)}>
            <h3>{props.name}</h3>
            <hr />
            </div>
        </React.Fragment>
    )
}
Quiz.propTypes = {
    whenQuizClicked: PropTypes.func,
    name: PropTypes.string,
    id: PropTypes.string
};
export default Quiz;