const express = require('express')
const app = express()
const productRoutes = require('./routes/products');
const { default: mongoose } = require('mongoose');



app.use(express.json())

app.use('/products',productRoutes)



app.get('/', (req, res) => {
  res.send('Server is running 🚀')
})

// const PORT = 5000
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`)
// })






// mongoose.connect('mongodb+srv://karanmongodb_db_user:85ymL1cJV0LVt8yP@cluster0.wd78byw.mongodb.net/karanmongodb_db_user?retryWrites=true&w=majority', {
mongoose.connect('mongodb+srv://karanmongodb_db_user:85ymL1cJV0LVt8yP@cluster0.wd78byw.mongodb.net/?appName=Cluster0')
.then(() => {
  console.log('MongoDB connected successfully!');
})
.catch((err) => {
  console.error('MongoDB connection error:', err);
});

// mongoose.connect('mongodb+srv://karanmongodb_db_user:85ymL1cJV0LVt8yP@cluster0.wd78byw.mongodb.net/?appName=Cluster0')

const PORT = 5000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})