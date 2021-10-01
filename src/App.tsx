import React from 'react';
import './App.css';
import './Phone.css';

const App = () => {
  return (
    <div className='container'>
      <div className='page-1'>
        <nav className='nav'>
          <a className='nav-link'>Meet Karen</a>
          <a className='nav-link'>Speaking Topics</a>
          <a className='nav-link'>Online Courses</a>
          <a className='nav-link'>Best Selling Book</a>
          <a className='nav-link'>Meet the author podcasts</a>
          <a className='nav-link'>Book Now</a>
        </nav>
        <div className='quote-container'>
          <div>
            <img className='karen-speaks' src='./karenspeaks.png' />
            <h2 className='quote'>Well behave women barely make history</h2>
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
          <button className='book'>Book Karen</button>
        </div>
      </div>
      <div className='page-2'>
        <div className='image-container'>
          <img className='img-1' src='./page-2-1.jpg' />
          <img src='./page-2-2.jpg' />
          <img src='./page-2-3.jpg' />
        </div>
        <h2>
          Karen K Roberts<br></br>
          <br></br>
          Personal Growth and Development Speaker, Author, financial advisor
          <br></br>
          <br></br>
          <br></br>
          Karen’s passion is to empower women to live their best life!
        </h2>
      </div>
      <div className='page-3'>
        <h2>Learn how Karen helps women Break the Rules!</h2>
        {/* TODO: need the other youtube link */}
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
          <h2>What people are saying after hearing</h2>
          <img className='karen-speaks' src='./karenspeaks.png' />
        </div>
        <div className='testimonials'>
          <div className='testimonial'>
            <p>
              Karen was the most interactive, dynamic speaker I have heard in a
              long time…she had me up and moving throughout her speech. I would
              highly recommend her!
            </p>
            <p className='testimonial-name'>Amy B</p>
          </div>
          <div className='testimonial'>
            <p>
              Wow…that is all I can say. Karen really knows her stuff! I left
              her speech with actions that I never thought were possible
            </p>
            <p className='testimonial-name'>Cheryl N</p>
          </div>
          <div className='testimonial'>
            <p>
              Karen’s speech was entertaining, interactive, and easy to follow.
              I learned so much about myself and cannot wait to take action and
              become a “rule breaker”
            </p>
            <p className='testimonial-name'>Kathy B</p>
          </div>
          <div className='testimonial'>
            <p>
              I am so excited to become financially independent thanks to
              Karen’s exercise of What are you willing to give up to get what y
              ou want. I had never thought about it in this unique way. I know
              the future is bright for me, thanks to Karen.
            </p>
            <p className='testimonial-name'>Melissa C</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
