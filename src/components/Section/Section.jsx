import React from "react";
import PropTypes from "prop-types";

const Section = ({title}) => (
   <div>
      <h2>{title}</h2>
   </div>
)

Section.propTypes = {
   title: PropTypes.string.isRequired,
}

export default Section;