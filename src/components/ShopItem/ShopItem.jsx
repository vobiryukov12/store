export default function ShopCard({ name, img, color, price }) {
  return (
    <li className="list__item item">
      <div className="item__row">
        <div className="item__col"><img className="item__img" src={img} alt={name}/></div>
        <div className="item__col"><h2 className="item__title">{name}</h2></div>
        <div className="item__col"><p className="item__subtitle">{color}</p></div>
        <div className="item__col"><div className="item__price">{`$${price}`}</div></div>
        <div className="item__col"><button className="item__button button" type="button">Add to cart</button></div>
      </div>
    </li>
  );
}
