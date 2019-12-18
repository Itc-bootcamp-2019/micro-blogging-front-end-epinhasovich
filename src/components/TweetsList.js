import React from 'react';
import MyAppContext from './contexts/MyAppContext';

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;

class TweetsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (
            <MyAppContext.Consumer>
                {({ addTweet, tweets }) => (
                    <div >
                        {tweets.map(tweet => (
                            <div className="message">
                                <span>Eric</span>
                                <span className="date">{dateTime}</span>
                                <p key={tweet}>{tweet}</p>
                            </div>
                        ))} 
                    </div>
                )}
            </MyAppContext.Consumer>
        )
    }
}

// const TweetsList = props => {
//     return (
//         <MyAppContext.Consumer>
//             {context => (
//                 <div>
//                     {context.tweets.map(tweet => (
//                         <p key={tweet}>{tweet}></p>
//                     ))}
//                 </div>
//             )}
//         </MyAppContext.Consumer>
//     )
// }

export default TweetsList;