import { Button,Flex } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import { AuthContext } from "../context/AuthContextProvider"
import { useContext } from "react";

const links = [
  {
    to: "/tickets",
    label: "Home",
  },
  {
    to: "/contact",
    label: "Contact",
  },
  {
    to: "/about",
    label: "About",
  },
  // {
  //   to: "/tickets",
  //   label: "Tickets",
  // },
  // {
  //   to: "/ticket/create",
  //   // label: "CreateTicket",
  // },
  // {
  //   to: "/ticket/edit",
  //   // label: "TicketEdit",
  // },
  // {
  //   to: "/ticket/view",
  //   label: "TicketView",
  // },
  {
    to: "/login",
    label: "Login",
  },
  
];

export default function Navbar() {
  const { logout } = useContext(AuthContext)
  return (
    <Flex 
    align="center"
    justify="space-around"
    background='gray.200'
    p={4}
    >
      {links.map((link) => (
        <ChakraLink color='gray.900' textDecoration='none' as={ReactRouterLink} key={link.to} to={link.to} >
          {link.label}
        </ChakraLink>
      ))}
      <Button variant={"outline"} colorScheme="red" onClick={logout}>Logout</Button>
    </Flex>
  );
}