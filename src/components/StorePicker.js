import React, { Component, Fragment } from 'react';
import { getFunName } from '../helpers';

class StorePicker extends Component {
    onSubmit = e => {
        e.preventDefault();
    };

    onChange = e => {
        
    };

    render() {
        return (
            <Fragment>
                <form action="" className="store-selector" onSubmit={this.onSubmit}>
                    <h2>Please Enter a Store</h2>
                    <input type="text" name="" id="" required placeholder="Store Name" defaultValue={getFunName()} />
                    <button type="submit">Visit Store --></button>
                </form>
            </Fragment>
        );
    }
}

export default StorePicker;
