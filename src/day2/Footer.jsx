import React from "react";
import {Box,Image,Tag,Flex} from "@chakra-ui/react"

function Footer(){
    return (
        <>
            <Box>
  <Image src="https://static.zara.net/photos///contents/mkt/spots/ss22-newsletter/subhome-xmedia-03//w/1366/IMAGE-landscape-fill-6f5f24a2-7463-4ad2-91e9-0f2a99f75e89-default_0.jpg?ts=1643121593479" alt="footer"/>
</Box>
<Tag position="absolute" bg="white" ml="-100px" mt="-600px" >JOIN OUR NEWSLETTER</Tag>
<Flex position="absolute" ml="400px" w="500px" mt="-450px">
<Tag bg="white">INSTAGRAM</Tag>
<Tag bg="white">FACEBOOK</Tag>
<Tag bg="white">TWITTER</Tag>
<Tag bg="white">PINTEREST</Tag>
<Tag bg="white">YOU TUBE</Tag>
<Tag bg="white">SPOTIFY</Tag>
</Flex>
<div style={{marginTop:"-200px",fontSize:"10px",position:"absolute"}}>
  <p>NAME AND ADDRESS OF THE MANUFACTURUR :</p>
  <p>INDUSTRIA DE DISENO TEXTIL, S.A.(INDITEX S.A.)</p>
  <p>AVENIDA DE LA DUPUTACION,EDIFICIO INDITEX,15143,ARTIEXO</p>
  
</div>
        </>
    )
}

export default Footer;