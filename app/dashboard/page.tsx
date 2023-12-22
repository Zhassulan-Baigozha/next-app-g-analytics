import { pagesList } from '../constants/links'

export default async function Dashboard() {
  const asd = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
  return (
    <main style={{
      textAlign: "center",
      marginTop: "50px"
    }}>
      <p style={{ marginBottom: "20px" }}>
        Dashboard page 
      </p>
      <a href={pagesList.main}>Go back</a>
      <p style={{ marginTop: "20px" }}>
        {JSON.stringify(asd)}
      </p>
    </main>
  )
}
