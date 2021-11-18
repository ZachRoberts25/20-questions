import React from 'react';
import './App.css';
import './Phone.css';

const App = () => {
  return (
    <div className='container'>
      <div className='page-1'>
        <nav className='nav'>
          <a className='nav-link' href='#meet-karen'>
            Meet Karen
          </a>
          <a className='nav-link' href='#speaking-topics'>
            Speaking Topics
          </a>
          <a className='nav-link'>Online Courses</a>
          <a className='nav-link'>Best Selling Book</a>
          <a className='nav-link'>Meet the author podcasts</a>
          <a className='nav-link'>Book Now</a>
        </nav>
        <div className='quote-container'>
          <div>
            <img className='karen-speaks' src='./karenspeaks.png' />
            <h2 className='quote'>"Well behaved women barely make history"</h2>
          </div>
          <div className='video'>
            <iframe
              title='karen-professional-video'
              src='https://www.youtube.com/embed/jx5VvTDxs6g'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className='book-karen'>
          <h2>
            Book Karen for your next speaking event, conference or meeting
          </h2>
          <button
            className='book'
            onClick={() =>
              window.open('https://calendly.com/tefg-karen', '_blank')
            }
          >
            Book Karen
          </button>
        </div>
      </div>
      <div className='page-2'>
        <div className='image-container'>
          <img className='img-1' src='./page-2-1.jpg' />
          <img src='./page-2-3.jpg' />
          <img src='./page-2-2.jpg' />
        </div>
        <h2>Karen K Roberts</h2>
        <p style={{ textAlign: 'center', fontSize: '30px' }}>
          <em>
            Personal Growth and Development Speaker, Author, Financial Advisor
          </em>
        </p>
        <p style={{ textAlign: 'center', fontSize: '30px' }}>
          <em>Karen’s passion is to empower women to live their best life!</em>
        </p>
      </div>
      <div className='page-3'>
        <h2>Learn how Karen helps women Break the Rules!</h2>
        <iframe
          title='Learn how Karen helps women Break the Rules!'
          src='https://www.youtube.com/embed/jx5VvTDxs6g'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        ></iframe>
      </div>
      <div className='page-4'>
        <div className='testimonial-header'>
          <h3>What people are saying after hearing</h3>
          <img
            className='karen-speaks'
            src='./karenspeaks.png'
            alt='Karen Speaks logo text'
            style={{ width: '250px', height: '250px' }}
          />
        </div>
        <div className='testimonials'>
          <div className='testimonial'>
            <p>
              "Karen was the most interactive, dynamic speaker I have heard in a
              long time…she had me up and moving throughout her speech. I would
              highly recommend her!"
            </p>
            <p className='testimonial-name'>Amy B</p>
          </div>
          <div className='testimonial'>
            <p>
              "Wow…that is all I can say. Karen really knows her stuff! I left
              her speech with actions that I never thought were possible."
            </p>
            <p className='testimonial-name'>Cheryl N</p>
          </div>
          <div className='testimonial'>
            <p>
              "Karen’s speech was entertaining, interactive, and easy to follow.
              I learned so much about myself and cannot wait to take action and
              become a rule breaker."
            </p>
            <p className='testimonial-name'>Kathy B</p>
          </div>
          <div className='testimonial'>
            <p>
              "I am so excited to become financially independent thanks to
              Karen’s exercise of What are you willing to give up to get what y
              ou want. I had never thought about it in this unique way. I know
              the future is bright for me, thanks to Karen."
            </p>
            <p className='testimonial-name'>Melissa C</p>
          </div>
        </div>
      </div>
      <div
        className='page-5'
        id='meet-karen'
        style={{
          backgroundColor: '#e0e0e0',
          width: '100%',
          margin: 0,
          padding: '36px',
        }}
      >
        <h2
          style={{
            marginTop: 0,
            color: 'black',
            textAlign: 'center',
          }}
        >
          Meet Karen
        </h2>
        <div
          className='page-5-container'
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
          }}
        >
          <p style={{ flex: 1, fontSize: '48px' }}>
            Karen K. Roberts, CLU, ChFC, CDFA, is passionate about educating and
            empowering women to take control of their financial futures, which
            is why she established The Emerald Financial Group in 2005 and
            KarenKRoberts in 2020.
          </p>
          <iframe
            title='karen-professional-video'
            src='https://www.youtube.com/embed/jx5VvTDxs6g'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            style={{
              flex: 1,
              height: '400px',
              maxWidth: '800px',
              margin: '48px',
            }}
          ></iframe>
        </div>
      </div>

      <div className='page-6' id='speaking-topics'>
        <h2>Karen's Speaking Topics & Takeaways</h2>
        <div className='page-6-container'>
          <h3>Break the Rules….Change your LIFE!</h3>
          <p>
            Do you feel like the world dictates who you are and what you should
            be? What could your life look like if you broke some rules? Can you
            even imagine what it is you would be capable of if you broke some
            rules?
          </p>
          <p>Learn how to grow your next great idea</p>
          <p>Get rid of the things that are holding you back</p>
          <p>Learn what your secret strength really is…</p>
          <p>
            This will be an exciting, interactive, energetic hands-on
            presentation that will leave you empowered to Break the Rules…Change
            your LIFE!
          </p>
        </div>
        <div className='page-6-container'>
          <h3>
            Be Educated, Feel Empowered &amp; Take Control of Your Finances
          </h3>
          <p>
            Everyone has their own money personality and understanding your
            personality will allow you to better understand how you relate to
            money. Tips will be given to help you work through your personality
            to achieve your main goals and how to have financial conversations
            with your immediate family. This is an interactive presentation,
            attendees will take a financial personality survey and receive an
            empowerment journal workbook to work in throughout the presentation.
            Everyone will walk away with their top 3 most important financial
            goals.
          </p>
        </div>
        <div className='page-6-container'>
          <h3>I am thinking about divorce, now what???</h3>
          <p>
            Explore the financial dynamics of getting divorced and how it will
            affect you financially. It is far better to be educated early on
            about divorce and money, then signing the divorce decree without
            understanding how it will affect the rest of your life!
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
