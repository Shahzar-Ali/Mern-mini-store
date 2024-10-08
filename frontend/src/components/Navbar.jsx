import { Button, Container, Flex, HStack, Text, useColorMode,Icon } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FiPlusSquare } from "react-icons/fi";
import { IoIosSunny } from "react-icons/io";
import { IoMoonSharp } from "react-icons/io5";
import { FaOpencart } from "react-icons/fa";

const Navbar = () => {
 const {colorMode,toggleColorMode} = useColorMode();

  return (
    <Container maxW={"1140px"} px={4} >
      <Flex
        h={16}
        alignItems={"center"}
        justify={"space-between"}
        flexDir={{
          base: "column",
          sm: "row",
        }}
      >
        <HStack spacing={2} alignItems={"center"}>
       <Text
					fontSize={{ base: "22", sm: "28" }}
					fontWeight={"bold"}
					textTransform={"uppercase"}
					textAlign={"center"}
					bgGradient={"linear(to-r, #ffb03b,#ff677d)"}
					bgClip={"text"}
				>
					<Link to={"/"}>Smart Shopper </Link>
				</Text>
          <Icon as={FaOpencart} w={8} h={8} color='orange.400'/>
          </HStack>
                <HStack spacing={2} alignItems={"center"}>
                <Link to={"/create"}>
            <Button
              leftIcon={<FiPlusSquare size={20} />}
              colorScheme="orange"
              variant="solid"
              size="md"
              _hover={{ bg: "orange.400", color: "white" }}
            >
              Create Product
            </Button>
          </Link>
                    
                    <Button onClick={toggleColorMode}>
                    {colorMode === "light" ? <IoIosSunny size={20}/>:<IoMoonSharp  size={20}/>}
                    </Button>
                
                </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
