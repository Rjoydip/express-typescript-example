import app from './App'

const port = 3000

app.listen(port, (err) => {
  if (err) {
    return console.log(err)
  }

  return console.log(`Server is listening on ${port}`)
});