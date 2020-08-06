import React from 'react';
// import logo from './logo.svg';
// import './App.css';


// import Cards from './components/Cards/Cards';
// import Chart from './components/Chart/Chart';
// import CountryChoice from './components/CountryChoice/CountryChoice';

import { Cards, Chart, CountryChoice } from './components';
import styles from './App.module.css';
import { fetchData } from './api';
import image from './images/COVID-19 icon.png';

class App extends React.Component {

  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({data: fetchedData});
  }

  handleCountryChange = async (country) => {

    const fetchedData = await fetchData(country);
    //fetch the data
    //set the state
    this.setState({data: fetchedData, country: country});
  }

  render() {

    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img className={styles.image} src={image} alt="COVID-19"/>
        <Cards data={data}/>
        <CountryChoice handleCountryChange={ this.handleCountryChange }/>
        <Chart data={data} country={country}/>
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
