import React from 'react';
import MyAppContext from './contexts/MyAppContext';

class Tweet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tweet: ''
        }
    }


handleNewTweet(event) {
    this.setState({ tweet: event.target.value });
}

render() {
    const { tweet } = this.state;
    return (
        <MyAppContext.Consumer>
            {context => (
            <div>
                <textarea className="messageBox"  maxLength="140" type='text' placeholder="What do you have in mind..." onChange={event => this.handleNewTweet(event)} />
                <button onClick={() => context.addTweet(tweet)}>Tweet</button>
            </div>
            )}
            </MyAppContext.Consumer>
        );
    }
}

    
export default Tweet;
    
    
