import type { NextPage } from 'next';
import Footer from '../components/footer';
import Header from '../components/Header';

const RegisterOfWills: NextPage = () => {
  const letters = [
    { body: [`When it comes to Register of Wills, the current Calvert County Register, Margaret Phipps sets the bar high, a standard to which we all strive to achieve.  During her years of service to the State of Maryland, she has always held a leadership role, heading many committees and pioneering the way when the Register of Wills entered the computer age.`, `Mrs. Phipps has been the head of the Automation Committee for the Register’s since its inception and has been on the cutting edge of the technology and program writing, as well as testing of all new computer programs.  She has overseen the design of the Register’s website to ensure it is easy to navigate and has up to date forms and information to serve the public better.`, `Serving on virtually every committee in The Register of Wills, Margaret Phipps has worked with Orphan’s Court Judges, Estate Attorney’s and Legislators from across Maryland to make common sense changes to the code and streamline the probate process.`, `Margaret worked with State Archives to create a paperless records retention system for the probate records throughout the state, saving space and the tax payers millions of dollars in storage costs.`, `Mrs. Phipps has shown her deep commitment to good public service by reaching out to the newly elected Registers after each election cycle to offer guidance and support in their new duties, regardless of party affiliation.`, `I want to thank the citizens of Calvert County for having the wisdom to elect Margaret Phipps as Register of Wills in the past and I sincerely hope they will do it again. Not just because she is a great Register for Calvert County but because she is a valued leader to the State of Maryland’s probate system.`], signature: ['Sincerely,', 'Joseph M. Griffin', 'Register of Wills for Montgomery County'] },
    { body: [`When I think of public service and a public servant, only a few names come to mind. For me and many in this community, Margaret Phipps is the steward of that role. Margaret helps so many of our community members by walking them through arguably one of the most difficult times in their lives whether they lose a spouse, parent, sibling, child, or friend with grace, competence, and professionalism. Her time in the Register of Wills position has been a great asset to our community and I hope she serves in this role in perpetuity.`, `I have a deep admiration for Margaret. When I decided to run for office for the first time, she was there to support me and not just 'in front of the cameras'. She was willing to sit down 1 on 1 and talk about what public service truly means to her and give me the best advice to show my true self to voters. I am truly grateful for that support and the lessons imparted. Margaret made me a better candidate and ultimately ensured that my heart was in the right place. Margaret serves all people irrespective of political affiliation to the highest of standards. It was clear from my first time I met her as an adult in 2016, that her consistent victories in Calvert were not an anomaly. She genuinely cares about our community and has an entrenched desire to serve others. She is involved in our community and regularly supports local organizations through various means.`, `Quite frankly, her work as Register of Wills has improved my skills as an attorney. She has given advice on improving my Estate Planning documents and better serving my clients over a period of time. That advice has allowed me to better serve my own clients and streamline that process for her office in administering those Estates. Ultimately, without her I would be offering a lower quality product for my clients. I cannot thank her enough for that.`, `Margaret is the type of person that just by working alongside her that you are bound to improve both personally and professionally. It has been a great honor to know her, work with her, and be her friend and supporter. I wish you another 4 years in the Office of the Register of Wills and another successful election! VOTE PHIPPS THIS NOVEMBER!`], signature: ['Respectfully', 'Jason T. Fowler, Esq.', '2018 Democratic Nominee, House of Delegates 27C'] },
    { body: [`Dear Margaret,`, `Thinking back over the past year, I remember how helpful and kind you were to me after my husband passed away.`, `I had never dealt with an estate before so the process was daunting. You made it so easy. You were always available to answer questions and provide direction - even during the pandemic.`, `You shared your knowledge and you do that for everyone who needs that help.`, `I know you are admired both locally and throughout the state and I understand why.`, `Calvert County is lucky to have you as our Register of Wills.`], signature: [`Thank you,`, `Pat Hofmann`] },
  ]

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div>
        <Header />
        <section className="container mx-auto my-8 space-y-16">
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

          <article className='space-y-8 pt-4 border-t-2 '>
            <h2 className='text-3xl mb-8'>Letters of Recommendation</h2>
            <section className='divide-y-2 space-y-4'>
            {
            letters.map((l, idx) => (<article className='space-y-2' key={`letterk${idx}`}>
              <div className='space-y-2'>
                {l.body.map((p, pidx) => (<p key={`letterk${idx}parakey${pidx}`}>{p}</p>))}
              </div> 
              <div>
                {l.signature.map((s, sidx) => <p key={`letterk${idx}sigkey${sidx}`} className='font-bold'>{s}</p>)}
              </div>
            </article>))
          }
          </section>
          </article>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default RegisterOfWills;
