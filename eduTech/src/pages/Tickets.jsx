import {
  Button,
  Flex,
  Container,
  SimpleGrid,
  Select,
  HStack
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import axios from "axios";
import LoadingIndicator from "../component/LoadingIndicator";
import ErrorIndicator from "../component/ErrorIndicator";
import TicketCard from "../component/TicketCad";
import { useNavigate } from "react-router-dom";

export default function Tickets() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [tickets, setTickets] = useState([]);
  const [sortOrderValue, setSortOrderValue] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const navigate = useNavigate();

  async function fetchAndUpdate(sortOrderValue, filterValue) {
    setLoading(true);

    try {
      let queryParams = {};

      if (filterValue) {
        // console.log("filter value - " + filterValue);
        queryParams._status = filterValue;
      }

      if (sortOrderValue) {
        // console.log("sort order value - " + sortOrderValue);
        queryParams._sort = "priority";
        queryParams._order = sortOrderValue;
      }

      let res = await axios({
        method: "get",
        url: `http://localhost:3000/tickets`,
        params: queryParams,
      });

      let data = res?.data;
      // console.log("Data - ", data);
      let filteredData = [...data];
      if (filterValue) {
        filteredData = data.filter((ticket) => {
          return ticket.status.trim() == filterValue;
        });
      }

      let sortedData;
      // console.log("Filtered data:", filteredData);

      // Sort the filtered data by priority
      if (filteredData) {
        if (sortOrderValue === "desc") {
          sortedData = filteredData.sort((a, b) => b.priority - a.priority);
        } else {
          sortedData = filteredData.sort((a, b) => a.priority - b.priority);
        }
      }

      setTickets(sortedData);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
      setError(true);
    }
  }
  useEffect(() => {
    fetchAndUpdate(sortOrderValue, filterValue);
  }, [sortOrderValue, filterValue]);

  // console.log("Filtered value  - " + filterValue);
  // console.log("Sort order value  - " + sortOrderValue);

  if (loading) {
    return <LoadingIndicator />;
  }
  if (error) {
    return <ErrorIndicator />;
  }

  return (
    <div>
      <Container maxW={Container.xl}>
        <Flex direction={"row-reverse"}>
          <Button
            variant={"outline"}
            colorScheme={"red"}
            onClick={() => navigate("/ticket/create")}
            marginY={8}
          >
            Create Tickets
          </Button>
        </Flex>

        <HStack spacing={4} marginY={4}>
          <Select
            placeholder="Sorting by priority"
            value={sortOrderValue}
            onChange={(e) => setSortOrderValue(e.target.value)}
          >
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </Select>
          <Select
            placeholder="Filter by status"
            value={filterValue}
            onChange={(e) => {
              setFilterValue(e.target.value);
            }}
          >
            <option value="progress">Progress</option>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </Select>
        </HStack>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={2}>
          {tickets?.map((ticket) => (
            <TicketCard key={ticket.id} {...ticket} />
          ))}
          
        </SimpleGrid>
      </Container>
    </div>
  );
}
