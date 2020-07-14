import React , { Component } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaReact, FaNodeJs, FaSass, FaLinux, FaGit, FaGulp } from 'react-icons/fa';
import Title from './Title';


class Skill extends Component {
  state = {
    skills: [
      {
        icon: <FaHtml5 />,
        title:'html',
        color: 'orange'
      },
      {
        icon: <FaCss3Alt />,
        title:'css',
        color: 'blue'
      },
      {
        icon: <FaJs />,
        title:'javascript',
        color: 'yellow'
      },
      {
        icon: <FaReact />,
        title:'react',
        color: 'cyan'
      },
      {
        icon: <FaBootstrap />,
        title:'bootstrap',
        color: 'purple'
      },
      {
        icon: <FaNodeJs />,
        title:'node js',
        color: 'limegreen'
      },
      {
        icon: <FaLinux />,
        title:'linux',
        color: 'black'
      },
      {
        icon: <FaGit />,
        title:'git',
        color: 'black'
      },
      {
        icon: <FaGulp />,
        title:'gulp',
        color: '#db4446'
      },
      {
        icon: <FaSass />,
        title:'saas',
        color: 'pink'
      }
    ]
  }

  render(){
    return(
      <section className='skills'>
        <div className='skills-center'>
          <Title title1='my' title2='skills' subtitle='here are the skills i possess...'/>
          <div className='skillz'>
            {this.state.skills.map((item, index) => {
              return(
                // console.log(item)
                <article className='skill' key={index}>
                  <div className='inner-box'>
                    {item.icon}
                  </div>
                  <h4>{item.title}</h4>
                  <div className='skill-hor-line' />
                </article>
              )
            })}
          </div>
            
        </div>
      </section>
    );
  }
}

export default Skill;