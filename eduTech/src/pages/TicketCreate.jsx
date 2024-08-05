import { useState } from "react";
import {
  Container,
  Input,
  Textarea,
  VStack,
  Select,
  Button,
  useToast
} from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function TicketCreate() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assignee, setAssignee] = useState("");
  const [status, setStatus] = useState("");
  const [priority, setPriority] = useState("");
  // const [nextId, setNextId] = useState("");
  const navigate = useNavigate();
  const toast = useToast();
 

  async function handleCreateTicket() {

    try {
      // Fetch existing tickets to determine the next ID
      const response = await axios.get("http://localhost:3000/tickets");
      const tickets = response.data;
      const nextId = tickets.length ? Math.max(...tickets.map(ticket => ticket.id)) + 1 : 1;

      const newTicket = {
        id: nextId.toString(),
        title: title,
        description: description,
        assignee: assignee,
        status: status,
        priority: priority,
      };


      const res = await axios({
        method: "post",
        url: "http://localhost:3000/tickets",
        data: newTicket,
      });
     

      if (res.status === 201) {
        navigate("/tickets");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <VStack spacing={8} my={4}>
        <Input
          border={"1px"}
          borderColor={"gray.800"}
          placeholder="Enter Title"
          size="lg"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></Input>
        <Textarea
          border={"1px"}
          borderColor={"gray.800"}
          placeholder="Enter Description"
          size="lg"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />

        <Select
          placeholder="Assignee"
          value={assignee}
          onChange={(e) => setAssignee(e.target.value)}
        >
          <option value="Amit">Amit</option>
          <option value="Riya">Riya</option>
          <option value="Rahul">Rahul</option>
          <option value="Neha">Neha</option>
        </Select>

        <Select
          placeholder="Status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="pending">Pending</option>
          <option value="progress">Progress</option>
          <option value="completed">Completed!!!</option>
        </Select>

        <Select
          placeholder="Priority"
          value={priority}
          onChange={(e) => {
            setPriority(Number(e.target.value));
          }}
        >
          <option value={0}>0</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
        </Select>
        <Button
          variant="outline"
          colorScheme="red"
          onClick={handleCreateTicket}
        >
          Submit
        </Button>
      </VStack>
    </Container>
  );
}
