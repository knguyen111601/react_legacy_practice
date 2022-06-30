import React, { Component } from 'react'

class Counter extends Component {
    state = {
        count: 0,
        tags: []
    }

    render() {
        // React.createElement()
        // React needs a parent component (div here) because React.createElement() takes one param
        return (
            // <>same as these</> 
            <React.Fragment>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm">Increment</button>

                { this.state.tags.length === 0 && "Please create a new tag"}
                {this.renderTags()}

            </React.Fragment>
        )
    }

    renderTags() {
        if (this.state.tags.length === 0) {
            return <p>There are no tags!</p>
        }
        return <ul>{this.state.tags.map((tag, index) => <li key={index}>{tag}</li>)}</ul>
    }

    // Dynamic class method 
    getBadgeClasses() {
        let classes = "badge m-2 badge-"
        classes += (this.state.count === 0) ? "warning" : "primary"
        return classes
    }

    // method
    formatCount() {
        // Destructure the count from this.state object
        const { count } = this.state
        return count === 0 ? "Zero" : count
    }
}

export default Counter