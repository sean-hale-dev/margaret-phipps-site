import type { NextPage } from 'next'
import Link from 'next/link'
import FacebookIcon from '../components/FacebookIcon'
import Footer from '../components/footer'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[url('/susans1-transparent.png')]">
      <section>
        <Header />
        <main className="flex justify-evenly my-4 h-[60vh] space-x-8 container mx-auto">
          <nav className="2xl:px-4 py-4 2xl:py-8 flex flex-col text-center justify-between text-xl border-2 border-neutral-600 bg-neutral-200 underline">
            <Link href="/about">About Margaret</Link>
            <Link href="/registerofwills">What is a Register of Wills?</Link>
            <Link href="/whymargaret">Why Elect Margaret?</Link>
            <Link href="/civilservice">Margaret's Civil Service</Link>
            <Link href="/otherwords">What Others Are Saying</Link>
            <Link href="/contact">Contact Us</Link>
          </nav> 
          <section className="w-5/6 text-center py-8 bg-neutral-200 flex items-center">
            <figure className="flex items-center space-x-4 mx-8 max-h-full">
              <img src="/margaret1.jpeg" alt="Margaret Phipps sitting at her desk" className="w-full max-w-[20vw]" />
              <figcaption>
                <p className="text-3xl italic">"Margaret brings more than 44 years of civil service experience, legal knowledge,  technical expertise, leadership and compassion and genuine caring to the office of Register of Wills."</p>
                <button className="mt-8 text-center">
                  <a> <FacebookIcon className="text-sky-800 text-5xl" /> </a>
                </button>
              </figcaption>
            </figure>
          </section>
        </main>
      </section>
      <Footer />
    </div>
  )
}

export default Home
