import React from 'react';
import AuthService from '../utils/AuthService'

class CountdownForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loggedIn: false };
    }

    componentDidMount() {
        this.auth = new AuthService();
        this.setState({ loggedIn: this.auth.loggedIn() });
        // instance of Lock
        this.lock = this.auth.getLock();
        this.lock.on('authenticated', () => {
            this.setState({ loggedIn: this.auth.loggedIn() });
        });
    }

    login() {
        this.auth.login();
    }

    logout() {
        this.auth.logout();
        this.setState({ loggedIn: this.auth.loggedIn() });
    }

    onSubmit(e) {
        e.preventDefault();
        if (this.state.loggedIn) {
            var secondsStr = this.refs.seconds.value;

            if (secondsStr.length > 0 && secondsStr.match(/^[0-9]*$/)) {
                this.refs.seconds.value = '';
                this.props.onSetCountdownTime(parseInt(secondsStr, 10));
            }
        } else {
            alert("You need to log in first");
        }
    }

    render() {
        const authButton = this.state.loggedIn ? <div><button className="button expanded" onClick={this.logout.bind(this)}>Logout</button></div> : <div><button className="button expanded" onClick={this.login.bind(this)}>Login</button></div>;

        return (
            <div>
                <form ref="form" onSubmit={this.onSubmit.bind(this)} className="countdown-form">
                    <input type="text" ref="seconds" placeholder="Enter time in seconds"/>
                    <input type="submit" className="button success expanded" value="Start Countdown"/>
                </form>
                { authButton }
            </div>
        );
    }
}

export default CountdownForm;
