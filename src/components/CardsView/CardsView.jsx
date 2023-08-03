import ShopCard from '../ShopCard/ShopCard';

export default function CardsView({ cards }) {
  return (
    <ul className='main__cards cards'>
      {
        cards.map((item) => <ShopCard key={item.id} name={item.name} img={item.img} color={item.color} price={item.price} />)
      }
    </ul>
  );
}
