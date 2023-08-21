import Image from 'next/image'
import NavBar from './components/Navbar'
import Section from './components/Section'

export default function Home() {
  return (
   <main className='container mx-auto'>
    <NavBar/>
    <Section/>
   </main>
  )
}
