import React from "react";
import {Link} from "react-router-dom";
import {Flex,Box,Heading,Spacer,ButtonGroup,Button,Input,
    Image,Drawer,DrawerOverlay,DrawerContent,DrawerBody,useDisclosure,
     } from "@chakra-ui/react";
    

function Navbar(){

  const { isOpen, onOpen, onClose } = useDisclosure()

return (
<>

<Flex w="1300px" pos="fixed" minWidth='max-content' alignItems='center' gap='2'>
<Flex>
  


  <Button bg="transparent" onClick={onOpen} mt="10px">
  <Box>
  <Image
   boxSize="50px" 
   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiGLIIiM_ak3hj9E6EgpNN28bc_ddyQFhd4Q&usqp=CAU" alt="three_dot"/>
    </Box>
  </Button>
      <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <Heading ml="60px" mt="20px" borderBottomWidth='5px' h="80px">ZARA</Heading>
          <DrawerBody gap={4}>
          <Link to="/women">NEW</Link>
            <Link to="/men">
            <p>THE JEANS REDESIGN X ZARA</p>
            </Link>
            <Link to="/collection">
            <p>Y2 | METAVERSE</p>
            </Link>
            <Link to="/men">
            <p>MAN</p>
            </Link>
            <Link to="/women">
            <p>WOMEN</p>
            </Link>
            <Link to="/shoes">
            <p>SHOES</p>
            </Link>
            <Link to="/women">
              <p>BASICS</p>
            </Link>
            <Link to="/collection">
              <p>COLLECTION</p>
            </Link>
            <Link to="/women">
              <p>BEST SELLER</p>
            </Link>
          </DrawerBody>
        </DrawerContent>
      </Drawer>


    <Box ml="50px">
    <Heading mt="5px" color="white" size='2xl'>Zara</Heading>
    </Box>
  </Flex>
  <Spacer />
  <ButtonGroup gap='2'>
  
  <Input type="text" placeholder="search"/>
  <Link to="/login">
  <Button bgGradient="linear(to-t, green.200, pink.500)" bg="transparent">LOG IN</Button>
  </Link>
   <Button bgGradient="linear(to-t, green.200, pink.500)" bg="transparent">Help</Button>

     <Link to="/cart">
<Image bg="transparent" boxSize="50px" w={"80px"} src="data:image/jpeg;base64,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"
 alt="cart_tag"/>
     </Link>
     
  </ButtonGroup>
</Flex>

{/* <Box>
<Image src="https://static.zara.net/photos///contents/mkt/spots/aw22-north-woman-new/subhome-xmedia-38-3//w/1366/IMAGE-landscape-default-fill-3826ba34-9fad-4264-9ecd-6d2bc9295d9c-default_0.jpg?ts=1663773455159" alt="Man"/>
</Box>
{/* <Tag position="absolute" mt="-200px" bg="transparent">Man</Tag> */}


</>

)


}
export default Navbar;

