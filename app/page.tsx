import { pagesList } from './constants/links'

export default function Home() {
  return (
    <main style={{
      textAlign: "center",
      marginTop: "50px"
    }}>
      <a href={pagesList.dashboard}>{pagesList.dashboard}</a>
    </main>
  )
}
