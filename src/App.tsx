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
    </div>
  );
};

export default App;
