import { IconBrandGithub, IconBrandLinkedin, IconBrandYoutube, IconBrandInstagram } from "@tabler/icons-react";
import './index.css';

const Footer = ()  => (
    <>
      <footer>
        <div className="container">
            <div className="footer-icon-container">
                <a href='https://www.linkedin.com/in/omprakash-yamavaram/' target="_blank" rel="noopener noreferrer">
                    <IconBrandLinkedin className='icon IconBrandLinkedin'  width={32} height={32} />
                </a>
                <a href='https://github.com/YOmprakash?tab=repositories' target="_blank" rel="noopener noreferrer">
                    <IconBrandGithub className='icon IconBrandGithub' width={32} height={32} />
                </a>
                <a href='https://www.youtube.com/channel/UCC7krjBHYyHqFi653A5uW1g' target="_blank" rel="noopener noreferrer">
                    <IconBrandYoutube className='icon IconBrandYoutube' width={32} height={32} />
                </a>
                <a href='https://www.instagram.com/yomprakash63/' target="_blank" rel="noopener noreferrer">
                    <IconBrandInstagram className='icon IconBrandInstagram' width={32} height={32} />
                </a>
            </div>

            <h3 className="footer-h3">
  Copyright © {new Date().getFullYear()}. Designed by <span className="designer-name">Omprakash</span>
</h3>

        </div>
      </footer>
    </>
)

export default Footer;
