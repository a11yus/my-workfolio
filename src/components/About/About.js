import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, role, description, description2, resume, social, act1, act2, act3, act4 } = about

  return (
    <div className='about center'>
       <img 
       style= 
       {{
        marginBottom: '1rem',
        marginTop: '-4rem',
        borderRadius: '50%',
        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
       }}
      src='https://i.imgur.com/dAStMZV.png'
      alt='ayush image'
      />
      {name && (
        <h1>
          Hi !, 
          <br />
          I am <span className='about__name'>{name}.</span>
        </h1>
      )}

      {role && <h2 className='about__role'>A {role}.</h2>}
      <p className='about__desc'>{description && description}</p>
      <br />
      <p className='about__desc2'>{description2 && description2}</p>
      <br />
      <ul className='about__list'>
        <li>{act1}</li>
        <li>{act2}</li>
        <li>{act3}</li>
        <li>{act4}</li>
      </ul>
      <div className='about__contact center'>
        {resume && (
          <a href={resume}>
            <span type='button' className='btn btn--outline'>
             ⤷ Resume
            </span>
          </a>
        )}
        </div>

      <div className="about_handles">
      <h3 
      style=
      {{
        width: '250px',
        marginTop: '2rem',
        marginBottom: '2rem'

      }}
      >Feeling social ?<br /> Find me on these online spaces too !</h3>
      {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon 
                style=
                {{
                  fontSize: '3rem',
                  marginBottom: '1rem'
                }}
                />
              </a>
            )}
          <br />
            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
              <LinkedInIcon
                style=
                {{
                  fontSize: '3rem',
                }}
                />
              </a>
            )}
          </>
        )}
        </div>
    </div>
  )
}

export default About
