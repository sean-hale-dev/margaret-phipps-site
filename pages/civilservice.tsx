import type { NextPage } from 'next';
import Footer from '../components/footer';
import Header from '../components/Header';

const RegisterOfWills: NextPage = () => {
  const professional_points = [
    'First elected as Register of Wills in 1978.',
    'Served as Chief Deputy Register prior to being Register of Wills.',
    'Advanced course work in probate law, accounting and office management, specialized IT training, imaging technology, Prince George’s Community College.',
    'Chairperson, Maryland Register of Wills Automation Committee, 1992-Present.',
    'Maryland Registers have an advanced computer system, one of the best in any State office, enabling them to better serve the citizens of Maryland.',
    'Member, Probate/Judiciary Subcommittee to the Court of Appeals Rules Committee.',
    'Member, Estates and Trusts Section of Maryland Bar Committee with Registers Orphans’ Court Judges, Attorney General’s Office and Comptroller’s Office.',
    'Member, Guardianship Workgroup to the Court of Appeals Rules Committee.',
    'Former President of the Maryland Register of Wills Association.'
  ];

  const community_points = [
    'Member, Calvert County Commission on Aging',
    'Member, Calvert County Historical Society',
    'Member, Calvert County Democratic Women’s Club',
    'Member, Calvert County Farm Bureau',
    'Former President, Friends of Calvert Hospice',
    'Past Member, United Way Board of Directors',
    'Past Member, Jefferson Patterson Park and Museum Board of Directors',
    'Past Member, Adult Day Care of Calvert County Board of Directors',
    'Active Member, Mt. Harmony Church, including serving on the Finance Committee',
  ];

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div>
        <Header />
        <section className="container mx-auto my-8">
          <h1 className="text-4xl mb-8">Career Civil Service</h1>
          <article className="space-y-8">
            <div>
              <p className="text-2xl font-bold mb-2">Professional:</p>
              <ul className="list-disc"> {professional_points.map((bullet, idx) => <li key={idx}>{bullet}</li>)} </ul>
            </div>
            <div>
              <p className="text-2xl font-bold mb-2">Community:</p>
              <ul className="list-disc"> {community_points.map((bullet, idx) => <li key={idx}>{bullet}</li>)} </ul>
            </div>
            <p>Margaret is the former President of the Maryland Register of Wills Association, also having served previously as Secretary for the group.  Since 1992, she has been Automation Committee Chair for the Association.  The Registers have a #1 program in each of the Register’s offices to serve the citizens of Maryland.  As Chair, she must keep up with the constant law changes to assure the forms used statewide are uniform and that different phases of the program are enhanced constantly to provide better service to all.   The new web-based program is expected to be in full operation for all Registers’ offices before the end of 2022.</p>
          </article>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default RegisterOfWills;
