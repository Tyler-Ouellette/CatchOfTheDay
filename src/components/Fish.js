import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from '../helpers';

export default class Fish extends Component {
    static propTypes = {
        details: PropTypes.shape({
            name: PropTypes.string.isRequired,
            desc: PropTypes.string.isRequired,
            status: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
        }),
        addToOrder: PropTypes.func.isRequired,
    };
    render() {
        const { name, image, desc, price, status } = this.props.details;
        const isAvail = status === 'available'; //Since we created the fish model using a string not boolean, what this is doing is creating a boolean expression, if status does eq. avail then true, else it will be false
        return (
            <li className="menu-fish">
                <img src={image} alt={name} />
                <h3 className="fish-name">
                    {name}
                    <span className="price">{formatPrice(price)}</span>
                </h3>
                <p>{desc}</p>
                <button
                    disabled={!isAvail}
                    onClick={() => {
                        this.props.addToOrder(this.props.key2);
                    }}>
                    {isAvail ? 'Add To Cart' : 'Sold Out'}
                </button>
            </li>
        );
    }
}
