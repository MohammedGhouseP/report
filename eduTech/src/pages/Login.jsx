import {
  Heading,
  useToast,
  Input,
  Button,
  VStack,
  Container,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useState, React, useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContextProvider";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const {
    login,
    authDetail: { isLoggedIn },
  } = useContext(AuthContext); //destructing the authDeail and login from context
  const handleClick = () => setShow(!show);
  // const navigate = useNavigate();
  const toast = useToast();

  //fetching data
  async function handleSubmit() {
    try {
      let resp = await axios({
        method: "post",
        url: "https://reqres.in/api/login",
        data: {
          email,
          password,
        },
      });

      login(resp?.data?.token);
    } catch (error) {
      console.log(error);
    }


    if (isLoggedIn) {
  
      toast({
        title: "Welcome!!!",
        description: "Now Explore The Home page.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      // console.log(isLoggedIn, "is logged in");
      return <Navigate to="/tickets" />;
    }
  }

  return (
    <div>
      <Container maxW="500px">
        <VStack spacing={6}>
          <Heading as="h1" size="xl">
            Login page
          </Heading>
          <Input
            placeholder="Email"
            size="md"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>

          <Button variant="outline" colorScheme="blue" onClick={handleSubmit}>
            LOGIN
          </Button>
          <Heading size="md">
            Please LogIn with this username and password
          </Heading>
          <Heading size="sm">
            UserName : eve.holt@reqres.in <br />
            Password : cityslicka
          </Heading>
        </VStack>
      </Container>
    </div>
  );
}
