import React from "react";
import axios from "axios";
import Footer from "../day2/Footer";
import {Container, VStack,Image,Box,Text,Button,
   } from "@chakra-ui/react";
import Navbar from "../day2/Navbar";

    


// let getData=()=>{
//     return axios.get("https://infinite-brushlands-51927.herokuapp.com/api/WomenData")
// }

function Women(){
   
    const [data,setData]=React.useState([]);

    React.useEffect(()=>{
        return axios.get("https://infinite-brushlands-51927.herokuapp.com/api/WomenData")
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

            <Footer/>
        </>
    )
}
export default Women;