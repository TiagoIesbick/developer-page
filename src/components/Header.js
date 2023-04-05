import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const [ y, setY ] = useState(0);
  const [ yPosition, setYPosition ] = useState(0);

  const handleClick = (anchor) => {    
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      if (anchor === 'contactme') {
        anchor = 'contact-me';
      };
      window.history.replaceState(null, '', `#${anchor}`);
    }    
  };

  const Social = props => (
    <a href={props.url} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={props.icon} size="2x"/>
    </a>
  ); 
  
  
  useEffect(() => {    
    const handleScroll = (e) => {      
      let newValue = window.pageYOffset;
      if (yPosition < newValue) {
          setY(-200);
      } else { setY(0)};
      setYPosition(newValue);      
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  })

  return (
    <Box
      position="fixed"
      top={y}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="top"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack>
              {socials.map((social) => (
                <Social key={social.url} url={social.url} icon={social.icon} />
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a href="/" onClick={(e) => {e.preventDefault(); handleClick("projects")}}>Projects</a>
              <a href="/" onClick={(e) => {e.preventDefault(); handleClick("contactme")}}>Contact Me</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
