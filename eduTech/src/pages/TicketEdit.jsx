import {
  Button,
  Container,
  Select,
  VStack,
  Input,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import LoadingIndicator from "../component/LoadingIndicator";
import ErrorIndicator from "../component/ErrorIndicator";

export default function TicketEdit() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [ticket, setTicket] = useState({});
  const navigate = useNavigate();
  const toast = useToast(); // Correctly initialize the toast

  async function fetchAndUpdate() {
    setLoading(true);
    try {
      let res = await axios.get(`https://report-backend-1.onrender.com/tickets/${id}`);
      let data = res?.data;

      setLoading(false);
      setTicket(data || []);
    } catch (error) {
      setLoading(false);
      console.log(error);
      setError(true);
    }
  }

  async function editTicket() {
    try {
      let updatedTicket = {
        title: ticket.title,
        description: ticket.description,
        assignee: ticket.assignee,
        status: ticket.status,
        priority: ticket.priority,
      };

      let res = await axios.put(
        `https://report-backend-1.onrender.com/tickets/${id}`,
        updatedTicket
      );

      if (res.status === 200) {
        toast({
          title: "Successfully edited.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        navigate("/tickets");
      }
    } catch (error) {
      console.error(error);
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
    <Container>
      <VStack spacing={8} my={4}>
        <Input
          border={"1px"}
          borderColor={"gray.800"}
          placeholder="Enter Title"
          size="lg"
          value={title}
          onChange={(e) => setTicket({ ...ticket, title: e.target.value })}
        />
        <Textarea
          border={"1px"}
          borderColor={"gray.800"}
          placeholder="Enter Description"
          size="lg"
          value={description}
          onChange={(e) =>
            setTicket({ ...ticket, description: e.target.value })
          }
        />
        <Select
          placeholder="Assignee"
          value={assignee}
          onChange={(e) => setTicket({ ...ticket, assignee: e.target.value })}
        >
          <option value="Amit">Amit</option>
          <option value="Riya">Riya</option>
          <option value="Rahul">Rahul</option>
          <option value="Neha">Neha</option>
        </Select>
        <Select
          placeholder="Status"
          value={status}
          onChange={(e) => setTicket({ ...ticket, status: e.target.value })}
        >
          <option value="pending">Pending</option>
          <option value="progress">Progress</option>
          <option value="completed">Completed!!!</option>
        </Select>
        <Select
          placeholder="Priority"
          value={priority}
          onChange={(e) =>
            setTicket({ ...ticket, priority: Number(e.target.value) })
          }
        >
          {Array.from({ length: 10 }, (_, i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </Select>
        <Button variant="outline" colorScheme="red" onClick={editTicket}>
          Edit ticket
        </Button>
      </VStack>
    </Container>
  );
}
