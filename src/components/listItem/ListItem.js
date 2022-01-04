import { Add, PlayArrow, ThumbDownOutlined, ThumbUpAltOutlined } from '@material-ui/icons'
import React, { useState } from 'react'
import "./listItem.scss"

const ListItem = ({data}) => {
    const [isHovered, setIsHovered] = useState(false)
    const uid = data.ulid.split('.')


    return (
        <>
            <div className="listItem mb-3"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {uid[uid.length-1] === "jpg" ? <img
                    width="100%"
                    src={data.url_original}
                    alt="" />:
                    <div className="view">
                    <video className="vedio_height" src={data.url_original} />
                    </div>}
                {isHovered && (
                    <>
                        <div className="videoInfo">
                            {uid[uid.length -1] === "jpg" ?
                            <div className="itemInfo">
                                <img width="100%" src={data.url_original} alt="" />
                                <div className="p-3 discription">
                                    <div className="itemInfoTop">Name : {data.name}</div>
                                    <div className="desc">Description:{data.description}</div>
                                    <div className="genre">sector: {data.sector}</div>
                                </div>
                            </div> :
                            <div className="itemInfo">
                            <video src={data.url_original} autoPlay={true} loop />
                            <div className="p-3 discription">
                                <div className="icons d-flex justify-content-between">
                                    <PlayArrow className="icon" />
                                    <div>
                                        <Add className="icon" />
                                        <ThumbUpAltOutlined className="icon" />
                                        <ThumbDownOutlined className="icon ml-2" />
                                    </div>
                                </div>
                                <div className="itemInfoTop">Name : {data.name}</div>
                                <div className="itemInfoTop">Duration: {data.duration}.Sec</div>
                                <div className="desc">Description:{data.description}</div>
                                <div className="genre">sector: {data.sector}</div>
                            </div>
                        </div>}
                        </div>
                    </>)}
            </div>
        </>
    )
}

export default ListItem
