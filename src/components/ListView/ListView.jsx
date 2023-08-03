import ShopItem from '../ShopItem/ShopItem';

export default function ListView({ cards }) {
  return (
    <ul className='main__list list'>
      {
        cards.map((item) => <ShopItem key={item.id} name={item.name} img={item.img} color={item.color} price={item.price} />)
      }
    </ul>
  );
}
