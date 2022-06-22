import ItemCount from '../ItemCount';
import ItemList from './ItemList';
const ItemListContainer= ()=>{
    return(
        <div>
        <h3>Hola aca va a estar el catalogo</h3>
        <ItemCount stock='10' initial='0' onAdd='0'/>
        <ItemList/>
        </div>
    )
}

export default ItemListContainer;