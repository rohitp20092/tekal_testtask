
import React, { useState, useEffect } from 'react'
import "./list.scss"
import ListItem from "../listItem/ListItem"
import { useSelector, useDispatch } from 'react-redux'
import { Add } from '../action/ListData'
import Axios from 'axios'


const List = () => {
    const [data, setData] = useState([])
    const apiData = useSelector((state) => state.Allrecord)
    const dispatch = useDispatch();


    const fetchData = async () => {
        const data = await Axios.get("https://dev-cognitive-dashboard-server.herokuapp.com/techtest")
        setData(data.data)
        debugger
        dispatch(Add(data.data))
    }

    useEffect(() => {
        debugger
        fetchData()
    }, [])
    console.log(apiData[0])
    return (
        <>
            <div className="list">
                <div className="wrapper">
                    <div className="container">
                        <div className="row">
                            {data.map((data, index) => {
                                console.log(data)
                                return (
                                    <div className="col-md-4 col-lg-3">
                                        <ListItem key={index} data={data} />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default List
