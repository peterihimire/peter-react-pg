import React , { Component } from 'react';
import Title from '../components/Title';
import img1 from '../images/benkih-ecommerce.png';
import img2 from '../images/benkih-todo.png';
import img3 from '../images/benkih-budget.png';
import img4 from '../images/benkih-quiz.png';
import img5 from '../images/peterihimirefewd.png';
import {  Link } from 'react-router-dom';
import { FaChrome, FaGithub } from 'react-icons/fa';

class Portfolio extends Component {
  state = {
    projects:[
      {
        title: 'todo app',
        image: img2,
        detail: 'a todo productivity app to help organize task.',
        technologies: ['html', 'css', 'javascript'],
        github: 'https://github.com/peterihimire/benkih-todo',
        online: 'https://peterihimire.github.io/benkih-todo'
      },
      {
        title: 'budget app',
        image: img3,
        detail: 'a budget app to help organize expenses.',
        technologies: ['html', 'css', 'javascript'],
        github: 'https://github.com/peterihimire/benkih-budget',
        online: 'https://peterihimire.github.io/benkih-budget'
      },
      {
        title: 'quiz app',
        image: img4,
        detail: 'a science/computer based quiz app.',
        technologies: ['html', 'css', 'javascript'],
        github: 'https://github.com/peterihimire/benkih-quiz',
        online: 'https://peterihimire.github.io/benkih-quiz'
      },
      {
        title: 'product store',
        image: img1,
        detail: 'an e-commerce store, frontend.',
        technologies: ['html', 'css', 'javascript'],
        github: 'https://github.com/peterihimire/benkih-ecommerce',
        online: 'https://peterihimire.github.io/benkih-ecommerce'
      },
      {
        title: 'personal website',
        image: img5,
        detail: 'a personal portfolio website, hosted on netlify.',
        technologies: ['react'],
        github: 'https://github.com/peterihimire/peterihimire',
        online: 'https://peterihimire.github.io/peterihimire'
      }
    ]
  }

  render(){
    return(
      <section className='projects'>
        <div className='project-center' >
          <Title title1='my' title2='portfolio' subtitle='check out some of my projects...'/>
          <div className='project'>
            {this.state.projects.map((item, index) => {
                return(
                  <article key={index} className='project-card'>
                    <img src={item.image} alt='project pix' className='project-image' />
                    <div className='project-body' >
                      <div className='project-text'>
                        <h3>{item.title}</h3>
                        <p>{item.detail}</p>
                        <h4>technologies:</h4>
                        <ul className='project-techs'>
                          {item.technologies.map((tech,index) => {
                            return(
                              <li  key={index}>
                                {tech}
                              </li>
                            )
                          })}
                        </ul>
                        <div className='project-btns'>
                          <Link to='' className='chrome-btn'>
                            <FaChrome /> project
                          </Link>
                          <Link to='' className='github-btn'>
                            <FaGithub /> github
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                )
              })}
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;