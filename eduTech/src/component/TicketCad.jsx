import {
    Box,
    Button,  
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Heading,
    Stack,
    StackDivider,
    Text,
  } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function TicketCard({ id, title, status, priority }) {
    const navigate = useNavigate();

  return (
    <Card border={"1px"} borderColor={"gray.800"} >
      <CardHeader>
        <Heading size="md">{title}</Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Status
            </Heading>
            <Text pt="2" fontSize="sm">
              {status}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Priority
            </Heading>
            <Text pt="2" fontSize="sm">
              {priority}
            </Text>
          </Box>
        </Stack>
      </CardBody>

      <CardFooter >
        <Button variant='outline' colorScheme="red" onClick={() => navigate(`/ticket/view/${id}`)}> View Ticket</Button>
      </CardFooter>
    </Card>
  );
}