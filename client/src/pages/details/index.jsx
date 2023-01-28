import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import "./index.scss"
import {Helmet} from "react-helmet";
const Details = () => {
    const [data,setData]=useState([])
    const navigate=useNavigate()
    const {_id}=useParams()
    useEffect(() => {
        axios.get(`http://localhost:8000/student/${_id}`).then((response)=>{
         setData(response.data)
        })
         }, [])

         const handleDelete=()=>{
            axios.delete(`http://localhost:8000/student/${_id}`)
            navigate("/")
         }
  return (
    <div className='details'>
       <Helmet>
                <meta charSet="utf-8" />
                <title>{`${data.name}`}</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
<i className={data.img}></i>
<div className='detailstext'>
<h2>{data.name}</h2>
      <p>Title :{data.title}</p>
      <p>Price :${data.price}</p>
      <button onClick={()=>handleDelete()}>Delete</button>
</div>
    </div>
  )
}

export default Details

