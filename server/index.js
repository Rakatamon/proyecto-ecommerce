const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const DATA_FILE = path.join(__dirname, 'products.json');

app.use(cors());
app.use(bodyParser.json());

// Helper to read data
const readData = () => {
    if (!fs.existsSync(DATA_FILE)) {
        return [];
    }
    const data = fs.readFileSync(DATA_FILE, 'utf-8');
    return JSON.parse(data || '[]');
};

// Helper to write data
const writeData = (data) => {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
};

// Get all products
app.get('/api/products', (req, res) => {
    const products = readData();
    res.json(products);
});

// Get product by ID
app.get('/api/products/:id', (req, res) => {
    const products = readData();
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
});

// Create product (Admin)
app.post('/api/products', (req, res) => {
    const products = readData();
    const newProduct = {
        id: Date.now(),
        ...req.body
    };
    products.push(newProduct);
    writeData(products);
    res.status(201).json(newProduct);
});

// Update product (Admin)
app.put('/api/products/:id', (req, res) => {
    const products = readData();
    const index = products.findIndex(p => p.id === parseInt(req.params.id));
    if (index !== -1) {
        products[index] = { ...products[index], ...req.body };
        writeData(products);
        res.json(products[index]);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
});

// Delete product (Admin)
app.delete('/api/products/:id', (req, res) => {
    let products = readData();
    const initialLength = products.length;
    products = products.filter(p => p.id !== parseInt(req.params.id));
    if (products.length < initialLength) {
        writeData(products);
        res.json({ message: 'Product deleted' });
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
});

// Simple Login (Hardcoded for demo)
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    // Hardcoded admin
    if (username === 'admin' && password === 'admin123') {
        res.json({ success: true, token: 'fake-jwt-token' });
    } else {
        res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
});
