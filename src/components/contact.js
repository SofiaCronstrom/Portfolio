import * as React from "react";
import GithubIcon from '../images/github-icon.svg';
import LinkedinIcon from '../images/linkedin-icon.svg';
import { Link } from 'gatsby';



const ContactPage = () =>  {

return (
<div className="wrapper-contact">
   <div className="text-contact">
        <h1>Lets get in touch!</h1>
        <h2>Email: sofia.cronstrom@gmail.com</h2>
        <h2>0046704546346</h2>
        <Link to='https://github.com/SofiaCronstrom'>
        <img src={GithubIcon} className="github" alt="github icon with link to my githubpage when clicked"/>
        </Link>
        <Link to='https://www.linkedin.com/in/sofia-cronstr%C3%B6m-080a4998/'>
        <img src={LinkedinIcon} alt="linkedin icon with link to my linkedin when clicked"/>
        </Link>
    </div>
</div>

)
}
export default ContactPage;