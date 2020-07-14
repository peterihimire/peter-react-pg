import React, { Component } from 'react';
import { FaRocket, FaHeartbeat, FaGem, FaDesktop } from 'react-icons/fa';

class Services extends Component {
  state = {
    services: [
      {
        icon: <FaGem />,
        title:'intuitive UX/UI',
        info:'Strong preference for easy to use Intuitive User Experience and User Interface.',
      },
      {
        icon: <FaRocket />,
        title:'fast load time',
        info:'Fast load times and lag free interaction are my highest priority.',
      },
      {
        icon: <FaDesktop />,
        title:'responsive layout',
        info:'My layout will work on any device, be it desktop, laptop and mobile phones.',
      },
      {
        icon: <FaHeartbeat />,
        title:'dynamic website',
        info:'Website dont have to be static, I like to make webpages come to life.',
      }
    ]
  }

  render(){
    return (
      <section id='service-section' className='services'>
        <div className='services-center'>
          {this.state.services.map( (item, index) => {
            return(
              <article key={index} className='service'>
                <span>{item.icon}</span>
                <h4>{item.title}</h4>
                <p>{item.info}</p>
              </article>
            )
          })}
        </div>
      </section>
    );
  }
}

export default Services;