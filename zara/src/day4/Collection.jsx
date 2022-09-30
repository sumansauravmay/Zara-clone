import React from "react";
import axios from "axios";
import {Container, VStack,Image,Box,Text,Button,
Flex,ButtonGroup} from "@chakra-ui/react";
import Navbar from "../day2/Navbar";
import Footer from "../day2/Footer";
import {Link} from "react-router-dom";

function Collection(){
    const [data,setData]=React.useState([]);

    React.useEffect(()=>{
        return axios.get("https://infinite-brushlands-51927.herokuapp.com/api/CollectionData")
        .then((res)=>setData(res.data))
    },[])

    return (
        <>
           <Navbar/>
<br/>
<br/>
            <Container>
{
    data.map((item)=>(
        <VStack key={item.id}>
            <Box mt={10}>
                <Image src={item.image_url} />
            </Box>
            <Box mt={10}>
            <Text>{item.name}</Text>
            </Box>
            <Box mt={10}>
               <Text>{item.price}</Text>
            </Box>
            <Box mt={10}>
               <Button bg={"black"} color={"white"}>Add To Cart</Button>
            </Box>
        </VStack>
    ))
}
            </Container>


            <Flex mt="20px" ml="200px" minWidth='max-content' alignItems='center' gap='2'>
  <ButtonGroup gap='2' position="absolute">
    <Link to="/collection">NEW</Link>
    <Link to="/men">THE JEANS REDESIGN X ZARA</Link>
    <Link to="/women">Y2 | METAVERSE</Link>
    <Link to="/women">BEST SELLERS</Link>
    <Link to="/collection">COLLECTION</Link>
    <Link to="/shoes">BASICS</Link>
    
    <Link to="/shoes">SHOES</Link>
    
  </ButtonGroup>
</Flex>



            <Footer/>
        </>
    )
}
export default Collection;