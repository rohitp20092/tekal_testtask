import React, {useEffect} from 'react'
import Navbar from '../components/navbar/Navbar'
import List from '../components/list/List'
import "./home.scss"


const Home = () => {

    return (
        <div className="home">
            <Navbar/>
            <List/>
              
        </div>
    )
}

export default Home