const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('🚀 Full GitOps pipeline successful — from main to ArgoCD!');
});

app.listen(8080, () => {
  console.log('Server running on port 8080');
});
