import './App.css';
import Photo from './components/Photo/Photo';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';

function App() {
  const about = {
    heading: 'About',
    description: 'I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.',
  };

  const interests = {
    heading: 'Interests',
    description: 'Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.',
  }

  return (
    <div className="business-card">
      <Photo />

      <Profile 
        name="Laura Smith" 
        job="Frontend Developer" 
        website="laurasmith.website" 
        email="laurasmith@mail.com" 
        linkedin="laurasmith.linkedin" 
        about={about} 
        interests={interests}
      />

      <Footer 
        twitter="https://twitter.com/?lang=en"
        facebook="https://www.facebook.com/"
        instagram="https://www.instagram.com/"
        github="https://github.com/"
      />
    </div>
  );
}

export default App;
