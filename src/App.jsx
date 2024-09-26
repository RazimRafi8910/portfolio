import ProfileImageCard from './components/Cards/ProfileImageCard';
import AboutCard from './components/Cards/AboutCard';
import Navbar from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SkillCard from './components/Cards/SkillCard';
import ExperienceCard from './components/Cards/ExperienceCard';
import { experince } from './data';

function App() {

  return (
    <>
      <div>
        <Navbar/>
        <section id='aboutme'>
        <div className='container mt-5'>
          <div className='row d-flex'>
            <ProfileImageCard />
            <AboutCard/>
          </div>
        </div>
        </section>
        <section id='skills' className='mt-4 mb-5'>
          <div className="container">
            <div className="row">
              <SkillCard/>
            </div>
          </div>
        </section>
        <section id='experience'>
          <div className="container">
            <div>
              <h2>Experience</h2>
              <hr />
            </div>
            <div className="row">
              {
                experince.map((data, index) => (
                  <ExperienceCard
                    sreenshot={data.screenshot}
                    gitLink={data.gitLink}
                    projectName={data.projectName}
                    description={data.description} />
                ) )
              }
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default App
