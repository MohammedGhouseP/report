import { Box, Heading, Button, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();
  const toast = useToast();
  const handleClick = () => {
    toast({
      title: "Now explore ticket page.",
      description: "You are in ticket page yayyy.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    navigate("/tickets");
  };
  return (
    <div>
      <Box>
        <Heading as="h1" size="xl">
          Home page
        </Heading>
        <Button colorScheme="gray" variant="outline" onClick={handleClick}>
          Click to go ticket page and explore it!!!
        </Button>
      </Box>
    </div>
  );
}