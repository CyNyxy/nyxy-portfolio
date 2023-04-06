import { useState } from 'react';

function Filter () {
  const [activeColor, setActiveColor] = useState('all');

  const handleColorClick = (color) => {
    setActiveColor(color);
  };

  const listItems = [
    { id: 1, name: 'item 1', color: 'red' },
    { id: 2, name: 'item 2', color: 'blue' },
    { id: 3, name: 'item 3', color: 'green' },
  ];

  const filteredListItems =
    activeColor === 'all'
      ? listItems
      : listItems.filter((item) => item.color === activeColor);

  return (
    <div>
        <button onClick={() => handleColorClick('all')}>All</button>
        <button onClick={() => handleColorClick('red')}>Red</button>
        <button onClick={() => handleColorClick('blue')}>Blue</button>
        <button onClick={() => handleColorClick('green')}>Green</button>
      <ul className="project-list">
        {filteredListItems.map((item) => (
          <li key={item.id} className="js-filterable" data-color={item.color}>
            <div className="box">
              {item.name}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Filter