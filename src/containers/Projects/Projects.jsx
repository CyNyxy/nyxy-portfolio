import { useState } from 'react';

function Projects () {
  const [activeCategories, setActiveCategories] = useState([]);

  const allButtonClass = activeCategories.length === 0 ? 'active' : undefined;

  const filterItem = (category) => {
    setActiveCategories(prevCategories => {
      if (prevCategories.includes(category)) {
        return prevCategories.filter((c) => c !== category);
      } else {
        return [...prevCategories, category];
      }
    });
  };

  const listItems = [
    { 
      id: 1, 
      tags: '#HTML #CSS',
      name: 'Recipe Page', 
      img: 'assets/t_dev01.png',
      desc: 'In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.',
      categories: ['html', 'css'] 
    },
    { 
      id: 2, 
      tags: '#HTML #CSS',
      name: '404 not found Page', 
      img: 'assets/t_dev02.png',
      desc: 'In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.',
      categories: ['css']
    },
    { 
      id: 3, 
      tags: '#HTML #CSS #React',
      name: 'Interior Consultant', 
      img: 'assets/t_dev03.png',
      desc: 'In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.',
      categories: ['react']
    },
  ];


  const filteredListItems =
    activeCategories.length === 0
      ? listItems
      : listItems.filter((item) =>
          item.categories.some((c) => activeCategories.includes(c))
        );

  return (
    <div>
      <div className="filter-box">
      <button className={allButtonClass} onClick={() => setActiveCategories([])}>All</button>
        <button className={activeCategories.includes('html') ? 'active' : ''} onClick={() => filterItem('html')}>HTML</button>
        <button className={activeCategories.includes('css') ? 'active' : ''} onClick={() => filterItem('css')}>CSS</button>
        <button className={activeCategories.includes('react') ? 'active' : ''} onClick={() => filterItem('react')}>React</button>
      </div>
      <ul className="project-list">
        {filteredListItems.map((item) => (
          <li key={item.id} className="js-filterable" data-category={item.categories.join(' ')}>
            <div className="box flex">
              <div>
                <img className="thumb" src={item.img} alt="gallerypage" />
              </div>
              <div>
                <p className="tags">{item.tags}</p>
                <p className="subtitle">{item.name}</p>
                <p>{item.desc}</p>
                <button>Demo</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Projects