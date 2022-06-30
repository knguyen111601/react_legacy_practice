import React, { Component } from 'react'

class Counter extends Component {
    state = {
        count: this.props.start,
        tags: ['tag1', 'tag2', 'tag3']
    }

    // constructor() {
    //     super()
    //     // allows handleIncrement to access this (current obj)
    //     this.handleIncrement = this.handleIncrement.bind(this) 
    // }

    render() {
        // React.createElement()
        // React needs a parent component (div here) because React.createElement() takes one param
        return (
            // <>same as these</> 
            <React.Fragment>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button 
                    onClick={ ()=> this.handleIncrement({id: 1}) } 
                    className="btn btn-secondary btn-sm"
                >
                    Increment
                </button>

                {/* { this.state.tags.length === 0 && "Please create a new tag"} */}
                {/* {this.renderTags()} */}

            </React.Fragment>
        )
    }

    // allows access to "this" current object
    handleIncrement = (product) => {
        this.setState({count: this.state.count + 1})
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