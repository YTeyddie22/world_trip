/* eslint-disable react/prop-types */
import styles from './CountryList.module.css'
import Spinner from '../Spinner/Spinner'
import CountryItem from './CountryItem'
import Message from '../Message/Message'
import { useCities } from '../../context/CitiesContext';

function CountryList() {

    const {cities, isLoading} = useCities();
   
    if(isLoading) return <Spinner/>

    if(!cities.length) return <Message message='Add your first city please. Click on a city in the map'/>

     const countries = cities.reduce((arr, city)=> {
        if(!arr.map(el=>el.country).includes(city.country)) {
            return [...arr, {country: city.country, emoji: city.emoji, id:city.id}]
        } else {
            return arr
        }
     },[])

    return (
         <ul className={styles.countryList}>
        {countries.map(country=> <CountryItem key={country.id} country={country}/>)}     
        </ul>
    )
}

export default CountryList






