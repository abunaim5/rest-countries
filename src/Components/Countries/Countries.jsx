import { useState } from 'react';
import './Countries.css'
import { useEffect } from 'react';
import Country from '../Country/Country';

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    return (
        <div>
            <div>
                <h4>Total: {countries.length}</h4>
            </div>
            <div className='country-container'>
                {
                    countries.map((country, inx) => <Country key={inx} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;