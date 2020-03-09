import React, { Component, Fragment } from 'react';
import { getFunName } from '../helpers';

class StorePicker extends Component {
    myInput = React.createRef();

    onSubmit = e => {
        e.preventDefault();
        const storeName = this.myInput.value;
        this.props.history.push(`/store/${storeName}`);
    };

    onChange = e => {};

    render() {
        return (
            <Fragment>
                <form action="" className="store-selector" onSubmit={this.onSubmit}>
                    <h2>Please Enter a Store</h2>
                    <input
                        type="text"
                        ref={this.myInput}
                        required
                        placeholder="Store Name"
                        defaultValue={getFunName()}
                    />
                    <button type="submit">Visit Store --></button>
                </form>
            </Fragment>
        );
    }
}

export default StorePicker;
