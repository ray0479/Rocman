import React from 'react'
import { Link } from "react-router-dom";
import MKBox from "components/MKBox";
import PropTypes from "prop-types";


export default function Logo({logo}) {
  return (
    <>
        <MKBox
            component={Link}
            to="/"
            lineHeight={1}
            width={"fit-content"}
            display="block"
            paddingTop={"5px"}
          >
              <img src={logo} alt="logo" width={50}/>
          </MKBox>
    </>
  )
}
Logo.propTypes = {
  logo: PropTypes.string,
}
