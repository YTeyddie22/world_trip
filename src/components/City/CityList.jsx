/* eslint-disable react/prop-types */
import styles from './CityList.module.css'
import Spinner from '../Spinner/Spinner'
import CityItem from './CityItem'
import Message from '../Message/Message'



function CityList({cities, isLoading}) {

    if(isLoading) return <Spinner/>

    if(!cities.length) return <Message message='Add your first city please. Click on a city in the map'/>
    return (
        <ul className={styles.cityList}>
        {cities.map(city=> <CityItem key={city.id} city={city}/>)}     
        </ul>
    )
}

export default CityList
