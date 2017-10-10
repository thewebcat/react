import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import User from '../components/User'
import Page from '../components/Page'
import * as pageActions from '../actions/PageActions'

class App extends Component {
    static propTypes = {
        user: PropTypes.object,
        page: PropTypes.object,
        pageActions: PropTypes.object,
    }

    render() {
        const {user, page} = this.props
        const { getPhotos } = this.props.pageActions
        return <div>
            <User name={user.name}/>
            <Page photos={page.photos} year={page.year} fetching={page.fetching} getPhotos={getPhotos}/>
        </div>
    }
}

function mapStateToProps(state) {
    return {
        user: state.user, // (1)
        page: state.page // (2)
    }
}

function mapDispatchToProps(dispatch) {
    return {
        pageActions: bindActionCreators(pageActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)