import { useState } from 'react';
import './Country.css'

const Country = ({ country }) => {
    const [visited, setVisited] = useState(false);
    console.log(country);
    const { name, flags, area, capital, population, region } = country;

    const handleVisited = () => {
        setVisited(!visited);
    }

    return (
        <div className='country'>
            <div>
                <h3 className='title'>{name.common}</h3>
                <div className='img-container'>
                    <img src={flags.png} alt="" />
                </div>
                <p>Region: {region}</p>
                <p>Capital: {capital}</p>
                <p>Area: {area}</p>
                <p>Population: {population}</p>
                <button className='btn' onClick={handleVisited}>{visited ? 'Visited': 'Going'}</button>
            </div>
        </div>
    );
};

export default Country;