import type { NextPage } from 'next'
import Home from '../components/Home'

const App: NextPage = ({ data }: any) => {
  return <Home data={data} />
}

export default App
