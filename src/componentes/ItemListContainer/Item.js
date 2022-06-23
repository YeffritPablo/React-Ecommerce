import '../Header/Navbar.css'
const Item = ({ data }) => {
  return (<div className='contenedor'>
    <div className="card carta">
      <img src={data.image} alt='api-rick'></img>
      <div className="card-body"></div>
      <h5 className="card-title ">{data.name}</h5>
      <p className="card-text Dark">{data.species}</p>
      <div className="btn btn-warning ">ID: {data.id}</div>
    </div>
  </div>)
}

export default Item;


