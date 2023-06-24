import React from "react";
import PropTypes from "prop-types";
import { StatisticList} from './Statistics.styled'

const Statisytics = ({good, neutral, bad, total, positivePercentage=0}) => {
return (
   <div>
      <StatisticList>
        <li>
          <p>Good: {good} </p>
        </li>
        <li>
          <p>Neutral: {neutral}</p>
        </li>
        <li>
          <p>Bad: {bad}</p>
        </li>
      </StatisticList>
      <p>Total: {total}</p>
      <p>Positive feedback: 
        {positivePercentage}%</p>
    </div>
)
}

Statisytics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
}

export default Statisytics;