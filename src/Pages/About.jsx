import { NavLink } from "react-router-dom";
import "./pages.css";
import { github, linkedin, twitter } from "../assets/icons";

export const About = () => {
  return (
    <>
      <div className="container col-md-10">
        <h2 className="myname col-md-6">
          Hello, I'm <span className="ravi">Ravi</span> 👋
        </h2>
        <p className="fullstack">
          As a full-stack web developer, you have the skills and knowledge to
          work on both the front end (client-side) and back end (server-side)
          aspects of web development. Here's an overview of what's typically
          expected from a full-stack developer:
        </p>
        <h5 className="skills">My Skills</h5>
        <div className="row myskillsicon col-md-12">
          <img
            src="http://localhost:5173/src/assets/icons/css.svg"
            alt=""
            className="col-md-2"
          />
          <img
            src="http://localhost:5173/src/assets/icons/git.svg"
            alt=""
            className="col-md-2"
          />
          <img
            src="http://localhost:5173/src/assets/icons/github.svg"
            alt=""
            className="col-md-2"
          />
          <img
            src="http://localhost:5173/src/assets/icons/html.svg"
            alt=""
            className="col-md-2"
          />
          <img
            src="http://localhost:5173/src/assets/icons/javascript.svg"
            alt=""
            className="col-md-2"
          />
          <img
            src="http://localhost:5173/src/assets/icons/react.svg"
            alt=""
            className="col-md-2"
          />
        </div>
        <div className="row myskillsicon2 col-md-12">
          <img
            src="http://localhost:5173/src/assets/icons/express.svg"
            alt=""
            className="col-md-2"
          />
          <img
            src="http://localhost:5173/src/assets/icons/mongodb.svg"
            alt=""
            className="col-md-2"
          />
          <img
            src="http://localhost:5173/src/assets/icons/nodejs.svg"
            alt=""
            className="col-md-2"
          />
          <img
            src="http://localhost:5173/src/assets/icons/sass.svg"
            alt=""
            className="col-md-2"
          />
          <img
            src="http://localhost:5173/src/assets/icons/typescript.svg"
            alt=""
            className="col-md-2"
          />
          <img
            src="http://localhost:5173/src/assets/icons/tailwindcss.svg"
            alt=""
            className="col-md-2"
          />
        </div>
        <h5 className="skills">Work Experience.</h5>
        <div className="container row col-md-10 ">
          <div className="card col-md-6 developer">
            <div className="stackinfo col-md-10">
              <h3 className="fullstack_developer">Full stack Developer</h3>
              <li className="textstack">
                Developing and maintaining web applications using React.js and
                other related technologies.
              </li>
              <li className="textstack">
                Collaborating with cross-functional teams including designers,
                product managers, and other developers to create high-quality
                products.
              </li>
              <li className="textstack">
                Implementing responsive design and ensuring cross-browser
                compatibility.
              </li>
              <li className="textstack">
                Participating in code reviews and providing constructive
                feedback to other developers.
              </li>
            </div>
          </div>
        </div>
        <div className="imgstack">
          <img
            src="http://localhost:5173/src/assets/images/meta.png"
            alt=""
            className="imgstack1"
          />
        </div>
        <div className="row">
          <div className="col-md-6"></div>
          <div className=" seconddiv col-md-6">
            <div className="card col-md-10">
              <div className="stackinfo col-md-10">
                <h3 className="fullstack_developer">React.js Developer</h3>
                <li className="textstack">
                  Developing and maintaining web applications using React.js and
                  other related technologies.
                </li>
                <li className="textstack">
                  Collaborating with cross-functional teams including designers,
                  product managers, and other developers to create high-quality
                  products.
                </li>
                <li className="textstack">
                  Implementing responsive design and ensuring cross-browser
                  compatibility.
                </li>
                <li className="textstack">
                  Participating in code reviews and providing constructive
                  feedback to other developers.
                </li>
              </div>
            </div>
          </div>
        </div>

        <hr />
        
        <span className="haveproject">Have a project in mind? <br />
Let’s build something together!</span>

<NavLink to='/contact'>
<button class="button-18" role="button">Contact</button>
</NavLink>

<div className="row footer col-md-11 ">
   <hr />

            <div className="col-md-6 rights">
            <span className="rights">© 2023 <b>Ravi Dangar.</b>  All rights reserved.</span>
            </div>
            <div className="col-md-6 icons">
            
            <img src={linkedin} alt="" className="linkdin"/>
            <img src={github} alt="" className="github" />
            <img src={twitter} alt="" className="twiter" />

            </div>
        </div>
      </div>
    </>
  );
};
