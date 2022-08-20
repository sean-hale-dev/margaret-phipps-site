import type { NextPage } from 'next';
import Footer from '../components/footer';
import Header from '../components/Header';

const RegisterOfWills: NextPage = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div>
        <Header />
        <section className="container mx-auto my-8">
          <h1 className="text-4xl mb-8">Contact Us!</h1>

          <p className="mb-4">For more information to Margaret's campaign, please contact us!</p>
          <p className="mb-4">Email: <a href="mailto:friendsofmargaretphipps@gmail.com" className="underline text-blue-600">friendsofmargaretphipps@gmail.com</a></p>
          <p className="mb-4">Follow us on Facebook “Margaret Phipps for Register of Wills”</p>
          <p className="mb-4">Donations to Margaret Phipps’ campaign graciously accepted and may be mailed to:</p>
          <p>Friends of Margaret Phipps </p>
          <p>C/O Martha W. Grahame, Treasurer</p>
          <p>7445 Briscoe’s Turn Road</p>
          <p>Owings MD 20736</p>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default RegisterOfWills;
