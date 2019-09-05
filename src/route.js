import React from 'react';
import { createHashHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import ReactPixel from "react-facebook-pixel";
import { connect } from "react-redux";

import AuthLayout from "./layouts/Auth/Auth.jsx";
import PortalLayout from "./layouts/Portal/Portal.jsx";

import fire from "./fire.js";


class Rootrouter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null
        }
    }

    componentDidMount() {
        this.authListener();
    }

    authListener() {
        fire.auth().onAuthStateChanged((user) => {
            if(user) {
                this.setState({ user });
            } else {
                this.setState({ user: null });
            }
        });
    }

    render() {
        const hist = createHashHistory();

        const { auth } = this.props;

        const PrivateRoute = ({ component: Component, ...rest }) => (
            
            <Route
                {...rest}
                render={props =>
                    !auth.isEmpty ? (
                        <Component {...props} />
                    ) : (
                        <Redirect
                        to="/auth/login"
                        />
                    )
                }
            />
        );
    
        const IsAuth = ({ component: Component, ...rest }) => (
            <Route
                {...rest}
                render={props =>
                    !auth.isEmpty ? (
                        <Redirect
                        to="/portal/dashboard"
                        />
                    ) : (
                        <Component {...props} />
                    )
                }
            />
        );

        const NoMatch = ({ location }) => (
            <div className="error-404">
                <h2>404 ERROR</h2>
                <h3>
                    No match for <em>{location.pathname}</em>
                </h3>
            </div>
          );
        
        return (
            <Router history={hist}>
                <Switch>
                    <IsAuth path="/auth" component={AuthLayout} />} />
                    <PrivateRoute path="/portal" component={PortalLayout} />} />
                    <Redirect from="/" to="/portal/dashboard" />
                    <Route path='*' component={NoMatch} />
                </Switch>
            </Router>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Rootrouter);
