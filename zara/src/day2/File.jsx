import React from "react";
import {Box,Image,Flex,ButtonGroup} from "@chakra-ui/react";
import {Link} from "react-router-dom";

function File(){
return (
<>

<Box>
<Link to="/men">
<Image src="https://static.zara.net/photos///contents/mkt/spots/aw22-north-woman-new/subhome-xmedia-38-3//w/1366/IMAGE-landscape-default-fill-3826ba34-9fad-4264-9ecd-6d2bc9295d9c-default_0.jpg?ts=1663773455159" alt="Man"/>
</Link>

</Box>
{/* <Tag position="absolute" mt="-200px" bg="transparent">Man</Tag> */}


<Box>
<Link to="/women">
<Image src="https://static.zara.net/photos///contents/mkt/spots/aw22-north-woman-y2k-collection/subhome-xmedia-38//w/1366/IMAGE-landscape-fill-8ffe5012-f7c5-486e-a66a-9c017f1c4ddc-default_0.jpg?ts=1663790133732" alt="Woman"/>
</Link>
</Box>

<Box>
<Link to="/women">
<Image boxSize="1500px" h="500px" src="https://i.gifer.com/EDER.gif" alt="gif"/>
</Link>
</Box>

<Box>
<Link to="/collection">
<Image  src="https://static.zara.net/photos///contents/mkt/spots/aw22-north-woman-basics/subhome-xmedia-38//w/1366/IMAGE-landscape-fill-f5302ebb-2ddc-4218-81c2-eb0464c2d73f-default_0.jpg?ts=1663576361647" alt="Man"/>
</Link>
</Box>

<Box>
<Link to="/collection">
<Image src="https://static.zara.net/photos///contents/mkt/spots/aw22-north-collection/subhome-xmedia-39//w/1366/IMAGE-landscape-fill-8a1ce69a-a1f6-4b5c-b04a-c3ea44664c19-default_0.jpg?ts=1663794685596" alt="Man"/>
</Link>
</Box>

<Box>
<Link to="/shoes">
<Image src="https://static.zara.net/photos///contents/mkt/spots/aw22-north-woman-shoes-bags/subhome-xmedia-38//w/1366/IMAGE-landscape-default-fill-5c2d5cc1-7805-42c8-9238-635ec71551d3-default_0.jpg?ts=1663770211821" alt=""sandle/>
</Link>
</Box>

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


</>

)

}
export default File;