import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import './index.css';
const Footer = ()  => (

    <>
      <footer>
        <div className="container">
          
            <div className="footer-icon-container">
             
       <a href='https://www.linkedin.com/in/omprakash-yamavaram/' target="_blank" rel="noopener noreferrer">
       <IconBrandLinkedin className='icon'  width={32} height={32} />
        </a>
      
       <a href='https://github.com/YOmprakash?tab=repositories' target="_blank" rel="noopener noreferrer">
       <IconBrandGithub className='icon' width={32} height={32} />
        </a>
            </div>
            <h3 className="footer-h3">
              Copyright © {new Date().getFullYear()}. All rights are reserved
            </h3>
          </div>
       
      </footer>
    </>
  
)

export default Footer;