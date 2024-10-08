<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body>
    <h1>MERN E-Commerce Project</h1>

   <h2>Description</h2>
    <p>This is a simple e-commerce application built using the MERN stack (MongoDB, Express, React, Node.js). The application allows users to perform CRUD (Create, Read, Update, Delete) operations on products.</p>

   <h2>Features</h2>
    <ul>
        <li><strong>Create Product:</strong> Users can add new products on the create page.</li>
        <li><strong>Read Products:</strong> View the list of available products on the home page.</li>
        <li><strong>Update Product:</strong> Edit details of existing products directly from the product cards.</li>
        <li><strong>Delete Product:</strong> Remove products from the database using the delete button on product cards.</li>
        <li><strong>Page Not Found:</strong> A dedicated page for handling unknown routes.</li>
        <li><strong>Light and Dark Mode:</strong> Users can switch between light and dark themes for better accessibility.</li>
    </ul>

  <h2>Tech Stack</h2>
    <h3>Frontend:</h3>
    <ul>
        <li>React.js</li>
        <li>Chakra UI</li>
        <li>Zustand (for state management)</li>
    </ul>
    <h3>Backend:</h3>
    <ul>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>MongoDB (for the database)</li>
    </ul>

  <h2>Installation</h2>

   <h3>Prerequisites</h3>
    <ul>
        <li>Node.js</li>
        <li>MongoDB</li>
    </ul>

  <h3>Setup</h3>
    <ol>
        <li>Clone the repository:
            <pre><code>git clone https://github.com/Shahzar-Ali/Mern-mini-store.git
cd Mern-mini-store</code></pre>
        </li>
        <li>Install all dependencies and build the application:
            <pre><code>npm run build</code></pre>
        </li>
        <li>Set up environment variables:
            <p>Create a <code>.env</code> file in the root directory (next to the <code>backend</code> and <code>frontend</code> folders) and add the following:</p>
            <pre><code>MONGO_URI=&lt;your_mongodb_connection_string&gt;
PORT=5000</code></pre>
        </li>
        <li>Start the backend server:
            <pre><code>npm start</code></pre>
        </li>
    </ol>

   <h2>Usage</h2>
    <ul>
        <li>Access the application in your browser at <code>http://localhost:5000</code>.</li>
        <li>Use the home page to view products.</li>
        <li>Navigate to the create page to add new products.</li>
        <li>Handle unknown routes with the page not found feature.</li>
    </ul>

  <h2>Contributing</h2>
    <p>Contributions are welcome! Please open an issue or submit a pull request.</p>

  <h2>License</h2>
    <p>This project is licensed under the MIT License.</p>

  <h2>Acknowledgments</h2>
    <ul>
        <li><a href="https://reactjs.org/">React</a></li>
        <li><a href="https://nodejs.org/">Node.js</a></li>
        <li><a href="https://expressjs.com/">Express</a></li>
        <li><a href="https://www.mongodb.com/">MongoDB</a></li>
        <li><a href="https://chakra-ui.com/">Chakra UI</a></li>
        <li><a href="https://github.com/pmndrs/zustand">Zustand</a></li>
    </ul>
</body>
</html>
