const express = require('express');
const router = express.Router();

// Manejo de la ruta para la vista de productos en tiempo real
router.get('/realtimeproducts', (req, res) => {
    res.render('realTimeProducts', {
        productos: ['Producto 1', 'Producto 2', 'Producto 3']
    });
});

// Manejo de la ruta raíz
router.get('/', (req, res) => {
    res.render('home', {
        productos: ['Producto 1', 'Producto 2', 'Producto 3']
    });
});

module.exports = router;
