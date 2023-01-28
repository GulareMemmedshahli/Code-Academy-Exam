import axios from 'axios'
import{ useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./index.scss"
const Services = () => {
    const [data,setData]=useState([])
    const [click,setClick]=useState(true)
    useEffect(() => {
   axios.get("http://localhost:8000/student").then((response)=>{
    setData(response.data)
   })
    }, [])
    const handleSearch=(value)=>{
        axios.get("http://localhost:8000/student").then((response)=>{
            let search=response.data.filter((data)=>data.name.toLowerCase().includes(value.toLowerCase()))
            setData(search)
        })
    }

    //1 clickde sort
   const handleSort=()=>{
if(click==true){
    axios.get("http://localhost:8000/student").then((response)=>{
        let sort=response.data.sort((a,b)=>a.price-b.price)
        setData(sort)
        setClick(false)
    })
}if(click==false){
    axios.get("http://localhost:8000/student").then((response)=>{
    setData(response.data)
    setClick(true)
   })
}
}
  return (
    <div className='container'>
        <div className='servicestext'>
        <div className='xett'></div>
        <h3>OUR TOP SERVICES</h3>
        <h1>Our Best Services</h1>
        <div className="servicessearch">
        <input onChange={(e)=>handleSearch(e.target.value)} type="text" placeholder='Search by Name...' />
        <button onClick={()=>handleSort()}>Sort by Price</button>
        </div>

        </div>
    
        <div className='data'>
{data.map((element)=>{
    return(
        <div className='services'>
          <Link to={`detail/${element._id}`}>
            <i className={element.img}></i>
      <h2>{element.name}</h2>
      <p>{element.title}</p>
      <p>Price :{element.price}</p>
            </Link>

        </div>

    )
})}
        </div>
    </div>
  )
}

export default Services