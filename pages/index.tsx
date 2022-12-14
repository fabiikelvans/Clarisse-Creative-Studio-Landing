import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Menu } from '../types/typings';
import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";
import Projects from "../features/projects/components/Projects";
import Cursor from "../components/ui/Cursor";


const Home: NextPage = () => {
  return (
    <div >
      <Head>
        <title>  Clarisse - Creative </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='grid'>
          <Header/>
          <Cursor/>
          <main className='grid__main'>
            <div className="main__content">
              <h1>Explore Projects</h1>
              <Projects/>
            </div>
          </main>
          <Sidebar/>
      </div>

    </div>
  )
}

export default Home
