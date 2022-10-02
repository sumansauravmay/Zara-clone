import React from "react";
// import Navbar from "../day2/Navbar";
import Footer from "../day2/Footer"
import {Link} from "react-router-dom";
import {Flex,Box,Heading,Spacer,ButtonGroup,
    Button,Input,Image, VStack,Text} from "@chakra-ui/react";
    import {useParams} from "react-router-dom";
import axios from "axios";
    

function Cart(){

const {id}=useParams()
const [itemDetails,setItemDetails]=React.useState({});

React.useEffect(()=>{
    return axios.get(`https://infinite-brushlands-51927.herokuapp.com/api/ManData/${id}`)
        .then((res)=>setItemDetails(res.data))
},[id])

function handleOrder(){
    alert("Your order has been confirmed!!")

    // return <Link to="/" />
};

    return (
        <>
           <Flex w="1300px" pos="fixed" minWidth='max-content' alignItems='center' gap='2'>
<Flex>
  
      
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
  
  </ButtonGroup>
</Flex>



{/* //cart part */}
   <VStack>
<Box m="55px">
<Image src={itemDetails.image_url} alt="cart"/>
</Box>

<Box mt={"10"}>
<Text>{itemDetails.name}</Text>
</Box>

<Box mt={"10"}>
<Text>{itemDetails.price}</Text>
</Box>

<Link to="/">
<Button onClick={handleOrder} bg="black" color={"white"}>Confirm Order</Button>  
</Link>
  
<Link to="/">
<Button bg="black" color={"white"}>Delete</Button>  
</Link>
   
   </VStack>
      


            <Footer/>
        </>
    )
}

export default Cart;