import React, { Component } from 'react';
import Title from '../components/Title'
import portrait from '../images/peter.jpg';
import { Link } from 'react-router-dom';



class About extends Component {
  state = {
    stacks:[
      {
        title:"web designer",
        details:"As a designer, passionate about making a difference, I value simple content structure, clean design patterns and thoughtful interactions. I have strong preference for easy to use Intuitive User Interface and User Experience. Things I enjoy designing are UI and UX for web , desktop and mobile layouts."
      },
      {
        title:"web developer",
        details:"I've always been drawn to the overlap between design and development. In addition to web design, I like to code things from scratch and enjoy bringing ideas to life in the browser. Technologies I use in the front-end are HTML, CSS, JavaScript, Bootstrap, React, Node.JS etc. Check out some of my projects in the portfolio section."
      },
      {
        title:"mentor",
        details:" Starting the journey of a web development and software engineering has never been easy, I know what it feels like, thats why I genuinely care about new programmers and fellow web developers, mentoring and helping them improve on their soft and hard skills as a software engineer."
  
      }
    ]
  }
  render(){
    return(
      <section className='about'>
        
        <div className='about-center'>
          <Title title1='about' title2='me' subtitle='let me tell you few things...'/>
          <div className='biography'>
            <div className='biography-image'>
              <img src={portrait} alt='Peter Ihimire' className='image-round'  />
            </div>
            <div className='biography-text'>
              <p>Based in Nigeria, am a seasoned Front-End web developer, passionate about building excellent software that make a difference. I have a Bachelor of Engineering (B.Eng.) in Electrical Electronics, but have real passion for programming and web development, where I specialize in creating unique, market-centric, informative websites that put my clients above their competitors, ranging from individuals and small businesses all the way to large enterprice corporations.</p>

              <p>I approach every project with an attention to detail and determination to exceed my clients expectations. My process is very collaborative. I like to involve my clients closely in every stage of the project, listening and fully understanding their requirements so as to deliver an online solution that meets their business goals.</p>

              <p>When am not programming, tweeting, you'll find me in my home studio cooking up some youtube tech videos, where I share my thoughts about mobile technologies, often I work out in the gym too . Click to download my <Link to="https://docs.google.com/document/d/18QEpZy9fB74B-F3R7H0llSVpHIjZPwUl0dgy8NE2SeE/edit?usp=drivesdk" target="_blank">resume</Link> , for more information.</p>
            </div>
          </div>
          <div className='stack-center'>
            {this.state.stacks.map((item, index) => {
              return(
                <article key={index} className='stack'>
                  <h3>{item.title}</h3>
                  <p>{item.details}</p>
                </article>
              )
            })}
          </div>
          
        </div>
      </section>
      
    );
  }
}

export default About;