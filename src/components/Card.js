import { Heading, Image, Text, VStack, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.  
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack bg="white" borderRadius="15" alignItems="flex-start" color="black" spacing="3">
      <Image 
      src={imageSrc} 
      objectFit='cover'
      borderRadius="15"
      />
      <Heading as='h4' size='md' px="4">{title}</Heading>
      <Text color="grey" px="4">{description}</Text>      
      <Link href="#" px="4" pb="3">
        See more <FontAwesomeIcon icon={faArrowRight} size="1x"/>
      </Link>    
    </VStack>    
  );
};

export default Card;
