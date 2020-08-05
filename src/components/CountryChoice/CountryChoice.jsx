import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import styles from './CountryChoice.module.css';
import { fetchCountries } from '../../api';


const CountryChoice = () => {

    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async() => {
            setFetchedCountries(await fetchCountries());
        }

    // fetchCountries();
    fetchAPI();  
    }, [setFetchedCountries]);

    console.log(fetchedCountries);

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect>
                <option value="global">Worldwide</option>
            </NativeSelect>
        </FormControl>
    )
}

export default CountryChoice;