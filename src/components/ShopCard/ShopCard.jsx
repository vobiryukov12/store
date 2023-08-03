export default function ShopCard({ name, img, color, price }) {
  return (
    <li className="cards__item card">
      <img className="card__img" src={img} alt={name}/>

      <div className="card__content">
        <div className="card__header">
          <h2 className="card__title">{name}</h2>
          <p className="card__subtitle">{color}</p>
        </div>

        <div className="card__footer">
          <div className="card__price">{`$${price}`}</div>
          <button className="card__button button" type="button">Add to cart</button>
        </div>
      </div>
    </li>
  );
}
