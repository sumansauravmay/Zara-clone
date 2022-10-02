import React from "react";
import Navbar from "../day2/Navbar";
import {Grid,GridItem,Input,Heading,Tag,Box
} from "@chakra-ui/react";
import Footer from "../day2/Footer";
import axios from "axios";
import {Navigate,Link} from "react-router-dom";




function Login(){
   const [email,setEmail]=React.useState("");
   const [password,setPassword]=React.useState("");
  const [status,setStatus]=React.useState(false);
 
   const getData={
    email:email,
    password:password
   }


const handleLogin=()=>{
    return axios({
        method:"GET",
          // url:"https://infinite-brushlands-51927.herokuapp.com/api/login",
        //  url:"https://reqres.in/api/login",
        url:"https://infinite-brushlands-51927.herokuapp.com/api/Register",
        data:getData
    }).then((res)=>{
     checkcredentials(res.data)

})
// setToken(Date.now())
// alert("Login successfull")
    // })
    // .catch(()=>{
    //     setStatus(false)
    //     console.log("something went wrong")
    // })
}
const checkcredentials=(data)=>{
  let filtered=data.filter((el)=>{
    return el.email===email && el.password===password
  })
  return finalcheck(filtered)
}
 
const finalcheck=(filtered)=>{
  if(filtered.length>0){
  alert("login successfull")
 setStatus(true)
   } else{
  alert("login failed")
   }
}
if(status===true)
   {
    return <Navigate to="/"/>
   }


    return (
       <>
<Navbar/>
<br/>
<br/>

<Grid pos="absolute" templateColumns='repeat(5, 1fr)' gap={10} m={"10"}>

  <GridItem colSpan={2} h='10'>
  <Heading>LOG IN</Heading>
    <Input m={5} type="text" 
    onChange={(e)=>setEmail(e.target.value)}
     placeholder="E-MAIL" value={email}/>

    <Input m={5} type="Password" 
     onChange={(e)=>setPassword(e.target.value)}
    placeholder="PASSWORD" value={password}/>

    <Tag ml="-150px" bg="transparent">HAVE YOU FORGOTTEN YOUR PASSWORD?</Tag>

    <Input onClick={handleLogin} m={5} bg="black" color={"white"} 
    type="submit" value="Log in"/>




  </GridItem>
  <GridItem colStart={3} colEnd={6} h='10' w="400px">
<Heading>REGISTER</Heading>
<Tag bg="transparent" m={5}>If you still don't have a Zara.com account, use this option to access the registration form.</Tag>
<Tag bg="transparent" ml="25px">By giving us your details, purchasing in Zara.com will be faster and an enjoyable experience.</Tag>
<Link to="/register">
<Input w="300px" mt={100} bg="black" color={"white"} type="submit" value="REGISTER"/>
</Link>

  </GridItem>
</Grid>
   
<Box mt="250px">
<Footer/>
</Box>
   

        </>
    )
}
export default Login;