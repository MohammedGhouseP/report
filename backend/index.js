const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);
server.listen(port);

// the above code is for the json-server

// the below code is for the express server

// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const fs = require('fs');
// const app = express();
// const port = process.env.PORT || 3000;

// app.use(bodyParser.json());
// app.use(cors());

// let tickets = [];

// // Load initial data from a JSON file (if you have one)
// const loadTickets = () => {
//   try {
//     const dataBuffer = fs.readFileSync('tickets.json');
//     tickets = JSON.parse(dataBuffer.toString());
//   } catch (e) {
//     console.log('No initial data found.');
//   }
// };

// loadTickets();

// // Save data to a JSON file
// const saveTickets = () => {
//   fs.writeFileSync('tickets.json', JSON.stringify(tickets));
// };

// // Get all tickets
// app.get('/tickets', (req, res) => {
//   res.send(tickets);
// });

// // Create a new ticket
// app.post('/tickets', (req, res) => {
//   const newTicket = {
//     id: tickets.length + 1,
//     ...req.body
//   };
//   tickets.push(newTicket);
//   saveTickets();
//   res.status(201).send(newTicket);
// });

// // Update a ticket
// app.put('/tickets/:id', (req, res) => {
//   const ticketId = parseInt(req.params.id);
//   const ticketIndex = tickets.findIndex(ticket => ticket.id === ticketId);

//   if (ticketIndex !== -1) {
//     tickets[ticketIndex] = { id: ticketId, ...req.body };
//     saveTickets();
//     res.send(tickets[ticketIndex]);
//   } else {
//     res.status(404).send({ error: 'Ticket not found' });
//   }
// });

// // Delete a ticket
// app.delete('/tickets/:id', (req, res) => {
//   const ticketId = parseInt(req.params.id);
//   const ticketIndex = tickets.findIndex(ticket => ticket.id === ticketId);

//   if (ticketIndex !== -1) {
//     const deletedTicket = tickets.splice(ticketIndex, 1);
//     saveTickets();
//     res.send(deletedTicket[0]);
//   } else {
//     res.status(404).send({ error: 'Ticket not found' });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });
