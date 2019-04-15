import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Authors extends Component {
    render() {
        return (
            <div>
                <h1>呂建宏</h1>
                <img src="https://scontent.ftpe8-4.fna.fbcdn.net/v/t31.0-8/15391417_1524990680849237_244084795936528698_o.jpg?_nc_cat=104&_nc_ht=scontent.ftpe8-4.fna&oh=92c9b4c0f6ca1e69109b6228bfdbcff0&oe=5D33BA1D" width="300px"></img>
                <p>
                    就讀台大生醫電資所碩士班, 在衛生福利部樂生療養院擔任醫療替代役, 在台大醫院 National Taiwan University Hospital 擔任 PGY-不分科住院醫師
                    現居台北市, 來自 Yuanlin
                </p>
            </div>
        );
    }
}
