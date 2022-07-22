import React from "react";

const Loading = (props) => {
    return (
        <div>
        <div className="ui active dimmer">
        <div className="ui text loader">{props.message}</div>
         </div>
        </div>
    );

};

Loading.defaultProps = {
    message: 'Loading ...'
}
export default Loading;