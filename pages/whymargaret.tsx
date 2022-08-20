import type { NextPage } from 'next';
import Footer from '../components/footer';
import Header from '../components/Header';

const RegisterOfWills: NextPage = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div>
        <Header />
        <section className="container mx-auto my-8">
          <h1 className="text-4xl mb-8">In Her Own Words, Why Margaret?</h1>
          <article className="space-y-8">
            <div>
              <p className="font-bold mb-4">Why Should Voters Re-Elect Margaret?</p>
              <p>“I have the experience, legal knowledge, technical expertise and leadership ability to serve the citizens of Calvert County as their Register of Wills.  I will provide compassionate, professional, courteous and confidential service to all.  My genuine concern for people helps to lighten the load for many.”</p>
            </div>

            <div>
              <p className="font-bold mb-4">How Does Margaret Approach the Office of the Register of Wills?</p>
              <p>“Efficiency and cost effectiveness remain foremost in my efforts to serve you.  The Register of Wills does not set policy.  However, the Register must know probate law and deals constantly with death and grieving families.  Compassion, knowledge experience are so important.  My door is always open to assist YOU.  My staff and I will continue to provide compassionate, professional, courteous and confidential services to ALL.”</p>
            </div>

            <div>
              <p className="font-bold mb-4">What Does Margaret Think is the Most Urgent Problem Facing Our Jurisdiction?</p>
              <p className="mb-4">“The Register of Wills does not set policy, therefore I will focus on issues important to the Register of Wills’ Office.  As Chairperson of the Automation Committee for the State of Maryland Register of Wills Association, I will continue efforts to further streamline all of the registers’ offices in the State of Maryland for the future.  Scanning and imaging are already in place.  Estate indexes and information are available <a href="http://www.registers.maryland.gov" className="text-blue-600 underline">here</a>.  Electronic filing is on our radar, but advancing cautiously –wills are very personal and must be protected.</p>
              <p>Major changes in the law would be required for any change for the Registers.  No Register in any jurisdiction can institute any changes to related to the program on a local level.  It is a Statewide program.  ALL Registers of Wills in Maryland operate under the same Maryland laws and rules, and have the same forms to guide them.”</p>
            </div>
          </article>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default RegisterOfWills;
