"use client"

export const getData = async ()=> {
  const asd = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    
  return (
    <main style={{
      textAlign: "center",
      marginTop: "50px"
    }}>
      Dashboard page
      <p>
        {JSON.stringify(asd)}
      </p>
    </main>
  )
}