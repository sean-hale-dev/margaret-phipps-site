import type { NextPage } from 'next';
import Footer from '../components/footer';
import Header from '../components/Header';

const About: NextPage = () => {
  const about_paragraphs = [
    'Margaret Phipps has been serving Calvert County citizens for over 44 years as Register of Wills.  She began her working career at Andrews Air Force base as an accounting clerk, and when she left Andrews to raise her children, her position was Accounting Supervisor.  Her experience prior to working in the Register of Wills office included postal clerk, and then mail delivery route for Owings Post Office, while also working part time for a CPA preparing income tax returns.',
    'Her service in the Register of Wills office has been one of the highlights of her life.  After she began working in the Register’s office, she spent many lunch hours in the law library researching probate law and establishing a record of various changes in the laws governing probate.  This information has proved most helpful in her duties.  At one time, she even had an attorney as if she wanted to sell her research records.',
    'One of the most traumatic times in a person’s life is the loss of a loved one.  The Register must know the laws of Maryland to assist and guide individuals and families to guide them in the right direction.  But this is also a time when compassion and understanding are imperative.',
    'Margaret grew up close to the funeral business, where she quickly learned to understand how death can affect people and to have a deep compassion for them.  She finds it so heartwarming to know that she has been able to help so many people during what is one of the most difficult times in their lives.',
    'Over the years, Margaret has been a dedicated civil servant and a tireless agent of community service.  Precious to her heart is her family of four children, eight grandchildren and ten great-grandchildren.    Also, she is a farm girl deep down and still has the farm that she and her husband worked so hard to purchase and maintain.  She and her son operate the farm, raising Black Angus cattle, hay and sweet potatoes.  Her son cultivates a large garden from which Margaret enjoys canning and freezing vegetables.  One of her greatest pleasures is to give a jar of sweet pickles or pickled beets to a friend!',
    'Margaret truly believes that a person is elected to serve the people, not for personal gain or ego.  You can be assured that she will always do her very best to serve and assist the citizens of Calvert County.',
    '“The privilege of helping others is such a blessing.  I love being able to serve you as your Register of Wills.”',
    'Margaret’s motto is “Do unto others as you would have them do unto you.”',
  ];

  const about_images = [
    'margaret2.jpeg',
    'margaret3.jpeg',
    'margaret4.jpeg',
    'cows1.jpeg',
  ];

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div>
        <Header />
        <section className="container mx-auto my-8">
          <h1 className="text-4xl mb-4">About Margaret</h1>

          <div className="flex justify-evenly space-x-8">
            <article className="space-y-8 w-5/6" id="text-container">
              { about_paragraphs.map((text, idx) => <p key={idx}>{text}</p>) }
            </article>

            <section className="w-1/6 space-y-4" id="image-container">
              { about_images.map((href, idx) => <img key={idx} src={`/${href}`} className="" />) }
            </section>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default About;
