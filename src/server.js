const app = require('./app');  // jangan ./src/app karena sudah di src

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
