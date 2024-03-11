import './Country.css'

const Country = ({ country }) => {
    const { name } = country;
    return (
        <div className='country'>
            <div>
                <h3>{name.common}</h3>
            </div>
        </div>
    );
};

export default Country;