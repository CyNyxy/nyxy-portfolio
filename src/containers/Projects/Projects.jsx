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
      icon: 'fab fa-html5',
      name: 'Recipe Page', 
      img: 'assets/t_dev01.png',
      desc: 'In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.',
      categories: ['html', 'css'],
      url: 'https://github.com/CyNyxy/recipe-page-devChallenges'
    },
    { 
      id: 2, 
      tags: '#HTML #CSS',
      icon: 'fab fa-css3-alt',
      name: '404 not found Page', 
      img: 'assets/t_dev02.png',
      desc: 'In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.',
      categories: ['css'],
      url: 'https://github.com/CyNyxy/404-not-found-devChallenges'
    },
    { 
      id: 3, 
      tags: '#HTML #CSS #React',
      icon: 'fab fa-react',
      name: 'Interior Consultant', 
      img: 'assets/t_dev03.png',
      desc: 'In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.',
      categories: ['react'],
      url: 'https://github.com/CyNyxy/interior-consultant-devChallenges'
    },
    { 
      id: 4, 
      tags: '#HTML #CSS',
      icon: 'fab fa-css3-alt',
      name: 'Team Page', 
      img: 'assets/t_dev04.png',
      desc: 'In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.',
      categories: ['css'],
      url: 'https://github.com/CyNyxy/team-page-devChallenges'
    },
    { 
      id: 5, 
      tags: '#HTML #CSS',
      icon: 'fab fa-css3-alt',
      name: 'Gallery Page', 
      img: 'assets/t_dev05.png',
      desc: 'In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.',
      categories: ['css'],
      url: 'https://github.com/CyNyxy/my-gallery-devChallenges'
    },
    { 
      id: 6, 
      tags: '#HTML #CSS #Javascript',
      icon: 'fab fa-js',
      name: 'Checkout Page', 
      img: 'assets/t_dev06.png',
      desc: 'In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.',
      categories: ['html'],
      url: 'https://github.com/CyNyxy/checkout-page-devChallenges'
    },
    { 
      id: 7, 
      tags: '#HTML #CSS #React',
      icon: 'fab fa-react',
      name: 'Edie Homepage', 
      img: 'assets/t_dev07.png',
      desc: 'In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.',
      categories: ['react'],
      url: 'https://github.com/CyNyxy/edie-homepage-devChallenges'
    },
    { 
      id: 8, 
      tags: '#UX/UI Design #Figma',
      icon: 'fas fa-pen-nib',
      name: 'Caking', 
      img: 'assets/t_caking.png',
      desc: 'In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.',
      categories: ['uxdesign'],
      url: 'https://nyxy-portfolio.webflow.io/work/caking'
    },
    { 
      id: 9, 
      tags: '#UX/UI Design #Adobe XD',
      icon: 'fas fa-pen-nib',
      name: 'BakyBake', 
      img: 'assets/t_bakybake.png',
      desc: 'In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.',
      categories: ['uxdesign'],
      url: 'https://nyxy-portfolio.webflow.io/work/bakybake'
    },
  ];

  const filteredListItems =
    activeCategories.length === 0
      ? listItems
      : listItems.filter((item) =>
          item.categories.some((c) => activeCategories.includes(c))
        );

  return (
    <div className="project-box">
      <div className="filter-box">
        <button className={allButtonClass} onClick={() => setActiveCategories([])}>All</button>
        <button className={activeCategories.includes('html') ? 'active' : ''} onClick={() => filterItem('html')}>HTML</button>
        <button className={activeCategories.includes('css') ? 'active' : ''} onClick={() => filterItem('css')}>CSS</button>
        <button className={activeCategories.includes('react') ? 'active' : ''} onClick={() => filterItem('react')}>React</button>
        <button className={activeCategories.includes('uxdesign') ? 'active' : ''} onClick={() => filterItem('uxdesign')}>UX/UI Design</button>
      </div>
      <ul className="project-list">
        {filteredListItems.map((item) => (
          <li key={item.id} className="js-filterable" data-category={item.categories.join(' ')}>
            <div className="box flex">
              <div>
                <img className="thumb" src={item.img} alt="gallerypage" />
              </div>
              <div>
                <p className="tags">{item.tags}</p>&emsp;
                <i className={item.icon}></i>
                <p className="subtitle">{item.name}</p>
                <p>{item.desc}</p>
                <form action={item.url} target="_blank">
                <button type="submit">View</button>
                </form>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Projects