import React from 'react';
import MyAppContext from './contexts/MyAppContext';

class TweetsList extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <MyAppContext.Consumer>
            {({ addTweet,tweets}) => (
                <div >
                    {tweets.map(tweet => (
                        <p className="message" key={tweet}>{tweet}></p>
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