import React, { Component } from 'react'
import PropTypes from 'prop-types';

class User extends Component {
    render() {
        const props = this.props
        const { name } = props
        return <div>
            <p>Привет, { name }!</p>
        </div>
    }
}

User.PropTypes = {
    name: PropTypes.string.isRequired
}

export default User