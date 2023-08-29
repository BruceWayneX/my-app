import React from "react";
import {Text} from "react-native";
import PropTypes from "prop-types"; 


export default function Saludar(props){
    // const {firstname = "Bruce", lastname ="Wayne"} = props;
    const {firstname, lastname} = props;

    return <Text> Hola {firstname} {lastname} </Text>;
}

// Saludar.defaultProps = {
//     firstname: "Fernando",
//     lastname: "Quilindo"
// }

Saludar.prototype = {
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string,
}