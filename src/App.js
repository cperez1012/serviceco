import React from 'react';
// import logo from './logo.svg';
// import './App.css';


// import Cards from './components/Cards/Cards';
// import Chart from './components/Chart/Chart';
// import CountryChoice from './components/CountryChoice/CountryChoice';

import { Cards, Chart, CountryChoice } from './components';
import styles from './App.module.css';
import { fetchData } from './api'

class App extends React.Component {

  state = {
    data: {},
  }

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({
      data: fetchedData
    });
  }

  render() {

    const { data } = this.state;

    return (
      <div className={styles.container}>
        {/* <Cards data={this.state.data}/> */}
        <Cards data={data}/>
        <CountryChoice />
        <Chart />
      </div>
    )
  }
}

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

export default App;
