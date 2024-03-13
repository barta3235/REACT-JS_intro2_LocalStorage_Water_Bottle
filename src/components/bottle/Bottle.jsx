import './Bottle.css'

const bottle = ({bottle,handleAddToCart}) => {
    console.log(bottle);
    const {name,img,price}=bottle;
    return (
        <div className='bottle'>
            <h3>Bottle: {name}</h3>
            <img src={img} alt="" />
            <h3>Price: {price}</h3>
            <button onClick={()=>handleAddToCart(bottle)}>Purchase</button>
        </div>
    );
};

export default bottle;