import { useParams, useNavigate } from "react-router-dom";
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
  HStack,
} from "@chakra-ui/react";
import axios from "axios";
import { useState, useEffect } from "react";
import LoadingIndicator from "../component/LoadingIndicator";
import ErrorIndicator from "../component/ErrorIndicator";

export default function TicketEdit() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [ticket, setTicket] = useState([]);
  const navigate = useNavigate();

  async function fetchAndUpdate() {
    setLoading(true);
    try {
      let res = await axios({
        method: "get",
        url: `https://report-backend-1.onrender.com/tickets/${id}`,
      });
      // console.log("get");

      let data = res?.data;

      setLoading(false);

      setTicket(data || []);
    } catch (error) {
      setLoading(false);
      console.log(error);
      setError(true);
    }
  }

  async function deleteTicket() {
    try {
      console.log(id);
      const res = await axios.delete(`https://report-backend-1.onrender.com/tickets/${id}`);
      if (res.status === 200) {
        navigate("/tickets");
      }
      // console.log("Ticket deleted:", res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchAndUpdate(id);
  }, [id]);

  if (loading) {
    return <LoadingIndicator />;
  }
  if (error) {
    return <ErrorIndicator />;
  }
  const { title, description, assignee, status, priority } = ticket;
  return (
    <div>
      <Card border={"1px"} borderColor={"gray.800"}>
        <CardHeader>
          <Heading size="md">{title}</Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Description
              </Heading>
              <Text pt="2" fontSize="sm">
                {description}
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Assignee
              </Heading>
              <Text pt="2" fontSize="sm">
                {assignee}
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                status
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

        <CardFooter>
          <HStack spacing={4}>
            <Button
              variant="outline"
              colorScheme="red"
              onClick={() => {
                navigate(`/ticket/edit/${id}`);
              }}
            >
              Edit Ticket
            </Button>
            <Button
              variant="outline"
              colorScheme="red"
              onClick={() => deleteTicket()}
            >
              Delete Ticket
            </Button>
          </HStack>
        </CardFooter>
      </Card>
    </div>
  );
}
