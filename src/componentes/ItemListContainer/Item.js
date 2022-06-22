import '../Header/Navbar.css'
const Item = ({data})=>{
    return(<div className='contenedor'> 
   <div className="card carta">
    <img  src={data.image} ></img>
   <div className="card-body"></div>
   <h5 className="card-title">{data.name}</h5>
   <p className="card-text">{data.species}</p>
   <div  className="btn btn-primary">Nro ID: {data.id}</div>
   </div>
  </div>)
}

export default Item;