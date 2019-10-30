import React, { Component } from 'react';

class Projects extends Component {
    render() {
        const {title, description} = this.props;

        return(
            <div>
                <div className="project-card">
                    <div className="thumbnail">

                    </div>
                    <div className="project-content">

                    </div>
                </div>
            </div>
        );
    }
}