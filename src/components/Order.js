import React, { Component, Fragment } from 'react';
import { formatPrice } from '../helpers';

class Order extends Component {
    renderOrder = key => {
        const fish = this.props.fishes[key];
        const count = this.props.order[key];
        const isAvail = fish && fish.status === 'available';
        //ensure fish is loaded first
        if (!fish) return null;
        if (!isAvail) {
            return <li key={key}>Sorry {fish ? fish.name : 'fish'} is no longer available.</li>;
        }
        return (
            <li key={key}>
                {count} lbs {fish.name}
                {formatPrice(count * fish.price)}
            </li>
        );
    };

    render() {
        const orderIds = Object.keys(this.props.order);
        const total = orderIds.reduce((tally, key) => {
            const fish = this.props.fishes[key];
            const count = this.props.order[key];
            const isAvail = fish && fish.status === 'available';

            if (isAvail) {
                return tally + count * fish.price;
            }
            return tally;
        }, 0);

        return (
            <Fragment>
                <div className="order-wrap">
                    <h2>Order</h2>
                    <ul className="order">{orderIds.map(this.renderOrder)}</ul>
                    <div className="total">
                        Total:
                        <strong>{formatPrice(total)}</strong>
                    </div>{' '}
                    {}
                </div>
            </Fragment>
        );
    }
}

export default Order;
