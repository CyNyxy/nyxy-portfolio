import { useState } from 'react';

function Projects () {
  const [activeCategories, setActiveCategories] = useState('all');

  const filterItem = (category) => {
    setActiveCategories(category);
  };

  const listItems = [
    { 
      id: 1, 
      tags: '#HTML #CSS',
      name: 'Gallery Page', 
      img: 'assets/t_dev01.png',
      desc: 'In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.',
      cats: 'html' 
    },
    { 
      id: 2, 
      tags: '#HTML #CSS',
      name: '404 not found Page', 
      img: 'assets/t_dev02.png',
      desc: 'In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.',
      cats: 'css'
    },
    { 
      id: 3, 
      tags: '#HTML #CSS #React',
      name: 'Interior Consultant', 
      img: 'assets/t_dev03.png',
      desc: 'In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.',
      cats: 'react'
    },
    { 
      id: 4, 
      tags: '#HTML #CSS',
      name: 'Team Page', 
      img: 'assets/t_dev04.png',
      desc: 'In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.',
      cats: 'css'
    },
    { 
      id: 5, 
      tags: '#HTML #CSS',
      name: 'Gallery Page', 
      img: 'assets/t_dev05.png',
      desc: 'In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.',
      cats: 'css'
    },
    { 
      id: 6, 
      tags: '#HTML #CSS #Javascript',
      name: 'Checkout Page', 
      img: 'assets/t_dev06.png',
      desc: 'In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.',
      cats: 'html'
    },
    { 
      id: 7, 
      tags: '#HTML #CSS #React',
      name: 'Edie Homepage', 
      img: 'assets/t_dev07.png',
      desc: 'In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.',
      cats: 'react'
    },
  ];

  const filteredListItems =
    activeCategories === 'all'
      ? listItems
      : listItems.filter((item) => item.cats === activeCategories);

  return (
    <div>
      <div className="filter-box">
        <button onClick={() => filterItem('all')}>All</button>
        <button onClick={() => filterItem('html')}>HTML</button>
        <button onClick={() => filterItem('css')}>CSS</button>
        <button onClick={() => filterItem('react')}>React</button>
      </div>
      <ul className="project-list">
        {filteredListItems.map((item) => (
          <li key={item.id} className="js-filterable" data-category={item.cats}>
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