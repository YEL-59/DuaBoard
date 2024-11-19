const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Enable CORS
app.use(cors());

// Sample Data
const dropdownData = {
  items: [
    {
      id: 1,
      name: "Item 1",
      subItems: [
        { id: 101, name: "Subitem 1.1" },
        { id: 102, name: "Subitem 1.2" },
      ],
    },
    {
      id: 2,
      name: "Item 2",
      subItems: [
        { id: 201, name: "Subitem 2.1" },
        { id: 202, name: "Subitem 2.2" },
      ],
    },
    {
      id: 3,
      name: "Item 3",
      subItems: [
        { id: 301, name: "Subitem 3.1" },
        { id: 302, name: "Subitem 3.2" },
      ],
    },
  ],
};

// API Route
app.get('/api/dropdown', (req, res) => {
  res.json(dropdownData);
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
