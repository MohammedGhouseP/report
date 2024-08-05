import React from 'react';
import { Box, Container, Heading, Text, Stack, HStack, VStack, IconButton, Icon } from '@chakra-ui/react';
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
  return (
    <Container maxW="container.md" py={10}>
      <Box bg="gray.100" p={6} rounded="md" shadow="md">
        <Heading as="h1" size="xl" mb={4} textAlign="center">
          Contact Us
        </Heading>
        <Text fontSize="lg" mb={6} textAlign="center">
          We would love to hear from you! Whether you have a question about our services, need assistance, or just want to give feedback, feel free to reach out to us through any of the methods below.
        </Text>
        <VStack spacing={5}>
          <HStack spacing={3}>
            <IconButton
              icon={<FaEnvelope />}
              isRound={true}
              size="lg"
              bg="blue.500"
              color="white"
              _hover={{ bg: "blue.600" }}
            />
            <Text fontSize="lg">basha@report.com</Text>
          </HStack>
          <HStack spacing={3}>
            <IconButton
              icon={<FaPhone />}
              isRound={true}
              size="lg"
              bg="green.500"
              color="white"
              _hover={{ bg: "green.600" }}
            />
            <Text fontSize="lg">818-781-2548</Text>
          </HStack>
        </VStack>
      </Box>
    </Container>
  );
};

export default Contact;
