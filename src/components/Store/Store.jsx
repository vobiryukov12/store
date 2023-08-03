import CardsView from '../CardsView/CardsView';
import ListView from '../ListView/ListView';
import IconSwitch from '../IconSwitch/IconSwitch';
import { useState } from 'react';

export default function Store({ products }) {
  const [icon, setIcon] = useState('lists');

  return (
    <>
      <div className="header">
        <div className='container'>
          <IconSwitch icon={icon} onSwitch={(elem) => setIcon(elem.target.textContent === 'lists' ? 'cards' : 'lists')} />
        </div>
      </div>

      <main className='main'>
        <div className='container'>
          {icon === 'lists' ? <CardsView cards={products} /> : <ListView cards={products} />}
        </div>
      </main>
    </>
  );
}
