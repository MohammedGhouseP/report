import React from 'react';
import { Box, Heading, Text, List, ListItem, ListIcon, Container } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

const About = () => {
  return (
    <Container maxW="container.md" py={10}>
      <Box bg="gray.100" p={6} rounded="md" shadow="md">
        <Heading as="h1" size="xl" mb={4} textAlign="center">
          About Our Complaint-Raising Web Application
        </Heading>
        <Text fontSize="lg" mb={6}>
          Welcome to our Complaint-Raising Web Application, designed to streamline and enhance your experience in addressing and resolving issues. Our platform offers a comprehensive set of features to ensure that your complaints are handled efficiently and effectively. Here’s what you can expect:
        </Text>
        <Heading as="h2" size="lg" mb={4}>
          Key Features
        </Heading>
        <List spacing={3} mb={6}>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            <strong>Raise a Ticket:</strong> Easily initiate a complaint by raising a ticket. This feature allows you to formally record your issue in our system for further action.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            <strong>Submit a Query:</strong> Provide detailed information about your issue by writing a query. This helps our team understand the problem better and offer precise solutions.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            <strong>Request Developer Assistance:</strong> If you need specialized assistance, you can request help from a specific developer. This ensures that an expert best suited to handle your problem is on the case.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            <strong>Set Priority Levels:</strong> Assign a priority level to your complaint, helping us recognize and address urgent issues promptly. This ensures that critical problems are given the attention they need without delay.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            <strong>Edit and Manage Tickets:</strong> If there are updates or changes to your complaint, you can easily edit the ticket to provide new information or correct existing details. In case a complaint is resolved or no longer relevant, you have the option to delete the ticket, keeping your dashboard organized and clutter-free.
          </ListItem>
        </List>
        <Heading as="h2" size="lg" mb={4}>
          Why Choose Our Application?
        </Heading>
        <Text fontSize="lg">
          Our web application is designed with user convenience in mind. We prioritize a user-friendly interface, ensuring that every step, from raising a ticket to resolving your issue, is straightforward and efficient. With the ability to interact with our developers directly and prioritize your problems, we ensure a personalized and responsive support experience.
        </Text>
        <Text fontSize="lg" mt={6}>
          Thank you for choosing our Complaint-Raising Web Application. We are dedicated to providing you with the best support and look forward to assisting you with any issues you may encounter.
        </Text>
      </Box>
    </Container>
  );
};

export default About;
