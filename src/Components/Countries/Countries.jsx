import { useState } from 'react';
import './Countries.css'
import { useEffect } from 'react';
import Country from '../Country/Country';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    const handleVisitedCountry = (country) => {
        const newVisitedCountry = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountry);
    }

    const handleRemoveVisitedCountry = (country) => {
        setVisitedCountries(visitedCountries.filter(c => c.cca3 !== country.cca3))
    }
    console.log(visitedCountries);

    return (
        <div>
            <div>
                <h4>Total: {countries.length}</h4>
            </div>
            <div className='visited-countries-container'>
                <h4>Visited Countries: {visitedCountries.length}</h4>

                <div className='visited-countries'>
                    {
                        visitedCountries.map((country, inx) => <p key={inx}><span>{country.name.common}</span> <img style={{ height: '35px', objectFit: 'contain' }} src={country.flags.png}></img></p>)
                    }
                </div>
            </div>
            <div className='country-container'>
                {
                    countries.map((country, inx) => <Country
                        key={inx}
                        country={country}
                        handleVisitedCountry={handleVisitedCountry}
                        handleRemoveVisitedCountry={handleRemoveVisitedCountry}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;