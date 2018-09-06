import React, { Component } from 'react';

class Section extends Component {
    render() {
        const {body} = this.props
        return (
            <div>
                {body}
            </div>
        );
    }
}

export default Section;