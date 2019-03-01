import React from 'react';

const Spinner = props => {
    return (
        <div class="ui active dimmer">
            <div class="ui big text loader">{props.message}</div>
        </div>
    );
};

Spinner.defaultProps = {
    messaage: 'Loading...'
};

export default Spinner;