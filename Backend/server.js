const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Enable CORS
app.use(cors());

// Sample Data
const dropdownData = 
  [
    {
      "mainTitle": "Dua's Importancs",
      "items": [
        {
          "id": 1,
          "name": "The servant is dependent on his Lord ",
          "subItems": [
            {
              "id": 101,
              "name": "The servant is dependent on his Lord #1",
              "subItemsDetails": [{
                "id": 1011,
                "subItemsTitle": "1. The servant is dependent on his Lord #1",
                "subItemsDetails": "All human beings depend on Allah for their welfare and prevention of evil in various matters of their religion and world. Allah says (interpretation of the meaning): O mankind, you are those in need of Allah, while Allah is the Free of need, the Praiseworthy.",
                "subItemsReference":"Surah Al-Fatir 35:15"

              }
                
              ]
              
            },
            { "id": 102, "name": "The servant is dependent on his Lord #2" },
            { "id": 103, "name": "The reward of freeing of a slave" },
          ]
        },
        {
          "id": 2,
          "name": " The most important thing to ask Allah for",
          "subItems": [
            { "id": 201, "name": " Allah's guidance #1" },
            { "id": 202, "name": " Allah's guidance #2" },
            { "id": 203, "name": " Allah's guidance #3" },

          ]
        },
        {
          "id": 3,
          "name": "Ask for paradise & protection from fire",
          "subItems": [
            { "id": 301, "name": "Ask for paradise & seek refuge from fire" },
            { "id": 302, "name": "Seeking good of this world and the hereafter" }
          ]
        }
      ]
    },
    {
      "mainTitle": "Main Title 2",
      "items": [
        {
          "id": 1,
          "name": "Item 1",
          "subItems": [
            { "id": 101, "name": "Subitem 1.1" },
            { "id": 102, "name": "Subitem 1.2" }
          ]
        },
        {
          "id": 2,
          "name": "Item 2",
          "subItems": [
            { "id": 201, "name": "Subitem 2.1" },
            { "id": 202, "name": "Subitem 2.2" }
          ]
        },
        {
          "id": 3,
          "name": "Item 3",
          "subItems": [
            { "id": 301, "name": "Subitem 3.1" },
            { "id": 302, "name": "Subitem 3.2" }
          ]
        }
      ]
    },
    {
      "mainTitle": "Main Title 3",
      "items": [
        {
          "id": 1,
          "name": "Item 1",
          "subItems": [
            { "id": 101, "name": "Subitem 1.1" },
            { "id": 102, "name": "Subitem 1.2" }
          ]
        },
        {
          "id": 2,
          "name": "Item 2",
          "subItems": [
            { "id": 201, "name": "Subitem 2.1" },
            { "id": 202, "name": "Subitem 2.2" }
          ]
        },
        {
          "id": 3,
          "name": "Item 3",
          "subItems": [
            { "id": 301, "name": "Subitem 3.1" },
            { "id": 302, "name": "Subitem 3.2" }
          ]
        }
      ]
    }
  ]
  


// API Route
app.get('/api/dropdown', (req, res) => {
  res.json(dropdownData);
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
