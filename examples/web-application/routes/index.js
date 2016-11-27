const express = require('express');

const router = express.Router();

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log(`[LOG:${Date.now()}]: ${req.originalUrl}`);
  
  next();
});

router.get('/about', (req, res) => {
  res.send('2.0.0');
});

router.get('/users/:userId', (req, res) => {
  res.send(req.params);
});

module.exports = router;