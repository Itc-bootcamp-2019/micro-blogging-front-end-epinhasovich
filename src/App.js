import React from 'react';
import './App.css';
import MyAppContext from './components/contexts/MyAppContext';
import Tweet from './components/Tweet'
import TweetsList from './components/TweetsList';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";


class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      tweets: [],
      addTweet: this.handleNewTweet.bind(this)
    };
  }

  handleNewTweet = (tweet) => {
    this.setState((prevState) => {
      return { tweets: [tweet, ...prevState.tweets] }
    })
  }

  render() {
    return (
      <Router>
      <div className="App">
      <header className="App-header">
        <NavBar></NavBar>
        <MyAppContext.Provider value={this.state}>
          <Tweet></Tweet>
          <TweetsList></TweetsList>
        </MyAppContext.Provider>
        <Switch>
              <Route exact path="/"> </Route>
              <Route path="/profile"> </Route>
        </Switch>
      </header>
    </div>
    </Router>
    )
  }

}



// function App() {
//   return (
//     <div className="App">
//         <Router>
//           <div>
//             <NavBar></NavBar>
//             <Switch>
//               <Route exact path="/"> </Route>
//               <Route path="/profile"> </Route>
//             </Switch>
//           </div>
//         </Router>
//     </div>
//   );
// }

                        {/* <div>{tweet.time.toLocaleDateString("en-US")}</div> */}

                        // handleNewTweet(event) {
//     this.setState({ tweet: {
//         text:event.target.value,
//         username: 'eric',
//         time: new Date()
//     } });
// }

export default App;
