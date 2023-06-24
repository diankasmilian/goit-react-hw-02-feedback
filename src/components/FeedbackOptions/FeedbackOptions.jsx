import React from "react";
import PropTypes from "prop-types";
import { ButtonList} from './FeedbackOptions.styled';

const FeedbackOptions = ({options, onLeaveFeedback}) => {
return (
      <ButtonList>{options.map(option => (
         <li key={option}>
          <button type="button" onClick={() => onLeaveFeedback(option)}>{option}</button>
        </li>
      ))}
      </ButtonList>
)
}

FeedbackOptions.propTypes = {
   options: PropTypes.array.isRequired,
   onLeaveFeedback: PropTypes.func.isRequired,
}
export default FeedbackOptions;