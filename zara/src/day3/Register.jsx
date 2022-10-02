import React from "react";
import Navbar from "../day2/Navbar";
import {Input,Box,Heading,Grid, GridItem,FormControl,RadioGroup,HStack,Radio,
Select,Stack,Checkbox} from "@chakra-ui/react";
import Footer from "../day2/Footer";
import {Navigate} from "react-router-dom";
import axios from "axios";

function Register(){
  const [email,setEmail]=React.useState("");
  const [password,setPassword]=React.useState("");
  const [name,setName]=React.useState("")
  const [pincode,setPincode]=React.useState("")
  const [address,setAddress]=React.useState("")
  const [locality,setLocality]=React.useState("")
  const [state,setState]=React.useState("")
  const [phoneNumber,setphoneNumber]=React.useState("")
 const [status,setStatus]=React.useState(false);
 const [token,setToken]=React.useState("")

  const getData={
    name:name,
   email:email,
   password:password,
   pincode:pincode,
   address:address,
   locality:locality,
  state:state,
  phoneNumber:phoneNumber,
  
  }


  const handleRegister=()=>{
    return axios({
        method:"POST",
          // url:"https://infinite-brushlands-51927.herokuapp.com/api/login",
          url:"https://infinite-brushlands-51927.herokuapp.com/api/Register",
        data:getData
    }).then((res)=>{
console.log(res)
setToken(Date.now())
alert("Sign up successfull")
setStatus(true)
    })
    .catch((err)=>{
        setStatus(false)
        console.log(err)
        console.log("something went wrong")
    })
}

if(status===true)
   {
   return <Navigate to="/login"/>
   }




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
            <Input w="400px" type="text" placeholder="EMAIL" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </Box>

            <Grid mt={"-10"} templateColumns='repeat(5, 1fr)' gap={2}>
  <GridItem colSpan={2} h="10" ml={"40"}>
  <Input w="400px" type="text" placeholder="PASSWORD" value={password} onChange={(e)=>setPassword(e.target.value)}/>
  </GridItem> 
  <GridItem mt={"-12"} ml={"-20"} colStart={2} colEnd={6} h='10'>
  <Input w="400px" type="password" placeholder="SETPASSWORD" value={password} onChange={(e)=>setPassword(e.target.value)}/>
  </GridItem>
</Grid>
          
          <Grid mt={"0"} templateColumns='repeat(5, 1fr)' gap={2}>
  <GridItem colSpan={2} h="10" ml={"40"}>
  <Input w="400px" type="text" placeholder="NAME" value={name} onChange={(e)=>setName(e.target.value)}/>
  </GridItem> 
  <GridItem mt={"-12"} ml={"-20"} colStart={2} colEnd={6} h='10'>
  <Input w="400px" type="text" placeholder="PINCODE" value={pincode} onChange={(e)=>setPincode(e.target.value)}/>
  </GridItem>
</Grid>

<Grid mt={"0"} templateColumns='repeat(5, 1fr)' gap={2}>
  <GridItem colSpan={2} h="10" ml={"40"}>
  <Input w="400px" type="text" placeholder="ADDRESS" value={address} onChange={(e)=>setAddress(e.target.value)}/>
  </GridItem> 
  <GridItem mt={"-12"} ml={"-20"} colStart={2} colEnd={6} h='10'>
  <Input w="400px" type="text" placeholder="MORE INFO"/>
  </GridItem>
</Grid>

<Grid mt={"0"} templateColumns='repeat(5, 1fr)' gap={2}>
  <GridItem colSpan={2} h="10" ml={"40"}>
  <Input w="400px" type="text" placeholder="LOCALITY" value={locality} onChange={(e)=>setLocality(e.target.value)}/>
  </GridItem> 
  <GridItem mt={"-12"} ml={"-20"} colStart={2} colEnd={6} h='10'>
  <Input w="400px" type="text" placeholder="CITY"/>
  </GridItem>
</Grid>

<Select ml="160px" w="400px" placeholder='Select State' value={state} onChange={(e)=>setState(e.target.value)}>
  <option value='Utter Predesh'>Utter Predesh</option>
  <option value='Delhi'>Delhi</option>
  <option value='Jammu Kashmir'>Jammu Kashmir</option>
  <option value='Himachal Pradesh'>Himachal Pradesh</option>
  <option value='Uttrakhand'>Uttrakhand</option>
  <option value='Haryana'>Haryana</option>
  <option value='Punjab'>Punjab</option>
  <option value='Rajasthan'>Rajasthan</option>
  <option value='Gujrat'>Gujrat</option>
  <option value='Maharastra'>Maharastra</option>
  <option value='Goa'>Goa</option>
  <option value='Karnataka'>Karnataka</option>
  <option value='Kerala'>Kerala</option>
  <option value='Tamilnadu'>Tamilnadu</option>
  <option value='Telangana'>Telangana</option>
  <option value='Andhra Pradesh'>Andhra Pradesh</option>
  <option value='Odisha'>Odisha</option>
  <option value='West Bengal'>West Bengal</option>
  <option value='Jharkhand'>Jharkhand</option>
  <option value='Bihar'>Bihar</option>
  <option value='Madhya Pradesh'>Madhya Pradesh</option>
  <option value='Chhatishgadh'>Chhatishgadh</option>
  <option value='Assam'>Assam</option>
  <option value='Arunanchal Pradesh'>Arunanchal Pradesh</option>
  <option value='Manipur'>Manipur</option>
  <option value='Mizorum'>Mizorum</option>
  <option value='Tripura'>Tripura</option>
  <option value='Nagaland'>Nagaland</option>
  <option value='Sikkim'>Sikkim</option>
  <option value='Meghalaya'>Meghalaya</option>
  <option value='Andaman Nikobar'>Andaman Nikobar</option>
  <option value='Lakshyadwip'>Lakshyadwip</option>
  
  
</Select>

<Box>
<Input ml="-630px" mt="10px" w="400px" type="number" placeholder="phone number" value={phoneNumber} 
onChange={(e)=>setphoneNumber(e.target.value)}/>
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
    <Input ml="-630px" mt="50px" w="400px" bg="green.400" type="submit" value="sign up" onClick={handleRegister}/>
</Box>




<Footer/>
        </>
    )
}

export default Register;