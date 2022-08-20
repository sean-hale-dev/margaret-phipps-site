import type { NextPage } from 'next';
import Footer from '../components/footer';
import Header from '../components/Header';

const RegisterOfWills: NextPage = () => {
  const paragraphs = [
    'The Register of Wills helps people who are grieving to navigate the legal aspects related to a death.  As this is a very difficult time for most people and families, this process requires knowledge of all related laws, compassion, understanding and a deep sense of service.',
    'The Register of Wills and staff provide assistance for families and attorneys to provide the necessary documents and information to transfer assets of a deceased person to the appropriate recipients.  A Register is responsible for the administration of all estates and probate matters.',
    'The Register of Wills must know the law, but cannot provide legal advice nor can they set policy. The Register is there to assist and guide you through the process.',
    'The nature of the office is extremely apolitical, however a Register of Wills must file for election with a party affiliation.',
  ];

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div>
        <Header />
        <section className="container mx-auto my-8">
          <h1 className="text-4xl mb-8">What is a Register of Wills?</h1>

          <div className="flex justify-between space-x-8">
            <article className="space-y-8 w-5/6">
              { paragraphs.map((text, idx) => <p key={idx}>{text}</p>) }
            </article>
            <img src="margaret5.jpeg" className="w-1/6"/>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default RegisterOfWills;
