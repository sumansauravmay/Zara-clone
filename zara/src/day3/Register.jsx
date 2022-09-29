import React from "react";
import Navbar from "../day2/Navbar";
import {Input,Box,Heading,Grid, GridItem,FormControl,RadioGroup,HStack,Radio,
Select,Stack,Checkbox} from "@chakra-ui/react";
import Footer from "../day2/Footer"

function Register(){
    return (
        <>
           <Navbar/>
           <br/>
           <br/>

<Heading m={"50"} ml={"-700"}>Personal details</Heading>



<FormControl as='fieldset' ml={"160"}>
  <RadioGroup defaultValue='Itachi'>
    <HStack spacing='24px'>
      <Radio value='Sasuke'>Personal</Radio>
      <Radio value='Nagato'>Company</Radio>
      
    </HStack>
  </RadioGroup>
 
</FormControl>



           <Box m={"50"} ml={"-580"}>
            <Input w="400px" type="text" placeholder="EMAIL"/>
            </Box>

            <Grid mt={"-10"} templateColumns='repeat(5, 1fr)' gap={2}>
  <GridItem colSpan={2} h="10" ml={"40"}>
  <Input w="400px" type="text" placeholder="PASSWORD"/>
  </GridItem> 
  <GridItem mt={"-12"} ml={"-20"} colStart={2} colEnd={6} h='10'>
  <Input w="400px" type="text" placeholder="SETPASSWORD"/>
  </GridItem>
</Grid>
          
          <Grid mt={"0"} templateColumns='repeat(5, 1fr)' gap={2}>
  <GridItem colSpan={2} h="10" ml={"40"}>
  <Input w="400px" type="text" placeholder="NAME"/>
  </GridItem> 
  <GridItem mt={"-12"} ml={"-20"} colStart={2} colEnd={6} h='10'>
  <Input w="400px" type="text" placeholder="PINCODE"/>
  </GridItem>
</Grid>

<Grid mt={"0"} templateColumns='repeat(5, 1fr)' gap={2}>
  <GridItem colSpan={2} h="10" ml={"40"}>
  <Input w="400px" type="text" placeholder="ADDRESS"/>
  </GridItem> 
  <GridItem mt={"-12"} ml={"-20"} colStart={2} colEnd={6} h='10'>
  <Input w="400px" type="text" placeholder="MORE INFO"/>
  </GridItem>
</Grid>

<Grid mt={"0"} templateColumns='repeat(5, 1fr)' gap={2}>
  <GridItem colSpan={2} h="10" ml={"40"}>
  <Input w="400px" type="text" placeholder="LOCALITY"/>
  </GridItem> 
  <GridItem mt={"-12"} ml={"-20"} colStart={2} colEnd={6} h='10'>
  <Input w="400px" type="text" placeholder="CITY"/>
  </GridItem>
</Grid>

<Select ml="160px" w="400px" placeholder='Select State'>
  <option value='option1'>Utter Predesh</option>
  <option value='option2'>Delhi</option>
  <option value='option3'>Jammu Kashmir</option>
  <option value='option1'>Himachal Pradesh</option>
  <option value='option2'>Uttrakhand</option>
  <option value='option3'>Haryana</option>
  <option value='option1'>Punjab</option>
  <option value='option2'>Rajasthan</option>
  <option value='option3'>Gujrat</option>
  <option value='option1'>Maharastra</option>
  <option value='option2'>Goa</option>
  <option value='option3'>Karnataka</option>
  <option value='option1'>Kerala</option>
  <option value='option2'>Tamilnadu</option>
  <option value='option3'>Telangana</option>
  <option value='option1'>Andhra Pradesh</option>
  <option value='option2'>Odisha</option>
  <option value='option3'>West Bengal</option>
  <option value='option1'>Jharkhand</option>
  <option value='option2'>Bihar</option>
  <option value='option3'>Madhya Pradesh</option>
  <option value='option1'>Chhatishgadh</option>
  <option value='option2'>Assam</option>
  <option value='option3'>Arunanchal Pradesh</option>
  <option value='option1'>Manipur</option>
  <option value='option2'>Mizorum</option>
  <option value='option3'>Tripura</option>
  <option value='option1'>Nagaland</option>
  <option value='option2'>Sikkim</option>
  <option value='option3'>Meghalaya</option>
  <option value='option1'>Andaman Nikobar</option>
  <option value='option2'>Lakshyadwip</option>
  
  
</Select>

<Box>
<Input ml="-630px" mt="10px" w="400px" type="number" placeholder="phone number"/>
</Box>
<Stack ml="160px" mt="5px" direction={"column"}>
<Checkbox isInvalid>
I wish to receive Zara news on my e-mail
</Checkbox>
<Checkbox isInvalid>
I accept the privacy statement
</Checkbox>
</Stack>

<Box>
    <Input ml="-630px" mt="50px" w="400px" bg="green.400" type="submit" value="sign up"/>
</Box>




<Footer/>
        </>
    )
}

export default Register;