import { useState } from 'react';

function Projects() {
  const [activeCategories, setActiveCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const allButtonClass = activeCategories.length === 0 ? 'active' : undefined;

  const filterItem = (category) => {
    setActiveCategories((prevCategories) => {
      if (prevCategories.includes(category)) {
        return prevCategories.filter((c) => c !== category);
      } else {
        return [...prevCategories, category];
      }
    });
    setCurrentPage(1); // reset to page 1 when a filter button is clicked
  };

  const listItems = [
    { 
      id: 10, 
      tags: '#HTML #CSS #React',
      icon: 'fab fa-react',
      name: 'Bassets 3D Lab', 
      img: 'assets/t_bassets.png',
      desc: 'In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.',
      categories: ['react'],
      btn1: 'Visit website',
      btn2: 'Prototype',
      urlgit: 'https://bassets3dlab.com/',
      url: 'https://www.figma.com/file/YBeFdhQif9IbM8chiwAoan/Bassets?node-id=102%3A2&t=uN1P2t42U7thJ7o8-1'
    },
    { 
      id: 1, 
      tags: '#HTML #CSS',
      icon: 'fab fa-html5',
      name: 'Recipe Page', 
      img: 'assets/t_dev01.png',
      desc: 'In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.',
      categories: ['html', 'css'],
      btn1: 'Git repo',
      btn2: 'Demo page',
      urlgit: 'https://github.com/CyNyxy/recipe-page-devChallenges',
      url: 'https://nyxy-web.netlify.app/'
    },
    { 
      id: 2, 
      tags: '#HTML #CSS',
      icon: 'fab fa-css3-alt',
      name: '404 not found Page', 
      img: 'assets/t_dev02.png',
      desc: 'In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.',
      categories: ['css'],
      btn1: 'Git repo',
      btn2: 'Demo page',
      urlgit: 'https://github.com/CyNyxy/404-not-found-devChallenges',
      url: 'https://nyxy-404-page.netlify.app/'
    },
    { 
      id: 3, 
      tags: '#HTML #CSS #React',
      icon: 'fab fa-react',
      name: 'Interior Consultant', 
      img: 'assets/t_dev03.png',
      desc: 'In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.',
      categories: ['react'],
      btn1: 'Git repo',
      btn2: 'Demo page',
      urlgit: 'https://github.com/CyNyxy/interior-consultant-devChallenges',
      url: 'https://nyxy-interior-consultant.netlify.app/'
    },
    { 
      id: 4, 
      tags: '#HTML #CSS',
      icon: 'fab fa-css3-alt',
      name: 'Team Page', 
      img: 'assets/t_dev04.png',
      desc: 'In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.',
      categories: ['css'],
      btn1: 'Git repo',
      btn2: 'Demo page',
      urlgit: 'https://github.com/CyNyxy/team-page-devChallenges',
      url: 'https://nyxy-team-page.netlify.app/'
    },
    { 
      id: 5, 
      tags: '#HTML #CSS',
      icon: 'fab fa-css3-alt',
      name: 'Gallery Page', 
      img: 'assets/t_dev05.png',
      desc: 'In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.',
      categories: ['css'],
      btn1: 'Git repo',
      btn2: 'Demo page',
      urlgit: 'https://github.com/CyNyxy/my-gallery-devChallenges',
      url: 'https://nyxy-my-gallery.netlify.app/'
    },
    { 
      id: 6, 
      tags: '#HTML #CSS #Javascript',
      icon: 'fab fa-js',
      name: 'Checkout Page', 
      img: 'assets/t_dev06.png',
      desc: 'In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.',
      categories: ['html'],
      btn1: 'Git repo',
      btn2: 'Demo page',
      urlgit: 'https://github.com/CyNyxy/checkout-page-devChallenges',
      url: 'https://nyxy-checkout-page.netlify.app/'
    },
    { 
      id: 7, 
      tags: '#HTML #CSS #React',
      icon: 'fab fa-react',
      name: 'Edie Homepage', 
      img: 'assets/t_dev07.png',
      desc: 'In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.',
      categories: ['react'],
      btn1: 'Git repo',
      btn2: 'Demo page',
      urlgit: 'https://github.com/CyNyxy/edie-homepage-devChallenges',
      url: 'https://nyxy-edie-homepage.netlify.app/'
    },
    { 
      id: 8, 
      tags: '#UX/UI Design #Figma',
      icon: 'fas fa-pen-nib',
      name: 'Caking', 
      img: 'assets/t_caking.png',
      desc: 'In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.',
      categories: ['uxdesign'],
      btn1: 'Prototype',
      btn2: 'UX Research',
      urlgit: 'https://www.figma.com/file/mkGJDL3OL6Glu82eYlFGMP/Caking-App?node-id=2%3A7&t=wAKQnaymeIOHIhzS-1',
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
      btn1: 'Prototype',
      btn2: 'UX Research',
      urlgit: 'https://nyxy-portfolio.webflow.io/work/bakybake',
      url: 'https://nyxy-portfolio.webflow.io/work/bakybake'
    },
  ];

  const filteredListItems =
    activeCategories.length === 0
      ? listItems
      : listItems.filter((item) =>
          item.categories.some((c) => activeCategories.includes(c))
        );

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredListItems.slice(startIndex, endIndex);

  const totalPages = Math.ceil(filteredListItems.length / itemsPerPage);

  function goToPage(pageNumber) {
    setCurrentPage(pageNumber);
    const firstElement = document.querySelector(".project-list");
    if (firstElement) {
      firstElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <div className="project-box">
      <div className="filter-box">
        <button
          className={allButtonClass}
          onClick={() => {
            setActiveCategories([]);
            setCurrentPage(1); // reset to page 1 when "All" button is clicked
          }}
        >
          All
        </button>
        <button
          className={activeCategories.includes('html') ? 'active' : ''}
          onClick={() => filterItem('html')}
        >
          HTML
        </button>
        <button
          className={activeCategories.includes('css') ? 'active' : ''}
          onClick={() => filterItem('css')}
        >
          CSS
        </button>
        <button
          className={activeCategories.includes('react') ? 'active' : ''}
          onClick={() => filterItem('react')}
        >
          React
        </button>
        <button
          className={activeCategories.includes('uxdesign') ? 'active' : ''}
          onClick={() => filterItem('uxdesign')}
        >
          UX/UI Design
        </button>
      </div>
      <ul className="project-list">
        {currentItems.map((item) => (
          <li
            key={item.id}
            className="js-filterable"
            data-category={item.categories.join(' ')}
          >
            <div className="box flex">
              <div>
                <img className="thumb" src={item.img} alt="gallerypage" />
              </div>
              <div>
                <p className="tags">{item.tags}</p>&emsp;
                <i className={item.icon}></i>
                <p className="subtitle">{item.name}</p>
                <p>{item.desc}</p>
                <form action={item.urlgit} target="_blank">
                  <button className="btn-medium btn-violet" type="submit">{item.btn1}</button>
                </form>
                <form action={item.url} target="_blank">
                  <button className="btn-medium btn-blue" type="submit">{item.btn2}</button>
                </form>
              </div>
            </div>
          </li>
        ))}
        <div className="pagination">
          {Array.from(Array(totalPages), (_item, index) => (
            <button
              key={index}
              onClick={() => goToPage(index + 1)}
              className={currentPage === index + 1 ? 'active' : ''}
            >
              {index + 1}
            </button>
          ))}
        </div>

      </ul>
    </div>
  )
}

export default Projects