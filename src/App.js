import React from 'react';
import logo from './logo.svg';
import styles from './App.module.css';


// import Cards from './components/Cards/Cards';
// import Chart from './components/Chart/Chart';
// import CountryChoice from './components/CountryChoice/CountryChoice';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
             {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

// import { Cards, Chart, CountryChoice } from './components';
// import styles from './App.module.css';
// import { fetchData } from './api';
// import image from './images/COVID-19 icon.png';

// class App extends React.Component {

//   state = {
//     data: {},
//     country: '',
//   }

//   async componentDidMount() {
//     const fetchedData = await fetchData();

//     this.setState({data: fetchedData});
//   }

//   handleCountryChange = async (country) => {

//     const fetchedData = await fetchData(country);
//     //fetch the data
//     //set the state
//     this.setState({data: fetchedData, country: country});
//   }

//   render() {

//     const { data, country } = this.state;

//     return (
//       <div className={styles.container}>
//         <img className={styles.image} src={image} alt="COVID-19"/>
//         <Cards data={data}/>
//         <CountryChoice handleCountryChange={ this.handleCountryChange }/>
//         <Chart data={data} country={country}/>
//       </div>
//     )
//   }
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
