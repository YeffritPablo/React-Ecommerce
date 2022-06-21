import ItemCount from '../ItemCount';

const ItemListContainer= ()=>{
    return(
        <div>
        <h3>Hola aca va a estar el catalogo</h3>
        <ItemCount stock='10' initial='0' onAdd='0'/>
        </div>
    )
}

export default ItemListContainer;