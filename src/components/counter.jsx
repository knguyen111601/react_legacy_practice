import React, { Component } from 'react'

class Counter extends Component {
    state = {
        count: 0
    }

    render() {
        // React.createElement()
        // React needs a parent component (div here) because React.createElement() takes one param
        return (
            // <>same as these</> 
            <React.Fragment> 
                <span>{this.formatCount()}</span>
                <button>Increment</button>
            </React.Fragment>
        )
    }

    // method
    formatCount() {
        // Destructure the count from this.state object
        const { count } = this.state
        return count === 0 ? "Zero" : count
    }
}

export default Counter