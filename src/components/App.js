import React, { Component } from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';

class App extends Component {
    state = {
        fishes: {},
        order: {},
    };

    addFish = fish => {
        const fishes = { ...this.state.fishes };

        fishes[`fish${Date.now()}`] = fish;

        this.setState({
            fishes,
        });
    };

    loadSampleFishes = () => {
        this.setState({ fishes: sampleFishes });
    };

    addToCart = key => {
        const order = { ...this.state.order };
        order[key] = order[key] + 1 || 1;
        this.setState({ order });
    };

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Daily" />
                    <ul className="fishes">
                        {Object.keys(this.state.fishes).map(key => (
                            <Fish key={key} key2={key} details={this.state.fishes[key]} addToCart={this.addToCart} />
                        ))}
                    </ul>
                </div>
                <Order />
                <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes} />
            </div>
        );
    }
}

export default App;
