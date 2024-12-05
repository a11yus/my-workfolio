import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { about } from "../../portfolio";
import "./About.css";

const About = () => {
  const {
    name,
    role,
    imgURL,
    description,
    description2,
    resume,
    social,
    act1,
    act2,
    act3,
    act4,
  } = about;

  return (
    <div className="about center">
      <div className="hero__section">
        <img
          className="hero__image"
          src={imgURL && imgURL}
          alt="ayush__image"
          height={200}
          width={200}
        />
        <div>
          {name && (
            <h1>
              Hi !, I am <span className="about__name">{name}.</span>
            </h1>
          )}

          {role && <h2 className="about__role">A {role}.</h2>}
        </div>
      </div>
      <p className="about__desc">{description && description}</p>
      <br />
      <p className="about__desc2">{description2 && description2}</p>
      <br />
      <ul className="about__list">
        <li>{act1}</li>
        <li>{act2}</li>
        <li>{act3}</li>
        <li>{act4}</li>
      </ul>
      {/* 🚀 Ready to Take the Next Step? Check Out My Resume! Hire me before someone else does! 📄📂😎✨ */}

      <div className="about__contact center">
        <h4>
          🚀 Ready to Take the Next Step ❓
          <br /> Check Out My Resume !
        </h4>

        {resume && (
          <a href={resume} target="_blank" download="Ayush_kmr_resume.pdf" rel="noopener noreferrer">
            <span type="button" className="btn btn--outline">
              📄 Resume
            </span>
          </a>
        )}
      </div>

      <div className="about_handles">
        <h3
          style={
            {
              // width: "200px",
            }
          }
        >
          Feeling social ❓<br /> Find me on these online spaces too ! 🌐
          <br />
          Let’s connect & share ideas 🤝💬
        </h3>
        {social && (
          <div>
            {social.github && (
              <a
                href={social.github}
                aria-label="github"
                target="_blank"
                className="link link--icon"
              >
                <GitHubIcon
                  style={{
                    fontSize: "3rem",
                    marginBottom: "1rem",
                  }}
                />
              </a>
            )}
            <br />
            {social.linkedIn && (
              <a
                href={social.linkedIn}
                aria-label="linkedIn"
                target="_blank"
                className="link link--icon"
              >
                <LinkedInIcon
                  style={{
                    fontSize: "3.5rem",
                  }}
                />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
