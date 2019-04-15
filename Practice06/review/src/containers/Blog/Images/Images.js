import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Images extends Component {
    render() {
        return (
            <div>
                <h1>Iphone</h1>
                <img src="https://switch.com.my/wp-content/uploads/2017/11/iphonex_spacegray.png" width="300px"></img>
                <img src="https://switch.com.my/wp-content/uploads/2017/11/iphone7_rosegold.png" width="300px"></img>
                <img src="https://switch.com.my/wp-content/uploads/2018/04/iPhone8Plus_Red.png" width="300px"></img>
                <img src="https://switch.com.my/wp-content/uploads/2017/11/iphone8_gold.png" width="300px"></img>
            </div>
        );
    }
}
